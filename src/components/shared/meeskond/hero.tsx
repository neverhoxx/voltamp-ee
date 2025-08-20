'use client';

import { Container } from "../container";

import en from '@/locales/team/en.json';
import lv from '@/locales/team/lv.json';
import et from '@/locales/team/et.json';

import heroImg from '@/images/bgs/bipv-bg.jpg';

import { SunMedium } from "lucide-react";

import Link from "next/link";

interface TeamHeroProps {
    params: { locale: string };
}
/*
<p className="mt-4 text-[14px] md:text-lg text-white/90">
    {t.heroText2}
</p>
*/

export default function TeamHero({ params }: TeamHeroProps) {
    const { locale } = params;
    const t = locale === 'en' ? en : locale === 'lv' ? lv : et;

    return (
        <div
            className="bg-cover bg-center bg-no-repeat min-h-screen w-full"
            style={{
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)), url(${heroImg.src})`
            }}
        >
            <Container className="overflow-hidden pt-[114px] text-white flex flex-col justify-end min-h-screen">
                <div className="md:w-[70%] w-full täiskatuse-hero bg-[rgba(0,0,0,0.2)] p-5 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm  rounded-2xl">

                    <h1 className="text-2xl font-bold leading-tight sm:text-4xl">
                        <span className="text-def">{t.heroTitleSpan}</span> – {t.heroTitle}
                    </h1>
                </div>

            </Container>
        </div>


    );
}
