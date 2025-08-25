import React from "react";
import SeadmedGallerySection from "@/components/shared/kasulikku/pildigalerii/seadmed/firstSection";

export function generateStaticParams() {
    return [{ locale: "et" }, { locale: "en" }, { locale: "lv" }];
}

export default function SeadmedGalleryPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = React.use(params)

    return (
        <>
            <SeadmedGallerySection params={{ locale }} />
        </>
    );
}