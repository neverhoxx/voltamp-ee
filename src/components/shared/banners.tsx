'use client'

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import solaxBanner from "@/images/banners/solax-banner-15-20kwh.png";
import solisBanner1015 from "@/images/banners/solis-banner-10-15kwh.png";
import solisBanner2021 from "@/images/banners/solax-banner-20-21.png";
import solisbanner1010 from "@/images/banners/solis-x-dyness-10-10-banner.png";
import solisbanner1514 from "@/images/banners/solis-x-dyness-15-20-banner.png";

const banners = [
    { banner: solaxBanner, alt: "Solax Komplekt 15kW/20kWh" },
    { banner: solisBanner1015, alt: "Solis Komplekt 10kW/15kWh" },
    { banner: solisBanner2021, alt: "Solax Komplekt 20kW/21kWh" },
    { banner: solisbanner1010, alt: "Solis ja Dyness 10kW/10kWh" },
    { banner: solisbanner1514, alt: "Solis ja Dyness 15kW/14kWh" },
];

export function Banners() {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const totalSlides = banners.length;

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % totalSlides);
        }, 10000);
        return () => clearInterval(interval);
    }, [totalSlides]);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
    };

    return (
        <div className="relative w-full max-w-[500px] mx-auto overflow-hidden select-none group">
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {banners.map(({ banner, alt }, index) => (
                    <Link
                        href="/et/kontakt"
                        key={index}
                        className="flex-shrink-0 w-full flex justify-center items-center"
                    >
                        <Image
                            src={banner}
                            alt={alt}
                            width={1300}
                            className="w-full h-auto max-h-[400px] object-contain"
                        />
                    </Link>
                ))}
            </div>

            <button
                onClick={goToPrevious}
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition"
            >
                <ChevronLeft className="w-5 h-5 text-gray-800" />
            </button>

            <button
                onClick={goToNext}
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition"
            >
                <ChevronRight className="w-5 h-5 text-gray-800" />
            </button>

            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                {banners.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentIndex ? "bg-gray-800" : "bg-gray-400/60"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
