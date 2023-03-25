/** @format */
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
// Layout and Header
import MainLayout from "@/components/layout/main";
//Images
import { HeroSlider, CategorySlider, EventSlider } from "@/components/landing/slider/index";

const Home = () => {
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
      <div className="md:px-10">
        <div className="flex flex-col items-center py-5">
          <div className="self-start pl-[6vw]">
            <h2 className="font-bold text-3xl">{t('home.new_events')}</h2>
          </div>
          <EventSlider />
        </div>
        <div className="flex flex-col items-center py-5">
          <div className="self-start pl-[6vw]">
            <h2 className="font-bold text-3xl">{t('home.featured_events')}</h2>
          </div>
          <EventSlider />
        </div>
        <div className="flex flex-col items-center py-5">
          <div className="self-start pl-[6vw]">
            <h2 className="font-bold text-3xl">{t('commons.recommended_evenets')}</h2>
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
