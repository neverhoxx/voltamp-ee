import { Container } from "../container";
import { Banners } from "../banners";

import en from '@/locales/main-hero/en.json';
import lv from '@/locales/main-hero/lv.json';
import et from '@/locales/main-hero/et.json';

import heroImg from '@/images/bgs/main-hero-bg.webp';

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
            className="bg-cover bg-center bg-no-repeat min-h-screen w-full"
            style={{
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url(${heroImg.src})`
            }}
        >
            <Container className="flex flex-col justify-center min-h-screen pt-[80px] max-w-[1000px]">
                <Banners />
                <h1 className="text-white font-bold text-[26px] sm:text-[28px] text-center">
                    {t[`heroTitle`]}
                </h1>

                <Link href={`/${currentLocale}/miks-valida-paikesepaneelid-ja-akupank-oma-eramajale`} className="text-white text-center text-[16px] font-medium mt-5 hover:text-[#00BFFF]">
                    {t[`heroLoe`]}
                </Link>
            </Container>
        </div >
    );
}
