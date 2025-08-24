import React from "react";
import MaaparkGallerySection from "@/components/shared/kasulikku/pildigalerii/maapark/firstSection";

export function generateStaticParams() {
    return [{ locale: "et" }, { locale: "en" }, { locale: "lv" }];
}

export default function MaaparkGalleryPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = React.use(params)

    return (
        <>
            <MaaparkGallerySection params={{ locale }} />
        </>
    );
}