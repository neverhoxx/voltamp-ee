import KomplektidClient from "@/components/shared/komplektid/KoplektidClient";
import React from "react";

export function generateStaticParams() {
    return [{ locale: "et" }, { locale: "en" }, { locale: "lv" }];
}

export default function SeadmedPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = React.use(params)

    return <KomplektidClient locale={locale} />;
}


