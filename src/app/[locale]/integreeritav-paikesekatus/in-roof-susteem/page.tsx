import React from "react";

import InRoofHero from "@/components/shared/in-roof/hero";
import InRoofEelised from "@/components/shared/in-roof/eelised";

export function generateStaticParams() {
    return [{ locale: "et" }, { locale: "en" }, { locale: "lv" }];
}

export default function InRoofPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = React.use(params)

    return (
        <>
            <InRoofHero params={{ locale }} />
            <InRoofEelised params={{ locale }} />
        </>
    );
}