import { Container } from "./container";

import en from '@/locales/popular-products/en.json';
import lv from '@/locales/popular-products/lv.json';
import et from '@/locales/popular-products/et.json';

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
                        Energia, mis võid usaldada
                    </h2>
                </div>

                <div className="flex justify-center items-center flex-wrap">
                    <div className="border-l-2 px-10 max-w-[300px] w-full 
                sm:w-auto sm:max-w-none sm:h-full sm:max-h-[200px]">

                        <h3 className="text-[22px] text-def select-none font-bold">
                            Tooted
                        </h3>
                        <ul className="mt-1">
                            <li>
                                <Link className="font-semibold" href={`/${currentLocale}/tooted/seadmed`}>
                                    Seadmed <span className='text-[#00BFFF]'>→</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="font-semibold" href={`/${currentLocale}/standardpaneeli-susteemid/`}>
                                    Standardpaneeli süsteemid <span className='text-[#00BFFF]'>→</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="font-semibold" href={`/${currentLocale}/integreeritav-paikesekatus`}>
                                    Integreeritav päikesekatus <span className='text-[#00BFFF]'>→</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="border-l-2 px-10 max-w-[300px] w-full 
                sm:w-auto sm:max-w-none sm:h-full sm:max-h-[200px]">
                        <h3 className="text-[22px] text-def select-none font-bold">
                            Kasulikku
                        </h3>
                        <ul className="mt-1">
                            <li>
                                <Link className="font-semibold" href={`/${currentLocale}/kasulikku/pildigalerii`}>
                                    Tehtud tööd <span className='text-[#00BFFF]'>→</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="font-semibold" href={`/${currentLocale}/katuse-paigaldus`}>
                                    Katuse paigaldus <span className='text-[#00BFFF]'>→</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="font-semibold" href={`/${currentLocale}/kasulikku/artiklid`}>
                                    Artiklid <span className='text-[#00BFFF]'>→</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="border-l-2 px-10 max-w-[300px] w-full 
                sm:w-auto sm:max-w-none sm:h-full sm:max-h-[200px]">
                        <h3 className="text-[22px] text-def select-none font-bold">
                            Meist
                        </h3>
                        <ul className="mt-1">
                            <li>
                                <Link className="font-semibold" href={`/${currentLocale}/meist`}>
                                    Loe meist <span className='text-[#00BFFF]'>→</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="font-semibold" href={`/${currentLocale}/meist/partnerid`}>
                                    Meie partnerid <span className='text-[#00BFFF]'>→</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="font-semibold" href={`/${currentLocale}/meist/kontaktid`}>
                                    Meie kontaktid <span className='text-[#00BFFF]'>→</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="font-semibold" href={`/${currentLocale}/kontakt`}>
                                    Võta ühendust <span className='text-[#00BFFF]'>→</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="border-l-2 px-10 max-w-[300px] w-full 
                sm:w-auto sm:max-w-none sm:h-full sm:max-h-[200px]">
                        <h3 className="text-[22px] text-def select-none font-bold">
                            Teenused
                        </h3>
                        <ul className="mt-1">
                            <li>
                                <Link className="font-semibold" href={`/${currentLocale}/teenused/paikeseparkide-kontroll-ja-hooldus`}>
                                    Päikeseparkide kontroll ja hooldus <span className='text-[#00BFFF]'>→</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="font-semibold" href={`/${currentLocale}/katuse-paigaldus`}>
                                    Katuse paigaldus <span className='text-[#00BFFF]'>→</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="font-semibold" href={`/${currentLocale}/katuse-paigaldus/plekk-katused`}>
                                    Plekk katused <span className='text-[#00BFFF]'>→</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="font-semibold" href={`/${currentLocale}/katuse-paigaldus/eterniit-katused`}>
                                    Eterniit katus <span className='text-[#00BFFF]'>→</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="font-semibold" href={`/${currentLocale}/katuse-paigaldus/kivikatus`}>
                                    Kivikatus <span className='text-[#00BFFF]'>→</span>
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
                        <h1 className="font-bold">Adress</h1>
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
