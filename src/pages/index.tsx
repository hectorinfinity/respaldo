/** @format */
import { GetStaticPropsContext } from "next";
import Image from "next/image";
import Link from "next/link";
// Layout and Header
import MainLayout from "@/components/layout/main";
//Images
import { HeroSlider, CategorySlider, EventSlider } from "@/components/landing/slider/index";
import { EventCardVert } from "@/components/landing/event/eventCardVert";

const Home = () => {
  return (
    <div className="relative bg-white">
      <div className="relative h-[40vw]">
        <HeroSlider />
      </div>
      <div className="py-10 md:px-8">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-3xl pb-10">Categories</h2>
          <CategorySlider />
        </div>
      </div>
      <div className="py-10 md:px-8">
        <div className="flex flex-col items-center py-5">
          <div className="self-start">
            <h2 className="font-bold text-3xl">New Events</h2>
          </div>
          <EventSlider />
        </div>
        <div className="flex flex-col items-center py-5">
          <div className="self-start">
            <h2 className="font-bold text-3xl">Featured Events</h2>
          </div>
          <EventSlider />
        </div>
        <div className="flex flex-col items-center py-5">
          <div className="self-start">
            <h2 className="font-bold text-3xl">Recommended Events</h2>
          </div>
          <EventSlider />
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
