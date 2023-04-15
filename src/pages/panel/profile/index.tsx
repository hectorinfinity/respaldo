/** @format */
import { useState, useEffect } from "react";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
// Layout and Header
import AdminLayout from "@/components/layout/admin";
import { Heading } from '@/components/headers/admin/heading';
// Forms
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CustomError, CustomLabel, CustomCancel, CustomSubmit } from '@/components/forms';
// Interface
import { User } from "@/interfaces/user";
// Helpers
import { CurrentColor, FormStyles } from "@/helpers";
import { useQueryClient } from "@tanstack/react-query";
import { useMutationUpdateUser } from "@/hooks/user/user";


const validationSchema = yup.object().shape({
    firstname: yup.string().min(2).max(32).required('First name is required'),
    surname: yup.string().min(2).max(32).required('Surname is required'),
    username: yup.string().min(2).max(32).required('Username is required'),
    email: yup.string().email().required('Email is required'),
    sex: yup.string().required('Sex is required'),
    birthday: yup.date().required('Birthday is required'),
    phones: yup.array().of(
        yup.object().shape({
            phone: yup.string().min(10).max(10).required('Phone is required'),
            type: yup.string().required('Phone type is required'),
        })
    ),
});

const Profile = () => {
    // const currentColor = CurrentColor();
    const [uploadedImage, setUploadedImage] = useState<string | null>(null);
    const t = useTranslations("Panel_SideBar");
    const tc = useTranslations("Common_Forms");
    const tb = useTranslations("btn");

    const { register, handleSubmit, control, formState: { errors }, setValue } = useForm<User>({
        resolver: yupResolver(validationSchema),
    });

    const uploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            // Generate a random 64-character filename with the appropriate file extension
            const fileExtension = file.name.split('.').pop();
            const randomFilename = `${generateRandomString(64)}.${fileExtension}`;

            const reader = new FileReader();
            reader.onloadend = () => {
                // Save the image URL in the database
                // Replace this example URL with your actual image storage URL
                const imageURL = `https://url.com/public/image/${randomFilename}`;
                console.log("imageURL", imageURL)
                // Save the imageURL to the database here

                // Update the image preview
                setUploadedImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'phones',
    });

    const queryClient = useQueryClient();
    const userData = queryClient.getQueryData(["user"])
    const user = userData?.[0]?.user

    useEffect(() => {
        if (user) {
            setValue("firstname", user?.firstname);
            setValue("surname", user?.surname);
            setValue("username", user?.username);
            setValue("email", user?.email);
            setValue("sex", user?.sex);
            if (user?.birthday) {
                const date = new Date(user?.birthday);
                const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
                setValue("birthday", formattedDate as any);
            }
            if (user?.phones && user?.phones.length > 0) {
                user?.phones.map((phone, index) => {
                    setValue(`phones[${index}].phone` as any, phone.phone);
                    setValue(`phones[${index}].type` as any, phone.type);

                });
            }
        }
    }, [user, setValue]);

    const { mutate: updateUser, isError, error } = useMutationUpdateUser();
    if (isError) console.log("useMutationUpdateUser ERROR", (error as Error)?.message)


    const onSubmitHandler = (data: User) => {
        const formattedBirthday = data.birthday
            ? new Date(data.birthday)
            : null;

        const updatedData = { ...data, birthday: formattedBirthday };
        console.log("UPDATED DATA:", updatedData);
        updateUser(updatedData);
    };

    const breadcrumb = [
        { page: t('user'), href: '/panel/profile' },
        { page: t('profile.info'), href: '' }
    ]

    const sexOptions = [
        { value: 'male', name: "Male" },
        { value: 'female', name: "Female" },
    ]

    const generateRandomString = (length: number) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    };

    return (
        <>
            {/* Breadcrumb section */}
            <div>
                <Heading breadcrumb={breadcrumb} />
            </div>
            <div className="flex flex-1 pt-6">
                <div className="w-screen min-h-0 overflow-hidden">
                    <form className="lg:col-span-9" onSubmit={handleSubmit(onSubmitHandler)} method="POST">

                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 sm:col-span-6">
                                <CustomLabel field="firstname" name={tc('field_firstname')} />
                                <input
                                    {...register('firstname')}
                                    type="text"
                                    name="firstname"
                                    id="firstname"
                                    autoComplete={tc('auto_firstname')}
                                    placeholder={tc('field_firstname')}
                                    className={FormStyles('input')}
                                />
                                <CustomError error={errors.firstname?.message} />
                            </div>

                            <div className="col-span-12 sm:col-span-6">
                                <CustomLabel field="surname" name={tc('field_surname')} />
                                <input
                                    {...register('surname')}
                                    type="text"
                                    name="surname"
                                    id="surname"
                                    autoComplete={tc('auto_surname')}
                                    placeholder={tc('field_surname')}
                                    className={FormStyles('input')}
                                />
                                <CustomError error={errors.surname?.message} />

                            </div>
                        </div>

                        <div className="mt-6 flex flex-col lg:flex-row">
                            <div className="flex-grow space-y-6">
                                <div className="grid grid-cols-12 gap-6">
                                    <div className="col-span-12 sm:col-span-6">
                                        <CustomLabel field="username" name={tc('field_username')} />
                                        <input
                                            {...register('username')}
                                            type="text"
                                            name="username"
                                            id="username"
                                            autoComplete={tc('auto_username')}
                                            placeholder={tc('field_username')}
                                            className={FormStyles('input')}
                                        />
                                        <CustomError error={errors.username?.message} />
                                    </div>
                                    <div className="col-span-12 sm:col-span-6">
                                        <CustomLabel field="email" name={tc('field_email')} />
                                        <input
                                            {...register('email')}
                                            type="email"
                                            name="email"
                                            id="email"
                                            autoComplete={tc('auto_email')}
                                            placeholder={tc('field_email')}
                                            className={FormStyles('input')}
                                        />
                                        <CustomError error={errors.email?.message} />
                                    </div>
                                    <div className="col-span-12 sm:col-span-6">
                                        <CustomLabel field="sex" name={tc('field_sex')} />
                                        <select
                                            {...register('sex')}
                                            id="sex"
                                            name="sex"
                                            className={FormStyles('select')}
                                            defaultValue={''}
                                        >
                                            <option value=''>{tc('place_sex')}</option>
                                            {sexOptions.map((item) => {
                                                return (
                                                    <option key={item.value} value={item.value}>{item.name}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div className="col-span-12 sm:col-span-6">
                                        <CustomLabel field="birthday" name={tc('field_birthday')} />
                                        <input
                                            {...register('birthday')}
                                            type="date"
                                            name="birthday"
                                            id="birthday"
                                            autoComplete={tc('auto_birthday')}
                                            placeholder={tc('field_birthday')}
                                            className={FormStyles('input')}
                                        />
                                        <CustomError error={errors.birthday?.message} />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 flex-grow lg:mt-0 lg:ml-6 lg:flex-shrink-0 lg:flex-grow-0 -z-10">
                                <CustomLabel field="user-photo" name={tc('field_photo')} />
                                <div className="mt-2 lg:hidden">
                                    <div className="flex items-center">
                                        <div
                                            className="inline-block h-12 w-12 flex-shrink-0 overflow-hidden rounded-full"
                                            aria-hidden="true"
                                        >
                                            <img className="h-full w-full rounded-full" src={uploadedImage || "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80"} alt="profile_image" />
                                        </div>
                                        <div className="relative ml-5">
                                            <input
                                                id="mobile-user-photo"
                                                name="user-photo"
                                                type="file"
                                                className="absolute inset-0 h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
                                                onChange={uploadImage}
                                            />
                                            <label
                                                htmlFor="mobile-user-photo"
                                                className="pointer-events-none block rounded-md py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 peer-hover:ring-gray-400 peer-focus:ring-2 peer-focus:ring-sky-500"
                                            >
                                                <span>{tb('form_change')}</span>
                                                <span className="sr-only">{tc('rs_photo')}</span>
                                            </label>
                                        </div>

                                    </div>
                                </div>

                                <div className="relative hidden overflow-hidden rounded-full lg:block">
                                    <img className="relative h-40 w-40 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80" alt="" />
                                    <label
                                        htmlFor="desktop-user-photo"
                                        className="absolute inset-0 flex h-full w-full items-center justify-center bg-black bg-opacity-75 text-sm font-medium text-white opacity-0 focus-within:opacity-100 hover:opacity-100"
                                    >
                                        <span>{tb('form_change')}</span>
                                        <span className="sr-only">{tc('rs_photo')}</span>
                                        <input
                                            type="file"
                                            id="desktop-user-photo"
                                            name="user-photo"
                                            className="absolute inset-0 h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                            <CustomLabel field={`phones[0].phone`} name={tc('field_phone')} />
                            <input
                                {...register(`phones.0.phone`)}
                                type="tel"
                                name={`phones[0].phone`}
                                id={`phones[0].phone`}
                                autoComplete={tc('auto_phone')}
                                placeholder={tc('field_phone')}
                                className={FormStyles('input')}
                            />
                            <CustomError error={errors?.phones?.[0]?.phone?.message} />
                            <CustomLabel field={`phones[0].type`} name={tc('field_phone_type')} />
                            <input
                                {...register(`phones.0.type`)}
                                type="text"
                                name={`phones[0].type`}
                                id={`phones[0].type`}
                                autoComplete={tc('auto_phone_type')}
                                placeholder={tc('field_phone_type')}
                                className={FormStyles('input')}
                            />
                            <CustomError error={errors?.phones?.[0]?.message} />

                            {/* {fields.map((field, index) => (
                                <div key={field.id}>
                                    <CustomLabel field={`phones[${index}].phone`} name={tc('field_phone')} />
                                    <input
                                        {...register(`phones[${index}].phone`)}
                                        type="tel"
                                        name={`phones[${index}].phone`}
                                        id={`phones[${index}].phone`}
                                        autoComplete={tc('auto_phone')}
                                        placeholder={tc('field_phone')}
                                        className={FormStyles('input')}
                                    />
                                    <CustomError error={errors?.phones?.[index]?.phone?.message} />
                                    <CustomLabel field={`phones[${index}].type`} name={tc('field_phone_type')} />
                                    <input
                                        {...register(`phones[${index}].type`)}
                                        type="text"
                                        name={`phones[${index}].type`}
                                        id={`phones[${index}].type`}
                                        autoComplete={tc('auto_phone_type')}
                                        placeholder={tc('field_phone_type')}
                                        className={FormStyles('input')}
                                    />
                                    <CustomError error={errors?.phones?.[index]?.message} />
                                </div>
                            ))}
                            <button type="button" onClick={addPhone}>
                                Add
                            </button> */}
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

Profile.Layout = AdminLayout;
export default Profile;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default,
        },
    };
}
