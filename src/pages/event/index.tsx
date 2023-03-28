/** @format */
import { Fragment } from 'react'
import { GetStaticPropsContext } from "next";
// Layout and Header
import MainLayout from "@/components/layout/main";
// Components
import { EventContent, EventLocation } from '@/components/landing/event';
// Helpers
import { CurrentColor } from '@/helpers';

export const Event = () => {
    const currentColor = CurrentColor();

    return (
        <div className="bg-white">
            <div className="mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <EventContent currentColor={currentColor} />
                <EventLocation currentColor={currentColor} />
            </div>
        </div>
    )
}

Event.Layout = MainLayout;
export default Event;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default,
        },
    };
}
