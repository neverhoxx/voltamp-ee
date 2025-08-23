import { Container } from "@/components/shared/container";

import en from '@/locales/katuse-paigaldus/en.json';
import lv from '@/locales/katuse-paigaldus/lv.json';
import et from '@/locales/katuse-paigaldus/et.json';

import heroImg from '@/images/bgs/silekivi-katus-bg.jpg';

import { MdOutlineRoofing } from "react-icons/md";

interface SilekiviKatusPageHeroProps {
    params: { locale: string };
}

export default function SilekiviKatusPageHero({ params }: SilekiviKatusPageHeroProps) {
    const { locale } = params;
    const t = locale === 'en' ? en : locale === 'lv' ? lv : et;

    return (
        <div
            className="bg-cover bg-center bg-no-repeat min-h-screen w-full"
            style={{
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)), url(${heroImg.src})`
            }}
        >
            <Container className="overflow-hidden pt-[114px] text-white flex flex-col justify-end  min-h-screen">
                <div className="md:w-[70%] w-full täiskatuse-hero bg-[rgba(0,0,0,0.2)] p-5 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm rounded-2xl">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur select-none">
                        <MdOutlineRoofing className="h-4 w-4" aria-hidden />
                        <span className="text-sm">Voltamp • {t.KiviHeroPreTitle}</span>
                    </div>
                    <h1 className="text-xl font-bold leading-tight sm:text-3xl">
                        <span className="text-def">{t.SileKiviHeroTitleSpan}</span> {t.SileKiviHeroTitle}
                    </h1>
                    <p className="mt-4 text-[14px] md:text-[16px] text-white/90">
                        {t.SileKiviHeroText}
                    </p>
                </div>

            </Container>
        </div>
    );
}
