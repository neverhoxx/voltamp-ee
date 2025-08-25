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

import huawei1 from "@/images/tehtud tööd/seadmed/seadmete-paigaldus-1.jpg";
import huawei2 from "@/images/tehtud tööd/seadmed/seadmete-paigaldus-2.jpg";
import huawei3 from "@/images/tehtud tööd/seadmed/seadmete-paigaldus-3.jpg";
import huawei4 from "@/images/tehtud tööd/seadmed/seadmete-paigaldus-4.jpg";
import huawei5 from "@/images/tehtud tööd/seadmed/seadmete-paigaldus-5.jpg";
import huawei6 from "@/images/tehtud tööd/seadmed/seadmete-paigaldus-6.jpg";

import solax1 from "@/images/tehtud tööd/seadmed/seadmete-paigaldus-7.jpg";
import solax2 from "@/images/tehtud tööd/seadmed/seadmete-paigaldus-8.jpg";
import solax3 from "@/images/tehtud tööd/seadmed/seadmete-paigaldus-9.jpg";
import solax4 from "@/images/tehtud tööd/seadmed/seadmete-paigaldus-10.jpg";
import solax5 from "@/images/tehtud tööd/seadmed/seadmete-paigaldus-11.jpg";

import victron1 from "@/images/tehtud tööd/seadmed/seadmete-paigaldus-12.jpg";
import victron2 from "@/images/tehtud tööd/seadmed/seadmete-paigaldus-13.jpg";
import victron3 from "@/images/tehtud tööd/seadmed/seadmete-paigaldus-14.jpg";
import victron4 from "@/images/tehtud tööd/seadmed/seadmete-paigaldus-15.jpg";
import victron5 from "@/images/tehtud tööd/seadmed/seadmete-paigaldus-16.jpg";

interface SeadmedGallerySectionProps {
    params: { locale: string };
}

