import { Container } from "../container";

import en from '@/locales/miks-valida/en.json';
import lv from '@/locales/miks-valida/lv.json';
import et from '@/locales/miks-valida/et.json';

import heroImg from '@/images/bgs/meist-bg.webp';

interface MiksValidaHeroProps {
    params: { locale: string };
}

export default function MiksValidaHero({ params }: MiksValidaHeroProps) {
    const { locale } = params;
    const t = locale === 'en' ? en : locale === 'lv' ? lv : et;

    return (
        <div
            className="bg-cover bg-no-repeat min-h-screen w-full"
            style={{
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)), url(${heroImg.src})`
            }}
        >
            <Container className="flex flex-col justify-end min-h-screen pt-[114px]">
                <div className="w-1/2 miks-valida-hero bg-[rgba(0,0,0,0.2)] flex flex-col items-center p-5 pb-15 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm">
                    <h1 className="text-def font-black text-[30px] sm:text-[32px] mb-5 max-w-[710px]">
                        {t[`title`]}
                    </h1>

                    <div
                        className="w-full h-1 rounded-[2px] mb-[17px]"
                        style={{ background: "linear-gradient(to right, #00BFFF, #000000)" }}
                    ></div>

                    <p className="text-white text-[16px] font-medium max-w-[710px]">
                        {t[`subTitle`]}
                    </p>
                </div>

            </Container>
        </div >
    );
}
