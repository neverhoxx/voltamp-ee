import { Container } from "@/components/shared/container";

import en from '@/locales/leht-valmisel/en.json';
import lv from '@/locales/leht-valmisel/lv.json';
import et from '@/locales/leht-valmisel/et.json';

import heroImg from '@/images/bgs/meist-bg.webp';

import Link from "next/link";

interface LehtValmiselProps {
    params: { locale: string };
}

export default function LehtValmisel({ params }: LehtValmiselProps) {
    const { locale } = params;
    const t = locale === 'en' ? en : locale === 'lv' ? lv : et;

    const availableLocales = ['en', 'et', 'lv'];
    const currentLocale = availableLocales.includes(locale) ? locale : 'et';

    return (
        <div
            className="bg-cover bg-no-repeat min-h-screen w-full"
            style={{
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)), url(${heroImg.src})`
            }}
        >
            <Container className="flex flex-col justify-center items-center min-h-screen pt-[114px]">
                <h1 className="text-white font-bold text-[30px] sm:text-[32px] mb-5 max-w-[710px]">
                    {t[`title`]}
                </h1>

                <Link className="py-2.5 px-5 text-white bg-def max-w-[250px] text-center rounded-[7px]" href={`/${currentLocale}/`}>
                    {t[`tagasi`]}
                </Link>
            </Container>
        </div >
    );
}
