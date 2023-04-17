/** @format */
import { useState } from 'react';
import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';
import { Switch } from '@headlessui/react';
// Layout and Header
import AdminLayout from '@/components/layout/admin';
import { Heading } from '@/components/headers/admin/heading';
// Forms
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  CustomLabel,
  CustomCancel,
  CustomSubmit,
  CustomAdd,
} from '@/components/forms';
// Helpers
import { CurrentColor, FormStyles, classNames } from '@/helpers';
// Icons
import { LinkIcon } from '@heroicons/react/24/solid';
// Interface
import { Address } from '@/interfaces/serializers/commons';
import { CalendarIcon } from '@heroicons/react/24/outline';

const EventCreateAdditional = () => {
  const t = useTranslations('Panel_SideBar');
  const tc = useTranslations('Common_Forms');
  const te = useTranslations('Ferrors');
  const validationSchema = yup.object().shape({
    // addressname: yup.string().required("Address name is required"),
    searchaddress: yup.string(),
    address: yup.string().required(te('required')),
    address2: yup.string(),
    zipcode: yup.string().required(te('required')),
    country: yup.string().required(te('required')),
    state: yup.string().required(te('required')),
    city: yup.string().required(te('required')),
    currency: yup.string().required(te('required')),
  });
  const currentColor = CurrentColor();

  const [accessible, setAccessible] = useState(false);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Address>({
    resolver: yupResolver(validationSchema),
  });

  const breadcrumb = [
    { page: t('event.event'), href: '' },
    { page: t('actions.create'), href: '' },
  ];

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
              <div className="col-span-12">
                <CustomLabel field="event" name={tc('field_event')} />
                <select
                  id="event"
                  name="event"
                  className={FormStyles('select')}
                  defaultValue={''}
                >
                  <option value="">{tc('field_event')}</option>
                </select>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-6">
                <CustomLabel field="date" name={tc('field_event_date')} />
                <select
                  id="date"
                  name="date"
                  className={FormStyles('select')}
                  defaultValue={''}
                >
                  <option value="all">{tc('field_event_date')}</option>
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
                  <option value="all">{tc('field_schedule')}</option>
                </select>
              </div>
              <div className="col-span-12">
                <span className="text-customRed">Nota:</span> Si dejas "Todas"
                seleccionado en el campo de fechas u horas, está configuración
                se aplicará al evento en general, es decir a todas las fechas y
                horas.
              </div>
            </div>

            <div className="mt-6 grid grid-cols-12 gap-6">
              <div className="col-span-12">Tickets</div>
              <div className="col-span-12 sm:col-span-4">
                <div className="relative flex items-start">
                  <div className="flex h-6 items-center">
                    <input
                      id="resale"
                      aria-describedby="resale-description"
                      name="resale"
                      type="checkbox"
                      className={FormStyles('checkbox')}
                    />
                  </div>
                  <div className="ml-3 text-sm leading-6">
                    <CustomLabel field="resale" name={tc('field_resale')} />
                  </div>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-4">
                <CustomLabel
                  field="starting_date"
                  name={tc('field_starting_date')}
                />
                <div className="relative rounded-md shadow-sm">
                  <input
                    type="text"
                    name="starting_date"
                    id="starting_date"
                    autoComplete={tc('field_starting_date')}
                    placeholder={tc('field_starting_date')}
                    className={FormStyles('input')}
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <CalendarIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-4">
                <CustomLabel
                  field="ending_date"
                  name={tc('field_ending_date')}
                />
                <div className="relative rounded-md shadow-sm">
                  <input
                    type="text"
                    name="ending_date"
                    id="ending_date"
                    autoComplete={tc('field_ending_date')}
                    placeholder={tc('field_ending_date')}
                    className={FormStyles('input')}
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <CalendarIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-4">
                <div className="relative flex items-start">
                  <div className="flex h-6 items-center">
                    <input
                      id="reserve"
                      aria-describedby="reserve-description"
                      name="reserve"
                      type="checkbox"
                      className={FormStyles('checkbox')}
                    />
                  </div>
                  <div className="ml-3 text-sm leading-6">
                    <CustomLabel field="reserve" name={tc('field_reserve')} />
                  </div>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-4">
                <CustomLabel
                  field="cost_porcentage"
                  name={tc('field_cost_porcentage')}
                />
                <input
                  type="text"
                  name="cost_porcentage"
                  id="cost_porcentage"
                  autoComplete={tc('field_cost_porcentage')}
                  placeholder={tc('field_cost_porcentage')}
                  className={FormStyles('input')}
                />
              </div>
              <div className="col-span-12 sm:col-span-4">
                <CustomLabel field="pay_limit" name={tc('field_pay_limit')} />
                <input
                  type="text"
                  name="pay_limit"
                  id="pay_limit"
                  autoComplete={tc('field_pay_limit')}
                  placeholder={tc('field_pay_limit')}
                  className={FormStyles('input')}
                />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-12 gap-6">
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                <CustomLabel field="free_event" name={tc('field_free_event')} />
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
                <CustomLabel field="charity" name={tc('field_charity')} />
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
              <div className="col-span-12 sm:col-span-2 lg:col-span-3">
                <CustomLabel field="sell_limit" name={tc('field_sell_limit')} />
                <input
                  type="text"
                  name="sell_limit"
                  id="sell_limit"
                  autoComplete={tc('field_sell_limit')}
                  placeholder={tc('field_sell_limit')}
                  className={FormStyles('input')}
                />
              </div>
              <div className="col-span-12 sm:col-span-2 lg:col-span-3">
                <CustomLabel field="currency" name={tc('field_currency')} />
                <input
                  type="text"
                  name="currency"
                  id="currency"
                  autoComplete={tc('field_currency')}
                  placeholder={tc('field_currency')}
                  className={FormStyles('input')}
                />
              </div>
              <div className="col-span-12 sm:col-span-2 lg:col-span-3">
                <CustomLabel field="sale_start" name={tc('field_sale_start')} />
                <div className="relative rounded-md shadow-sm">
                  <input
                    type="text"
                    name="sale_start"
                    id="sale_start"
                    autoComplete={tc('field_sale_start')}
                    placeholder={tc('field_sale_start')}
                    className={FormStyles('input')}
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <CalendarIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-2 lg:col-span-3">
                <CustomLabel
                  field="pre_sale_start"
                  name={tc('field_pre_sale_start')}
                />
                <div className="relative rounded-md shadow-sm">
                  <input
                    type="text"
                    name="pre_sale_start"
                    id="pre_sale_start"
                    autoComplete={tc('field_pre_sale_start')}
                    placeholder={tc('field_pre_sale_start')}
                    className={FormStyles('input')}
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <CalendarIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-12 gap-6">
              <div className="col-span-12">
                <CustomLabel
                  field="enable_months"
                  name={tc('field_enable_months')}
                />
              </div>
              <div className="col-span-12 sm:col-span-2">
                <div className="relative flex items-start">
                  <div className="flex h-6 items-center">
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
                  <div className="ml-3 text-sm leading-6">
                    <CustomLabel
                      field="three_months"
                      name={tc('field_three_months')}
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-2">
                <div className="relative flex items-start">
                  <div className="flex h-6 items-center">
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
                  <div className="ml-3 text-sm leading-6">
                    <CustomLabel
                      field="six_months"
                      name={tc('field_six_months')}
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-2">
                <div className="relative flex items-start">
                  <div className="flex h-6 items-center">
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
                  <div className="ml-3 text-sm leading-6">
                    <CustomLabel
                      field="nine_months"
                      name={tc('field_nine_months')}
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-6">
                <div className="relative flex items-start">
                  <div className="flex rounded-2xl shadow-xl p-2">
                    <div className="sm:shrink">
                      <p className="text-lg font-semibold tracking-tight text-gray-900">
                        Commissions of months without interest (these
                        commissions will be added two the fees):
                      </p>
                      <div className="flex justify-between">
                        <p className="mt-2 text-base leading-7 text-gray-600">
                          5% for 3
                        </p>
                        <p className="mt-2 text-base leading-7 text-gray-600">
                          7.5% for 6
                        </p>
                        <p className="mt-2 text-base leading-7 text-gray-600">
                          10% for 9
                        </p>
                      </div>
                    </div>
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
