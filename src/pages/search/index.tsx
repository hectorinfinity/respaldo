/** @format */
import { GetStaticPropsContext } from "next";
// Layout and Header
import MainLayout from "@/components/layout/main";
//Images
import { HeroSlider, CategorySlider } from "@/components/landing/slider/index";
import { Content } from "@/components/landing/search/content";

const Home = () => {
    return (
        <div className="bg-white">
            {/*
      <div className="h-[40vw] relative -z-10">
        <HeroSlider />
      </div>
      */}
            <div className="pt-10 pb-5 md:px-8">
                <div className="flex flex-col items-center">
                    <h2 className="font-bold text-3xl pb-10">Categories</h2>
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

Home.Layout = MainLayout;
export default Home;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default,
        },
    };
}
