/** @format */
import { useState } from 'react';
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
// Layout and Header
import AdminLayout from "@/components/layout/admin";
import { Heading } from '@/components/headers/admin/heading';
// Components
import { CustomCard } from '@/components/admin/profile/customCard';

const ProfileCard = () => {
    const t = useTranslations("Panel_Profile_Card");
    const ts = useTranslations("Panel_SideBar");
    const tb = useTranslations("btn");

    const breadcrumb = [
        { page: ts('user'), href: '/panel/profile' },
        { page: ts('profile.card.name'), href: '' }
    ]
    const buttonBread = { text: tb('new_card'), href: '/panel/profile/card/create' }

    return (
        <div>
            {/* Breadcrumb section */}
            <div>
                <Heading breadcrumb={breadcrumb} buttonBread={buttonBread} />
            </div>
            <div className="flex flex-1 pt-6">
                <div className="w-screen min-h-0 overflow-hidden">
                    <div className='lg:col-span-9'>
                        <div>
                            <div className="grid text-stone-500 text-20 ">
                                {t('message')}
                            </div>
                        </div>
                        <div>
                            <div className="md:flex md:items-center md:justify-between">
                                <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                    {/* map of all the customer cards */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ProfileCard.Layout = AdminLayout;
export default ProfileCard;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default,
        },
    };
}
