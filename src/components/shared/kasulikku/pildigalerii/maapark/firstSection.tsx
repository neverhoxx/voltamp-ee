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

import maapark1 from "@/images/tehtud tööd/maapark/maapark1.jpg"
import maapark2 from "@/images/tehtud tööd/maapark/maapark2.jpg"
import maapark3 from "@/images/tehtud tööd/maapark/maapark3.jpg"

interface MaaparkGallerySectionProps {
    params: { locale: string };
}

export default function MaaparkGallerySection({ params }: MaaparkGallerySectionProps) {
    const { locale } = params;
    const t = locale === 'en' ? en : locale === 'lv' ? lv : et;

    const availableLocales = ['en', 'et', 'lv'];
    const currentLocale = availableLocales.includes(locale) ? locale : 'et';

    const videoRef = useRef<HTMLVideoElement>(null);

    const [lightboxImg, setLightboxImg] = useState<string | null>(null);


    return (
        <div className="pt-[114px] md:pt-0 min-h-screen flex flex-col items-center justify-center">
            <Container className="flex flex-wrap justify-between items-center min-h-screen">
                <div className="w-full md:w-[40%] adaptive-tehtud-tööd">
                    <h2 className="text-3xl font-black text-def">
                        {t[`maapark`]}
                    </h2>
                    <p className="mt-2.5 font-semibold opacity-85">
                        {t[`maaparkText`]}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white rounded-2xl shadow p-6 max-w-2xl mt-6">
                        <div className="col-span-1 md:col-span-2 border-t pt-4 grid grid-cols-2 gap-y-3">
                            <div className="text-gray-600 text-sm">{t[`toode`]}</div>
                            <Link href={``} className="text-def text-sm font-semibold cursor-pointer">{t[`maapark`]}</Link>
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
                            <img src={maapark1.src} alt="Gallery 3" className="w-full h-full object-cover cursor-zoom-in" onClick={() => setLightboxImg(maapark1.src)} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={maapark2.src} alt="Gallery 2" className="w-full h-full object-cover cursor-zoom-in" onClick={() => setLightboxImg(maapark2.src)} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={maapark3.src} alt="Gallery 2" className="w-full h-full object-cover cursor-zoom-in" onClick={() => setLightboxImg(maapark3.src)} />
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
