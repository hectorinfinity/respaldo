/** @format */
import { GetStaticPropsContext } from "next";

import MainLayout from "@/components/layout/main";
import Header from "@/components/headers/landing/header";
import Section from "@/components/headers/landing/section";

import image from "public/images/assets/landing/contact/slide.jpg";

const Contact = () => {
  return (
    <>
      <Header image={image} />
      <Section title="CONTACT US" gradiant="h-[129px] w-[100%] pl-[20px] lg:pl-[200px] py-[35px] bg-gradient-to-b from-customPink via-customPink to-white" />
      <div className="flex relative mt-[50px] mb-[50px] w-[100%] mx-auto bg-white rounded-3xl shadow-[0px_4px_8px_5px_rgba(0,0,0,0.25)] ">
        Hola Contact
      </div>
    </>
  );
};

Contact.Layout = MainLayout;
export default Contact;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  };
}
