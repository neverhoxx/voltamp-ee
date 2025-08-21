"use client";

import { Container } from "../container";
import en from '@/locales/seadmed/en.json';
import lv from '@/locales/seadmed/lv.json';
import et from '@/locales/seadmed/et.json';

import { FaCartShopping } from "react-icons/fa6";

const translations = { en, et, lv } as const;
export type Locale = keyof typeof translations;

import { useState } from "react";

export type CategoryKey = keyof typeof et;

import CartDrawer from "../cart-drawer";

interface CategoriesProps {
    locale: any;
    currentCategory: CategoryKey;
    onCategoryChange: (key: CategoryKey) => void;
}

export default function Categories({
    locale,
    currentCategory,
    onCategoryChange,
}: CategoriesProps) {
    const availableLocales: Locale[] = ["en", "et", "lv"];
    const currentLocale: Locale = availableLocales.includes(locale as Locale)
        ? (locale as Locale)
        : "et";

    const t = translations[currentLocale];

    const [category, setCategory] = useState<CategoryKey>(currentCategory);

    const categories = Object.entries(t) as [CategoryKey, any][];

    return (
        <Container>
            <header className="w-full select-none">
                <h1 className="text-2xl font-bold mb-4">{t[currentCategory]}</h1>

                <div className="flex justify-between items-center">
                    <nav className="flex gap-2 flex-wrap">
                        {categories.map(([key, label]) => (
                            <button
                                key={key}
                                onClick={() => onCategoryChange(key)}
                                className={`px-4 py-2 rounded-lg text-left transition ${currentCategory === key
                                    ? "bg-def text-white"
                                    : "bg-gray-100 hover:bg-gray-200"
                                    }`}
                            >
                                {label}
                            </button>
                        ))}
                    </nav>
                    <CartDrawer locale={locale}>
                        <button className="rounded-4xl flex items-center justify-center px-10 py-4 bg-[#f5f5f5] relative">
                            <FaCartShopping size="24" className="text-def" />
                            <span className="absolute top-0 right-[30%] rounded-full text-black">
                                1
                            </span>
                        </button>
                    </CartDrawer>

                </div>

            </header>
        </Container>
    );
}
