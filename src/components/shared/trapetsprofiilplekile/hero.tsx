'use client';

import { Container } from "../container";

import en from '@/locales/katusele/en.json';
import lv from '@/locales/katusele/lv.json';
import et from '@/locales/katusele/et.json';

import heroImg from '@/images/bgs/trapets-bg.webp';

import Link from "next/link";
import { Link as ScrollLink, Element } from "react-scroll";

import { IoIosArrowDown } from "react-icons/io";

interface TrapetsprofiilplekileHeroProps {
    params: { locale: string };
}

export default function TrapetsprofiilplekileHero({ params }: TrapetsprofiilplekileHeroProps) {
    const { locale } = params;
    const t = locale === 'en' ? en : locale === 'lv' ? lv : et;

    return (
        <>
            <div
                className="bg-cover bg-no-repeat min-h-screen w-full"
                style={{
                    backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)), url(${heroImg.src})`
                }}
            >
                <Container className="flex flex-col justify-center min-h-screen pt-[114px] text-center">
                    <h1 className="text-white font-bold text-[30px] sm:text-[32px] mb-2.5 text-center">
                        <span className="text-def">{t[`span`]}</span> {t[`heroTitle`]}
                    </h1>

                    <p className="text-white text-[16px] font-medium text-center">
                        {t[`heroText`]}
                    </p>

                    <ScrollLink to="trapets-section" className="text-def flex items-center text-center justify-center font-bold mt-5 select-none cursor-pointer">
                        <IoIosArrowDown className='text-def mr-3' /> {t[`uuri`]}
                    </ScrollLink>
                </Container>


            </div >
        </>
    );
}
