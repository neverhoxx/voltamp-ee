import React from "react";
import TeamHero from "@/components/shared/meeskond/hero";
import TeamSection from "@/components/shared/meeskond/block";

export function generateStaticParams() {
    return [{ locale: "et" }, { locale: "en" }, { locale: "lv" }];
}

export default function TeamPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = React.use(params)

    return (
        <>
            <TeamHero params={{ locale }} />
            <TeamSection params={{ locale }} />
        </>
    );
}