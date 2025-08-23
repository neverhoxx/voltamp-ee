import React from "react";

import ValtsplekkKatusHero from "@/components/shared/katuse-paigaldus/valtsplekk/hero";
import ValtsplekkKatusFirstBlock from "@/components/shared/katuse-paigaldus/valtsplekk/firstBlock";
import ValtsplekkKatusSecondBlock from "@/components/shared/katuse-paigaldus/valtsplekk/secondBlock";

export function generateStaticParams() {
    return [{ locale: "et" }, { locale: "en" }, { locale: "lv" }];
}

export default function ValtsPlekkPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = React.use(params)

    return (
        <>
            <ValtsplekkKatusHero params={{ locale }} />
            <ValtsplekkKatusFirstBlock params={{ locale }} />
            <ValtsplekkKatusSecondBlock params={{ locale }} />
        </>
    );
}