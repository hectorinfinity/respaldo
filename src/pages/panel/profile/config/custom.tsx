/** @format */
import { useState } from 'react';
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
// Layout and Header
import AdminLayout from "@/components/layout/admin";
// Forms
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CustomError, CustomLabel, CustomCancel, CustomSubmit } from '@/components/forms';
// Components
import { CustomCategory } from '@/components/admin/profile/customCategory';

const ProfileBilling = () => {
    const t = useTranslations("Panel_Profile_Category");

    const categories = [
        { name: "Artes Visuales", src: "/images/events/category/artes-visuales.png", selected: true },
        { name: "Cine", src: "/images/events/category/cine.png", selected: false },
        { name: "Danza", src: "/images/events/category/danza.png", selected: true },
    ]

    return (
        <>
            {/* Bottom section */}
            <div className="w-screen min-h-0 overflow-hidden">
                <form className="divide-y divide-gray-200 lg:col-span-9" action="#" method="POST">
                    {/* Profile section */}
                    <div className='lg:col-span-9'>
                        <div className="py-6 px-4 sm:p-6 lg:pb-8">
                            <div className="grid text-stone-500 text-20 ">
                                {t('message')}
                            </div>
                        </div>
                        <div className="py-6 px-4 sm:p-6 lg:pb-8">
                            <div className="md:flex md:items-center md:justify-between">
                                <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                    {categories.map((category) => (
                                        <CustomCategory name={category.name} srcImage={category.src} selected={category.selected} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Buttons section */}
                    <div className="divide-y divide-gray-200 pt-6">
                        <div className="mt-4 flex justify-end gap-x-3 py-4 px-4 sm:px-6">
                            <CustomCancel />
                            <CustomSubmit />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

ProfileBilling.Layout = AdminLayout;
export default ProfileBilling;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default,
        },
    };
}
