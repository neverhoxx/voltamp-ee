import { Container } from "./container";

import en from '@/locales/header/en.json';
import lv from '@/locales/header/lv.json';
import et from '@/locales/header/et.json';

import Image from "next/image";
import Link from "next/link";

import logo from "@/images/logos/logo.webp";

import { FaFacebookF } from "react-icons/fa";



interface FooterProps {
    params: { locale: any };
}

export default function Footer({ params }: FooterProps) {
    const { locale } = params;
    const t = locale === 'en' ? en : locale === 'lv' ? lv : et;

    const availableLocales = ['en', 'et', 'lv'];
    const currentLocale = availableLocales.includes(locale) ? locale : 'et';

    return (
        <footer className="flex flex-col">
            <Container className="flex flex-wrap justify-between pt-25 h-auto">
                <div className="mb-5">
                    <Link href={`/${currentLocale}/`} className="max-w-[256px] max-h-[68px] select-none">
                        <Image className="max-w-[256px] max-h-[68px]" src={logo} alt="Voltamp - Logo" />
                    </Link>
                    <h2 className="font-bold mt-2 text-[22px]">
                        {t[`footerTitle`]}
                    </h2>
                </div>

                <div className="flex justify-center items-center flex-wrap">
                    <div className="border-l-2 px-10 max-w-[300px] w-full 
                sm:w-auto sm:max-w-none sm:h-full sm:max-h-[200px]">

                        <h3 className="text-[22px] text-def select-none font-bold">
                            {t[`nav.tooted`]}
                        </h3>
                        <ul className="mt-1">
                            <li>
                                <Link className="font-semibold" href={`/${currentLocale}/tooted/seadmed`}>
                                    {t[`seadmed`]} <span className='text-[#00BFFF]'>→</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="font-semibold" href={`/${currentLocale}/standardpaneeli-susteem/viilkatustele/trapetsprofiilplekile`}>
                                    {t[`standardpaneeli`]} <span className='text-[#00BFFF]'>→</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="font-semibold" href={`/${currentLocale}/integreeritav-paikesekatus/taiskatuse-susteem`}>
                                    {t[`integreeritav`]} <span className='text-[#00BFFF]'>→</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="border-l-2 px-10 max-w-[300px] w-full 
                sm:w-auto sm:max-w-none sm:h-full sm:max-h-[200px]">
                        <h3 className="text-[22px] text-def select-none font-bold">
                            {t[`nav.kasulikku`]}
                        </h3>
                        <ul className="mt-1">
                            <li>
                                <Link className="font-semibold" href={`/${currentLocale}/kasulikku/pildigalerii`}>
                                    {t[`tehtud`]} <span className='text-[#00BFFF]'>→</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="font-semibold" href={`/${currentLocale}/katuse-paigaldus`}>
                                    {t[`uuri`]} <span className='text-[#00BFFF]'>→</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="font-semibold" href={`/${currentLocale}/kasulikku/artiklid`}>
                                    {t[`artiklid`]} <span className='text-[#00BFFF]'>→</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="border-l-2 px-10 max-w-[300px] w-full 
                sm:w-auto sm:max-w-none sm:h-full sm:max-h-[200px]">
                        <h3 className="text-[22px] text-def select-none font-bold">
                            {t[`nav.meist`]}
                        </h3>
                        <ul className="mt-1">
                            <li>
                                <Link className="font-semibold" href={`/${currentLocale}/meist`}>
                                    {t[`loe`]} <span className='text-[#00BFFF]'>→</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="font-semibold" href={`/${currentLocale}/meist/partnerid`}>
                                    {t[`partnerid`]} <span className='text-[#00BFFF]'>→</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="font-semibold" href={`/${currentLocale}/meist/meeskond`}>
                                    {t[`team`]} <span className='text-[#00BFFF]'>→</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="font-semibold" href={`/${currentLocale}/kontakt`}>
                                    {t[`võta`]} <span className='text-[#00BFFF]'>→</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="border-l-2 px-10 max-w-[300px] w-full 
                sm:w-auto sm:max-w-none sm:h-full sm:max-h-[200px]">
                        <h3 className="text-[22px] text-def select-none font-bold">
                            {t[`nav.teenused`]}
                        </h3>
                        <ul className="mt-1">
                            <li>
                                <Link className="font-semibold" href={`/${currentLocale}/teenused/paikeseparkide-kontroll-ja-hooldus`}>
                                    {t[`kontroll`]} <span className='text-[#00BFFF]'>→</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="font-semibold" href={`/${currentLocale}/katuse-paigaldus`}>
                                    {t[`paigaldus`]} <span className='text-[#00BFFF]'>→</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="font-semibold" href={`/${currentLocale}/katuse-paigaldus/trapetsprofiilkatus`}>
                                    {t[`trapetsprofiilkatus`]} <span className='text-[#00BFFF]'>→</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="font-semibold" href={`/${currentLocale}/katuse-paigaldus/eterniit-katus`}>
                                    {t[`eterniit`]} <span className='text-[#00BFFF]'>→</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="font-semibold" href={`/${currentLocale}/katuse-paigaldus/kivikatus`}>
                                    {t[`silekivi`]} <span className='text-[#00BFFF]'>→</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>

            <div className="bg-[#0094c5] mt-10 pt-15">
                <Container className="text-white text-[18px] flex justify-between items-center border-b-2 pb-10 border-[#c7c7c7]">
                    <div className="">
                        <h1 className="font-bold">Voltamp OÜ</h1>
                        <h3 className="mt-2 text-[16px] font-semibold">+372 555 343 14</h3>
                        <h3 className="text-[16px] font-semibold">info@voltamp.ee</h3>
                    </div>

                    <div className="">
                        <h1 className="font-bold">Aadress</h1>
                        <h3 className="mt-2 text-[16px] font-semibold">Viljandi, Eesti</h3>
                    </div>
                </Container>
                <div className="">
                    <Container className="flex justify-between items-center py-5">
                        <Link className="" href="">
                            <FaFacebookF size="20" className="text-white hover:text-blue-700 duration-500" />
                        </Link>

                        <div className="text-white font-bold">
                            © Voltamp 2025
                        </div>
                    </Container>
                </div>
            </div>

        </footer>
    );
}
