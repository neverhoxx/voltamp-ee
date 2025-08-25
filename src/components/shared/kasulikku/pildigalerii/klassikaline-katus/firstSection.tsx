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
import klassikaline10 from "@/images/tehtud tööd/klassikaline-katus/klassikaline10.jpg";

import klassikaline11 from "@/images/tehtud tööd/klassikaline-katus/klassikaline11.jpg";
import klassikaline12 from "@/images/tehtud tööd/klassikaline-katus/klassikaline12.jpg";

import klassikaline13 from "@/images/tehtud tööd/klassikaline-katus/step5.jpg";
import klassikaline14 from "@/images/tehtud tööd/klassikaline-katus/step11.jpg";
import klassikaline15 from "@/images/tehtud tööd/klassikaline-katus/step30.jpg";

import klassikaline16 from "@/images/tehtud tööd/klassikaline-katus/klassikaline16.jpg";
import klassikaline17 from "@/images/tehtud tööd/klassikaline-katus/klassikaline17.jpg";
import klassikaline18 from "@/images/tehtud tööd/klassikaline-katus/klassikaline18.jpg";

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
        <div className="pt-[114px] md:pt-0 min-h-screen flex flex-col items-center">
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
                            <img src={klassikaline10.src} alt="Klassikaline katus Volamp" className="w-full h-full object-cover cursor-zoom-in" onClick={() => setLightboxImg(klassikaline9.src)} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={klassikaline1.src} alt="Klassikaline katus Volamp" className="w-full h-full object-cover cursor-zoom-in" onClick={() => setLightboxImg(klassikaline8.src)} />
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
                        <SwiperSlide>
                            <img src={klassikaline9.src} alt="Klassikaline katus Volamp" className="w-full h-full object-cover cursor-zoom-in" onClick={() => setLightboxImg(klassikaline8.src)} />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Container>

            <div className="">
                <Container className="flex flex-wrap justify-between">
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
                                <img src={klassikaline11.src} alt="Klassikaline katus Volamp" className="w-full h-full object-cover cursor-zoom-in" onClick={() => setLightboxImg(klassikaline11.src)} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={klassikaline12.src} alt="Klassikaline katus Volamp" className="w-full h-full object-cover cursor-zoom-in" onClick={() => setLightboxImg(klassikaline12.src)} />
                            </SwiperSlide>

                        </Swiper>
                    </div>
                    <div className="w-full md:w-[40%] adaptive-tehtud-tööd">
                        <h2 className="text-3xl font-black text-def text-right">
                            {t[`fourthTööTitle`]}
                        </h2>
                        <p className="mt-2.5 font-semibold opacity-85 text-right">
                            {t[`fourthTööDescription`]}
                            <br />
                            {t[`fourthTööDescription2`]}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white rounded-2xl shadow p-6 max-w-2xl mt-6 ">

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
                </Container>
            </div>

            <div className="pt-25">
                <Container className="flex flex-wrap justify-between">
                    <div className="w-full md:w-[40%] adaptive-tehtud-tööd">
                        <h2 className="text-3xl font-black text-def ">
                            {t[`fourthTööTitle`]}
                        </h2>
                        <p className="mt-2.5 font-semibold opacity-85">
                            {t[`fourthTööDescription`]}
                            <br />
                            {t[`fourthTööDescription2`]}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white rounded-2xl shadow p-6 max-w-2xl mt-6 ">

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
                                <img src={klassikaline13.src} alt="Klassikaline katus Volamp" className="w-full h-full object-cover cursor-zoom-in" onClick={() => setLightboxImg(klassikaline13.src)} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={klassikaline14.src} alt="Klassikaline katus Volamp" className="w-full h-full object-cover cursor-zoom-in" onClick={() => setLightboxImg(klassikaline14.src)} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={klassikaline15.src} alt="Klassikaline katus Volamp" className="w-full h-full object-cover cursor-zoom-in" onClick={() => setLightboxImg(klassikaline15.src)} />
                            </SwiperSlide>

                        </Swiper>
                    </div>

                </Container>
            </div>
            <div className="pt-25">
                <Container className="flex flex-wrap justify-between">
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
                                <img src={klassikaline16.src} alt="Klassikaline katus Volamp" className="w-full h-full object-cover cursor-zoom-in" onClick={() => setLightboxImg(klassikaline16.src)} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={klassikaline17.src} alt="Klassikaline katus Volamp" className="w-full h-full object-cover cursor-zoom-in" onClick={() => setLightboxImg(klassikaline17.src)} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={klassikaline18.src} alt="Klassikaline katus Volamp" className="w-full h-full object-cover cursor-zoom-in" onClick={() => setLightboxImg(klassikaline18.src)} />
                            </SwiperSlide>

                        </Swiper>
                    </div>
                    <div className="w-full md:w-[40%] adaptive-tehtud-tööd">
                        <h2 className="text-3xl font-black text-def text-right">
                            {t[`fourthTööTitle`]}
                        </h2>
                        <p className="mt-2.5 font-semibold opacity-85 text-right">
                            {t[`fourthTööDescription`]}
                            <br />
                            {t[`fourthTööDescription2`]}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white rounded-2xl shadow p-6 max-w-2xl mt-6 ">

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
                </Container>
            </div>
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

        </div>
    );
}
