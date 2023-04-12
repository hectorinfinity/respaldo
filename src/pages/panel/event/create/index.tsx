/** @format */
import { useState } from 'react';
import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';
// Layout and Header
import AdminLayout from '@/components/layout/admin';
import { Heading } from '@/components/headers/admin/heading';
// Forms
import { CustomLabel, CustomCancel, CustomSubmit } from '@/components/forms';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import axios from 'axios';
import { EventCategory } from '@/interfaces/event';
import { useLocale } from 'next-intl';
import CreateEventStep0 from '@/components/admin/event/CreateEventStep0';
import CreateEventStep1 from '@/components/admin/event/CreateEventStep1';
import CreateEventStep2 from '@/components/admin/event/CreateEventStep2';
import CreateEventStep3 from '@/components/admin/event/CreateEventStep3';

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
};
const EventCreate = ({ categories }: Props) => {
  const useFormReturn = useForm();
  const { handleSubmit } = useFormReturn;
  const t = useTranslations('Panel_SideBar');
  const [step, setStep] = useState(0);

  const breadcrumb = [
    { page: t('event.event'), href: '' },
    { page: t('actions.create'), href: '' },
  ];
  const onSubmit = async (formData: FormData) => {
    try {
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      {/* Breadcrumb section */}
      <div>
        <Heading breadcrumb={breadcrumb} langBread />
      </div>
      <form className="flex flex-1 pt-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-screen min-h-0 ">
          {step == 0 ? (
            <CreateEventStep0 categories={categories} {...useFormReturn} />
          ) : step == 1 ? (
            <CreateEventStep1 {...useFormReturn} />
          ) : step == 2 ? (
            <CreateEventStep2 {...useFormReturn} />
          ) : (
            step == 3 && <CreateEventStep3 {...useFormReturn} />
          )}

          {/* Buttons section */}
          <div className="divide-y divide-gray-200 pt-6">
            <div className="mt-4 flex justify-end gap-x-3 py-4 px-4 sm:px-6">
              <CustomCancel />
              <CustomSubmit />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

EventCreate.Layout = AdminLayout;
export default EventCreate;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/events/categories/`
  );
  console.log('categories', data);
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
      categories: data,
    },
  };
}
