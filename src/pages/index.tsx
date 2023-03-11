/** @format */
import { GetStaticPropsContext } from "next";
import MainLayout from "@/components/layout/main";
const Home = () => {
  return (
    <div className="flex h-fit w-full flex-col">
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
