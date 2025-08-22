import React from "react";

import MainHero from "@/components/shared/main/hero";
import MainFirstSection from "@/components/shared/main/firstSection";
import MainSecondSection from "@/components/shared/main/secondSection";
import PopularProducts from "@/components/shared/popularProducts";

import { NextSeo } from "next-seo";
import Script from 'next/script';

export function generateStaticParams() {
    return [{ locale: "et" }, { locale: "en" }, { locale: "lv" }];
}


export default function Home({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = React.use(params);

    const schema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Voltamp",
        "description": "Voltamp - Päikesеkatused, päikesеpaneelid, energiasüsteemid ja paigaldus",
        "url": "https://voltamp.ee"
    };

    return (
        <>

            <Script
                id="schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            <MainHero params={{ locale }} />
            <MainFirstSection params={{ locale }} />
            <MainSecondSection params={{ locale }} />
            <PopularProducts params={{ locale }} />
        </>
    );
}