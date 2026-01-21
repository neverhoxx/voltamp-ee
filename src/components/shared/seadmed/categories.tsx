"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import en from "@/locales/seadmed/en.json";
import lv from "@/locales/seadmed/lv.json";
import et from "@/locales/seadmed/et.json";

export type Locale = "en" | "et" | "lv";
export type CategoryKey = keyof typeof et;

const translations = { en, et, lv } as const;

interface CategoriesProps {
    locale: Locale;
}

export default function Categories({ locale }: CategoriesProps) {
    const pathname = usePathname();

    const availableLocales: Locale[] = ["en", "et", "lv"];
    const currentLocale: Locale = availableLocales.includes(locale) ? locale : "et";

    const t = translations[currentLocale];
    const categories = Object.entries(t) as [CategoryKey, string][];

    const isActive = (key: CategoryKey) => {
        if (key === "koik") {
            return pathname === `/${currentLocale}/tooted/seadmed`;
        }
        return pathname === `/${currentLocale}/tooted/seadmed/${key}`;
    };

    return (
        <nav className="flex gap-2 flex-wrap mb-4">
            {categories.map(([key, label]) => {
                const href =
                    key === "koik"
                        ? `/${currentLocale}/tooted/seadmed`
                        : `/${currentLocale}/tooted/seadmed/${key}`;

                return (
                    <Link
                        key={key}
                        href={href}
                        className={`px-4 py-2 rounded-lg transition ${isActive(key)
                            ? "bg-def text-white"
                            : "bg-gray-100 hover:bg-gray-200"
                            }`}
                    >
                        {label}
                    </Link>
                );
            })}
        </nav>
    );
}