export default function SeadmedGallerySection({ params }: SeadmedGallerySectionProps) {
    const { locale } = params;
    const t = locale === 'en' ? en : locale === 'lv' ? lv : et;

    const availableLocales = ['en', 'et', 'lv'];
    const currentLocale = availableLocales.includes(locale) ? locale : 'et';

    const videoRef = useRef<HTMLVideoElement>(null);

    const [lightboxImg, setLightboxImg] = useState<string | null>(null);

    return (
        <div className="pt-[114px] md:pt-0 min-h-screen flex flex-col items-center">
            <Container className="flex flex-wrap justify-between items-center min-h-screen">
                <div className="w-full md:w-[40%] adaptive-tehtud-tööd">
                    <h2 className="text-3xl font-black text-def">
                        Huawei {t[`VseadmetePaigaldus`]}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white rounded-2xl shadow p-6 max-w-2xl mt-6">

                        <div className="col-span-1 md:col-span-2 border-t pt-4 grid grid-cols-2 gap-y-3">
                            <div className="text-gray-600 text-sm">{t[`toode`]}</div>
                            <Link href={`/${currentLocale}/tooted/sedmed`} className="text-def text-sm font-semibold cursor-pointer">{t[`seade`]}</Link>
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
                            <img src={huawei1.src} alt="Seadmed Volamp" className="w-full h-full object-cover cursor-zoom-in" onClick={() => setLightboxImg(huawei1.src)} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={huawei2.src} alt="Seadmed Volamp" className="w-full h-full object-contain cursor-zoom-in" onClick={() => setLightboxImg(huawei2.src)} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={huawei3.src} alt="Seadmed Volamp" className="w-full h-full object-cover cursor-zoom-in" onClick={() => setLightboxImg(huawei3.src)} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={huawei4.src} alt="Seadmed Volamp" className="w-full h-full object-contain cursor-zoom-in" onClick={() => setLightboxImg(huawei4.src)} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={huawei5.src} alt="Seadmed Volamp" className="w-full h-full object-cover cursor-zoom-in" onClick={() => setLightboxImg(huawei5.src)} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={huawei6.src} alt="Seadmed Volamp" className="w-full h-full object-cover cursor-zoom-in" onClick={() => setLightboxImg(huawei6.src)} />
                        </SwiperSlide>

                    </Swiper>
                </div>
            </Container>

            <Container className="flex flex-wrap-reverse justify-between mt-10">
                <div className="w-full md:w-[50%] select-none px-2.5">
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
                            <img src={solax1.src} alt="Seadmed Volamp" className="w-full h-full object-contain cursor-zoom-in" onClick={() => setLightboxImg(solax1.src)} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={solax2.src} alt="Seadmed Volamp" className="w-full h-full object-contain cursor-zoom-in" onClick={() => setLightboxImg(solax2.src)} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={solax3.src} alt="Seadmed Volamp" className="w-full h-full object-cover cursor-zoom-in" onClick={() => setLightboxImg(solax3.src)} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={solax4.src} alt="Seadmed Volamp" className="w-full h-full object-contain cursor-zoom-in" onClick={() => setLightboxImg(solax4.src)} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={solax5.src} alt="Seadmed Volamp" className="w-full h-full object-cover cursor-zoom-in" onClick={() => setLightboxImg(solax5.src)} />
                        </SwiperSlide>

                    </Swiper>
                </div>
                <div className="w-full md:w-[40%] adaptive-tehtud-tööd">
                    <h2 className="text-3xl font-black text-def text-left md:text-right">
                        Solax {t[`VseadmetePaigaldus`]}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white rounded-2xl shadow p-6 max-w-2xl mt-6 ">

                        <div className="col-span-1 md:col-span-2 border-t pt-4 grid grid-cols-2 gap-y-3">
                            <div className="text-gray-600 text-sm">{t[`toode`]}</div>
                            <Link href={`/${currentLocale}/tooted/sedmed`} className="text-def text-sm font-semibold cursor-pointer">{t[`seade`]}</Link>
                        </div>
                    </div>
                </div>
            </Container>

            <Container className="flex flex-wrap justify-between mt-10">
                <div className="w-full md:w-[40%] adaptive-tehtud-tööd">
                    <h2 className="text-3xl font-black text-def ">
                        Victron {t[`VseadmetePaigaldus`]}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white rounded-2xl shadow p-6 max-w-2xl mt-6 ">

                        <div className="col-span-1 md:col-span-2 border-t pt-4 grid grid-cols-2 gap-y-3">
                            <div className="text-gray-600 text-sm">{t[`toode`]}</div>
                            <Link href={`/${currentLocale}/tooted/sedmed`} className="text-def text-sm font-semibold cursor-pointer">{t[`seade`]}</Link>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-[50%] select-none px-2.5">
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
                            <img src={victron1.src} alt="Seadmed Volamp" className="w-full h-full md:object-contain object-cover cursor-zoom-in" onClick={() => setLightboxImg(victron1.src)} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={victron2.src} alt="Seadmed Volamp" className="w-full h-full md:object-contain object-cover cursor-zoom-in" onClick={() => setLightboxImg(victron2.src)} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={victron3.src} alt="Seadmed Volamp" className="w-full h-full md:object-contain object-cover cursor-zoom-in" onClick={() => setLightboxImg(victron3.src)} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={victron4.src} alt="Seadmed Volamp" className="w-full h-full md:object-contain object-cover cursor-zoom-in" onClick={() => setLightboxImg(victron4.src)} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={victron5.src} alt="Seadmed Volamp" className="w-full h-full md:object-contain object-cover cursor-zoom-in" onClick={() => setLightboxImg(victron5.src)} />
                        </SwiperSlide>

                    </Swiper>
                </div>

            </Container>

            {
                lightboxImg && (
                    <div
                        className="fixed inset-0 z-80 bg-black/80 flex items-center justify-center p-4"
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
