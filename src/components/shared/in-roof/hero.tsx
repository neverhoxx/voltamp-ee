'use client';

import { Container } from "../container";

import en from '@/locales/in-roof/en.json';
import lv from '@/locales/in-roof/lv.json';
import et from '@/locales/in-roof/et.json';

import heroImg from '@/images/bgs/in-roof-bg.jpg';

import { SunMedium } from "lucide-react";


interface InRoofHeroProps {
    params: { locale: string };
}

export default function InRoofHero({ params }: InRoofHeroProps) {
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
                <div className="md:w-[70%] w-full täiskatuse-hero bg-[rgba(0,0,0,0.2)] p-5 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm rounded-2xl">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur select-none">
                        <SunMedium className="h-4 w-4" aria-hidden />
                        <span className="text-sm">{t.heroPreTitle}</span>
                    </div>
                    <h1 className="text-3xl font-bold leading-tight sm:text-5xl">
                        <span className="text-def">{t.heroTitleSpan}</span> – {t.heroTitle}
                    </h1>
                    <p className="mt-4 text-[14px] md:text-lg text-white/90">
                        {t.heroText}
                    </p>
                </div>

            </Container>
        </div>

    );
}
