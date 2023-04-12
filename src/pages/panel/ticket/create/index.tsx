/** @format */
import { useState } from 'react';
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { Switch } from '@headlessui/react'
// Layout and Header
import AdminLayout from "@/components/layout/admin";
import { Heading } from '@/components/headers/admin/heading';
// Forms
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CustomLabel, CustomCancel, CustomSubmit, CustomAdd } from '@/components/forms';
// Helpers
import { CurrentColor, FormStyles, classNames } from '@/helpers';
// Icons
import { LinkIcon } from '@heroicons/react/24/solid';
// Interface
import { Address } from "@/interfaces/serializers/commons";

const validationSchema = yup.object().shape({
    // addressname: yup.string().required("Address name is required"),
    searchaddress: yup.string(),
    address: yup.string().required("Address line 1 is required"),
    address2: yup.string(),
    zipcode: yup.string().required("Postal code is required"),
    country: yup.string().required("Country is required"),
    state: yup.string().required("State is required"),
    city: yup.string().required("City is required"),
    currency: yup.string().required("Currency is required"),
});

const EventCreateAdditional = () => {
    const t = useTranslations("Panel_SideBar");
    const tc = useTranslations("Common_Forms");
    const currentColor = CurrentColor();

    const [accessible, setAccessible] = useState(false)

    const { register, setValue, handleSubmit, formState: { errors }, reset } = useForm<Address>({
        resolver: yupResolver(validationSchema)
    });

    const breadcrumb = [
        { page: t('event.event'), href: '' },
        { page: t('actions.create'), href: '' }
    ]

    return (
        <>
            {/* Breadcrumb section */}
            <div>
                <Heading breadcrumb={breadcrumb} />
            </div>
            <div className="flex flex-1 pt-6">
                <div className="w-screen min-h-0 overflow-hidden">
                    <form className="lg:col-span-9 px-2" action="#" method="POST">
                        <div className="mt-6 grid grid-cols-12 gap-6 mb-6">
                            <div className="col-span-12 sm:col-span-6 lg:col-span-6">
                                <CustomLabel field="event" name={tc('field_event')} />
                                <select
                                    id="event"
                                    name="event"
                                    className={FormStyles('select')}
                                    defaultValue={''}
                                >
                                    <option value=''>{tc('field_event')}</option>
                                </select>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-6">
                                <CustomLabel field="date" name={tc('field_date')} />
                                <select
                                    id="date"
                                    name="date"
                                    className={FormStyles('select')}
                                    defaultValue={''}
                                >
                                    <option value=''>{tc('field_date')}</option>
                                </select>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-6">
                                <CustomLabel field="schedule" name={tc('field_schedule')} />
                                <select
                                    id="schedule"
                                    name="schedule"
                                    className={FormStyles('select')}
                                    defaultValue={''}
                                >
                                    <option value=''>{tc('field_schedule')}</option>
                                </select>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-12 gap-6">
                            <div className="col-span-12">Information</div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-6">
                                <CustomLabel field="quota" name={tc('field_quota')} />
                                <input
                                    type="text"
                                    name="quota"
                                    id="quota"
                                    autoComplete={tc('field_quota')}
                                    placeholder={tc('field_quota')}
                                    className={FormStyles('input')}
                                />
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-6">
                                <CustomLabel field="url" name={tc('field_url')} />
                                <div className="relative rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        name="url"
                                        id="url"
                                        autoComplete={tc('field_url')}
                                        placeholder={tc('field_url')}
                                        className={FormStyles('input')}
                                    />
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                        <LinkIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-6">
                                <CustomLabel field="generic_rules" name={tc('field_generic_rules')} />
                                <input
                                    type="text"
                                    name="generic_rules"
                                    id="generic_rules"
                                    autoComplete={tc('field_generic_rules')}
                                    placeholder={tc('field_generic_rules')}
                                    className={FormStyles('input')}
                                />
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-6">
                                <CustomLabel field="children_rules" name={tc('field_children_rules')} />
                                <input
                                    type="text"
                                    name="children_rules"
                                    id="children_rules"
                                    autoComplete={tc('field_children_rules')}
                                    placeholder={tc('field_children_rules')}
                                    className={FormStyles('input')}
                                />
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-6">
                                <CustomLabel field="accessible" name={tc('field_accessible')} />
                                <Switch.Group as="div" className="flex items-center">
                                    <Switch
                                        checked={accessible}
                                        onChange={setAccessible}
                                        className={classNames(
                                            accessible ? `bg-${currentColor}` : `bg-gray-200`,
                                            `relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-${currentColor} focus:ring-offset-2`
                                        )}
                                    >
                                        <span
                                            aria-hidden="true"
                                            className={classNames(
                                                accessible ? 'translate-x-5' : 'translate-x-0',
                                                'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                                            )}
                                        />
                                    </Switch>
                                </Switch.Group>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-12 gap-6">
                            <div className="col-span-12">Social Media</div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-6">
                                <CustomLabel field="facebook" name={tc('field_facebook')} />
                                <div className="relative rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        name="facebook"
                                        id="facebook"
                                        autoComplete={tc('field_facebook')}
                                        placeholder={tc('field_facebook')}
                                        className={FormStyles('input')}
                                    />
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                        <LinkIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-6">
                                <CustomLabel field="instagram" name={tc('field_instagram')} />
                                <div className="relative rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        name="instagram"
                                        id="instagram"
                                        autoComplete={tc('field_instagram')}
                                        placeholder={tc('field_instagram')}
                                        className={FormStyles('input')}
                                    />
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                        <LinkIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-6">
                                <CustomLabel field="twitter" name={tc('field_twitter')} />
                                <div className="relative rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        name="twitter"
                                        id="twitter"
                                        autoComplete={tc('field_twitter')}
                                        placeholder={tc('field_twitter')}
                                        className={FormStyles('input')}
                                    />
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                        <LinkIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-12 gap-6">
                            <div className="col-span-12">Parking</div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-6">
                                <CustomLabel field="currency" name={tc('field_currency')} />
                                <select
                                    id="currency"
                                    name="currency"
                                    className={FormStyles('select')}
                                    defaultValue={''}
                                >
                                    <option value=''>{tc('field_currency')}</option>

                                </select>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-6">
                                <CustomLabel field="cost" name={tc('field_cost')} />
                                <input
                                    type="text"
                                    name="cost"
                                    id="cost"
                                    autoComplete={tc('field_cost')}
                                    placeholder={tc('field_cost')}
                                    className={FormStyles('input')}
                                />
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-12 gap-6">
                            <div className="col-span-12 md:col-span-6">
                                <div className='grid grid-cols-12 gap-6'>
                                    <div className="col-span-12">Box Office</div>
                                    <div className="col-span-12 sm:col-span-6 lg:col-span-6">
                                        <CustomLabel field="box_office" name={tc('field_box_office')} />
                                        <input
                                            type="text"
                                            name="box_office"
                                            id="box_office"
                                            autoComplete={tc('field_box_office')}
                                            placeholder={tc('field_box_office')}
                                            className={FormStyles('input')}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6">
                                <div className='grid grid-cols-12 gap-6'>
                                    <div className="col-span-12">Payment</div>
                                    <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                                        <CustomLabel field="cash" name={tc('field_cash')} />
                                        <Switch.Group as="div" className="flex items-center">
                                            <Switch
                                                checked={accessible}
                                                onChange={setAccessible}
                                                className={classNames(
                                                    accessible ? `bg-${currentColor}` : `bg-gray-200`,
                                                    `relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-${currentColor} focus:ring-offset-2`
                                                )}
                                            >
                                                <span
                                                    aria-hidden="true"
                                                    className={classNames(
                                                        accessible ? 'translate-x-5' : 'translate-x-0',
                                                        'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                                                    )}
                                                />
                                            </Switch>
                                        </Switch.Group>
                                    </div>
                                    <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                                        <CustomLabel field="credit" name={tc('field_credit')} />
                                        <Switch.Group as="div" className="flex items-center">
                                            <Switch
                                                checked={accessible}
                                                onChange={setAccessible}
                                                className={classNames(
                                                    accessible ? `bg-${currentColor}` : `bg-gray-200`,
                                                    `relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-${currentColor} focus:ring-offset-2`
                                                )}
                                            >
                                                <span
                                                    aria-hidden="true"
                                                    className={classNames(
                                                        accessible ? 'translate-x-5' : 'translate-x-0',
                                                        'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                                                    )}
                                                />
                                            </Switch>
                                        </Switch.Group>
                                    </div>
                                    <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                                        <CustomLabel field="debit" name={tc('field_debit')} />
                                        <Switch.Group as="div" className="flex items-center">
                                            <Switch
                                                checked={accessible}
                                                onChange={setAccessible}
                                                className={classNames(
                                                    accessible ? `bg-${currentColor}` : `bg-gray-200`,
                                                    `relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-${currentColor} focus:ring-offset-2`
                                                )}
                                            >
                                                <span
                                                    aria-hidden="true"
                                                    className={classNames(
                                                        accessible ? 'translate-x-5' : 'translate-x-0',
                                                        'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                                                    )}
                                                />
                                            </Switch>
                                        </Switch.Group>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-12 gap-6">
                            <div className="col-span-6">Schedule</div>
                            <div className="col-span-6 text-right">
                                <CustomAdd />
                            </div>
                            <div className="col-span-12 sm:col-span-4">
                                <CustomLabel field="day" name={tc('field_day')} />
                                <input
                                    type="text"
                                    name="day"
                                    id="v"
                                    autoComplete={tc('field_day')}
                                    placeholder={tc('field_day')}
                                    className={FormStyles('input')}
                                />
                            </div>
                            <div className="col-span-12 sm:col-span-4">
                                <CustomLabel field="start" name={tc('field_start')} />
                                <input
                                    type="text"
                                    name="start"
                                    id="start"
                                    autoComplete={tc('field_start')}
                                    placeholder={tc('field_start')}
                                    className={FormStyles('input')}
                                />
                            </div>
                            <div className="col-span-12 sm:col-span-4">
                                <CustomLabel field="end" name={tc('field_end')} />
                                <input
                                    type="text"
                                    name="end"
                                    id="end"
                                    autoComplete={tc('field_end')}
                                    placeholder={tc('field_end')}
                                    className={FormStyles('input')}
                                />
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-12 gap-6">
                            <div className="col-span-6">Templates</div>
                            <div className="col-span-6 text-right">
                                <CustomAdd />
                            </div>
                            <div className="col-span-12 sm:col-span-4">
                                
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

EventCreateAdditional.Layout = AdminLayout;
export default EventCreateAdditional;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default,
        },
    };
}
