import React from "react";

import LainekiviKatusPageHero from "@/components/shared/katuse-paigaldus/lainekivi/hero";
import LainekiviKatusFirstBlock from "@/components/shared/katuse-paigaldus/lainekivi/firstBlock";
import LainekiviKatusSecondBlock from "@/components/shared/katuse-paigaldus/eterniit/secondBlock";

export function generateStaticParams() {
    return [{ locale: "et" }, { locale: "en" }, { locale: "lv" }];
}

export default function LainekiviKatusPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = React.use(params)

    return (
        <>
            <LainekiviKatusPageHero params={{ locale }} />
            <LainekiviKatusFirstBlock params={{ locale }} />
            <LainekiviKatusSecondBlock params={{ locale }} />
        </>
    );
}