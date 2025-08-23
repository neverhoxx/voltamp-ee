import React from "react";

import SilekiviKatusPageHero from "@/components/shared/katuse-paigaldus/silekivi/hero";
import SilekiviKatusFirstBlock from "@/components/shared/katuse-paigaldus/silekivi/firstBlock";
import SilekiviKatusSecondBlock from "@/components/shared/katuse-paigaldus/silekivi/secondBlock";

export function generateStaticParams() {
    return [{ locale: "et" }, { locale: "en" }, { locale: "lv" }];
}

export default function SilekiviKatusPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = React.use(params)

    return (
        <>
            <SilekiviKatusPageHero params={{ locale }} />
            <SilekiviKatusFirstBlock params={{ locale }} />
            <SilekiviKatusSecondBlock params={{ locale }} />
        </>
    );
}