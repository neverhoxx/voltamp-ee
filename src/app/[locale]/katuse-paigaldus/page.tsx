import React from "react";
import KatusePaigaldusHero from "@/components/shared/katuse-paigaldus/hero";
import KatusePaigaldusSection from "@/components/shared/katuse-paigaldus/teenused";
import Latina from "@/components/shared/katuse-paigaldus/latina";

export function generateStaticParams() {
    return [{ locale: "et" }, { locale: "en" }, { locale: "lv" }];
}

export default function KatusePaigaldusPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = React.use(params)

    return (
        <>
            <KatusePaigaldusHero params={{ locale }} />
            <KatusePaigaldusSection params={{ locale }} />
            <Latina params={{ locale }} />
        </>
    );
}