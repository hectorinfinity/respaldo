/** @format */
import { useState } from 'react';
import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';
// Layout and Header
import AdminLayout from '@/components/layout/admin';
import { Heading } from '@/components/headers/admin/heading';
// Forms
import { useFormContext } from 'react-hook-form';
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

type Props = {};
const CreateEventStep2: React.FC<Props> = ({}) => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();
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
      <div className="lg:col-span-9">
        <AddressForm
          register={register}
          setValue={setValue}
          errors={errors}
          searchAddress={searchAddress}
          onPlaceSelected={onPlaceSelected}
          markerPosition={markerPosition}
        />
      </div>
    </>
  );
};

export default CreateEventStep2;
