/** @format */
import { useState } from 'react';
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
// Layout and Header
import AdminLayout from "@/components/layout/admin";
import { Heading } from '@/components/headers/admin/heading';
// Forms
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CustomError, CustomCancel, CustomSubmit } from '@/components/forms';
import { AddressForm } from "@/components/forms/forms";
import { User } from "@/interfaces/user";
import { LoadScript } from "@react-google-maps/api";

const validationSchema = yup.object().shape({
    addressname: yup.string().required("Address name is required"),
    searchaddress: yup.string(),
    address1: yup.string().required("Address line 1 is required"),
    address2: yup.string(),
    pc: yup.string().required("Postal code is required"),
    country: yup.string().required("Country is required"),
    state: yup.string().required("State is required"),
    city: yup.string().required("City is required"),
});

const EventAddress = () => {
    const [searchAddress, setSearchAddress] = useState("");
    const [librariesLoaded, setLibrariesLoaded] = useState(false);
    const [markerPosition, setMarkerPosition] = useState(null);

    const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    const t = useTranslations("Panel_SideBar");
    const tc = useTranslations("Common_Forms");

    const breadcrumb = [
        { page: t('user'), href: '/panel/profile' },
        { page: t('profile.address'), href: '' }
    ]

    const handleLoad = () => {
        setLibrariesLoaded(true);
    };

    const { register, handleSubmit, formState: { errors }, reset } = useForm<User>({
        resolver: yupResolver(validationSchema),
    });

    const onSubmitHandler = (data: User) => {
        // updateUser(data)
        console.log({ data });
        reset();
    };

    const onPlaceSelected = (address, latLng) => {
        setSearchAddress(address);
        setMarkerPosition(latLng);
    };

    return (
        <>
            {/* Breadcrumb section */}
            <div>
                <Heading breadcrumb={breadcrumb} />
            </div>
            <div className="flex flex-1 pt-6">
                <div className="w-screen min-h-0 overflow-hidden">
                    <form className="lg:col-span-9" onSubmit={handleSubmit(onSubmitHandler)} method="POST">
                        <LoadScript
                            googleMapsApiKey={GOOGLE_MAPS_API_KEY}
                            libraries={["places"]}
                            onLoad={handleLoad}
                        >
                            <AddressForm register={register} errors={errors} searchAddress={searchAddress} onPlaceSelected={onPlaceSelected} markerPosition={markerPosition} />
                        </LoadScript>

                        {/* Buttons section */}
                        <div className="divide-y divide-gray-200 pt-6">
                            <div className="mt-4 flex justify-end gap-x-3 py-4 px-4 sm:px-6">
                                <CustomCancel />
                                <CustomSubmit />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

EventAddress.Layout = AdminLayout;
export default EventAddress;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default,
        },
    };
}
