/** @format */
import { useState } from 'react';
import { useRouter } from 'next/router';
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
// Layout and Header
import AdminLayout from "@/components/layout/admin";
import { Heading } from '@/components/headers/admin/heading';
// Forms
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CustomError, CustomLabel, CustomCancel, CustomSubmit } from '@/components/forms';
import { CurrentColor, FormStyles } from '@/helpers';
import { TrashIcon } from '@heroicons/react/24/outline';

const ProfileBilling = () => {
    const { locales } = useRouter();
    const currentColor = CurrentColor();
    const t = useTranslations("Panel_SideBar");
    const tc = useTranslations("Common_Forms");

    const breadcrumb = [
        { page: t('admin.admin'), href: '/panel/profile' },
        { page: t('admin.config.config'), href: '' },
        { page: t('admin.config.cookie'), href: '' }
    ]

    return (
        <>
            {/* Breadcrumb section */}
            <div>
                <Heading breadcrumb={breadcrumb} langBread />
            </div>
            {/* Profile section */}
            <div className="flex flex-1 pt-6">
                <div className="w-screen min-h-0 overflow-hidden">
                    <form className="divide-y divide-gray-200 lg:col-span-9" action="#" method="POST">
                        {/* Profile section */}
                        <div className="py-6 grid grid-cols-12 gap-6">
                            <div className="col-span-12 sm:col-span-6">
                                <div className="h-fit gap-x-16 gap-y-10 border-2">
                                    <div className="inputCoverAd relative space-y-1 px-5 pt-10 pb-10">
                                        <CustomLabel field="rfc" name={tc('field_rfc')} />
                                        <input type="text" className="inputAd" />
                                        <div className="absolute -top-5 w-fit bg-white px-2 py-1 text-xl font-black uppercase text-customShadow">
                                            es
                                        </div>
                                        <TrashIcon
                                            name="delete"
                                            className="w-4 h-4 absolute right-0 top-[18%] hidden px-[6%] text-customRed"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6">
                                <div className="h-fit gap-x-16 gap-y-10 border-2">
                                    <div className="inputCoverAd relative space-y-1 px-5 pt-10 pb-10">
                                        <CustomLabel field="rfc" name={tc('field_rfc')} />
                                        <input type="text" className="inputAd" />
                                        <div className="absolute -top-5 w-fit bg-white px-2 py-1 text-xl font-black uppercase text-customShadow">
                                            es
                                        </div>
                                        <div className="flex justify-end">
                                            <button>
                                                <TrashIcon
                                                    name="delete"
                                                    className="w-4 h-4 text-customRed"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        
                        {/* Buttons section */}
                        <div className="divide-y divide-gray-200">
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

ProfileBilling.Layout = AdminLayout;
export default ProfileBilling;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default,
        },
    };
}
