/** @format */
import { useState } from 'react';
import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';
import { Heading } from '@/components/headers/admin/heading';
import { UseFormReturn } from 'react-hook-form';
import { CustomLabel } from '@/components/forms';
//
import { FormStyles } from '@/helpers';
// Icons
import { PlusIcon } from '@heroicons/react/20/solid';
import { NameDescLang } from '@/components/forms/lang';
import { EventCategory } from '@/interfaces/event';
import { useLocale } from 'next-intl';
import { useEventsSpecialsCategories } from '@/hooks/event/event_special_category';
type FormData = {
  lang: string;
  supplier: string;
  category: string;
  subcategory: string;
  sub_sub_cateogry: string;
  image_web: string;
  image_app: string;
  image_flyer: string;
  tags: string[];
  content: {
    name: string;
    description: string;
    lang: string;
  }[];
};

type Props = {
  categories: EventCategory[];
} & UseFormReturn;
const CreateEventStep0 = ({ categories, register, watch }: Props) => {
  const t = useTranslations('Panel_SideBar');
  const tc = useTranslations('Common_Forms');
  const tp = useTranslations('Panel_Profile_Request');
  const locale = useLocale();
  const filteredCategories = categories?.map((category) => ({
    ...category,
    category:
      category?.category?.find(({ lang }) => lang == locale) ||
      category?.category?.find(({ lang }) => lang == 'es'),
  }));
  const [specialCategory, category, subCategory, subSubCategory] = watch([
    'special_category',
    'category',
    'category',
    'sub_sub_category',
  ]);
  const subCategories = filteredCategories.filter(
    (c) => c._id !== category?._id
  );

  const subSubCategories = filteredCategories.filter(
    (c) => c._id !== subCategory?._id
  );

  return (
    <div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 sm:col-span-12">
          <CustomLabel field="supplier" name={tc('field_supplier')} />
          <select
            id="supplier"
            name="supplier"
            className={FormStyles('select')}
            {...register('supplier')}
          >
            <option value="">{tc('field_select_supplier')}</option>
          </select>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-12 gap-6">
        <div className="col-span-12 sm:col-span-6 lg:col-span-6">
          <CustomLabel
            field="special_category"
            name={tc('field_special_category')}
            required
          />
          <select
            id="special_category"
            name="special_category"
            className={FormStyles('select')}
            defaultValue={''}
            {...register('special_category')}
          >
            <option value="">{tc('field_select_special_category')}</option>
          </select>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-6">
          <CustomLabel field="category" name={tc('field_category')} required />
          <select
            id="category"
            name="category"
            className={FormStyles('select')}
            {...register('category')}
          >
            <option value="">{tc('field_select_category')}</option>
            {filteredCategories?.map((category, idx) => (
              <option key={idx} value={category?._id}>
                {category?.category?.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-12 gap-6">
        <div className="col-span-12 sm:col-span-6 lg:col-span-6">
          <CustomLabel
            field="subcategory"
            name={tc('field_subcategory')}
            required
          />
          <select
            id="subcategory"
            name="subcategory"
            className={FormStyles('select')}
            {...register('sub_category')}
          >
            <option value="">{tc('field_select_subcategory')}</option>
            {subCategories?.map((category, idx) => (
              <option key={idx} value={category?._id}>
                {category?.category?.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-6">
          <CustomLabel
            field="subsubcategory"
            name={tc('field_subsubcategory')}
            required
          />
          <select
            id="subsubcategory"
            name="subsubcategory"
            className={FormStyles('select')}
            {...register('sub_sub_category')}
          >
            <option value="">{tc('field_select_subsubcategory')}</option>
            {subSubCategories?.map((category, idx) => (
              <option key={idx} value={category?._id}>
                {category?.category?.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-12 gap-6">
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <CustomLabel
            field="event_image_web-upload"
            name={tc('field_event_image_web')}
            required
          />
          <div className="mt-2 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="event_image_web-upload"
                  className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>{tc('field_upload_file')}</span>
                  <input
                    id="event_image_web-upload"
                    name="event_image_web-upload"
                    type="file"
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">{tp('text_drag_n_drop')}</p>
              </div>
              <p className="text-xs text-gray-500">
                PNG, JPG, GIF {tp('text_up_to')} 10MB
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <CustomLabel
            field="event_image_app-upload"
            name={tc('field_event_image_app')}
            required
          />
          <div className="mt-2 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="event_image_app-upload"
                  className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>{tc('field_upload_file')}</span>
                  <input
                    id="event_image_app-upload"
                    name="event_image_app-upload"
                    type="file"
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">{tp('text_drag_n_drop')}</p>
              </div>
              <p className="text-xs text-gray-500">
                PNG, JPG, GIF {tp('text_up_to')} 10MB
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <CustomLabel
            field="event_image_flyer-upload"
            name={tc('field_event_image_flyer')}
            required
          />
          <div className="mt-2 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="event_image_flyer-upload"
                  className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>{tc('field_upload_file')}</span>
                  <input
                    id="event_image_flyer-upload"
                    name="event_image_flyer-upload"
                    type="file"
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">{tp('text_drag_n_drop')}</p>
              </div>
              <p className="text-xs text-gray-500">
                PNG, JPG, GIF {tp('text_up_to')} 10MB
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-12 gap-6">
        <div className="col-span-12 sm:col-span-6">
          <CustomLabel field="tags" name={tc('field_tags')} />
          <input
            type="input"
            name="tags"
            id="tags"
            autoComplete={tc('auto_tags')}
            placeholder={tc('field_tags')}
            className={FormStyles('input')}
          />
          <button>
            <PlusIcon />
          </button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-12 gap-6">
        <NameDescLang lang="es" />
      </div>
    </div>
  );
};

export default CreateEventStep0;
