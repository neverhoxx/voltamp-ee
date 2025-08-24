import React from "react";
import KlassikalineGallerySection from "@/components/shared/kasulikku/pildigalerii/klassikaline-katus/firstSection";

export function generateStaticParams() {
    return [{ locale: "et" }, { locale: "en" }, { locale: "lv" }];
}

export default function KlassikalineGalleryPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = React.use(params)

    return (
        <>
            <KlassikalineGallerySection params={{ locale }} />
        </>
    );
}