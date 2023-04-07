import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ClockIcon, LinkIcon } from '@heroicons/react/24/outline'
import { CustomLabel } from '../labels'
import { useTranslations } from 'next-intl'
import { FormStyles } from '@/helpers'
import { CustomCancel, CustomSubmit } from '../buttons'
import { XMarkIcon } from '@heroicons/react/24/solid'


export const AddSchedule = () => {
    const t = useTranslations("Panel_Event_Add_Schedule");
    const tc = useTranslations("Common_Forms");
    const [open, setOpen] = useState(true)

    const cancelButtonRef = useRef(null)

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
                                <form className="lg:col-span-9" action="#" method="POST">
                                    <div className="grid grid-cols-12 gap-6">
                                        <div className="col-span-12 border-b-2 flex justify-between">
                                            <div>
                                                <span className='text-2xl'>{t('title')}</span>
                                            </div>
                                            <div>
                                                <button
                                                    type="button"
                                                    className="mt-3 inline-flex justify-end bg-white px-3 py-2 text-sm font-semibold hover:bg-gray-50 sm:mt-0"
                                                    onClick={() => setOpen(false)}
                                                    ref={cancelButtonRef}
                                                >
                                                    <XMarkIcon className='w-5 h-5' />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-span-12 sm:col-span-6 lg:col-span-6">
                                            <CustomLabel field="initial_hour" name={tc('field_initial_hour')} required />
                                            <div className="relative rounded-md shadow-sm">
                                                <input
                                                    type="text"
                                                    name="initial_hour"
                                                    id="initial_hour"
                                                    autoComplete={tc('field_initial_hour')}
                                                    placeholder={tc('field_initial_hour')}
                                                    className={FormStyles('input')}
                                                />
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                                    <ClockIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-12 sm:col-span-6 lg:col-span-6">
                                            <CustomLabel field="final_hour" name={tc('field_final_hour')} required />
                                            <div className="relative rounded-md shadow-sm">
                                                <input
                                                    type="text"
                                                    name="final_hour"
                                                    id="final_hour"
                                                    autoComplete={tc('field_final_hour')}
                                                    placeholder={tc('field_final_hour')}
                                                    className={FormStyles('input')}
                                                />
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                                    <ClockIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                                            <CustomLabel field="low_cost" name={tc('field_low_cost')} />
                                            <input
                                                type="text"
                                                name="low_cost"
                                                id="low_cost"
                                                autoComplete={tc('field_low_cost')}
                                                placeholder={tc('field_low_cost')}
                                                className={FormStyles('input')}
                                            />
                                        </div>
                                        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                                            <CustomLabel field="regular_cost" name={tc('field_regular_cost')} required />
                                            <input
                                                type="text"
                                                name="regular_cost"
                                                id="regular_cost"
                                                autoComplete={tc('field_regular_cost')}
                                                placeholder={tc('field_regular_cost')}
                                                className={FormStyles('input')}
                                            />
                                        </div>
                                        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                                            <CustomLabel field="high_cost" name={tc('field_high_cost')} />
                                            <input
                                                type="text"
                                                name="high_cost"
                                                id="high_cost"
                                                autoComplete={tc('field_high_cost')}
                                                placeholder={tc('field_high_cost')}
                                                className={FormStyles('input')}
                                            />
                                        </div>
                                        <div className="col-span-12 sm:col-span-6 lg:col-span-6">
                                            <CustomLabel field="url" name={tc('field_url')} required />
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
                                            <CustomLabel field="streaming" name={tc('field_streaming')} required />
                                            <div className="relative rounded-md shadow-sm">
                                                <input
                                                    type="text"
                                                    name="streaming"
                                                    id="streaming"
                                                    autoComplete={tc('field_streaming')}
                                                    placeholder={tc('field_streaming')}
                                                    className={FormStyles('input')}
                                                />
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                                    <LinkIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-12">
                                            <span className='text-lg'>{t('reply')}</span>
                                        </div>
                                        <div className="col-span-4 sm:col-span-3 text-center">
                                            <CustomLabel field="monday" name={tc('field_monday')} />
                                            <input
                                                type="checkbox"
                                                name="monday"
                                                id="monday"
                                                aria-describedby={tc('field_monday')}
                                                className={FormStyles('checkbox')}
                                            />
                                        </div>
                                        <div className="col-span-4 sm:col-span-3 text-center">
                                            <CustomLabel field="tuesday" name={tc('field_tuesday')} />
                                            <input
                                                type="checkbox"
                                                name="tuesday"
                                                id="tuesday"
                                                aria-describedby={tc('field_tuesday')}
                                                className={FormStyles('checkbox')}
                                            />
                                        </div>
                                        <div className="col-span-4 sm:col-span-3 text-center">
                                            <CustomLabel field="wednesday" name={tc('field_wednesday')} />
                                            <input
                                                type="checkbox"
                                                name="wednesday"
                                                id="wednesday"
                                                aria-describedby={tc('field_wednesday')}
                                                className={FormStyles('checkbox')}
                                            />
                                        </div>
                                        <div className="col-span-4 sm:col-span-3 text-center">
                                            <CustomLabel field="thursday" name={tc('field_thursday')} />
                                            <input
                                                type="checkbox"
                                                name="thursday"
                                                id="thursday"
                                                aria-describedby={tc('field_thursday')}
                                                className={FormStyles('checkbox')}
                                            />
                                        </div>
                                        <div className="col-span-4 sm:col-span-3 text-center">
                                            <CustomLabel field="friday" name={tc('field_friday')} />
                                            <input
                                                type="checkbox"
                                                name="friday"
                                                id="friday"
                                                aria-describedby={tc('field_friday')}
                                                className={FormStyles('checkbox')}
                                            />
                                        </div>
                                        <div className="col-span-4 sm:col-span-3 text-center">
                                            <CustomLabel field="saturday" name={tc('field_saturday')} />
                                            <input
                                                type="checkbox"
                                                name="saturday"
                                                id="saturday"
                                                aria-describedby={tc('field_saturday')}
                                                className={FormStyles('checkbox')}
                                            />
                                        </div>
                                        <div className="col-span-4 sm:col-span-3 text-center">
                                            <CustomLabel field="sunday" name={tc('field_sunday')} />
                                            <input
                                                type="checkbox"
                                                name="sunday"
                                                id="sunday"
                                                aria-describedby={tc('field_sunday')}
                                                className={FormStyles('checkbox')}
                                            />
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
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}