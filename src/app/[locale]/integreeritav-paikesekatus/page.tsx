import React from "react";

import IntegreeritavHero from "@/components/shared/integreeritav/hero";

export function generateStaticParams() {
    return [{ locale: "et" }, { locale: "en" }, { locale: "lv" }];
}

export default function IntegreeritavPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = React.use(params)

    return (
        <>
            <IntegreeritavHero params={{ locale }} />
        </>
    );
}