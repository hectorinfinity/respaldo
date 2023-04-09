/** @format */
import { useState, useEffect } from "react";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import AdminLayout from "@/components/layout/admin";
import { Heading } from '@/components/headers/admin/heading';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AddressForm } from '@/components/forms/forms';
import { CustomError, CustomLabel, CustomCancel, CustomSubmit } from '@/components/forms';
// Interface
import { Address } from "@/interfaces/serializers/commons";
import { useQueryClient } from "@tanstack/react-query";
import { useMutationUpdateUser } from "@/hooks/user/user";
import { User } from "@/interfaces/user";

const validationSchema = yup.object().shape({
    // addressname: yup.string().required("Address name is required"),
    searchaddress: yup.string(),
    address: yup.string().required("Address line 1 is required"),
    address2: yup.string(),
    zipcode: yup.string().required("Postal code is required"),
    country: yup.string().required("Country is required"),
    state: yup.string().required("State is required"),
    city: yup.string().required("City is required"),
});

const ProfileAddress = () => {
    const [uid, setUid] = useState("");
    const [searchAddress, setSearchAddress] = useState("");
    const [markerPosition, setMarkerPosition] = useState(null);


    const t = useTranslations("Panel_SideBar");
    const tc = useTranslations("Common_Forms");

    const breadcrumb = [
        { page: t('user'), href: '/panel/profile' },
        { page: t('profile.address'), href: '' }
    ];

    const queryClient = useQueryClient()
    const userData = queryClient.getQueryData(["user"])

    const { register, setValue, handleSubmit, formState: { errors }, reset } = useForm<Address>({
        resolver: yupResolver(validationSchema)
    });
    useEffect(() => {
        if (userData) {
            console.log("[user]", userData)
            const user = userData?.[0]?.user;
            setUid(user.uid)
            // setValue("addressname", user?.address?.address)
            setValue("address", user?.address?.address);
            setValue("address2", user?.address?.address2);
            setValue("zipcode", user?.address?.zipcode);
            setValue("country", user?.address?.country);
            setValue("state", user?.address?.state);
            setValue("city", user?.address?.city);

        }
    }, [userData, setValue, uid]);

    const { mutate: updateUser, isError, error } = useMutationUpdateUser();
    if (isError) console.log("useMutationUpdateUser ERROR", (error as Error)?.message)

    // const onSubmitHandler = (data: User) => {

    //     const updatedData = { ...data, birthday: formattedBirthday, uid };
    //     console.log("UPDATED DATA:", updatedData);
    //     updateUser(updatedData);
    // };

    const onSubmitHandler = (data: Address) => {
        const user: User = userData?.[0]?.user;
        const address: Address = {
            latitude: data.latitude,
            longitude: data.longitude,
            address: data.address,
            address2: data.address2,
            city: data.city,
            state: {
                long_name: `${data.state}`,
                short_name: "",
            },
            country: {
                long_name: `${data.country}`,
                short_name: "",
            },
            zipcode: data.zipcode,
        };
        console.log("UPDATED ADDRESS:", address);
        const updatedUser: User = { ...user, address: address };
        updateUser(updatedUser);
        // reset();
    };



    const onPlaceSelected = (address, latLng) => {
        setSearchAddress(address);
        setMarkerPosition(latLng);
    };

    return (
        <>
            <div>
                <Heading breadcrumb={breadcrumb} />
            </div>
            <div className="flex flex-1 pt-6">
                <div className="w-screen min-h-0 overflow-hidden">
                    <form className="divide-y divide-gray-200 lg:col-span-9" onSubmit={handleSubmit(onSubmitHandler)} method="POST">
                        <AddressForm register={register} setValue={setValue} errors={errors} searchAddress={searchAddress} onPlaceSelected={onPlaceSelected} markerPosition={markerPosition} />
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

ProfileAddress.Layout = AdminLayout;
export default ProfileAddress;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default,
        },
    };
}