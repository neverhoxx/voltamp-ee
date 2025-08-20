import React from "react";

import ValtsplekileSection1 from "@/components/shared/valtsplekile/firstSection";
import ValtsplekileHero from "@/components/shared/valtsplekile/hero";

export function generateStaticParams() {
    return [{ locale: "et" }, { locale: "en" }, { locale: "lv" }];
}

export default function ValtsplekilePage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = React.use(params)

    return (
        <>
            <ValtsplekileHero params={{ locale }} />
            <ValtsplekileSection1 params={{ locale }} />
        </>
    );
}