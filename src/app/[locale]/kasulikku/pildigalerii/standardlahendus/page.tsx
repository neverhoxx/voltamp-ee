import React from "react";
import StandardlahendusGallerySection from "@/components/shared/kasulikku/pildigalerii/standardlahendus/firstSection";

export function generateStaticParams() {
    return [{ locale: "et" }, { locale: "en" }, { locale: "lv" }];
}

export default function StandardlahendusGalleryPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = React.use(params)

    return (
        <>
            <StandardlahendusGallerySection params={{ locale }} />
        </>
    );
}