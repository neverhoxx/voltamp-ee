import React from "react";

import Header from "@/components/shared/header";
import KontaktBlock from "@/components/shared/kontakt";
import Faq from "@/components/shared/faq";
import Bipv from "@/components/shared/bipv";
import Footer from "@/components/shared/footer";

type Props = {
    children: React.ReactNode;
    params: {
        locale: string;
    };
};

export default function LocaleLayout({ children, params }: Props) {
    const { locale } = params;

    return (
        <>
            <Header locale={locale} />
            <main className="main">
                {children}
                <Faq params={{ locale }} />
                <Bipv params={{ locale }} />
                <KontaktBlock params={{ locale }} />
            </main>
            <Footer params={{ locale }} />
        </>
    );
}
