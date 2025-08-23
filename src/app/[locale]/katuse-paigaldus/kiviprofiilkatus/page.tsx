import React from "react";

import KiviprofiilkatusPageHero from "@/components/shared/katuse-paigaldus/kiviprofiil/hero";
import KiviprofiilkatusFirstBlock from "@/components/shared/katuse-paigaldus/eterniit/firstBlock";
import KiviprofiilkatusSecondBlock from "@/components/shared/katuse-paigaldus/eterniit/secondBlock";

export function generateStaticParams() {
    return [{ locale: "et" }, { locale: "en" }, { locale: "lv" }];
}

export default function KiviprofiilKatusPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = React.use(params)

    return (
        <>
            <KiviprofiilkatusPageHero params={{ locale }} />
            <KiviprofiilkatusFirstBlock params={{ locale }} />
            <KiviprofiilkatusSecondBlock params={{ locale }} />
        </>
    );
}