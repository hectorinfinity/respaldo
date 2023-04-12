/** @format */
import { useTranslations } from 'next-intl';
import {
  CustomError,
  CustomLabel,
  CustomCancel,
  CustomSubmit,
} from '@/components/forms';
import { EventLang } from '@/components/forms/lang';
// Helpers
import { FormStyles } from '@/helpers';
// Icons
import { LinkIcon } from '@heroicons/react/24/solid';
import { UseFormReturn } from 'react-hook-form';

type Props = UseFormReturn;
const CreateEventStep1: React.FC<Props> = () => {
  const t = useTranslations('Panel_SideBar');
  const tc = useTranslations('Common_Forms');

  return (
    <>
      <div className="flex flex-1 pt-6">
        <div className="w-screen min-h-0 overflow-hidden">
          <form className="lg:col-span-9" action="#" method="POST">
            <div className="grid grid-cols-12 gap-6">
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
                    <LinkIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
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
                    <LinkIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
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
                    <LinkIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-3 lg:col-span-3">
                <CustomLabel
                  field="age_limit"
                  name={tc('field_age_limit')}
                  required
                />
                <select
                  id="age_limit"
                  name="age_limit"
                  className={FormStyles('select')}
                  defaultValue={''}
                >
                  <option value="">{tc('field_select_age_limit')}</option>
                </select>
              </div>
              <div className="col-span-12 sm:col-span-3 lg:col-span-3">
                <CustomLabel
                  field="duration"
                  name={tc('field_duration')}
                  required
                />
                <input
                  type="text"
                  name="duration"
                  id="duration"
                  autoComplete={tc('field_duration')}
                  placeholder={tc('field_duration')}
                  className={FormStyles('input')}
                />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-12 gap-6">
              <EventLang lang="es" />
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

export default CreateEventStep1;
