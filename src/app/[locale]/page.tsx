import React from "react";

import MainHero from "@/components/shared/main/hero";
import MainFirstSection from "@/components/shared/main/firstSection";
import MainSecondSection from "@/components/shared/main/secondSection";
import PopularProducts from "@/components/shared/popularProducts";

export function generateStaticParams() {
    return [{ locale: "et" }, { locale: "en" }, { locale: "lv" }];
}

export default function Home({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = React.use(params)

    return (
        <>
            <MainHero params={{ locale }} />
            <MainFirstSection params={{ locale }} />
            <MainSecondSection params={{ locale }} />
            <PopularProducts params={{ locale }} />
        </>
    );
}