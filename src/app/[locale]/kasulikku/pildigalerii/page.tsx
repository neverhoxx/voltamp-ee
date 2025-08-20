import React from "react";
import PildigaleriiHero from "@/components/shared/kasulikku/pildigalerii/hero";
import PildigaleriiList from "@/components/shared/kasulikku/pildigalerii/projectsList";

export function generateStaticParams() {
    return [{ locale: "et" }, { locale: "en" }, { locale: "lv" }];
}

export default function pildigaleriiPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = React.use(params)

    return (
        <>
            <PildigaleriiHero params={{ locale }} />
            <PildigaleriiList params={{ locale }} />
        </>
    );
}