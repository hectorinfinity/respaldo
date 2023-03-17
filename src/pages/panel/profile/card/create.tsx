/** @format */
import { useState } from 'react';
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
// Layout and Header
import AdminLayout from "@/components/layout/admin";
// Forms
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CustomError, CustomLabel, CustomCancel, CustomSubmit } from '@/components/forms';
import { FormStyles } from '@/helpers';

const ProfileBilling = () => {
    const t = useTranslations("Panel");
    const tc = useTranslations("Common_Forms");

    return (
        <>
            {/* Bottom section */}
            <div className="w-screen min-h-0 overflow-hidden">
                Stripe Form
            </div>
        </>
    );
};

ProfileBilling.Layout = AdminLayout;
export default ProfileBilling;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default,
        },
    };
}
