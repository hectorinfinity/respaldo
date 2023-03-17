/** @format */
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
// Layout and Header
import AdminLayout from "@/components/layout/admin";

const Panel = () => {
    const t = useTranslations("Panel");

    return (
        <>
            {/* Bottom section */}
            <div className="flex min-h-0 flex-1 overflow-hidden">
                Home
            </div>
        </>
    );
};

Panel.Layout = AdminLayout;
export default Panel;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default,
        },
    };
}
