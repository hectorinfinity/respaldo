/** @format */
import { useState } from 'react';
import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';
// Layout and Header
import AdminLayout from '@/components/layout/admin';
import { Heading } from '@/components/headers/admin/heading';
// Forms
import { useForm, UseFormReturn } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { CustomError, CustomCancel, CustomSubmit } from '@/components/forms';
import { AddressForm } from '@/components/forms/forms';
import { User } from '@/interfaces/user';

const validationSchema = yup.object().shape({
  addressname: yup.string().required('Address name is required'),
  searchaddress: yup.string(),
  address: yup.string().required('Address line 1 is required'),
  address2: yup.string(),
  pc: yup.string().required('Postal code is required'),
  country: yup.string().required('Country is required'),
  state: yup.string().required('State is required'),
  city: yup.string().required('City is required'),
});

type Props = UseFormReturn;
const CreateEventStep2: React.FC<Props> = ({
  register,
  setValue,
  formState: { errors },
}) => {
  const [searchAddress, setSearchAddress] = useState('');
  const [markerPosition, setMarkerPosition] = useState(null);

  const t = useTranslations('Panel_SideBar');
  const tc = useTranslations('Common_Forms');

  const onPlaceSelected = (address, latLng) => {
    setSearchAddress(address);
    setMarkerPosition(latLng);
  };

  return (
    <>
      <div className="flex flex-1 pt-6">
        <div className="w-screen min-h-0 overflow-hidden">
          <div className="lg:col-span-9">
            <AddressForm
              register={register}
              setValue={setValue}
              errors={errors}
              searchAddress={searchAddress}
              onPlaceSelected={onPlaceSelected}
              markerPosition={markerPosition}
            />
            {/* Buttons section */}
            <div className="divide-y divide-gray-200 pt-6">
              <div className="mt-4 flex justify-end gap-x-3 py-4 px-4 sm:px-6">
                <CustomCancel />
                <CustomSubmit />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateEventStep2;
