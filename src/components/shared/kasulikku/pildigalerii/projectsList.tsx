import { Container } from "@/components/shared/container";

import en from '@/locales/pildigalerii/en.json';
import lv from '@/locales/pildigalerii/lv.json';
import et from '@/locales/pildigalerii/et.json';

import project1 from '@/images/tehtud tööd/viljandimaa.jpg';

import Link from "next/link";

interface PildigaleriiListProps {
    params: { locale: string };
}

export default function PildigaleriiList({ params }: PildigaleriiListProps) {
    const { locale } = params;
    const t = locale === 'en' ? en : locale === 'lv' ? lv : et;

    const availableLocales = ['en', 'et', 'lv'];
    const currentLocale = availableLocales.includes(locale) ? locale : 'et';

    return (
        <div className="pt-10">
            <Container className="flex justify-between flex-wrap gap-5">
                <Link
                    href={`/${currentLocale}/kasulikku/pildigalerii/viljandimaa`}
                    className="relative bg-[#f5f5f5] min-h-[400px] max-w-[300px] w-full flex flex-col p-2.5 rounded-xl overflow-hidden group justify-center"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
                        style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url(${project1.src})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/20 group-hover:from-black/30 group-hover:to-black/10 transition-all duration-1000" />

                    <div className="relative z-10 text-def">
                        <p className="text-[12px] font-bold">
                            {t[`ehitis`]}
                        </p>
                        <h3 className="font-bold text-lg text-white mb-5">Viljandimaa</h3>
                        <span className="font-bold text-[16px] text-white">{t[`uuri`]} <span className='text-[#00BFFF]'>→</span></span>
                    </div>
                </Link>

            </Container>

            <div className="">
                <Container>

                </Container>
            </div>
        </div>
    );
}
