import { useState } from 'react';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
// Components
import { CustomLabel, CustomError } from '@/components/forms';
import { FormStyles } from '@/helpers';
import { useFormContext, Controller } from 'react-hook-form';

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }, { color: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  'header',
  'font',
  'size',
  'color',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
];

type Props = {
  index?: number;
};

export const NameDescLang = ({ index = 0 }: Props) => {
  const formMethods = useFormContext();
  const t = useTranslations('Common_Forms');
  const lang = formMethods?.watch(`event_general.content.${index}.lang`);
  const baseErrors = formMethods?.formState?.errors?.['event_general']?.["content"]?.[index];
  return (
    <div className="col-span-12 sm:col-span-12 lg:col-span-6">
      <div className="h-[120vw] sm:h-[60vw] lg:h-[27vw] gap-x-16 gap-y-10 border-2">
        <div className="inputCoverAd relative space-y-1 px-5 pt-10 pb-10">
          <div className="grid grid-cols-12 gap-6 ">
            <div className="col-span-12">
              <CustomLabel field="name" name={t('field_name')} />
              <input
                type="text"
                name="name"
                id="name"
                autoComplete={t('field_name')}
                placeholder={t('field_name')}
                className={FormStyles('input')}
                {...(formMethods?.register(
                  `event_general.content.${index}.name`
                ) || {})}
              />
              {baseErrors?.['name'] && (
                <CustomError
                  className="mt-2"
                  error={baseErrors?.['name']?.message}
                />
              )}
            </div>
            <div className="col-span-12">
              <CustomLabel field="description" name={t('field_description')} />
              <Controller
                control={formMethods?.control}
                name={`event_general.content.${index}.description`}
                render={({ field: { onChange, value } }) => (
                  <QuillNoSSRWrapper
                    modules={modules}
                    formats={formats}
                    onChange={onChange}
                    value={value}
                    theme="snow"
                    className="h-40 sm:h-40"
                  />
                )}
              />
              {baseErrors?.['description'] && (
                <CustomError
                  className="mt-24"
                  error={baseErrors?.['description']?.message}
                />
              )}
            </div>
          </div>
          <div className="absolute -top-5 w-fit bg-white px-2 py-1 text-xl font-black uppercase text-customShadow">
            {lang}
          </div>
        </div>
      </div>
    </div>
  );
};
