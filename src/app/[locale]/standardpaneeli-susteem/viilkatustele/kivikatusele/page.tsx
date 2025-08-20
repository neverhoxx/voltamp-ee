import React from "react";

import KivikatuseleHero from "@/components/shared/kivikatusele/hero";
import KivikatuseleSection1 from "@/components/shared/kivikatusele/firstSection";

export function generateStaticParams() {
    return [{ locale: "et" }, { locale: "en" }, { locale: "lv" }];
}

export default function KivikatuselePage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = React.use(params)

    return (
        <>
            <KivikatuseleHero params={{ locale }} />
            <KivikatuseleSection1 params={{ locale }} />
        </>
    );
}