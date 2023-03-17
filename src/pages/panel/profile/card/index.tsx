/** @format */
import { useState } from 'react';
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
// Layout and Header
import AdminLayout from "@/components/layout/admin";
// Components
import { CustomCard } from '@/components/admin/profile/customCard';

const ProfileBilling = () => {
    const t = useTranslations("Panel_Profile_Card");

    const cards = [
        { id: "129182", name: "Arturo Villalpando Sánchez", type: "credit", number: "3828", exp: "09/28" },
        { id: "129182", name: "Arturo Villalpando Sánchez", type: "debit", number: "3415", exp: "09/25" },
      ]

    return (
        <>
            {/* Bottom section */}
            <div className="w-screen min-h-0 overflow-hidden">
                <div className='lg:col-span-9'>
                    <div className="py-6 px-4 sm:p-6 lg:pb-8">
                        <div className="grid text-stone-500 text-20 ">
                            {t('message')}
                        </div>
                    </div>
                    <div className="py-6 px-4 sm:p-6 lg:pb-8">
                        <div className="md:flex md:items-center md:justify-between">
                            <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

                                {cards.map((card) => (
                                    <CustomCard id={card.id} name={card.name} type={card.type} number={card.number} exp={card.exp} />
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
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
