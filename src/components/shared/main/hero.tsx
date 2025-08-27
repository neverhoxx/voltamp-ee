'use client';

import { Container } from "../container";
import { Banners } from "../banners";

import en from '@/locales/main-hero/en.json';
import lv from '@/locales/main-hero/lv.json';
import et from '@/locales/main-hero/et.json';

import heroImg from '@/images/bgs/bipv-bg.jpg';

import Link from "next/link";

interface MainHeroProps {
    params: { locale: string };
}

const availableLocales = ['en', 'et', 'lv'];

export default function MainHero({ params }: MainHeroProps) {
    const { locale } = params;
    const currentLocale = availableLocales.includes(locale) ? locale : 'et';
    const t = locale === 'en' ? en : locale === 'lv' ? lv : et;

    return (
        <div
            className="relative bg-cover bg-center bg-no-repeat min-h-screen w-full"
            style={{
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url(${heroImg.src})`
            }}
        >
            <Container className="flex flex-col justify-center sm:justify-center min-h-screen pt-[80px] max-[640px]:pt-0 max-w-[1000px] relative">
                <div className="absolute bottom-0 left-0 w-full sm:static z-0">
                    <Banners />
                </div>

                <h1 className="z-10 text-white font-bold text-[20px] sm:text-[28px] text-center sm:mt-0 max-[420px]:mt-18 mobile-stroke">
                    {t[`heroTitle`]}
                </h1>

                <Link
                    href={`/${currentLocale}/miks-valida-paikesepaneelid-ja-akupank-oma-eramajale`}
                    className="z-10 text-white text-center text-[16px] hidden sm:block font-medium mt-0 sm:mt-2 hover:text-[#00BFFF] mobile-stroke"
                >
                    {t[`heroLoe`]}
                </Link>


            </Container>
        </div>
    );
}
