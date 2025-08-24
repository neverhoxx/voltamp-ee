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

import standardlahendus1 from "@/images/tehtud tööd/standardlahendus/standardlahendus1.jpg";
import standardlahendus2 from "@/images/tehtud tööd/standardlahendus/standardlahendus2.jpg";
import standardlahendus3 from "@/images/tehtud tööd/standardlahendus/standardlahendus3.jpg";
import standardlahendus4 from "@/images/tehtud tööd/standardlahendus/standardlahendus4.jpg";
import standardlahendus5 from "@/images/tehtud tööd/standardlahendus/standardlahendus5.jpg";
import standardlahendus6 from "@/images/tehtud tööd/standardlahendus/standardlahendus6.jpg";

interface StandardlahendusGallerySectionProps {
    params: { locale: string };
}

export default function StandardlahendusGallerySection({ params }: StandardlahendusGallerySectionProps) {
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
                {t[`standardlahendus`]}
            </h2>
            <Container className="flex flex-wrap justify-center">
                <div className="w-1/2 select-none px-2.5">
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
                            <img src={standardlahendus1.src} alt="Standard Lahendus Volamp" className="w-full h-full object-cover cursor-zoom-in" onClick={() => setLightboxImg(standardlahendus1.src)} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={standardlahendus2.src} alt="Standard Lahendus Volamp" className="w-full h-full object-cover cursor-zoom-in" onClick={() => setLightboxImg(standardlahendus2.src)} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={standardlahendus3.src} alt="Standard Lahendus Volamp" className="w-full h-full object-cover cursor-zoom-in" onClick={() => setLightboxImg(standardlahendus3.src)} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={standardlahendus4.src} alt="Standard Lahendus Volamp" className="w-full h-full object-cover cursor-zoom-in" onClick={() => setLightboxImg(standardlahendus4.src)} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={standardlahendus5.src} alt="Standard Lahendus Volamp" className="w-full h-full object-cover cursor-zoom-in" onClick={() => setLightboxImg(standardlahendus5.src)} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={standardlahendus6.src} alt="Standard Lahendus Volamp" className="w-full h-full object-cover cursor-zoom-in" onClick={() => setLightboxImg(standardlahendus6.src)} />
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
