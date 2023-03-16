/** @format */
import { useState } from 'react';
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
// Layout and Header
import AdminLayout from "@/components/layout/admin";
// Forms
import { CustomLabel, CustomInput, CustomSelect, CustomCancel, CustomSubmit } from '@/components/forms';
// Icons
import { PlusIcon } from '@heroicons/react/20/solid';

const Advert = () => {
    const t = useTranslations("Panel");
    const tc = useTranslations("Common_Forms");
    const tp = useTranslations("Profile_Form");
    const tb = useTranslations("btn");

    const user = {
        name: 'Debbie Lewis',
        handle: 'deblewis',
        email: 'debbielewis@example.com',
        imageUrl:
            'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80',
    }

    const sexOptions = [
        {value: 'male', name: "Male"},
        {value: 'female', name: "Female"},
    ]

    return (
        <>
            {/* Bottom section */}
            <div className="w-screen min-h-0 overflow-hidden">
                <form className="divide-y divide-gray-200 lg:col-span-9" action="#" method="POST">
                    {/* Profile section */}
                    <div className="py-6 px-4 sm:p-6 lg:pb-8">
                        <div className="mt-6 grid grid-cols-12 gap-6">
                            <div className="col-span-12 sm:col-span-6">
                                <CustomLabel field="firstname" name={tc('field_firstname')} />
                                <CustomInput type="text" field="firstname" autocomplete={tc('auto_firstname')} placeholder={tc('field_firstname')} />
                            </div>

                            <div className="col-span-12 sm:col-span-6">
                                <CustomLabel field="surname" name={tc('field_surname')} />
                                <CustomInput type="text" field="surname" autocomplete={tc('auto_surname')} placeholder={tc('field_surname')} />
                            </div>
                        </div>

                        <div className="mt-6 flex flex-col lg:flex-row">
                            <div className="flex-grow space-y-6">
                                <div>
                                    <CustomLabel field="username" name={tc('field_username')} />
                                    <CustomInput type="text" field="username" autocomplete={tc('auto_username')} placeholder={tc('field_username')} />
                                </div>

                                <div>
                                    <CustomLabel field="email" name={tc('field_email')} />
                                    <CustomInput type="email" field="email" autocomplete={tc('auto_email')} placeholder={tc('field_email')} />
                                </div>
                            </div>

                            <div className="mt-6 flex-grow lg:mt-0 lg:ml-6 lg:flex-shrink-0 lg:flex-grow-0 -z-10">
                                <CustomLabel field="user-photo" name={tp('field_photo')} />
                                <div className="mt-2 lg:hidden">
                                    <div className="flex items-center">
                                        <div
                                            className="inline-block h-12 w-12 flex-shrink-0 overflow-hidden rounded-full"
                                            aria-hidden="true"
                                        >
                                            <img className="h-full w-full rounded-full" src={user.imageUrl} alt="" />
                                        </div>
                                        <div className="relative ml-5">
                                            <input
                                                id="mobile-user-photo"
                                                name="user-photo"
                                                type="file"
                                                className="peer absolute h-full w-full rounded-md opacity-0"
                                            />
                                            <label
                                                htmlFor="mobile-user-photo"
                                                className="pointer-events-none block rounded-md py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 peer-hover:ring-gray-400 peer-focus:ring-2 peer-focus:ring-sky-500"
                                            >
                                                <span>{tb('form_change')}</span>
                                                <span className="sr-only">{tp('rs_photo')}</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative hidden overflow-hidden rounded-full lg:block">
                                    <img className="relative h-40 w-40 rounded-full" src={user.imageUrl} alt="" />
                                    <label
                                        htmlFor="desktop-user-photo"
                                        className="absolute inset-0 flex h-full w-full items-center justify-center bg-black bg-opacity-75 text-sm font-medium text-white opacity-0 focus-within:opacity-100 hover:opacity-100"
                                    >
                                        <span>{tb('form_change')}</span>
                                        <span className="sr-only">{tp('rs_photo')}</span>
                                        <input
                                            type="file"
                                            id="desktop-user-photo"
                                            name="user-photo"
                                            className="absolute inset-0 h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-12 gap-6">
                            <div className="col-span-12 sm:col-span-6">
                                <CustomLabel field="sex" name={tp('field_sex')} />
                                <CustomSelect field="sex" placeholder={tp('place_sex')} options={sexOptions} defaultValue = '' />
                            </div>
                            <div className="col-span-12 sm:col-span-6">
                                <CustomLabel field="birthday" name={tp('field_birthday')} />
                                <CustomInput type="birthday" field="birthday" autocomplete={tp('auto_birthday')} placeholder={tp('field_birthday')} />
                            </div>
                        </div>
                        <div className="mt-6 grid grid-cols-12 gap-6">
                            <div className="col-span-12 sm:col-span-6">
                                <CustomLabel field="phone" name={tc('field_phone')} />
                                <CustomInput type="tel" field="phone" autocomplete={tc('auto_phone')} placeholder={tc('field_phone')} />
                                <button>
                                    <PlusIcon />
                                </button>
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

Advert.Layout = AdminLayout;
export default Advert;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default,
        },
    };
}
