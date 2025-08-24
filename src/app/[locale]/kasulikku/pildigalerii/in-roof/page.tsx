import React from "react";
import InRoofGallerySection from "@/components/shared/kasulikku/pildigalerii/in-roof/firstSection";

export function generateStaticParams() {
    return [{ locale: "et" }, { locale: "en" }, { locale: "lv" }];
}

export default function InRoofGalleryPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = React.use(params)

    return (
        <>
            <InRoofGallerySection params={{ locale }} />
        </>
    );
}