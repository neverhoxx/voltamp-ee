"use client";

import { useState } from "react";
import Categories, { type CategoryKey } from "@/components/shared/seadmed/categories";
import { Container } from "../container";

import { getProducts } from "@/data/products";
import type { Product } from "@/data/products";
import React from "react";

import Link from "next/link";
import Image from "next/image";

interface SeadmedClientProps {
    locale: string;
}

export default function SeadmedClient({ locale }: SeadmedClientProps) {
    const [currentCategory, setCurrentCategory] = useState<CategoryKey>("kõik");

    const availableLocales = ["en", "et", "lv"] as const;
    type Locale = typeof availableLocales[number];

    const currentLocale: Locale =
        availableLocales.includes(locale as Locale) ? (locale as Locale) : "et";


    const products: Product[] = getProducts(currentLocale);

    const filteredProducts =
        currentCategory === "kõik"
            ? products
            : products.filter((p) => p.category === currentCategory);

    return (
        <div className="pt-[114px]">
            <div>
                <Categories
                    locale={currentLocale}
                    currentCategory={currentCategory}
                    onCategoryChange={setCurrentCategory}
                />
            </div>

            <Container className="">
                <ul className="flex gap-2.5 mt-5 flex-wrap justify-center">
                    {filteredProducts.map((product) => (
                        <Link
                            href={`/${currentLocale}/tooted/${product.slug}`}
                            key={product.id}
                            className="w-[290px] h-[440px] bg-gray-100 p-5 rounded-lg flex-shrink-0 snap-center select-none flex flex-col items-center justify-center"
                        >
                            <div className="w-[210px] h-[250px] flex justify-center">
                                <Image
                                    src={product.main_image}
                                    alt="{altText}"
                                    width={200}
                                    height={150}
                                    className="object-contain rounded-[5px]"
                                />
                            </div>

                            <div className="flex-1 flex flex-col justify-end">
                                <div className="w-full mb-2.5">
                                    <Image
                                        src={product.logo}
                                        alt="{altText}"
                                        width={100}
                                        className="object-contain rounded-[5px]"
                                    />
                                </div>
                                <h3 className="font-bold mb-2 text-start text-[16px]">{product.name}</h3>
                                <h3 className="text-def mt-[5px] text-2xl font-bold">{product.price}€ + {product.km}</h3>
                            </div>
                        </Link>
                    ))}
                </ul>
            </Container>
        </div>
    );
}

