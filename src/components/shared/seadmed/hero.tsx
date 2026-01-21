"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import heroImg from "@/images/tehtud tööd/seadmed/seadmete-paigaldus-1.jpg";
import Categories, {
    CategoryKey,
    Locale,
} from "@/components/shared/seadmed/categories";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Container } from "../container";

import en from "@/locales/seadmed/en.json";
import et from "@/locales/seadmed/et.json";
import lv from "@/locales/seadmed/lv.json";

import Hen from '@/locales/leht-valmisel/en.json';
import Hlv from '@/locales/leht-valmisel/lv.json';
import Het from '@/locales/leht-valmisel/et.json';

const translations = { en, et, lv } as const;

interface SeadmeteHeroProps {
    locale: string;
}

export default function SeadmeteHero({ locale }: SeadmeteHeroProps) {
    const pathname = usePathname();

    const currentLocale: Locale = ["en", "et", "lv"].includes(locale as Locale)
        ? (locale as Locale)
        : "et";

    const t = translations[currentLocale] as Record<CategoryKey, string>;
    const St = locale === 'en' ? en : locale === 'lv' ? lv : et;
    const Ht = locale === 'en' ? Hen : locale === 'lv' ? Hlv : Het;

    const slug = pathname.split("/")[4];

    const hasCategory = slug && slug in t;
    const category = hasCategory ? (slug as CategoryKey) : null;

    const heroTitle = category ? t[category] : St["koik"];

    return (
        <div
            className="pt-[114px]"
            style={{
                backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url(${heroImg.src})`,
                height: "70vh",
            }}
        >
            <Container className="flex flex-col justify-center">
                <Breadcrumb className="select-none mb-2.5">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink
                                className="text-white font-bold hover:text-[#00BFFF]"
                                href="/"
                            >
                                {Ht.home}
                            </BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbSeparator className="text-white" />

                        <BreadcrumbItem>
                            <BreadcrumbLink
                                className="text-white font-bold hover:text-[#00BFFF]"
                                href={`/${currentLocale}/tooted/seadmed`}
                            >
                                {St.koik}
                            </BreadcrumbLink>
                        </BreadcrumbItem>

                        {category && (
                            <>
                                <BreadcrumbSeparator className="text-white" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage className="text-[#00BFFF] font-bold">
                                        {t[category]}
                                    </BreadcrumbPage>
                                </BreadcrumbItem>
                            </>
                        )}
                    </BreadcrumbList>
                </Breadcrumb>

                <h1 className="text-white font-bold text-[30px] sm:text-[32px] mb-5">
                    {heroTitle}
                </h1>

                <Categories locale={currentLocale} />
            </Container>
        </div>
    );
}
