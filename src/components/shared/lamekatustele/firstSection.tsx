'use client';

import { Container } from "../container";

import en from '@/locales/katusele/en.json';
import lv from '@/locales/katusele/lv.json';
import et from '@/locales/katusele/et.json';

import { Link as ScrollLink, Element } from "react-scroll";

interface LamekatusteleSection1Props {
    params: { locale: string };
}

export default function LamekatusteleSection1({ params }: LamekatusteleSection1Props) {
    const { locale } = params;
    const t = locale === 'en' ? en : locale === 'lv' ? lv : et;

    return (
        <Element
            name="trapets-section"
            className="pb-[50px] pt-[114px]"
        >
            <Container className="flex flex-col items-center text-center">
                <h1 className="text-black font-bold text-[24px] sm:text-[30px] mb-5 text-left sm:text-center">
                    {t[`firstsectionTitle`]} <span className="text-def">{t[`lamekatusteleFirstSectionSpan`]}</span>
                </h1>

                <p className="text-black text-[16px] sm:text-[20px] font-semibold text-justify max-w-[900px]">
                    {t[`lamekatusteleFirstSectionText`]}
                </p>
            </Container>
        </Element >


    );
}
