import React from "react";
import KontaktBlock from "@/components/shared/kontakt";

export function generateStaticParams() {
    return [{ locale: "et" }, { locale: "en" }, { locale: "lv" }];
}

export default function KontaktPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = React.use(params)

    return (
        <>
            <KontaktBlock params={{ locale }} />
        </>
    );
}