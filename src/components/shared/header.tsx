'use client';

import { Container } from './container';

import Link from 'next/link';
import Image from 'next/image';

import { usePathname } from 'next/navigation';

import { useState, useEffect } from 'react';
import { useRef } from 'react';

import logo from '@/images/logos/logo.webp';

import en from '@/locales/header/en.json';
import lv from '@/locales/header/lv.json';
import et from '@/locales/header/et.json';

type LocaleDict = Record<string, string>;

const locales: Record<string, LocaleDict> = { en, lv, et };
const availableLocales = ['en', 'et', 'lv'];

import { HiArrowNarrowRight } from "react-icons/hi";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

interface HeaderProps {
    locale: string;
}

export default function Header({ locale }: HeaderProps) {
    const pathname = usePathname();
    const currentLocale = availableLocales.includes(locale) ? locale : 'et';
    const t = locales[currentLocale] || {};

    const [isSolid, setIsSolid] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
    const [isMegaFixed, setIsMegaFixed] = useState(false);

    const highlightPaths = [
        "/et/tooted", "/lv/tooted", "/en/tooted",
        "/et/kasulikku/pildigalerii/viljandimaa", "/lv/kasulikku/pildigalerii/viljandimaa", "/en/kasulikku/pildigalerii/viljandimaa",
        "/et/meist/partnerid", "/lv/meist/partnerid", "/en/meist/partnerid",
        "/et/kasulikku/pildigalerii/autovarjualune", "/lv/kasulikku/pildigalerii/autovarjualune", "/en/kasulikku/pildigalerii/autovarjualune",
        "/et/kasulikku/pildigalerii/in-roof", "/lv/kasulikku/pildigalerii/in-roof", "/en/kasulikku/pildigalerii/in-roof",
        "/et/kasulikku/pildigalerii/maapark", "/lv/kasulikku/pildigalerii/maapark", "/en/kasulikku/pildigalerii/maapark",
        "/et/kasulikku/pildigalerii/standardlahendus", "/lv/kasulikku/pildigalerii/standardlahendus", "/en/kasulikku/pildigalerii/standardlahendus"

    ];

    const isHighlighted = highlightPaths.some(path =>
        pathname.startsWith(path)
    );

    const toggleMegaMenu = (menu: string) => {
        setActiveMegaMenu(prev => {
            const newMenu = prev === menu ? null : menu;
            if (newMenu) {
                const fixedNow = window.scrollY > 50;
                setIsMegaFixed(fixedNow);

            }
            return newMenu;
        });
    };

    useEffect(() => {
        setActiveMegaMenu(null);
        setIsOpen(false);
    }, [pathname]);

    const openMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsSolid(window.scrollY > 50);
            if (activeMegaMenu) {
                setIsMegaFixed(window.scrollY > 50);
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeMegaMenu]);

    const cleanPathname = pathname.startsWith(`/${currentLocale}/`)
        ? pathname.slice(currentLocale.length + 2)
        : '';

    const megaMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                megaMenuRef.current &&
                !megaMenuRef.current.contains(event.target as Node)
            ) {
                setActiveMegaMenu(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (!megaMenuRef.current) return;

        const handleLinkClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (target.closest('a')) {
                setActiveMegaMenu(null);
            }
        };

        const menuElement = megaMenuRef.current;
        menuElement.addEventListener('click', handleLinkClick);

        return () => {
            menuElement.removeEventListener('click', handleLinkClick);
        };
    }, []);

    const isEestiKeel = currentLocale === "et";

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isOpen]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full h-[114px] select-none transition-colors duration-500 z-50
                        ${isSolid ? "bg-white" : "bg-white/0"}`}
            >

                <Container className="flex justify-between items-center relative">
                    <Link href={`/${currentLocale}`} className="h-10 w-[150px] cursor-pointer">
                        <Image className="h-10 w-[150px]" src={logo} alt="Voltamp - Logo" />
                    </Link>

                    <nav className="hidden sm:block flex-1 px-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <ul className="flex gap-6 text-base font-medium justify-end ">
                            {['tooted', 'kasulikku', 'meist', 'teenused'].map(menu => (
                                <li key={menu}>
                                    <button
                                        aria-expanded={activeMegaMenu === menu}
                                        aria-controls={`mega-menu-${menu}`}
                                        onClick={() => toggleMegaMenu(menu)}
                                        className={`transition-colors duration-500 hover:text-[#FFAC12] cursor-pointer ${isHighlighted
                                            ? 'text-black'
                                            : isSolid && activeMegaMenu
                                                ? 'text-black'
                                                : activeMegaMenu === menu
                                                    ? 'text-white'
                                                    : isSolid
                                                        ? 'text-black'
                                                        : 'text-white'
                                            }`}

                                    >
                                        {t[`nav.${menu}`]}
                                    </button>
                                </li>
                            ))}

                        </ul>

                    </nav>

                    <div className="hidden xl:flex flex-1/40 justify-end text-white">
                        <Link href={`/${currentLocale}/kontakt`} className="px-[30px] py-3 bg-[#00BFFF] text-black rounded-tr-[18px] cursor-pointer transition-all duration-500 ease-in-out hover:rounded-tr-[0px] flex items-center">
                            {t[`küsi`]}

                            <HiArrowNarrowRight className="ml-[10px] text-[#000]" />
                        </Link>

                    </div>

                    <div className="flex gap-4 ml-2">
                        {availableLocales.map(loc => {
                            const switchHref = pathname.startsWith(`/${currentLocale}/`)
                                ? `/${loc}/${cleanPathname}`
                                : `/${loc}`;
                            return (
                                <Link
                                    key={loc}
                                    href={switchHref}
                                    className={`uppercase font-semibold ${loc === currentLocale
                                        ? `underline ${isOpen || isSolid || isHighlighted ? 'text-black' : 'text-white'}`
                                        : `${isOpen || isSolid ? 'text-black hover:opacity-70' : 'text-white hover:opacity-70'} ${isHighlighted ? '!text-black' : ''}`
                                        }`}

                                >
                                    {loc}
                                </Link>
                            );
                        })}
                    </div>

                    <div className="header-nav-menu-btn" onClick={openMenu}>
                        <div className={`menu-btn ${isOpen ? "active" : isSolid ? 'black' : ""}`} />
                    </div>

                </Container>
            </header >

            <div
                ref={megaMenuRef}
                className={`left-0  pb-8 w-full min-h-[360px] bg-black/45 backdrop-blur-[11px]
                                transition-opacity duration-500 select-none z-10
                                ${activeMegaMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
                                ${isMegaFixed ? "fixed top-[114px] pt-10" : "absolute top-0 pt-[124px]"}`}
            >

                <Container className='flex justify-between flex-wrap text-white'>
                    {activeMegaMenu === 'tooted' && (
                        <>
                            <div className='px-2.5 mt-2.5'>
                                <h3 className='text-[18.72px] font-extrabold mb-[15px]'>{t[`seadmed`]}</h3>
                                <ul>
                                    <li className='mb-2.5'>
                                        <Link className='font-medium text-[16px]' href={`/${currentLocale}/tooted/seadmed`}>
                                            {t[`seadmed`]} <span className='text-[#00BFFF]'>→</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className='px-2.5 mt-2.5'>
                                <h3 className='text-[18.72px] font-extrabold mb-[15px]'>{t[`standardpaneeli`]}</h3>
                                <ul>
                                    <li className='mb-2.5'>
                                        <Link className='font-medium text-[16px]' href={`/${currentLocale}/standardpaneeli-susteem/viilkatustele/trapetsprofiilplekile`}>
                                            {t[`trapetsprofiilplekile`]} <span className='text-[#00BFFF]'>→</span>
                                        </Link>
                                    </li>
                                    <li className='mb-2.5'>
                                        <Link className='font-medium text-[16px]' href={`/${currentLocale}/standardpaneeli-susteem/viilkatustele/valtsplekile`}>
                                            {t[`valtsplekile`]} <span className='text-[#00BFFF]'>→</span>
                                        </Link>
                                    </li>
                                    <li className='mb-2.5'>
                                        <Link className='font-medium text-[16px]' href={`/${currentLocale}/standardpaneeli-susteem/viilkatustele/kivikatusele`}>
                                            {t[`kivikatusele`]} <span className='text-[#00BFFF]'>→</span>
                                        </Link>
                                    </li>
                                    <li className='mb-2.5'>
                                        <Link className='font-medium text-[16px]' href={`/${currentLocale}/standardpaneeli-susteem/viilkatustele/lamekatustele`}>
                                            {t[`lamekatustele`]} <span className='text-[#00BFFF]'>→</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='font-medium text-[16px]' href={`/${currentLocale}/standardpaneeli-susteem/viilkatustele/maapargile`}>
                                            {t[`maapark`]} <span className='text-[#00BFFF]'>→</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className='px-2.5 mt-2.5'>
                                <h3 className='text-[18.72px] font-extrabold mb-[15px]'>{t[`integreeritav`]}</h3>
                                <ul>
                                    <li className='mb-2.5'>
                                        <Link className='font-medium text-[16px]' href={`/${currentLocale}/integreeritav-paikesekatus/taiskatuse-susteem`}>
                                            {t[`täiskatuse`]} <span className='text-[#00BFFF]'>→</span>
                                        </Link>
                                    </li>
                                    <li className='mb-2.5'>
                                        <Link className='font-medium text-[16px]' href={`/${currentLocale}/integreeritav-paikesekatus/in-roof-susteem`}>
                                            <span className={`${isEestiKeel ? "italic" : "regular"} `}>{t[`inroof`]}</span> {t[`inroofsüst`]} <span className='text-[#00BFFF]'>→</span>
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        </>
                    )}
                    {activeMegaMenu === 'kasulikku' && (
                        <>
                            <div className='px-2.5 mt-2.5'>
                                <h3 className='text-[18.72px] font-extrabold mb-[15px]'>{t[`tehtud`]}</h3>
                                <ul>
                                    <li className=''>
                                        <Link className='font-medium text-[16px]' href={`/${currentLocale}/kasulikku/pildigalerii`}>
                                            {t[`galerii`]} <span className='text-def'>→</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className='px-2.5 mt-2.5'>
                                <h3 className='text-[18.72px] font-extrabold mb-[15px]'>{t[`paigaldus`]}</h3>
                                <ul>
                                    <li className=''>
                                        <Link className='font-medium text-[16px]' href={`/${currentLocale}/katuse-paigaldus`}>
                                            {t[`uuri`]} <span className='text-[#00BFFF]'>→</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className='px-2.5 mt-2.5'>
                                <h3 className='text-[18.72px] font-extrabold mb-[15px]'>{t[`kasulikku`]}</h3>
                                <ul>
                                    <li className='mb-2.5'>
                                        <Link className='font-medium text-[16px]' href={`/${currentLocale}/kasulikku/kkk`}>
                                            {t[`kkk`]} <span className='text-[#00BFFF]'>→</span>
                                        </Link>
                                    </li>
                                    <li className='mb-2.5'>
                                        <Link className='font-medium text-[16px]' href={`/${currentLocale}/kasulikku/miks-otsustada-akususteemi-kasuks`}>
                                            {t[`miks`]} <span className='text-[#00BFFF]'>→</span>
                                        </Link>
                                    </li>
                                    <li className=''>
                                        <Link className='font-medium text-[16px]' href={`/${currentLocale}/kasulikku/erinevad-artiklid`}>
                                            {t[`erinevad`]} <span className='text-[#00BFFF]'>→</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </>
                    )}
                    {activeMegaMenu === 'meist' && (
                        <>
                            <div className='px-2.5 mt-2.5'>
                                <h3 className='text-[18.72px] font-extrabold mb-[15px]'>{t[`meist`]}</h3>
                                <ul>
                                    <li className='mb-2.5'>
                                        <Link
                                            className="font-medium text-[16px]"
                                            href={`/${currentLocale}/meist`}
                                        >
                                            {t["loe"]} <span className="text-[#00BFFF]">→</span>
                                        </Link>

                                    </li>
                                    <li className='mb-2.5'>
                                        <Link className='font-medium text-[16px]' href={`/${currentLocale}/meist/partnerid`}>
                                            {t[`partnerid`]} <span className='text-[#00BFFF]'>→</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='font-medium text-[16px]' href={`/${currentLocale}/meist/meeskond`}>
                                            {t[`team`]} <span className='text-[#00BFFF]'>→</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className='px-2.5 mt-2.5'>
                                <h3 className='text-[18.72px] font-extrabold mb-[15px]'>{t[`kontaktid`]}</h3>
                                <ul>
                                    <li className='mb-2.5'>
                                        <Link className='font-medium text-[16px]' href="https://www.facebook.com/people/Voltamp-Energy/61575306960083/">
                                            Facebook <span className='text-[#00BFFF]'>→</span>
                                        </Link>
                                    </li>
                                    <li className='mb-2.5'>
                                        <span className='font-medium text-[16px] select-text'>
                                            Info@voltamp.ee
                                        </span>
                                    </li>
                                    <li>
                                        <span className='font-medium text-[16px] select-text'>
                                            +372 555 343 14
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div className='px-2.5 mt-2.5'>
                                <h3 className='text-[18.72px] font-extrabold mb-[15px]'>{t[`võta`]}</h3>
                                <ul>
                                    <li>
                                        <Link className='font-medium text-[16px]' href={`/${currentLocale}/kontakt`}>
                                            {t[`kontakt`]} <span className='text-[#00BFFF]'>→</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </>
                    )}
                    {activeMegaMenu === 'teenused' && (
                        <>
                            <div className='px-2.5 mt-2.5'>
                                <h3 className='text-[18.72px] font-extrabold mb-[15px]'>{t[`kontroll`]}</h3>
                                <ul>
                                    <li className='mb-2.5'>
                                        <Link className='font-medium text-[16px]' href={`/${currentLocale}/teenused/paikeseparkide-kontroll-ja-diagnostika`}>
                                            {t[`diagnostika`]} <span className='text-[#00BFFF]'>→</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='font-medium text-[16px]' href={`/${currentLocale}/teenused/hooldus`}>
                                            {t[`hooldus`]} <span className='text-[#00BFFF]'>→</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className='px-2.5 mt-2.5'>
                                <h3 className='text-[18.72px] font-extrabold mb-[15px]'>{t[`paigaldus`]}</h3>

                                <div className="flex flex-wrap justify-between">
                                    <ul className='mr-10'>
                                        <h3 className='text-[17px] font-extrabold mb-[15px]'>{t[`plekk`]}</h3>
                                        <li className='mb-2.5'>
                                            <Link className='font-medium text-[16px]' href={`/${currentLocale}/katuse-paigaldus/trapetsprofiilkatus`}>
                                                {t[`trapetsprofiilkatus`]} <span className='text-[#00BFFF]'>→</span>
                                            </Link>
                                        </li>
                                        <li className='mb-2.5'>
                                            <Link className='font-medium text-[16px]' href={`/${currentLocale}/katuse-paigaldus/valtsplekk-katus`}>
                                                {t[`valtsplekk`]} <span className='text-[#00BFFF]'>→</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className='font-medium text-[16px]' href={`/${currentLocale}/katuse-paigaldus/kiviprofiilkatus`}>
                                                {t[`kiviprofiilkatus`]} <span className='text-[#00BFFF]'>→</span>
                                            </Link>
                                        </li>
                                    </ul>


                                    <ul className='mr-10'>
                                        <h3 className='text-[17px] font-extrabold mb-[15px]'>{t[`eterniit`]}</h3>
                                        <li>
                                            <Link className='font-medium text-[16px]' href={`/${currentLocale}/katuse-paigaldus/eterniit-katus`}>
                                                {t[`eterniit`]} <span className='text-[#00BFFF]'>→</span>
                                            </Link>
                                        </li>
                                    </ul>

                                    <ul>
                                        <h3 className='text-[17px] font-extrabold mb-[15px]'>{t[`kivikatus`]}</h3>
                                        <li className='mb-2.5'>
                                            <Link className='font-medium text-[16px]' href={`/${currentLocale}/katuse-paigaldus/lainekivi`}>
                                                {t[`lainekivi`]} <span className='text-[#00BFFF]'>→</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className='font-medium text-[16px]' href={`/${currentLocale}/katuse-paigaldus/silekivi`}>
                                                {t[`silekivi`]} <span className='text-[#00BFFF]'>→</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </>
                    )}
                </Container>
            </div>

            <div
                className={`top-0 left-0 w-full h-full bg-white pt-[100px] flex flex-col overflow-hidden select-none z-45
          transform origin-top transition-transform duration-300 ease-in-out 
          ${isOpen ? 'scale-y-100 relative' : 'scale-y-0 fixed'}
        `}
            >
                <nav className="flex flex-col flex-1 px-3">
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full"

                    >
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-def font-black text-[16px] cursor-pointer">{t[`integreeritav`]}</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <ul className="font-bold">
                                    <li className='mb-1'>
                                        <Link className='font-medium text-[14px]' href={`/${currentLocale}/integreeritav-paikesekatus/taiskatuse-susteem`}>
                                            {t[`täiskatuse`]} <span className='text-[#00BFFF]'>→</span>
                                        </Link>
                                    </li>
                                    <li className=''>
                                        <Link className='font-medium text-[14px]' href={`/${currentLocale}/integreeritav-paikesekatus/in-roof-susteem`}>
                                            <span className={`${isEestiKeel ? "italic" : "regular"} `}>{t[`inroof`]}</span> {t[`inroofsüst`]} <span className='text-[#00BFFF]'>→</span>
                                        </Link>
                                    </li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-def font-black text-[16px] cursor-pointer">{t[`seadmed`]}</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <ul className="font-bold">
                                    <li className=''>
                                        <Link className='font-medium text-[14px]' href={`/${currentLocale}/tooted/seadmed`}>
                                            {t[`seadmed`]} <span className='text-[#00BFFF]'>→</span>
                                        </Link>
                                    </li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-def font-black text-[16px] cursor-pointer">{t[`standardpaneeli`]}</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <ul className="font-bold">
                                    <li className='mb-1'>
                                        <Link className='font-medium text-[14px]' href={`/${currentLocale}/standardpaneeli-susteem/viilkatustele/trapetsprofiilplekile`}>
                                            {t[`trapetsprofiilplekile`]} <span className='text-[#00BFFF]'>→</span>
                                        </Link>
                                    </li>
                                    <li className='mb-1'>
                                        <Link className='font-medium text-[14px]' href={`/${currentLocale}/standardpaneeli-susteem/viilkatustele/valtsplekile`}>
                                            {t[`valtsplekile`]} <span className='text-[#00BFFF]'>→</span>
                                        </Link>
                                    </li>
                                    <li className='mb-1'>
                                        <Link className='font-medium text-[14px]' href={`/${currentLocale}/standardpaneeli-susteem/viilkatustele/kivikatusele`}>
                                            {t[`kivikatusele`]} <span className='text-[#00BFFF]'>→</span>
                                        </Link>
                                    </li>
                                    <li className='mb-1'>
                                        <Link className='font-medium text-[14px]' href={`/${currentLocale}/standardpaneeli-susteem/viilkatustele/lamekatustele`}>
                                            {t[`lamekatustele`]} <span className='text-[#00BFFF]'>→</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='font-medium text-[14px]' href={`/${currentLocale}/standardpaneeli-susteem/viilkatustele/maapargile`}>
                                            {t[`maapark`]} <span className='text-[#00BFFF]'>→</span>
                                        </Link>
                                    </li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4">
                            <AccordionTrigger className="text-def font-black text-[16px] cursor-pointer">{t[`tehtud`]}</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <ul className="font-bold">
                                    <li className=''>
                                        <Link className='font-medium text-[14px]' href={`/${currentLocale}/kasulikku/pildigalerii`}>
                                            {t[`galerii`]} <span className='text-def'>→</span>
                                        </Link>
                                    </li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-5">
                            <AccordionTrigger className="text-def font-black text-[16px] cursor-pointer">{t[`paigaldus`]}</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <ul className="font-bold">
                                    <li className=''>
                                        <Link className='font-medium text-[14px]' href={`/${currentLocale}/katuse-paigaldus`}>
                                            {t[`uuri`]} <span className='text-[#00BFFF]'>→</span>
                                        </Link>
                                    </li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-6">
                            <AccordionTrigger className="text-def font-black text-[16px] cursor-pointer">{t[`meist`]}</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <ul className="font-bold">
                                    <li className='mb-1'>
                                        <Link
                                            className="font-medium text-[14px]"
                                            href={`/${currentLocale}/meist`}
                                        >
                                            {t["loe"]} <span className="text-[#00BFFF]">→</span>
                                        </Link>

                                    </li>
                                    <li className='mb-1'>
                                        <Link className='font-medium text-[14px]' href={`/${currentLocale}/meist/partnerid`}>
                                            {t[`partnerid`]} <span className='text-[#00BFFF]'>→</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='font-medium text-[14px]' href={`/${currentLocale}/meist/meeskond`}>
                                            {t[`team`]} <span className='text-[#00BFFF]'>→</span>
                                        </Link>
                                    </li>
                                </ul>

                            </AccordionContent>
                        </AccordionItem>

                    </ Accordion>
                </nav>


                <div className="absolute bottom-0 w-full flex justify-center items-center gap-5 p-4 border-t bg-white border-gray-300 select-text">
                    <Link className="text-black hover:text-blue-600" href="https://www.facebook.com/share/19VfGPjeYt/">
                        Facebook
                    </Link>
                    <span className="border-l-4 border-blue-400 pl-4 text-center text-black text-sm max-w-xs break-words">
                        Võta ühendust: Info@voltamp.ee, või tel: +372 555 343 14
                    </span>
                </div>
            </div>
        </>
    );
}
