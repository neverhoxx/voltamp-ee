import React from "react";

import MaapargileHero from "@/components/shared/maapargile/hero";
import MaapargileHeroSection1 from "@/components/shared/maapargile/firstSection";

export function generateStaticParams() {
    return [{ locale: "et" }, { locale: "en" }, { locale: "lv" }];
}

export default function MaapargilePage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = React.use(params)

    return (
        <>
            <MaapargileHero params={{ locale }} />
            <MaapargileHeroSection1 params={{ locale }} />
        </>
    );
}