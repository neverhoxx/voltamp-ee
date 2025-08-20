import { Container } from "./container";

import en from '@/locales/popular-products/en.json';
import lv from '@/locales/popular-products/lv.json';
import et from '@/locales/popular-products/et.json';

import Image from "next/image";
import Link from "next/link";

import { HiArrowNarrowRight } from "react-icons/hi";

import { getProducts } from "@/data/products";
import type { Product } from "@/data/products";

const availableLocales = ['en', 'et', 'lv'];

interface PopularProductsProps {
    params: { locale: any };
}

export default function PopularProducts({ params }: PopularProductsProps) {
    const { locale } = params;
    const t = locale === 'en' ? en : locale === 'lv' ? lv : et;
    const currentLocale = availableLocales.includes(locale) ? locale : 'et';

    const products: Product[] = getProducts(locale);


    const altText =
        locale === 'en'
            ? 'Voltamp - Solar Panels, Roofing and Equipment'
            : locale === 'lv'
                ? 'Voltamp - Saules paneļi, Jumta darbi un Iekārtas'
                : 'Voltamp - Päikesepaneelid, Katusetööd ja Seadmed';

    return (
        <Container className="pt-20">
            <div className="w-full flex justify-between py-5 min-h-[103px] flex-wrap select-none">
                <div className="flex-1 pr-5">
                    <div
                        className="w-[169px] h-1 rounded-[2px] mb-[17px]"
                        style={{ background: "linear-gradient(to right, #00BFFF, #000000)" }}
                    ></div>
                    <h2 className="text-2xl font-bold">
                        {t[`populaarsed`]}
                    </h2>
                </div>
                <div className="flex justify-center items-end">
                    <Link className="flex items-center px-[15px] py-[10px] bg-black text-white rounded-tr-[18px] transition-all delay-500 ease-in-out hover:rounded-tr-0" href="/products">
                        {t[`vaata`]} <HiArrowNarrowRight className="ml-2.5" />
                    </Link>
                </div>
            </div>

            <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
                {products.map((product) => (

                    <Link
                        href={`/${currentLocale}/tooted/${product.slug}`}
                        key={product.id}
                        className="w-[290px] h-[440px] bg-gray-100 p-5 rounded-lg flex-shrink-0 snap-center select-none flex flex-col items-center justify-center m-2"
                    >
                        <div className="w-[210px] h-[250px] flex justify-center">
                            <Image
                                src={product.main_image}
                                alt={altText}
                                width={200}
                                height={150}
                                className="object-contain rounded-[5px]"
                            />
                        </div>

                        <div className="flex-1 flex flex-col justify-end">
                            <div className="w-full mb-2.5">
                                <Image
                                    src={product.logo}
                                    alt={altText}
                                    width={100}
                                    className="object-contain rounded-[5px]"
                                />
                            </div>
                            <h3 className="font-bold mb-2 text-start text-[16px]">{product.name}</h3>
                            <h3 className="text-def mt-[5px] text-2xl font-bold">{product.price}€ + {product.km}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </Container >
    );
}
