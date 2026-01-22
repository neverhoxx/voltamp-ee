import React from "react";

import Header from "@/components/shared/header";
import KontaktBlock from "@/components/shared/kontakt";
import Faq from "@/components/shared/faq";
import Bipv from "@/components/shared/bipv";
import Footer from "@/components/shared/footer";

type Props = {
    children: React.ReactNode;
    params: Promise<{
        locale: string;
    }>;
};

export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = await params;

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
