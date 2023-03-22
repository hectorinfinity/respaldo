/** @format */
import { GetStaticPropsContext } from "next";
import Image from "next/image";
import Link from "next/link";
// Layout and Header
import MainLayout from "@/components/layout/main";
//Images
import { HeroSlider, CategorySlider, EventSlider } from "@/components/landing/slider/index";

const Home = () => {
  return (
    <div className="relative bg-white">
      <div className="relative h-[40vw]">
        <HeroSlider />
      </div>
      <div className="py-10 md:px-8">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-3xl pb-10">Category</h2>
          <CategorySlider />
        </div>
      </div>
      <div className="px-10">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-3xl pb-10">Featured Events</h2>
          <EventSlider />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="my-5 text-3xl font-bold">Featured Events</h1>

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
