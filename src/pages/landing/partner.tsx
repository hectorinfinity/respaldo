/** @format */
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import MainLayout from "@/components/layout/main";
import Header from "@/components/headers/landing/header";
import Section from "@/components/headers/landing/section";
// Images
import image from "public/images/assets/landing/partner/slide.jpg";
import partner from "public/images/assets/landing/partner/partner.png";
// Vectors images
import vector from "public/images/assets/landing/partner/vector.png";

const Partner = () => {
  const t = useTranslations("Partners");
  const tb = useTranslations("btn");

  return (
    <>
      <Header image={image} />
      <Section title={t('page')} gradiant="h-[129px] w-[100%] pl-[20px] lg:pl-[200px] py-[35px] bg-gradient-to-b from-customPink via-customPink to-white" />

      <div className="relative h-fit w-full">
        <div className="px-[5vw] py-10">
          <div className="flex h-[90vw] md:h-[40vw] lg:h-[15vw] w-full items-start justify-center content-center">
            <div className="flex items-center justify-center self-center">
              <Image
                src={partner}
                className="h-fit w-[70%] object-contain"
                alt="main"
              />
            </div>
            <div className="flex h-full w-[40%] flex-col justify-between    ">
              <h1 className="text-lg md:text-2xl lg:text-5xl font-bold">
              {t('question')}
              </h1>
              <div className="w-[80%] space-y-6">
                <p className="text-sm md:text-lg lg:text-2xl font-bold text-[#4B4B4D]">
                {t('answer')}
                </p>
                <Link href="/landing/contact" passHref>
                  <button className="w-[100%] md:w-[100%] lg:w-[80%] rounded-md border-0 bg-customPink py-2 px-2 text-sm font-bold text-white shadow-lg shadow-[#00000044] active:ring-0 ">
                  {tb('contact_us')}
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex h-fit w-full items-center justify-center pt-24 md:pt-12 lg:pt-32 pb-10 text-center">
            <p className="w-[60%] text-lg md:text-2xl font-bold">
            {t('resume')}
            </p>
          </div>
        </div>
        <div className="relative h-fit w-full bg-bgLightGray py-4 md:py-4 font-bold">
          <div className="px-[5vw]">
            <div className="flex h-fit w-full flex-col space-y-32">
              <div className="flex h-fit w-[100%] md:w-full flex-col text-center space-y-16 py-5">
                <h1 className="text-4xl font-bold">{t('alliances')}</h1>
                <div className="relative h-fit w-full inline-block md:flex md:justify-center">
                  <div className="flex h-fit w-full flex-col space-y-8 py-4">
                    <div className="flex justify-center">
                      <Image
                        src={vector}
                        className="h-24 w-28 object-contain"
                        alt="mask2"
                      />
                    </div>
                    <h1 className="text-2xl font-bold leading-tight">
                      Alianza 1
                    </h1>
                  </div>
                  <div className="flex h-fit w-full flex-col space-y-8 py-4">
                    <div className="flex justify-center">
                      <Image
                        src={vector}
                        className="h-24 w-28 object-contain"
                        alt="mask2"
                      />
                    </div>
                    <h1 className="text-2xl font-bold leading-tight">
                      Alianza 2
                    </h1>
                  </div>
                  <div className="flex h-fit w-full flex-col space-y-8 py-4">
                    <div className="flex justify-center">
                      <Image
                        src={vector}
                        className="h-24 w-28 object-contain"
                        alt="mask2"
                      />
                    </div>
                    <h1 className="text-2xl font-bold leading-tight">
                      Alianza 3
                    </h1>
                  </div>
                  <div className="flex h-fit w-full flex-col space-y-8 py-4">
                    <div className="flex justify-center">
                      <Image
                        src={vector}
                        className="h-24 w-28 object-contain"
                        alt="mask2"
                      />
                    </div>
                    <h1 className="text-2xl font-bold leading-tight">
                      Alianza 4
                    </h1>
                  </div>
                </div>
              </div>

              <div className="flex h-fit w-[100%] md:w-full flex-col text-center space-y-16 py-5">
                <h1 className="text-4xl font-bold">{t('partners')}</h1>
                <div className="relative h-fit w-full inline-block md:flex md:justify-center">
                  <div className="flex h-fit w-full flex-col space-y-8 py-4">
                    <div className="flex justify-center">
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
                  <div className="flex h-fit w-full flex-col space-y-8 py-4">
                    <div className="flex justify-center">
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
                  <div className="flex h-fit w-full flex-col space-y-8 py-4">
                    <div className="flex justify-center">
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
                  <div className="flex h-fit w-full flex-col space-y-8 py-4">
                    <div className="flex justify-center">
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

Partner.Layout = MainLayout;
export default Partner;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  };
}
