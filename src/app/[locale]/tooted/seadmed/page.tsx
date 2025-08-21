import SeadmedClient from "@/components/shared/seadmed/seadmedClient";
import React from "react";

export function generateStaticParams() {
    return [{ locale: "et" }, { locale: "en" }, { locale: "lv" }];
}

export default function SeadmedPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = React.use(params)

    return <SeadmedClient locale={locale} />;
}

