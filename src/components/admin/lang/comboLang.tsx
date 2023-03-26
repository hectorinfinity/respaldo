import { useState } from 'react';
import dynamic from 'next/dynamic';
// Components
import { CustomLabel } from "@/components/forms";
import { FormStyles } from '@/helpers';

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
})

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
}
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
    lang: string
}

export const ComboLang = ({ lang }: Props) => {
    const [content, setContent] = useState('');

    return (
        <div className="col-span-12 sm:col-span-6">
            <div className="h-[24vw] gap-x-16 gap-y-10 border-2">
                <div className="inputCoverAd relative space-y-1 px-5 pt-10 pb-10">
                    <div>
                        <CustomLabel field='name' name='name' />
                        <input
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="name"
                            placeholder="name"
                            className={FormStyles('input')}
                        />
                    </div>
                    <div className='py-6'>
                        <CustomLabel field='description' name='description' />
                        <QuillNoSSRWrapper modules={modules} formats={formats} onChange={setContent} theme="snow" className='h-48' />
                    </div>
                    <div className="absolute -top-5 w-fit bg-white px-2 py-1 text-xl font-black uppercase text-customShadow">
                        {lang}
                    </div>
                </div>
            </div>
        </div>
    )
}