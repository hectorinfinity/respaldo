/** @format */
import { useState } from 'react';
import { useRouter } from 'next/router';
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { Switch } from '@headlessui/react'
// Layout and Header
import AdminLayout from "@/components/layout/admin";
import { Heading } from "@/components/headers/admin/heading";
// Forms
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CustomError, CustomLabel, CustomCancel, CustomSubmit } from '@/components/forms';
import { classNames, CurrentColor, FormStyles } from '@/helpers';

const ProfileConfig = () => {
    const { locales } = useRouter();
    const [emailNewsEnabled, setEmailNewsEnabled] = useState(true)
    const [notifAppEnabled, setNotifAppEnabled] = useState(true)
    const [notifWebEnabled, setNotifWebEnabled] = useState(true)

    const t = useTranslations("Panel_SideBar");
    const tc = useTranslations("Common_Forms");

    const currentColor = CurrentColor();
    const breadcrumb = [
        { page: t('user'), href: '/panel/profile' },
        { page: t('profile.config.config'), href: '' }
    ]

    return (
        <>
            {/* Breadcrumb section */}
            <div>
                <Heading breadcrumb={breadcrumb} />
            </div>
            {/* Admin section */}
            <div className="flex flex-1 pt-6">
                {/* Bottom section */}
                <div className="w-screen min-h-0 overflow-hidden">
                    <form className="lg:col-span-9" action="#" method="POST">
                        {/* Profile section */}
                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 sm:col-span-2">
                                <CustomLabel field="lang" name={tc('field_lang')} />
                                <select
                                    id="lang"
                                    name="lang"
                                    className={FormStyles('select')}
                                    defaultValue={''}
                                >
                                    {locales.map((l, i) => {
                                        return (
                                            <option key={i} value={l}>
                                                {l}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="mt-6 grid grid-cols-12 gap-6">
                            <div className="col-span-12 sm:col-span-6">
                                <CustomLabel field="lang" name={tc('field_email')} />
                                <div className='flex flex-1 justify-start py-2 text-customForm'>
                                    <div className='w-auto pr-2'>Newsletter</div>
                                    <div>
                                        <Switch
                                            checked={emailNewsEnabled}
                                            onChange={setEmailNewsEnabled}
                                            className={classNames(
                                                emailNewsEnabled ? `bg-${currentColor}` : 'bg-gray-200',
                                                `relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:${currentColor} focus:ring-offset-2 sm:ml-auto`
                                            )}
                                        >
                                            <span
                                                aria-hidden="true"
                                                className={classNames(
                                                    emailNewsEnabled ? 'translate-x-5' : 'translate-x-0',
                                                    'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                                                )}
                                            />
                                        </Switch>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6">
                                <CustomLabel field="lang" name={tc('field_notification')} />
                                <div className='flex flex-1 justify-start py-2 text-customForm'>
                                    <div className='w-10'>Web</div>
                                    <div>
                                        <Switch
                                            checked={notifWebEnabled}
                                            onChange={setNotifWebEnabled}
                                            className={classNames(
                                                notifWebEnabled ? `bg-${currentColor}` : 'bg-gray-200',
                                                `relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:${currentColor} focus:ring-offset-2 sm:ml-auto`
                                            )}
                                        >
                                            <span
                                                aria-hidden="true"
                                                className={classNames(
                                                    notifWebEnabled ? 'translate-x-5' : 'translate-x-0',
                                                    'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                                                )}
                                            />
                                        </Switch>
                                    </div>
                                </div>
                                <p className='flex flex-1 justify-start py-2 text-customForm'>
                                    <div className='w-10'>App</div>
                                    <div>
                                        <Switch
                                            checked={notifAppEnabled}
                                            onChange={setNotifAppEnabled}
                                            className={classNames(
                                                notifAppEnabled ? `bg-${currentColor}` : 'bg-gray-200',
                                                `relative inline-flex h-6 w-11 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:${currentColor} focus:ring-offset-2 sm:ml-auto`
                                            )}
                                        >
                                            <span
                                                aria-hidden="true"
                                                className={classNames(
                                                    notifAppEnabled ? 'translate-x-5' : 'translate-x-0',
                                                    'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                                                )}
                                            />
                                        </Switch>
                                    </div>
                                </p>
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
            </div>
        </>
    );
};

ProfileConfig.Layout = AdminLayout;
export default ProfileConfig;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default,
        },
    };
}