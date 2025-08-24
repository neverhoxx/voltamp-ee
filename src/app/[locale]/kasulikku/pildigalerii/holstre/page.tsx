import React from "react";
import HolstreGallerySection from "@/components/shared/kasulikku/pildigalerii/holstre/firstSection";

export function generateStaticParams() {
    return [{ locale: "et" }, { locale: "en" }, { locale: "lv" }];
}

export default function HolstreGalleryPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = React.use(params)

    return (
        <>
            <HolstreGallerySection params={{ locale }} />
        </>
    );
}