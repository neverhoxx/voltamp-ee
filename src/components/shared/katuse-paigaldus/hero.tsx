import { Container } from "../container";

import en from '@/locales/katuse-paigaldus/en.json';
import lv from '@/locales/katuse-paigaldus/lv.json';
import et from '@/locales/katuse-paigaldus/et.json';

import heroImg from '@/images/bgs/katusetööd-bg.jpg';

interface KatusePaigaldusHeroProps {
    params: { locale: string };
}

export default function KatusePaigaldusHero({ params }: KatusePaigaldusHeroProps) {
    const { locale } = params;
    const t = locale === 'en' ? en : locale === 'lv' ? lv : et;

    return (
        <div
            className="bg-cover bg-no-repeat min-h-screen w-full"
            style={{
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)), url(${heroImg.src})`
            }}
        >
            <Container className="flex flex-col justify-end md:justify-center min-h-screen pt-[114px]">
                <h1 className="text-white font-bold text-[24px] md:text-[30px] sm:text-[32px] mb-5 max-w-[710px]">
                    Voltamp <span className="text-def">{t[`heroTitle`]}</span>
                </h1>

                <p className="text-white text-[14px] md:text-[16px] font-medium max-w-[710px] mb-4">
                    {t[`heroText`]}
                </p>
            </Container>
        </div >
    );
}
