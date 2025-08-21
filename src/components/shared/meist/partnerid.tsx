import { Container } from "../container";

import en from '@/locales/meist-hero/en.json';
import lv from '@/locales/meist-hero/lv.json';
import et from '@/locales/meist-hero/et.json';

import põhuplaat from "@/images/logos/pohuplaat-logo.png";
import kodukuubis from "@/images/logos/kodu_kuubis_logo_3.png";
import markedroid from "@/images/logos/MD-color-logo.png";
import ruukki from "@/images/logos/ruukki-logowebp.webp";
import BMI from "@/images/logos/bmi_monier_logo_v2.png";
import sunvibe from "@/images/logos/sunvibe-logo.webp";
import sunecor from "@/images/logos/sunecor-logo.png";
import ralest from "@/images/logos/ralest-logo.jpg";

import Link from "next/link";
import Image from "next/image";

interface PartneridProps {
    params: { locale: string };
}

export const partnerid = [
    {
        src: põhuplaat,
        alt: "Põhuplaat logo",
        link: "https://pohuplaat.ee/",
    },
    {
        src: kodukuubis,
        alt: "KoduKuubis logo",
        link: "https://kodukuubis.com/",
    },
    {
        src: markedroid,
        alt: "Markedroid logo",
        link: "https://www.markedroid.com/",
    },
    {
        src: ruukki,
        alt: "Ruukki logo",
        link: "https://www.ruukki.com/",
    },
    {
        src: BMI,
        alt: "BMI Monier logo",
        link: "https://www.bmigroup.com/",
    },
    {
        src: sunvibe,
        alt: "Sunvibe logo",
        link: "https://sunvibe.ee/",
    },
    {
        src: sunecor,
        alt: "Sunecor logo",
        link: "https://sunecor.com/",
    },
    {
        src: ralest,
        alt: "Ral-est logo",
        link: "https://ralest.ee/",
    },
];



export default function Partnerid({ params }: PartneridProps) {
    const { locale } = params;
    const t = locale === 'en' ? en : locale === 'lv' ? lv : et;

    return (
        <div
            className="min-h-screen w-full "
        >
            <Container className="flex flex-col justify-center items-center min-h-screen pt-[114px]">
                <h1 className="text-black font-bold text-[30px] sm:text-[32px] mb-5 select-none">
                    {t[`partnerid`]}
                </h1>

                <div className="w-full flex flex-wrap items-center justify-center select-none p-10 gap-10 rounded-2xl bg-[#0094c5]">
                    {partnerid.map((logo, i) => (
                        <Link
                            key={i}
                            href={logo.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center"
                        >
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                className="h-[80px] w-[260px] object-contain"
                            />
                        </Link>
                    ))}
                </div>
            </Container>
        </div >
    );
}
