/** @format */
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
// Layout and Header
import AdminLayout from "@/components/layout/admin";

const Advert = () => {
    const t = useTranslations("Panel");

    return (
        <>
            {/* Bottom section */}
            <div className="flex min-h-0 flex-1 overflow-hidden">
                Event
            </div>
        </>
    );
};

Advert.Layout = AdminLayout;
export default Advert;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default,
        },
    };
}