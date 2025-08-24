'use client';

import { Container } from "@/components/shared/container";

import en from '@/locales/pildigalerii/en.json';
import lv from '@/locales/pildigalerii/lv.json';
import et from '@/locales/pildigalerii/et.json';

import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useRef, useState } from "react";

interface PildigaleriiSectionProps {
    params: { locale: string };
}

export default function PildigaleriiSection({ params }: PildigaleriiSectionProps) {
    const { locale } = params;
    const t = locale === 'en' ? en : locale === 'lv' ? lv : et;

    const availableLocales = ['en', 'et', 'lv'];
    const currentLocale = availableLocales.includes(locale) ? locale : 'et';

    const isEestiKeel = currentLocale === "et";

    const videoRef = useRef<HTMLVideoElement>(null);

    const [lightboxImg, setLightboxImg] = useState<string | null>(null);

    return (
        <div className="pt-[114px] md:pt-0 min-h-screen">
            <Container className="flex flex-wrap justify-between items-center min-h-screen">
                <div className="w-full md:w-[40%] adaptive-tehtud-tööd">
                    <h2 className="text-3xl font-black text-def">
                        {t[`firstTööTitle`]}
                    </h2>
                    <p className="mt-2.5 font-semibold opacity-85">
                        {t[`firstTööDescription`]}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white rounded-2xl shadow p-6 max-w-2xl mt-6">
                        <div className="flex flex-col items-start">
                            <span className="text-sm text-gray-500">{t[`päikesekatuseVõimsus`]}</span>
                            <span className="text-2xl font-bold text-gray-800">12,3 kW</span>
                        </div>

                        <div className="flex flex-col items-start">
                            <span className="text-sm text-gray-500">{t[`kogutoodang`]}</span>
                            <span className="text-2xl font-bold text-gray-800">11 260 kWh</span>
                        </div>

                        <div className="col-span-1 md:col-span-2 border-t pt-4 grid grid-cols-2 gap-y-3">
                            <div className="text-gray-600 text-sm">{t[`toode`]}</div>
                            <Link href={`/${currentLocale}/integreeritav-paikesekatus/taiskatuse-susteem`} className="text-def text-sm font-semibold cursor-pointer">
                                {t[`ehitis`]}<span className={`${isEestiKeel ? "italic" : "regular"} `}>{t[`ehitisInRoof`]}</span>{t[`ehitisLahendus`]}
                            </Link>

                            <div className="text-gray-600 text-sm">{t[`riik`]}</div>
                            <div className="text-gray-800 text-sm font-semibold">{t[`eesti`]}</div>

                            <div className="text-gray-600 text-sm">{t[`partner`]}</div>
                            <div className="text-gray-800 text-sm font-semibold">{t[`pole`]}</div>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-[50%] select-none">
                    <video
                        ref={videoRef}
                        src="/videos/viljandimaaprojekt.mp4"
                        className="w-full h-full object-cover"
                        controls
                    />
                </div>
            </Container>

        </div>
    );
}
