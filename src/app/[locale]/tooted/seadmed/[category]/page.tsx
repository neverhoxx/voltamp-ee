import React from "react";
import { use } from 'react';

import SeadmeteProducts from "@/components/shared/seadmed/products";
import SeadmeteHero from "@/components/shared/seadmed/hero";

export function generateStaticParams() {
    return [{ locale: "et" }, { locale: "en" }, { locale: "lv" }];
}

export default function ProductsDemo({ params }: { params: Promise<{ category: string; locale: any }> }) {
    const { category, locale } = use(params);

    console.log(category);

    return (
        <>
            <SeadmeteHero locale={locale} />
            <SeadmeteProducts locale={locale} />
        </>
    );
}