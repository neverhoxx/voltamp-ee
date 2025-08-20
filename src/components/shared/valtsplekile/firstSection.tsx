'use client';

import { Container } from "../container";

import en from '@/locales/katusele/en.json';
import lv from '@/locales/katusele/lv.json';
import et from '@/locales/katusele/et.json';

import Link from "next/link";

import { IoIosArrowDown } from "react-icons/io";

import { Link as ScrollLink, Element } from "react-scroll";

interface ValtsplekileSection1Props {
    params: { locale: string };
}

export default function ValtsplekileSection1({ params }: ValtsplekileSection1Props) {
    const { locale } = params;
    const t = locale === 'en' ? en : locale === 'lv' ? lv : et;

    return (
        <Element
            name="trapets-section"
            className="pb-[50px] pt-[114px]"
        >
            <Container className="flex flex-col items-center text-center">
                <h1 className="text-black font-bold text-[24px] sm:text-[30px] mb-5 text-left sm:text-center">
                    {t[`firstsectionTitle`]} <span className="text-def">{t[`ValtsfirstsectionSpan`]}</span>
                </h1>

                <p className="text-black text-[16px] sm:text-[20px] font-semibold text-justify max-w-[900px]">
                    {t[`ValtsfirstsectionText`]}
                </p>
            </Container>
        </Element >


    );
}
