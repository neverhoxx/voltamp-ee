import React from "react";

import TrapetsprofiilplekileHero from "@/components/shared/trapetsprofiilplekile/hero";
import TrapetsprofiilplekileSection1 from "@/components/shared/trapetsprofiilplekile/firstSection";

export function generateStaticParams() {
    return [{ locale: "et" }, { locale: "en" }, { locale: "lv" }];
}

export default function TrapetsprofiilplekilePage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = React.use(params)

    return (
        <>
            <TrapetsprofiilplekileHero params={{ locale }} />
            <TrapetsprofiilplekileSection1 params={{ locale }} />
        </>
    );
}