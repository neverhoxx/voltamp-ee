import React from "react";

import LamekatusteleHero from "@/components/shared/lamekatustele/hero";
import LamekatusteleSection1 from "@/components/shared/lamekatustele/firstSection";

export function generateStaticParams() {
    return [{ locale: "et" }, { locale: "en" }, { locale: "lv" }];
}

export default function LamekatustelePage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = React.use(params)

    return (
        <>
            <LamekatusteleHero params={{ locale }} />
            <LamekatusteleSection1 params={{ locale }} />
        </>
    );
}