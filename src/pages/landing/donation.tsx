/** @format */
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import MainLayout from "@/components/layout/main";
import Header from "@/components/headers/landing/header";
import Section from "@/components/headers/landing/section";
//Images
import image from "public/images/assets/landing/donation/slide.jpg";
import donation from "public/images/assets/landing/donation/donation.png";
// Vectors images
import vector from "public/images/assets/landing/donation/vector.png";

const Donation = () => {
  const t = useTranslations("Donation");
  const tb = useTranslations("btn");

  return (
    <>
      <Header image={image} />
      <Section title={t('page')} gradiant="h-[129px] w-[100%] pl-[20px] lg:pl-[200px] py-[35px] bg-gradient-to-b from-customRed via-customRed to-white" />

      <div className="relative h-fit w-full">
        <div className="px-[5vw] py-10">
          <div className="flex h-[70vw] md:h-[40vw] lg:h-[15vw] w-full items-start justify-center content-center">
            <div className="flex items-center justify-center self-center">
              <Image
                src={donation}
                className="h-fit w-[100%] object-contain"
                alt="main"
              />
            </div>
            <div className="flex h-full w-[40%] flex-col justify-between">
              <h1 className="text-lg md:text-3xl lg:text-5xl font-bold">
                {t('question')}
              </h1>
              <div className="space-y-6">
                <p className="text-sm md:text-lg lg:text-2xl font-bold text-[#4B4B4D]">
                  {t('answer')}
                </p>
                <Link href="/landing/contact" passHref>
                  <button className="w-[100%] md:w-[100%] lg:w-[80%] rounded-md border-0 bg-customYellow py-2 px-2 text-sm font-bold text-white shadow-lg shadow-[#00000044] active:ring-0 ">
                  {tb('contact_us')}
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex h-fit w-full items-center justify-center pt-32 pb-10  text-center text-2xl font-bold">
            <div className="w-[60%] space-y-10">
              <h1 className="text-4xl">{t('how_question')}</h1>
              <p className=" whitespace-pre-line text-[#4B4B4D]">
                {t('how_answer')}
              </p>
            </div>
          </div>
        </div>

        <div className="relative h-fit w-full bg-bgLightGray pb-4 md:py-6 font-bold">
          <div className="px-[5vw]">
            <div className="flex h-fit w-full flex-col items-center justify-center space-y-32">
              <div className="flex h-fit w-full flex-col items-center justify-center space-y-16 py-5">
                <h1 className="text-4xl font-bold">{t('fundations')}</h1>
                <div className="relative flex h-fit w-full items-start justify-center space-x-[10%]">
                  <div className="flex h-fit w-fit flex-col items-center justify-center space-y-8 text-center">
                    <div>
                      <Image
                        src={vector}
                        className="h-24 w-28 object-contain"
                        alt="mask2"
                      />
                    </div>
                    <h1 className="text-2xl font-bold leading-tight">
                      Socio 1
                    </h1>
                  </div>
                  <div className="flex h-fit w-fit flex-col items-center justify-center space-y-8 text-center">
                    <div>
                      <Image
                        src={vector}
                        className="h-24 w-28 object-contain"
                        alt="mask2"
                      />
                    </div>
                    <h1 className="text-2xl font-bold leading-tight">
                      Socio 2
                    </h1>
                  </div>
                  <div className="flex h-fit w-fit flex-col items-center justify-center space-y-8 text-center">
                    <div>
                      <Image
                        src={vector}
                        className="h-24 w-28 object-contain"
                        alt="mask2"
                      />
                    </div>
                    <h1 className="text-2xl font-bold leading-tight">
                      Socio 3
                    </h1>
                  </div>
                  <div className="flex h-fit w-fit flex-col items-center justify-center space-y-8 text-center">
                    <div>
                      <Image
                        src={vector}
                        className="h-24 w-28 object-contain"
                        alt="mask2"
                      />
                    </div>
                    <h1 className="text-2xl font-bold leading-tight">
                      Socio 4
                    </h1>
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

Donation.Layout = MainLayout;
export default Donation;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  };
}
