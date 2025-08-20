import React from "react";
import PildigaleriiSection from "@/components/shared/kasulikku/pildigalerii/firstSection";

export function generateStaticParams() {
    return [{ locale: "et" }, { locale: "en" }, { locale: "lv" }];
}

export default function ViljandimaaPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = React.use(params)

    return (
        <>
            <PildigaleriiSection params={{ locale }} />
        </>
    );
}