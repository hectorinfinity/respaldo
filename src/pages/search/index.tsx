/** @format */
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
// Layout and Header
import MainLayout from "@/components/layout/main";
//Images
import { HeroSlider, CategorySlider } from "@/components/landing/slider/index";
import { Content } from "@/components/landing/search/content";

const Search = () => {
    const t = useTranslations("Public");

    return (
        <div className="bg-white">
            {/*
      <div className="h-[40vw] relative -z-10">
        <HeroSlider />
      </div>
      */}
            <div className="pt-10 pb-5 md:px-8">
                <div className="flex flex-col items-center">
                    <h2 className="font-bold text-3xl pb-10">{t('commons.categories')}</h2>
                    <CategorySlider />
                </div>
            </div>
            <div className="md:px-8">
                <div className="flex flex-col items-center">
                    <Content />
                </div>
            </div>
        </div>
    );
};

Search.Layout = MainLayout;
export default Search;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default,
        },
    };
}
