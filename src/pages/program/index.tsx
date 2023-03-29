/** @format */
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";
// Layout and Header
import MainLayout from "@/components/layout/main";
// Helpers
import { CurrentColor } from '@/helpers';
//Images
import { CalendarDaysIcon, MapIcon } from "@heroicons/react/24/outline";
import { FormProgramFilter } from "@/components/forms/forms";
import { EventCardGrid } from "@/components/landing/event/cards";
import { EventDateSalider } from "@/components/landing/slider";

const features = [
    { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
    { name: 'Material', description: 'Solid walnut base with rare earth magnets and polycarbonate add-ons.' },
    { name: 'Dimensions', description: '15" x 3.75" x .75"' },
    { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
    { name: 'Includes', description: 'Pen Tray, Phone Tray, Small Tray, Large Tray, Sticky Note Holder' },
    { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
]

const Program = () => {
    const t = useTranslations('Public');
    const currentColor = CurrentColor();

    return (
        <div className="bg-white">
            <div className="pb-8 lg:pb-8">
                <div aria-hidden="true" className="relative w-full">
                    <Image src=""
                        alt=""
                        className="w-full h-80 object-cover object-center"
                    />
                </div>
                <div className="w-full h-14 px-4 md:px-16 py-4 lg:py-3 bg-customGreen text-white text-2xl lg:text-3xl font-bold">
                    Program Name
                </div>
            </div>
            <div className="flex flex-col items-center px-8">
                <div className="relative mx-auto max-w-[100%] md:max-w-[90%] px-8 pb-16 sm:px-6 sm:pb-24 lg:px-16">
                    <div className="border shadow-xl rounded-lg">
                        <div className="block lg:flex lg:justify-between px-4 py-4 md:py-2">
                            <div className='text-base'>
                                <div className="flex items-center">
                                    <CalendarDaysIcon className={`w-5 h-5 text-${currentColor}`} />
                                    <p className="text-customGray px-2">21 de Enero - 30 de Febrero</p>
                                </div>
                            </div>
                            <div className='text-base'>
                                <div className="flex items-center">
                                    <MapIcon className={`w-5 h-5 text-${currentColor}`} />
                                    <p className="text-customGray px-2">Aguascalientes, Aguascalientes, México.</p>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 py-2">
                            <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl py-4">
                                {t('event.description')}
                            </p>
                            <p className="text-customGray">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed massa est. Vivamus ut urna at nisl laoreet lobortis. Cras auctor tellus sed odio elementum, quis iaculis leo blandit. Duis pharetra odio ut ipsum vestibulum ultricies. Duis sed turpis eget odio aliquam tincidunt ut a diam Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed massa est. Vivamus ut urna at nisl laoreet lobortis. Cras auctor tellus sed odio elementum, quis iaculis leo blandit. Duis pharetra odio ut ipsum vestibulum ultricies. Duis sed turpis eget odio aliquam tincidunt ut a diam..
                            </p>
                        </div>
                    </div>

                    <div className="py-8">
                        <div className="md:flex md:justify-between border-b">
                            <div className="text-3xl">
                                <div className="py-4">
                                    {t('program.program')}
                                </div>
                            </div>
                            <div className="">
                                <FormProgramFilter />
                            </div>
                        </div>
                    </div>

                   <div className="flex flex-col items-center border-b pb-4">
                        <EventDateSalider />
                    </div>

                    <div className="py-3 grid grid-cols-[repeat(auto-fit,_20.7rem)] place-content-center gap-x-2 sm:grid-cols-2 sm:gap-y-8 lg:max-w-none lg:grid-cols-4 lg:gap-x-8">
                        <EventCardGrid />
                        <EventCardGrid />
                        <EventCardGrid />
                        <EventCardGrid />
                        <EventCardGrid />
                        <EventCardGrid />
                        <EventCardGrid />
                        <EventCardGrid />
                    </div>
                </div>
            </div>
        </div>
    );
};

Program.Layout = MainLayout;
export default Program;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default,
        },
    };
}
