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
            <p className="text-[12px] font-bold text-center text-def">
                {t[`standardpaneeli`]}
            </p>
            <h2 className="font-bold text-[32px] text-center text-black mb-5">
                {t[`maapark`]}
            </h2>
            <Container className="flex flex-wrap justify-between">
                <div className="w-full select-none px-2.5">
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
                            <img src={maapark1.src} alt="In-Roof Volamp" className="w-full h-full object-cover cursor-zoom-in" onClick={() => setLightboxImg(maapark1.src)} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={maapark2.src} alt="In-Roof Volamp" className="w-full h-full object-cover cursor-zoom-in" onClick={() => setLightboxImg(maapark2.src)} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={maapark3.src} alt="In-Roof Volamp" className="w-full h-full object-cover cursor-zoom-in" onClick={() => setLightboxImg(maapark3.src)} />
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

        </div >
    );
}
