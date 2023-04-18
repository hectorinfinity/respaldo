/** @format */
import React, { useState, useRef,useEffect} from 'react';
import { useRouter } from 'next/router';
import { GetStaticPropsContext, GetStaticPaths } from "next";
import { useTranslations, useLocale } from "next-intl";
import { SketchPicker } from 'react-color'
// Helpers
import { FormStyles } from "@/helpers";
// Layout and Header
import AdminLayout from "@/components/layout/admin";
import { Heading } from '@/components/headers/admin/heading';
// Forms
import { useForm, SubmitHandler } from "react-hook-form";
import { TrashIcon } from "@heroicons/react/24/solid";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CustomCancel, CustomLabel, CustomSubmit } from '@/components/forms';
import {InputLang } from '@/components/forms/lang';
import { EventCategory } from '@/interfaces/event';
//icon
import {ArrowPathIcon} from '@heroicons/react/24/outline';
/*Hooks */
import {useReadEventCategory, useUpdateEventCategory} from '@/hooks/event/event_category';
 

const EventCreateCategory = () => {
    const t = useTranslations("Panel_SideBar");
    const tf = useTranslations("Common_Forms");
    const tp = useTranslations('Panel_Profile_Request');
    const tc = useTranslations("Common_Forms");
    const locale=useLocale()
    const router=useRouter()
    const {query,pathname}=router 
    
    
    const itemCategory=useReadEventCategory(`${query.id}`)

    const breadcrumb = [
        { page: t('admin.admin'), href: '/panel/admin' },
        { page: t('admin.event.event'), href: '/panel/admin/event/category' },
        { page: t('admin.event.category'), href: '/panel/admin/event/category' },
        { page: t('actions.edit') + ` / ${itemCategory.category.find((e)=>e.lang== locale).name}`, href: '' }
    ];
    const {mutate, isLoading, isError, isSuccess}= useUpdateEventCategory()

    const { register, handleSubmit,setValue, formState: { errors }, reset,getValues } = useForm<EventCategory >();


/*input file config*/ 
    const [upload, setUpload ]=useState('');
    const File=useRef<HTMLLabelElement>();
    const handleSelectFile=()=>{
    const FileSelected = File.current;
        
        if(FileSelected ){
            const files=(FileSelected.children[1]as HTMLInputElement).files[0]
            setUpload(files.name)
            const type=files.type
            const blob= new Blob([files], {type})
            const url=URL.createObjectURL(blob)
            console.log(files)
            console.log(url)
            setValue('picture', url )
        }
        
    };
   

    
    
 

/*input color config*/
    const [initColor, setInitColor]=useState<string>('#ffffff');
    const  onChangeColor=(color:any)=>{ 
        setInitColor(color.hex)
        setValue('color', initColor )
    }

/*submit form*/ 
    const [dataCategory,setData]=useState()
    
    const onSubmit:SubmitHandler<EventCategory >= (data:EventCategory )=>{
        
      
      console.log(data)
      mutate({id:`${query.id}`,category:data})
      
    };
   
    
    
const[category,setCategory]=useState( [{lang:'es', name:''},{lang:'en', name:''}])
console.log(category)
/*Lang*/
const[lang ,setlang]=useState('en')

const LangSelect:React.ChangeEventHandler<HTMLSelectElement> = (e:any)=>{
    const Lang=e.target.value;
    setlang(Lang==='en'? 'en': 'es')
}
/*Name*/
const handleName:React.ChangeEventHandler<HTMLInputElement> = (e:any)=>{
    const Name=e.target.value;
    const cate= [...category]
    
    if(lang==='en'){
        cate[1].name=Name
        setCategory(cate)
    }else if(lang==='es'){
        cate[0].name=Name
        setCategory(cate)
    }
        setValue('category', category)
}
console.log(getValues())

    return (
        <>
            {/* Breadcrumb section */}
            <div>
                <Heading breadcrumb={breadcrumb} langBread onChange={LangSelect}/>
            </div>
            <div className="flex flex-1 pt-6">
                <div className="w-screen min-h-0 overflow-hidden">
                    <form className="divide-y divide-gray-200 lg:col-span-9" onSubmit={handleSubmit(onSubmit)} method="POST">
                        <div className="py-6 grid grid-cols-12 gap-6">
                            <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6">
                                <CustomLabel field="icon-upload" name={tc('field_icon')} required />
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
                                        <div className="flex text-sm text-gray-600 justify-center">
                                            <label
                                                onChange={handleSelectFile}
                                                ref={File} 
                                                htmlFor="picture"
                                                className="relative cursor-pointer relative z-10 rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                            >
                                             { upload===''?  <span  >{tc('field_upload_file')}</span>:<span className='flex flex-row gap-2'>{ upload}<ArrowPathIcon width='1.5rem' height='1.5rem'/></span>}
                                             <input    id="picture" type="file"  hidden accept="image/jpeg, image/png, .gif" size={10000000}/>
                                            
                                            </label>
                                            
                                            { upload===''? <p className="pl-1">{tp('text_drag_n_drop')}</p>: null}
                                        </div>
                                        <p className="text-xs text-gray-500">PNG, JPG, GIF {tp('text_up_to')} 10MB</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6">
                                <CustomLabel field="front_id" name={tc('field_color')} required />
                                <SketchPicker 
                                onChange={onChangeColor}
                                color={initColor}
                                />
                            </div>
                            
                            <InputLang lang={lang} onChange={handleName}/>
                        </div>

                        {/* Buttons section */}
                        <div className="divide-y divide-gray-200">
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

EventCreateCategory.Layout = AdminLayout;
export default EventCreateCategory;

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default,
        },
    };
}
