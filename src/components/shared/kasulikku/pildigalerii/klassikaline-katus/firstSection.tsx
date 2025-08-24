'use client';

import { Container } from "@/components/shared/container";

import en from '@/locales/pildigalerii/en.json';
import lv from '@/locales/pildigalerii/lv.json';
import et from '@/locales/pildigalerii/et.json';

import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useRef, useState } from "react";

import klassikaline1 from "@/images/tehtud tööd/klassikaline-katus/klassikaline1.jpg";
import klassikaline2 from "@/images/tehtud tööd/klassikaline-katus/klassikaline2.jpg";
import klassikaline3 from "@/images/tehtud tööd/klassikaline-katus/klassikaline3.jpg";
import klassikaline4 from "@/images/tehtud tööd/klassikaline-katus/klassikaline4.jpg";
import klassikaline5 from "@/images/tehtud tööd/klassikaline-katus/klassikaline5.jpg";
import klassikaline6 from "@/images/tehtud tööd/klassikaline-katus/klassikaline6.jpg";
import klassikaline7 from "@/images/tehtud tööd/klassikaline-katus/klassikaline7.jpg";
import klassikaline8 from "@/images/tehtud tööd/klassikaline-katus/klassikaline8.jpg";
import klassikaline9 from "@/images/tehtud tööd/klassikaline-katus/klassikaline9.jpg";

interface KlassikalineGallerySectionProps {
    params: { locale: string };
}

export default function KlassikalineGallerySection({ params }: KlassikalineGallerySectionProps) {
    const { locale } = params;
    const t = locale === 'en' ? en : locale === 'lv' ? lv : et;

    const availableLocales = ['en', 'et', 'lv'];
    const currentLocale = availableLocales.includes(locale) ? locale : 'et';

    const videoRef = useRef<HTMLVideoElement>(null);

    const [lightboxImg, setLightboxImg] = useState<string | null>(null);

    return (
        <div className="pt-[114px] md:pt-0 min-h-screen flex justify-center">
            <Container className="flex flex-wrap justify-between items-center min-h-screen">
                <div className="w-full md:w-[40%] adaptive-tehtud-tööd">
                    <h2 className="text-3xl font-black text-def">
                        {t[`fourthTööTitle`]}
                    </h2>
                    <p className="mt-2.5 font-semibold opacity-85">
                        {t[`fourthTööDescription`]}
                        <br />
                        {t[`fourthTööDescription2`]}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white rounded-2xl shadow p-6 max-w-2xl mt-6">
                        <div className="flex flex-col items-start">
                            <span className="text-sm text-gray-500">{t[`päikesekatuseVõimsus`]}</span>
                            <span className="text-2xl font-bold text-gray-800">12,3 kW</span>
                        </div>

                        <div className="flex flex-col items-start">
                            <span className="text-sm text-gray-500">{t[`kogutoodang`]}</span>
                            <span className="text-2xl font-bold text-gray-800">19,475 kWh</span>
                        </div>

                        <div className="col-span-1 md:col-span-2 border-t pt-4 grid grid-cols-2 gap-y-3">
                            <div className="text-gray-600 text-sm">{t[`toode`]}</div>
                            <Link href={`/${currentLocale}/katuse-paigaldus`} className="text-def text-sm font-semibold cursor-pointer">{t[`fourthTööTitle`]}</Link>

                            <div className="text-gray-600 text-sm">{t[`riik`]}</div>
                            <div className="text-gray-800 text-sm font-semibold">{t[`eesti`]}</div>

                            <div className="text-gray-600 text-sm">{t[`partner`]}</div>
                            <div className="text-gray-800 text-sm font-semibold">{t[`pole`]}</div>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-[50%] select-none">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 10000 }}
                        loop
                        className="
                            w-full h-[400px] rounded-2xl shadow overflow-hidden
                            [--swiper-navigation-color:#00BFFF]         
                            [--swiper-navigation-size:28px]                 
                            [--swiper-pagination-color:#00BFFF]        
                            [--swiper-pagination-bullet-inactive-color:#9CA3AF] 
                            [--swiper-pagination-bullet-inactive-opacity:1]
                        "
                    >
                        <SwiperSlide>
                            <img src={klassikaline1.src} alt="Klassikaline katus Volamp" className="w-full h-full object-cover cursor-zoom-in" onClick={() => setLightboxImg(klassikaline1.src)} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={klassikaline2.src} alt="Klassikaline katus Volamp" className="w-full h-full object-cover cursor-zoom-in" onClick={() => setLightboxImg(klassikaline2.src)} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={klassikaline3.src} alt="Klassikaline katus Volamp" className="w-full h-full object-cover cursor-zoom-in" onClick={() => setLightboxImg(klassikaline3.src)} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={klassikaline4.src} alt="Klassikaline katus Volamp" className="w-full h-full object-cover cursor-zoom-in" onClick={() => setLightboxImg(klassikaline4.src)} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={klassikaline5.src} alt="Klassikaline katus Volamp" className="w-full h-full object-cover cursor-zoom-in" onClick={() => setLightboxImg(klassikaline5.src)} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={klassikaline6.src} alt="Klassikaline katus Volamp" className="w-full h-full object-cover cursor-zoom-in" onClick={() => setLightboxImg(klassikaline6.src)} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={klassikaline7.src} alt="Klassikaline katus Volamp" className="w-full h-full object-cover cursor-zoom-in" onClick={() => setLightboxImg(klassikaline7.src)} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={klassikaline8.src} alt="Klassikaline katus Volamp" className="w-full h-full object-cover cursor-zoom-in" onClick={() => setLightboxImg(klassikaline8.src)} />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Container>

            {
                lightboxImg && (
                    <div
                        className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
                        onClick={() => setLightboxImg(null)}
                    >
                        <img
                            src={lightboxImg}
                            alt="lightbox"
                            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg cursor-zoom-out"
                        />
                    </div>
                )
            }

        </div>
    );
}
