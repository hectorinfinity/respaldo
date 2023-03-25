import { useState } from "react";
import { useTranslations } from "next-intl";
import DatePicker, { DateObject } from "react-multi-date-picker"
// Helpers
import { FormStyles } from "@/helpers"
// Buttons
import { CustomFilters } from "../buttons"

const CustomRangeInput = ({ openCalendar, value }: any) => {
    let from = new DateObject(value[0])?.format("DD / MMMM / YYYY") || "";
    let to = new DateObject(value[1]).format("DD / MMMM / YYYY") || "";

    return (
        <div className='w-full flex flex-row overflow-hidden border-[2px] border-[#7B7B7B] rounded-[4px] '>
            <input className='w-[48%] py-2 border-r border-r-[#7B7B7B] text-[#7B7B7B] text-center' onFocus={openCalendar} value={from} readOnly />
            <input className='w-[52%] py-2 text-center text-[#7B7B7B]' onFocus={openCalendar} value={to} readOnly />
        </div>
    );
}

export const FormSearchFilter = () => {
    const t = useTranslations("Common_Forms");
    const [dateValues, setDateValues] = useState<[DateObject, DateObject]>([new DateObject(), new DateObject()]);
    
    return (
        <>
            {/* Filters */}
            <form className="space-y-5 divide-y divide-gray-200">
                <div className='pt-5'>
                    <fieldset>
                        <legend className="block text-sm font-medium text-gray-900">{t('field_categories')}</legend>
                        <div className="space-y-3 pt-6">
                            <select
                                id="sex"
                                name="sex"
                                className={FormStyles('select')}
                                defaultValue={''}
                            >
                                <option value=''>{t('loading')} {t('field_categories')}</option>
                            </select>
                        </div>
                    </fieldset>
                </div>

                <div className='pt-5'>
                    <fieldset>
                        <legend className="block text-sm font-medium text-gray-900">{t('field_subcategories')}</legend>
                        <div className="space-y-3 pt-6">
                            <select
                                id="sex"
                                name="sex"
                                className={FormStyles('select')}
                                defaultValue={''}
                            >
                                <option value=''>{t('loading')} {t('field_subcategories')}</option>
                            </select>
                        </div>
                    </fieldset>
                </div>

                <div className='pt-5'>
                    <fieldset>
                        <legend className="block text-sm font-medium text-gray-900">{t('field_sub-subcategories')}</legend>
                        <div className="space-y-3 pt-6">
                            <select
                                id="sex"
                                name="sex"
                                className={FormStyles('select')}
                                defaultValue={''}
                            >
                                <option value=''>{t('loading')} {t('field_sub-subcategories')}</option>
                            </select>
                        </div>
                    </fieldset>
                </div>

                <div className='pt-5'>
                    <fieldset>
                        <legend className="block text-sm font-medium text-gray-900">{t('field_range_date')}</legend>
                        <div className="space-y-3 pt-6">
                            <DatePicker
                                className="rmdp-prime"
                                value={dateValues}
                                onChange={setDateValues}
                                numberOfMonths={2}
                                range
                                render={<CustomRangeInput value={dateValues} />}
                            />
                        </div>
                    </fieldset>
                </div>
                <div className='pt-5'>
                    <fieldset>
                        <legend className="block text-sm font-medium text-gray-900">{t('field_location')}</legend>
                        <div className="space-y-3 pt-6">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="location"
                                placeholder="location"
                                className={FormStyles('input')}
                            />
                        </div>
                    </fieldset>
                </div>
                <div className='pt-5'>
                    <fieldset className='flex justify-end'>
                        <div className='px-1'>
                            <CustomFilters text="clear" />
                        </div>
                        <div className='px-1'>
                            <CustomFilters />
                        </div>
                    </fieldset>
                </div>
            </form>
        </>
    )
}