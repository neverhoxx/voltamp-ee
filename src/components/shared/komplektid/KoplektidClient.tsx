"use client";

import { Container } from "@/components/shared/container";
import Image from "next/image";
import Link from "next/link";

import Product1Image from "@/images/Akulahendus_koju_Sunergia_landing_webp-1536x1026.webp";
import solaxBanner from "@/images/banners/solax-banner-15-20kwh.png";
import solisBanner1015 from "@/images/banners/solis-banner-10-15kwh.png";
import solisBanner2021 from "@/images/banners/solax-banner-20-21.png";
import solisbanner1010 from "@/images/banners/solis-x-dyness-10-10-banner.png";
import solisbanner1514 from "@/images/banners/solis-x-dyness-15-20-banner.png";

interface KomplektidClientProps {
    locale: string;
}

export default function KomplektidClient({ locale }: KomplektidClientProps) {
    const availableLocales = ["en", "et", "lv"] as const;
    type Locale = typeof availableLocales[number];

    const currentLocale: Locale =
        availableLocales.includes(locale as Locale) ? (locale as Locale) : "et";

    const t = {
        en: {
            title: "Ready-made Solar Kits",
            priceLabel: "Price",
            km: "VAT",
            details: "View Details",
        },
        et: {
            title: "Valmiskomplektid päikesesüsteemid",
            priceLabel: "Hind",
            km: "KM",
            details: "Vaata lähemalt",
        },
        lv: {
            title: "Saules sistēmu komplekti",
            priceLabel: "Cena",
            km: "PVN",
            details: "Skatīt vairāk",
        },
    }[currentLocale];

    const kits = [
        {
            id: 1,
            name: "Solis inverter + Dyness akupank",
            price: "5473.9",
            km: t.km,
            slug: "solis-inverter-ja-dyness-akupank",
            main_image: solisbanner1010,
        },
        {
            id: 2,
            name: "Solax inverter + Solax akupank",
            price: "6236.7",
            km: t.km,
            slug: "solax-inverter-solax-akupank",
            main_image: solaxBanner,
        },
        {
            id: 3,
            name: "Solis inverter + Leapton akupank",
            price: "5845.5",
            km: t.km,
            slug: "solis-leapton",
            main_image: solisBanner1015,
        },
        {
            id: 4,
            name: "Solax inverter + Solax akupank",
            price: "10632.1",
            km: t.km,
            slug: "solax-inverter-ja-solax-akupank-20-21",
            main_image: solisBanner2021,
        },
        {
            id: 5,
            name: "Dyness Battery + Solis hübriid",
            price: "6618.7",
            km: t.km,
            slug: "dyness-battery-ja-solis-hubriid",
            main_image: solisbanner1514,
        },
    ];

    return (
        <div className="pt-[114px]">
            <Container>
                <h1 className="text-3xl font-bold text-center mb-8">{t.title}</h1>

                <ul className="flex flex-wrap justify-center gap-4">
                    {kits.map((kit) => (
                        <Link
                            key={kit.id}
                            href={`/${currentLocale}/tooted/${kit.slug}`}
                            className="w-[290px] h-[350px] bg-gray-100 p-5 rounded-lg flex-shrink-0 select-none flex flex-col items-center justify-center hover:shadow-lg transition duration-300"
                        >
                            <div className="w-[210px] h-[250px] flex justify-center">
                                <Image
                                    src={kit.main_image}
                                    alt={kit.name}
                                    width={200}
                                    height={150}
                                    className="object-contain rounded-[5px]"
                                />
                            </div>

                            <div className="flex-1 flex flex-col justify-end">

                                <h3 className="font-bold mb-2 text-center text-[16px]">
                                    {kit.name}
                                </h3>
                                <h3 className="text-def mt-[5px] text-2xl font-bold text-center">
                                    {kit.price}€ + {kit.km}
                                </h3>
                                <p className="text-sm text-blue-600 text-center mt-2 font-semibold">
                                    {t.details} →
                                </p>
                            </div>
                        </Link>
                    ))}
                </ul>
            </Container>
        </div>
    );
}
