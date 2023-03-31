/** @format */
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";
// Layout and Header
import MainLayout from "@/components/layout/main";
// Helpers
import { CurrentColor } from '@/helpers';
import { CustomCategory } from "@/components/landing/event/category/customCategory";

const categories = [
    { name: "Artes Visuales", src: "/images/events/category/arts.png", selected: true },
    { name: "Cine", src: "/images/events/category/cine.png", selected: false },
    { name: "Danza", src: "/images/events/category/dance.png", selected: true },
    { name: "Artes Visuales", src: "/images/events/category/arts.png", selected: true },
    { name: "Cine", src: "/images/events/category/cine.png", selected: false },
    { name: "Danza", src: "/images/events/category/dance.png", selected: true },
    { name: "Artes Visuales", src: "/images/events/category/arts.png", selected: true },
    { name: "Cine", src: "/images/events/category/cine.png", selected: false },
    { name: "Danza", src: "/images/events/category/dance.png", selected: true },
    { name: "Artes Visuales", src: "/images/events/category/arts.png", selected: true },
    { name: "Cine", src: "/images/events/category/cine.png", selected: false },
    { name: "Danza", src: "/images/events/category/dance.png", selected: true },
]

const Program = () => {
    const t = useTranslations('Public');
    const currentColor = CurrentColor();

    return (
        <div className="bg-white">
            <div className="md:flex md:items-center md:justify-between px-16 py-16">
                <div className="mx-auto mt-2 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-6">
                    {categories.map((category) => (
                        <CustomCategory name={category.name} srcImage={category.src} selected={category.selected} />
                    ))}
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
