'use client';

import { Container } from "../container";

import en from '@/locales/team/en.json';
import lv from '@/locales/team/lv.json';
import et from '@/locales/team/et.json';

import matiPic1 from "@/images/team/mati-pic.jpg";
import matiPic2 from "@/images/team/mati-pic-2.jpg";

import { SunMedium } from "lucide-react";

import Link from "next/link";
import Image from "next/image";

interface TeamSectionProps {
    params: { locale: string };
}

export default function TeamSection({ params }: TeamSectionProps) {
    const { locale } = params;
    const t = locale === 'en' ? en : locale === 'lv' ? lv : et;

    return (
        <>
            <div className="">
                <Container className="flex flex-col md:flex-row justify-center gap-10 mt-[114px]">
                    <div
                        className="h-[350px] w-[350px] rounded-full bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url(${matiPic1.src})`
                        }}
                    />


                    <div className="w-full max-w-[600px] px-[5px] mb-10 md:mb-0">
                        <div className="max-w-[600px] md:sticky top-[124px] text-center md:text-left">
                            <p className="text-[24px] font-bold text-black">
                                {t.tutvuge}
                            </p>
                            <p className="mt-4 text-[18px] font-semibold text-black">
                                {t.keson}
                            </p>
                        </div>
                    </div>


                </Container >
            </div>

            <div className="">
                <Container className="flex flex-col md:flex-row justify-center gap-10 mt-10">

                    <div className="w-full max-w-[600px] px-[5px] mb-10 md:mb-0">
                        <div className="max-w-[600px] md:sticky top-[124px] text-center md:text-left">
                            <p className="mt-4 text-[18px] font-semibold text-black">
                                {t.taOn}
                            </p>
                            <p className="mt-4 text-[18px] font-semibold text-black">
                                {t.mation}
                            </p>
                        </div>
                    </div>

                    <div
                        className="h-[350px] w-[350px] rounded-full bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url(${matiPic2.src})`
                        }}
                    />
                </Container >
            </div>

        </>


    );
}
