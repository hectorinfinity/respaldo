/** @format */
import { GetStaticPropsContext } from "next";
import Image from "next/image";
import Link from "next/link";
// Layout and Header
import MainLayout from "@/components/layout/main";
//Images
import image from "public/images/assets/landing/home/slide_01.jpg";

const Home = () => {
  return (
    <div className="relative bg-white">
        Hola
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
