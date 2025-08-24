import React from "react";
import AutovarjualuneGallerySection from "@/components/shared/kasulikku/pildigalerii/autovarjualune/firstSection";

export function generateStaticParams() {
    return [{ locale: "et" }, { locale: "en" }, { locale: "lv" }];
}

export default function AutovarjualuneGalleryPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = React.use(params)

    return (
        <>
            <AutovarjualuneGallerySection params={{ locale }} />
        </>
    );
}