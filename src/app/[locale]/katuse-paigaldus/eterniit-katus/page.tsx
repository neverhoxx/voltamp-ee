import React from "react";

import EterniitKatusPageHero from "@/components/shared/katuse-paigaldus/eterniit/hero";
import EterniitKatusFirstBlock from "@/components/shared/katuse-paigaldus/eterniit/firstBlock";
import EterniitKatusSecondBlock from "@/components/shared/katuse-paigaldus/eterniit/secondBlock";

export function generateStaticParams() {
    return [{ locale: "et" }, { locale: "en" }, { locale: "lv" }];
}

export default function EterniitPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = React.use(params)

    return (
        <>
            <EterniitKatusPageHero params={{ locale }} />
            <EterniitKatusFirstBlock params={{ locale }} />
            <EterniitKatusSecondBlock params={{ locale }} />
        </>
    );
}