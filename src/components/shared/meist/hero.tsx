import { Container } from "../container";

import en from '@/locales/meist-hero/en.json';
import lv from '@/locales/meist-hero/lv.json';
import et from '@/locales/meist-hero/et.json';

import heroImg from '@/images/bgs/meist-bg.webp';

import Link from "next/link";

interface MeistHeroProps {
    params: { locale: string };
}

export default function MeistHero({ params }: MeistHeroProps) {
    const { locale } = params;
    const t = locale === 'en' ? en : locale === 'lv' ? lv : et;

    return (
        <div
            className="bg-cover bg-no-repeat min-h-screen w-full"
            style={{
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)), url(${heroImg.src})`
            }}
        >
            <Container className="flex flex-col justify-center min-h-screen pt-[114px]">
                <h1 className="text-white font-bold text-[30px] sm:text-[32px] mb-5 max-w-[710px]">
                    {t[`heroTitle`]}
                </h1>

                <p className="text-white text-[16px] font-medium max-w-[710px]">
                    {t[`heroText`]}
                    <br />
                    <br />
                    {t[`heroSubText`]}
                </p>
            </Container>
        </div >
    );
}
