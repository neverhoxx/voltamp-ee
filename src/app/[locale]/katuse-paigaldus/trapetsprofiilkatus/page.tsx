import React from "react";

import TrapetsprofiilkatusPageHero from "@/components/shared/katuse-paigaldus/plekk-katused/hero";
import TrapetsprofiilkatusFirstBlock from "@/components/shared/katuse-paigaldus/plekk-katused/firstBlock";
import TrapetsprofiilkatusSecondBlock from "@/components/shared/katuse-paigaldus/plekk-katused/secondBlock";

export function generateStaticParams() {
    return [{ locale: "et" }, { locale: "en" }, { locale: "lv" }];
}

export default function TrapetsprofiilkatusPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = React.use(params)

    return (
        <>
            <TrapetsprofiilkatusPageHero params={{ locale }} />
            <TrapetsprofiilkatusFirstBlock params={{ locale }} />
            <TrapetsprofiilkatusSecondBlock params={{ locale }} />
        </>
    );
}