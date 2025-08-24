import { Container } from "@/components/shared/container";

import en from '@/locales/pildigalerii/en.json';
import lv from '@/locales/pildigalerii/lv.json';
import et from '@/locales/pildigalerii/et.json';

import project1 from '@/images/tehtud tööd/viljandimaa.jpg';
import project2 from '@/images/tehtud tööd/in-roof/inroof10.jpg';
import project3 from "@/images/tehtud tööd/autovarjualune/autovarjualune-pic-1.jpg"
import project4 from "@/images/tehtud tööd/klassikaline-katus/klassikaline10.jpg"

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
                        <h3 className="font-bold text-lg text-white mb-5">{t[`firstTööTitle`]}</h3>
                        <span className="font-bold text-[16px] text-white">{t[`uuri`]} <span className='text-[#00BFFF]'>→</span></span>
                    </div>
                </Link>

                <Link
                    href={`/${currentLocale}/kasulikku/pildigalerii/in-roof`}
                    className="relative bg-[#f5f5f5] min-h-[400px] max-w-[300px] w-full flex flex-col p-2.5 rounded-xl overflow-hidden group justify-center"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
                        style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url(${project2.src})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/20 group-hover:from-black/30 group-hover:to-black/10 transition-all duration-1000" />

                    <div className="relative z-10 text-def">
                        <p className="text-[12px] font-bold">
                            {t[`ehitis`]}
                        </p>
                        <h3 className="font-bold text-lg text-white mb-5">
                            {t[`secondTööTitle`]}
                        </h3>
                        <span className="font-bold text-[16px] text-white">{t[`uuri`]} <span className='text-[#00BFFF]'>→</span></span>
                    </div>
                </Link>

                <Link
                    href={`/${currentLocale}/kasulikku/pildigalerii/autovarjualune`}
                    className="relative bg-[#f5f5f5] min-h-[400px] max-w-[300px] w-full flex flex-col p-2.5 rounded-xl overflow-hidden group justify-center"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
                        style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url(${project3.src})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/20 group-hover:from-black/30 group-hover:to-black/10 transition-all duration-1000" />

                    <div className="relative z-10 text-def">
                        <p className="text-[12px] font-bold">
                            {t[`thirdTööTitle`]}
                        </p>
                        <h3 className="font-bold text-lg text-white mb-5">
                            {t[`thirdTööTitle`]}
                        </h3>
                        <span className="font-bold text-[16px] text-white">{t[`uuri`]} <span className='text-[#00BFFF]'>→</span></span>
                    </div>
                </Link>

                <Link
                    href={`/${currentLocale}/kasulikku/pildigalerii/klassikaline-katus`}
                    className="relative bg-[#f5f5f5] min-h-[400px] max-w-[300px] w-full flex flex-col p-2.5 rounded-xl overflow-hidden group justify-center"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
                        style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url(${project4.src})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/20 group-hover:from-black/30 group-hover:to-black/10 transition-all duration-1000" />

                    <div className="relative z-10 text-def">
                        <p className="text-[12px] font-bold">
                            {t[`fourthTööTitle`]}
                        </p>
                        <h3 className="font-bold text-lg text-white mb-5">
                            {t[`fourthTööTitle`]}
                        </h3>
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
