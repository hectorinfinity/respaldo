/** @format */
import React, { useState, useRef,useEffect} from 'react';
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
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
import {useCreateCategories} from '@/hooks/admin/event/category';
 

const EventCreateCategory = () => {
    const t = useTranslations("Panel_SideBar");
    const tf = useTranslations("Common_Forms");
    const tp = useTranslations('Panel_Profile_Request');
    const tc = useTranslations("Common_Forms");

    const breadcrumb = [
        { page: t('admin.admin'), href: '/panel/admin' },
        { page: t('admin.event.event'), href: '/panel/admin/event/category' },
        { page: t('admin.event.category'), href: '/panel/admin/event/category' },
        { page: t('actions.create'), href: '' }
    ];
    const {mutate, isLoading, isError, isSuccess}= useCreateCategories()

    const { register, handleSubmit,setValue, formState: { errors }, reset } = useForm<EventCategory >();

   


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
    const [dataCategory,setData]=useState<EventCategory>()
    
    const onSubmit:SubmitHandler<EventCategory >= (data:EventCategory )=>{
        setData(data) 
        console.log()
        const formData= new FormData
        console.log(formData.getAll('color'))
        mutate(data)
    console.log(isLoading?'cargando':'listo')
    console.log(isError?'error':'hay error')
    console.log(isSuccess?'success':'no success')
    };
   
    
    

/*Lang*/
const[lang ,setlang]=useState('en')
const LangSelect:React.ChangeEventHandler<HTMLSelectElement> = (e:any)=>{
    const Lang=e.target.value;
    setlang(Lang==='en'?'en':'es')
    if(lang==='en'){
    setValue( `category.${0}.lang`, Lang )
    }else if(lang==='es'){
    setValue( `category.${1}.lang`, Lang )
    }
    
}
/*Name*/
const handleName:React.ChangeEventHandler<HTMLInputElement> = (e:any)=>{
    const Name=e.target.value;
    if(lang==='en'){
        setValue( `category.${1}.name`, Name )
    }else if(lang==='es'){
        setValue( `category.${0}.name`, Name )
    }
        
}

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
                                             <input    id="picture" {...register('picture')} type="file"  hidden accept="image/jpeg, image/png, .gif" size={10000000}/>
                                            
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
                            {/*
                            <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                                <div className="h-fit gap-x-16 gap-y-10 border-2">
                                    <div className="inputCoverAd relative space-y-1 px-5 pt-10 pb-10">
                                        <CustomLabel field='name' name={tf('field_name')} />
                                        <input
                                            type="text"
                                            name="name"
                                            {...register(`category.${0}.name`)}
                                            autoComplete={tf('field_name')}
                                            placeholder={tf('field_name')}
                                            className={FormStyles('input')}
                                        />
                                        <select {...register(`category.${1}.lang`)} className="cursor-pointer absolute -top-5 w-[7rem] rounded-md bg-white px-2 py-1 text-xl font-black uppercase text-customShadow">
                                            <option >en</option>
                                            <option >es</option>
                                            
                                        </select>
                                        <TrashIcon
                                            name="delete"
                                            className="w-4 h-4 absolute right-0 top-[18%] hidden px-[6%] text-customRed"
                                        />
                                    </div>
                                </div>
                            </div>*/}
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

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default,
        },
    };
}
