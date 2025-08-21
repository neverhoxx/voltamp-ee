import React from "react";
import Partnerid from "@/components/shared/meist/partnerid";

export function generateStaticParams() {
    return [{ locale: "et" }, { locale: "en" }, { locale: "lv" }];
}

export default function PartneridPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = React.use(params)

    return (
        <>
            <Partnerid params={{ locale }} />
        </>
    );
}