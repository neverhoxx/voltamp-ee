import React from "react";
import MeistHero from "@/components/shared/meist/hero";

export function generateStaticParams() {
    return [{ locale: "et" }, { locale: "en" }, { locale: "lv" }];
}

export default function MaistPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = React.use(params)

    return (
        <>
            <MeistHero params={{ locale }} />
        </>
    );
}