/** @format */
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import MainLayout from "@/components/layout/main";
// Vectors images
import vector1 from "public/images/assets/landing/advert/vector1.png";
import vector2 from "public/images/assets/landing/advert/vector2.png";
import vector3 from "public/images/assets/landing/advert/vector3.png";
import vector4 from "public/images/assets/landing/advert/vector4.png";
import vector5 from "public/images/assets/landing/advert/vector5.png";

const Ticket = () => {
  const t = useTranslations("Ticket");
  const tb = useTranslations("btn");

  return (
    <>
      <div className="relative h-fit w-full">
        <div className="flex h-fit w-full flex-col items-center justify-center bg-[url('../../public/images/assets/landing/ticket/slide.jpg')]">
          <div className="flex h-fit w-full flex-col items-center justify-center space-y-8 py-20 text-center font-bold text-white">
            <h1 className="py-2 text-4xl ">
              <span>{t('header_title')}</span>
              <div className="my-2 h-[8px] w-full bg-customBlue"></div>
            </h1>
            <p className="text-base">
              {t('header_subtitle')}
            </p>
            <div className="px-3 py-2 text-base w-[50vw] md:w-[30%] lg:w-[15%]">
              <Link href="/landing/contact" passHref>
                <button className="w-[50vw] md:w-[80%] lg:w-[75%] rounded-md border-0 bg-customBlue py-2 px-2 text-sm font-bold text-white shadow-lg shadow-[#00000044] active:ring-0">
                  {tb('create_event')}
                </button>
              </Link>
            </div>
            <div className="space-y-2">
              <p>{t('header_start')}</p>
            </div>
          </div>
        </div>
        <div className="relative h-fit w-full">
          <div className="absolute top-0 -z-10 h-36 w-full bg-gradient-to-b from-customBlue via-customBlue to-white"></div>
          <div className="px-[5vw]">
            <h1 className="py-12 px-[5vw] text-3xl font-bold uppercase text-white">
              {t('page')}
            </h1>
          </div>
          <div className=" px-[5vw] py-10">
            <div className="relative flex h-fit w-full flex-col items-center justify-center space-y-32 pt-20 pb-20 font-bold">
              <div className="space-y-3 text-center">
                <h1>{t('title')}</h1>
                <h2>{t('subtitle')}</h2>
              </div>
              <div className="relative flex h-fit w-full flex-wrap items-start justify-center gap-y-24 gap-x-36">
                <div
                  className="flex h-[500px] w-[330px] flex-col items-center justify-center space-y-8 rounded-3xl px-5 py-5 text-center shadow-md shadow-customShadow"
                  style={{ border: ".5px solid #00000010" }}
                >
                  <div>
                    <Image
                      src={vector1}
                      className="h-24 w-28 object-contain"
                      alt="mask2"
                    />
                  </div>
                  <div className="space-y-5">
                    <h1 className="text-2xl font-bold leading-tight">
                      {t('monitor')}
                    </h1>
                    <p className="text-base font-bold leading-tight text-[#4B4B4D]">
                      {t('monitor_desc')}
                    </p>
                    <ul className="flex flex-col items-center justify-center text-base font-bold leading-tight list-disc text-[#4B4B4D]">
                      <li>{t('monitor_list_1')}</li>
                      <li>{t('monitor_list_2')}</li>
                      <li>{t('monitor_list_3')}</li>
                    </ul>
                  </div>
                </div>
                <div
                  className="flex h-[500px] w-[330px] flex-col items-center justify-center space-y-8 rounded-3xl px-5 py-5 text-center shadow-md shadow-customShadow"
                  style={{ border: ".5px solid #00000010" }}
                >
                  <div>
                    <Image
                      src={vector2}
                      className="h-24 w-28 object-contain"
                      alt="mask2"
                    />
                  </div>
                  <div className="space-y-5">
                    <h1 className="text-2xl font-bold leading-tight">
                      {t('sell')}
                    </h1>
                    <p className="text-base font-bold leading-tight text-[#4B4B4D]">
                      {t('sell_desc')}
                    </p>
                    <ul className="flex flex-col items-center justify-center text-base font-bold leading-tight list-disc text-[#4B4B4D]">
                      <li>{t('sell_list_1')}</li>
                      <li>{t('sell_list_2')}</li>
                      <li>{t('sell_list_3')}</li>
                    </ul>
                  </div>
                </div>
                <div
                  className="flex h-[500px] w-[330px] flex-col items-center justify-center space-y-8 rounded-3xl px-5 py-5 text-center shadow-md shadow-customShadow"
                  style={{ border: ".5px solid #00000010" }}
                >
                  <div>
                    <Image
                      src={vector3}
                      className="h-24 w-28 object-contain"
                      alt="mask2"
                    />
                  </div>
                  <div className="space-y-5">
                    <h1 className="text-2xl font-bold leading-tight">
                      {t('marketing')}
                    </h1>
                    <p className="text-base font-bold leading-tight text-[#4B4B4D]">
                      {t('marketing_desc')}
                    </p>
                    <ul className="flex flex-col items-center justify-center text-base font-bold leading-tight list-disc text-[#4B4B4D]">
                      <li>{t('marketing_list_1')}</li>{" "}
                      <li>{t('marketing_list_2')}</li>
                    </ul>
                  </div>
                </div>
                <div
                  className="flex h-[500px] w-[330px] flex-col items-center justify-center space-y-8 rounded-3xl px-5 py-5 text-center shadow-md shadow-customShadow"
                  style={{ border: ".5px solid #00000010" }}
                >
                  <div>
                    <Image
                      src={vector4}
                      className="h-24 w-28 object-contain"
                      alt="mask2"
                    />
                  </div>
                  <div className="space-y-5">
                    <h1 className="text-2xl font-bold leading-tight">
                      {t('design')}
                    </h1>
                    <p className="text-base font-bold leading-tight text-[#4B4B4D]">
                      {t('design_desc')}
                    </p>
                    <ul className="flex flex-col items-center justify-center text-base font-bold leading-tight list-disc text-[#4B4B4D]">
                      <li>{t('design_list_1')}</li>
                      <li>{t('design_list_2')}</li>
                    </ul>
                  </div>
                </div>
                <div
                  className="flex h-[500px] w-[330px] flex-col items-center justify-center space-y-8 rounded-3xl px-5 py-5 text-center shadow-md shadow-customShadow"
                  style={{ border: ".5px solid #00000010" }}
                >
                  <div>
                    <Image
                      src={vector5}
                      className="h-24 w-28 object-contain"
                      alt="mask2"
                    />
                  </div>
                  <div className="space-y-5">
                    <h1 className="text-2xl font-bold leading-tight">
                      {t('client')}
                    </h1>
                    <p className="text-base font-bold leading-tight text-[#4B4B4D]">
                      {t('client_desc')}
                    </p>
                    <ul className="flex flex-col items-center justify-center text-base font-bold leading-tight list-disc text-[#4B4B4D]">
                      <li>{t('client_list_1')}</li>
                      <li>{t('client_list_2')}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Ticket.Layout = MainLayout;
export default Ticket;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  };
}
