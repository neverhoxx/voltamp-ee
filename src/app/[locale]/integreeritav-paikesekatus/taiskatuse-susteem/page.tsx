import React from "react";

import TäiskatuseHero from "@/components/shared/täiskatuse/hero";

export function generateStaticParams() {
    return [{ locale: "et" }, { locale: "en" }, { locale: "lv" }];
}

export default function TäiskatusePage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = React.use(params)

    return (
        <>
            <TäiskatuseHero params={{ locale }} />
        </>
    );
}