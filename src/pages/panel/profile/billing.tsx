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
import { FormStyles } from '@/helpers';

const ProfileBilling = () => {
    const t = useTranslations("Panel");
    const tc = useTranslations("Common_Forms");

    return (
        <>
            {/* Bottom section */}
            <div className="w-screen min-h-0 overflow-hidden">
                <form className="divide-y divide-gray-200 lg:col-span-9" action="#" method="POST">
                    {/* Profile section */}
                    <div className="py-6 px-4 sm:p-6 lg:pb-8">
                        <div className="mt-6 grid grid-cols-12 gap-6">
                            <div className="col-span-12 sm:col-span-6">
                                <CustomLabel field="businessname" name={tc('field_businessname')} required />
                                <input
                                    type="text"
                                    name="businessname"
                                    id="businessname"
                                    autoComplete={tc('auto_businessname')}
                                    placeholder={tc('field_businessname')}
                                    className={FormStyles('input')}
                                />
                            </div>
                            <div className="col-span-12 sm:col-span-6">
                                <CustomLabel field="rfc" name={tc('field_rfc')} />
                                <input
                                    type="text"
                                    name="rfc"
                                    id="rfc"
                                    autoComplete={tc('auto_rfc')}
                                    placeholder={tc('field_rfc')}
                                    className={FormStyles('input')}
                                />
                            </div>
                            <div className="col-span-12 sm:col-span-6">
                                <CustomLabel field="cfdi" name={tc('field_cfdi')} required />
                                <input
                                    type="text"
                                    name="cfdi"
                                    id="cfdi"
                                    autoComplete={tc('auto_cfdi')}
                                    placeholder={tc('field_cfdi')}
                                    className={FormStyles('input')}
                                />
                            </div>
                            <div className="col-span-12 sm:col-span-6">
                                <CustomLabel field="pc" name={tc('field_pc')} required />
                                <input
                                    type="text"
                                    name="pc"
                                    id="pc"
                                    autoComplete={tc('auto_pc')}
                                    placeholder={tc('field_pc')}
                                    className={FormStyles('input')}
                                />
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
