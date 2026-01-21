"use client";

import { useState, useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";

import { getProducts } from "@/data/products";
import type { Product } from "@/data/products";

import { Container } from "../container";

import { useCart } from "@/context/CartContext";

import Categories, {
    CategoryKey,
    Locale,
} from "@/components/shared/seadmed/categories";

import en from "@/locales/seadmed/en.json";
import et from "@/locales/seadmed/et.json";
import lv from "@/locales/seadmed/lv.json";

import Pen from "@/locales/seadmed/seadmedPage/en.json";
import Pet from "@/locales/seadmed/seadmedPage/et.json";
import Plv from "@/locales/seadmed/seadmedPage/lv.json";

import Image from "next/image";
import { Link } from "lucide-react";

const translations = { en, et, lv } as const;

const BRANDS = ["Solax", "Huawei", "Tigo", "Solis", "Dyness"] as const;
type Brand = (typeof BRANDS)[number];

interface ProductsProps {
    locale: string;
}

export default function SeadmeteProducts({ locale }: ProductsProps) {
    const pathname = usePathname();
    const { addToCart } = useCart();

    const currentLocale: Locale = ["en", "et", "lv"].includes(locale as Locale)
        ? (locale as Locale)
        : "et";

    const t = translations[currentLocale] as Record<CategoryKey, string>;
    const Pt = locale === "en" ? Pen : locale === "lv" ? Plv : Pet;

    const slug = pathname.split("/")[4];
    const category: CategoryKey =
        slug && slug in t ? (slug as CategoryKey) : "koik";

    const products: Product[] = getProducts(currentLocale);


    const categoryProducts = useMemo(
        () =>
            products.filter(
                (p) => category === "koik" || p.category === category
            ),
        [products, category]
    );

    type SortType = "default" | "price-asc" | "price-desc";

    const [sort, setSort] = useState<SortType>("default");



    const prices = categoryProducts.map((p) => p.price);

    const minAvailable = prices.length ? Math.min(...prices) : 0;
    const maxAvailable = prices.length ? Math.max(...prices) : 0;

    const safeMax =
        minAvailable === maxAvailable ? maxAvailable + 1 : maxAvailable;

    const [priceRange, setPriceRange] = useState<[number, number]>([
        minAvailable,
        safeMax,
    ]);

    useEffect(() => {
        setPriceRange([minAvailable, safeMax]);
    }, [category, minAvailable, safeMax]);

    const [selectedBrands, setSelectedBrands] = useState<Brand[]>([]);

    const toggleBrand = (brand: Brand) => {
        setSelectedBrands((prev) =>
            prev.includes(brand)
                ? prev.filter((b) => b !== brand)
                : [...prev, brand]
        );
    };


    const filteredProducts = useMemo(() => {
        const result = categoryProducts.filter((p) => {
            const matchPrice =
                p.price >= priceRange[0] && p.price <= priceRange[1];

            const matchBrand =
                selectedBrands.length === 0 ||
                selectedBrands.includes(p.brand as Brand);

            return matchPrice && matchBrand;
        });

        if (sort === "price-asc") {
            return [...result].sort((a, b) => a.price - b.price);
        }

        if (sort === "price-desc") {
            return [...result].sort((a, b) => b.price - a.price);
        }

        return result;
    }, [categoryProducts, priceRange, selectedBrands, sort]);


    return (
        <div>
            <Container className="relative py-3">

                <div className="px-5 py-5 flex items-center justify-between gap-4 sticky top-[114px] bg-white/90 backdrop-blur-md">
                    <span className="font-semibold">
                        {Pt.leitud} {filteredProducts.length}
                        {currentLocale !== "et" ? ` ${Pt.iz} ` : ""}
                        {currentLocale === "et" ? "/" : ""}
                        {categoryProducts.length}{""}

                    </span>

                    <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value as SortType)}
                        className="rounded-full border-gray-400 border-2 px-3 py-1 text-[#000] text-sm font-semibold"
                    >
                        <option className="font-semibold" value="default">{Pt.def}</option>
                        <option className="font-semibold" value="price-asc">{Pt.priceV}</option>
                        <option className="font-semibold" value="price-desc">{Pt.priceU}</option>
                    </select>
                </div>

                <div className="flex items-start gap-6 py-5 flex-wrap">
                    <section className="top-[186px] min-w-[300px] px-5 product-sidebar">
                        <div>
                            <p className="mb-2 font-semibold">
                                {Pt.hind}: {priceRange[0]}€ – {priceRange[1]}€
                            </p>

                            <div className="relative h-10">
                                <div className="absolute top-1/2 h-1 w-full -translate-y-1/2 rounded bg-gray-600" />

                                <div
                                    className="absolute top-1/2 h-1 -translate-y-1/2 rounded bg-[#00BFFF]"
                                    style={{
                                        left: `${((priceRange[0] - minAvailable) /
                                            (safeMax - minAvailable)) *
                                            100
                                            }%`,
                                        right: `${100 -
                                            ((priceRange[1] - minAvailable) /
                                                (safeMax - minAvailable)) *
                                            100
                                            }%`,
                                    }}
                                />

                                <input
                                    type="range"
                                    min={minAvailable}
                                    max={safeMax}
                                    value={priceRange[0]}
                                    onChange={(e) =>
                                        setPriceRange([
                                            Math.min(
                                                Number(e.target.value),
                                                priceRange[1] - 1
                                            ),
                                            priceRange[1],
                                        ])
                                    }
                                    className="range-thumb absolute top-1/4 w-full appearance-none bg-transparent"
                                />

                                <input
                                    type="range"
                                    min={minAvailable}
                                    max={safeMax}
                                    value={priceRange[1]}
                                    onChange={(e) =>
                                        setPriceRange([
                                            priceRange[0],
                                            Math.max(
                                                Number(e.target.value),
                                                priceRange[0] + 1
                                            ),
                                        ])
                                    }
                                    className="range-thumb absolute top-1/4 w-full appearance-none bg-transparent"
                                />
                            </div>
                        </div>

                        <div>
                            <p className="mb-3 font-semibold">{Pt.brand}</p>

                            <div className="space-y-2">
                                {BRANDS.map((brand) => (
                                    <label
                                        key={brand}
                                        className="flex items-center gap-2 cursor-pointer select-none"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={selectedBrands.includes(brand)}
                                            onChange={() => toggleBrand(brand)}
                                            className="h-4 w-4 accent-[#00BFFF]"
                                        />
                                        <span className="capitalize">{brand}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </section>

                    <div className="flex-1">
                        {filteredProducts.length === 0 ? (
                            <div className="flex h-full items-center justify-center text-gray-400 text-lg">
                                {Pt.no}
                            </div>
                        ) : (
                            <div className="flex flex-wrap gap-x-5 gap-y-8 product-list-adaptive">
                                {filteredProducts.map((product) => (
                                    <div
                                        key={product.id}
                                        className="max-w-[260px] product-link"
                                    >
                                        <a
                                            href={`/${currentLocale}/tooted/${product.slug}`}
                                            key={product.id}
                                            className="max-w-[312px] flex flex-col"
                                        >

                                            <div className="w-full h-[250px] flex justify-center">
                                                <Image
                                                    src={product.main_image}
                                                    alt="{altText}"
                                                    width={200}
                                                    height={150}
                                                    className="object-contain rounded-[5px]"
                                                />
                                            </div>

                                            <div className="inline-flex mb-2.5">
                                                <div className="px-2 py-1 bg-def rounded-[8px]">
                                                    <span className="font-bold text-white text-[20px]">
                                                        {product.price}€&nbsp;+&nbsp;{product.km}
                                                    </span>

                                                </div>
                                            </div>

                                            <h4 className="font-bold mb-2.5 text-start text-[16px] product-name-a">
                                                {product.name}
                                            </h4>

                                            <ul>
                                                <li className="text-[14px] text-[#4e4b66] product-li">
                                                    {Pt.brand}:&nbsp;<span className="product-li text-[14px] font-bold text-black">{product.brand}</span>
                                                </li>
                                                <li className="text-[14px] text-[#4e4b66] product-li">
                                                    {Pt.type}:&nbsp;<span className="product-li text-[14px] font-bold text-black">{product.type}</span>
                                                </li>
                                                <li className="text-[14px] text-[#4e4b66] product-li">
                                                    {Pt.model}:&nbsp;<span className="product-li text-[14px] font-bold text-black">{product.subtype}</span>
                                                </li>
                                            </ul>
                                        </a>
                                        <div>
                                            <button onClick={() => addToCart(product)} className="w-full rounded-[10px] text-white bg-def py-2 mt-7 cursor-pointer hover:opacity-50 duration-300 product-btn">
                                                Add to cart
                                            </button>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

            </Container>
        </div>

    );
}
