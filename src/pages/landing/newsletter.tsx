/** @format */
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";

import MainLayout from "@/components/layout/main";
import Header from "@/components/headers/landing/header";
import Section from "@/components/headers/landing/section";
// Images
import image from "public/images/assets/landing/newsletter/slide.jpg";

const Newsletter = () => {
  const t = useTranslations("Newsletter");
  const tb = useTranslations("btn");

  return (
    <>
      <Header image={image} />
      <Section title={t('page')} gradiant="h-[129px] w-[100%] pl-[20px] lg:pl-[200px] py-[35px] bg-gradient-to-b from-customGreen via-customGreen to-white" />

      <div className="relative h-fit w-full">
        <div className="px-[5vw] py-10">

          <div className="md:hidden inline-block">
            <div className="flex justify-center">
              <Image
                src={image}
                className="h-fit w-[70%] md:w-[80%] object-contain"
                alt="main"
              />
            </div>
          </div>

          <div className="flex h-[80vw] md:h-[40vw] lg:h-[25vw] w-full items-start justify-center content-center">
            <div className="hidden md:flex items-center justify-center self-center">
              <Image
                src={image}
                className="h-fit w-[70%] md:w-[80%] object-contain"
                alt="main"
              />
            </div>
            <div className="flex h-full w-[200%] md:w-[80%] lg:w-[60%] flex-col justify-between">
              <h1 className="text-lg md:text-3xl lg:text-5xl font-bold">
              {t('title')}
              </h1>
              <div className="flex w-[100%] md:w-[80%] flex-col space-y-6">
                <p className="text-sm md:text-lg lg:text-2xl font-bold text-[#4B4B4D]">
                {t('subtitle')}
                </p>
                <input
                  type="text"
                  name=""
                  className="w-[100%] rounded-xl border border-[#6363632f] bg-white py-2 px-6 text-sm font-bold text-[#7b7b7b] shadow-sm shadow-customShadow outline-none placeholder:text-base placeholder:text-[#7b7b7b] active:ring-0 "
                  id=""
                  placeholder={t('email')}
                />
                <button className=" rounded-md border-0 bg-customGreen hover:bg-customYellow py-2 px-2 text-sm font-bold text-white shadow-lg shadow-customShadow active:ring-0 ">
                {tb('subscribe_me')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Newsletter.Layout = MainLayout;
export default Newsletter;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  };
}
