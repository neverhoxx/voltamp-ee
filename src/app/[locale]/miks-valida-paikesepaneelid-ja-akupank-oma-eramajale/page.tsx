import React from "react";
import MiksValidaHero from "@/components/shared/miks-valida/hero";
import MiksValidaArticles from "@/components/shared/miks-valida/article";

export function generateStaticParams() {
    return [{ locale: "et" }, { locale: "en" }, { locale: "lv" }];
}

export default function MiksValidaPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = React.use(params)

    return (
        <div data-hide-kontakt>
            <MiksValidaHero params={{ locale }} />
            <MiksValidaArticles params={{ locale }} />
        </div>
    );
}