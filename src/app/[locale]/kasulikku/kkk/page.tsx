import React from "react";
import LehtValmisel from "@/components/shared/leht-valmisel";

export function generateStaticParams() {
    return [{ locale: "et" }, { locale: "en" }, { locale: "lv" }];
}

export default function KKKPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = React.use(params)

    return (
        <>
            <LehtValmisel params={{ locale }} />
        </>
    );
}