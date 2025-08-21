'use client'

import { Container } from '@/components/shared/container';

import { use } from 'react';
import { Link as ScrollLink, Element } from "react-scroll";

import en from '@/locales/main-hero/en.json';
import lv from '@/locales/main-hero/lv.json';
import et from '@/locales/main-hero/et.json';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import { getProducts } from "@/data/products";
import type { Product } from "@/data/products";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { MdAddShoppingCart } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { useCart } from "@/context/CartContext";

import { useState } from 'react';

export default function ProductDetails({ params }: { params: Promise<{ slug: string; locale: any }> }) {
    const { slug, locale } = use(params);
    const t = locale === 'en' ? en : locale === 'lv' ? lv : et;
    const pathname = usePathname();

    const pslug = pathname.split("/").pop();

    const products: Product[] = getProducts(locale);
    const product = products.find(p => p.slug === pslug) as Product | undefined;
    const product_images = product?.images;
    const [mainImage, setMainImage] = useState(product_images?.[0] ?? "");

    const { addToCart } = useCart();

    if (!product) {
        return <Container>Product not found</Container>;
    }

    return (
        <>
            <Container className='pt-[114px] max-w-[1090px] min-h-screen'>
                <div className="bg-[#f5f5f5] sm:p-5 p-1 flex flex-wrap justify-center items-center products-det">
                    <div className="flex flex-col justify-center items-center sm:flex-1/2 product-det-adaptive-w select-none">
                        {product && "image" in product && (
                            <Image src={product.image} alt={product.name}
                                className='object-contain w-[400px] h-[200px]' />
                        )}

                        {product && "images" in product && (
                            <div className='flex flex-col justify-center items-center'>
                                <div className="relative main-image flex items-center justify-center ">
                                    <button
                                        onClick={() => {
                                            if (!product_images) return;
                                            const currentIndex = product_images.indexOf(mainImage);
                                            const prevIndex = (currentIndex - 1 + product_images.length) % product_images.length;
                                            setMainImage(product_images[prevIndex]);
                                        }}
                                        className=" bg-white/80 p-2 rounded-full shadow hover:bg-white h-[36px] cursor-pointer"
                                    >
                                        <AiOutlineLeft size={20} />
                                    </button>
                                    <div className="sm:w-[400px] sm:h-[200px] h-[169px] w-[220px] flex items-center justify-center">
                                        <Image
                                            src={mainImage}
                                            alt={product.name}
                                            className='sm:w-[400px] sm:h-[200px] h-[169px] w-[220px]'
                                            style={{ objectFit: "contain" }}
                                        />
                                    </div>

                                    <button
                                        onClick={() => {
                                            if (!product_images) return;
                                            const currentIndex = product_images.indexOf(mainImage);
                                            const nextIndex = (currentIndex + 1) % product_images.length;
                                            setMainImage(product_images[nextIndex]);
                                        }}
                                        className=" bg-white/80 p-2 rounded-full shadow hover:bg-white h-[36px] cursor-pointer"
                                    >
                                        <AiOutlineRight size={20} />
                                    </button>
                                </div>

                                <div className="sm:flex gap-2 mt-20 hidden">
                                    {product_images?.map((img, idx) => (
                                        <div
                                            key={idx}
                                            onClick={() => setMainImage(img)}
                                            className={`flex justify-center items-center cursor-pointer border w-[72px] h-[44px] p-2.5 ${mainImage === img ? "border-blue-500" : "border-transparent"
                                                }`}
                                        >
                                            <Image
                                                src={img}
                                                alt={`${product.name} thumbnail ${idx + 1}`}
                                                width={100}
                                                height={100}
                                                style={{ objectFit: "contain" }}
                                                className='w-[72px] h-[44px]'
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="flex-1/2 sm:border-l-[1.6px] border-0 px-10 product-det-adaptive-h h-full">
                        <div className="flex mb-5 select-none">
                            <Image className='' width={100} src={product?.logo} alt='Solax Logo' />
                        </div>
                        <h2 className='text-[20px] font-black text-def mb-2'>
                            {product?.name}
                        </h2>
                        <h3 className='text-[24px] font-black text-def mb-7 select-none'>
                            {product?.price}€ + {product?.km}
                        </h3>

                        {product && (
                            <button
                                onClick={() => {
                                    if (product) addToCart(product);
                                }}
                                className="flex justify-center items-center px-4 bg-[#000] text-white mx-auto py-3 rounded-[10px] cursor-pointer hover:bg-[#00BFFF] duration-500 ease-in-out select-none"
                            >
                                <MdAddShoppingCart className="mr-3" /> {product?.lisa}
                            </button>
                        )}

                        <ScrollLink to="toote-andmed" className="flex font-bold mt-5 text-[14px] items-center justify-center py-3 border-[#00BFFF] border-2 select-none cursor-pointer">
                            <IoIosArrowDown className='text-def mr-3' /> {product?.tooteAndmed}
                        </ScrollLink>
                    </div>
                </div>
            </Container >
            <Element name="toote-andmed">
                <Container className="pt-[114px] max-w-[1090px]">
                    <h2 className="text-2xl font-bold mb-4 flex items-center"><IoSettingsOutline className='mr-2' /> {product?.tooteAndmed}</h2>

                    <div className="bg-white p-4 border rounded-md grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-lg font-bold border-b pb-2 mb-3">{product?.localeTehnilisednäitajad}</h3>

                            {(() => {
                                const [showAll, setShowAll] = useState(false);
                                const tehnilisedData = Object.entries(product?.tehnilisedNäitajad || {});
                                const displayedData = showAll ? tehnilisedData : tehnilisedData.slice(0, 9);

                                return (
                                    <>
                                        <table className="w-full border-collapse">
                                            <tbody>
                                                {(displayedData as [string, string][]).map(([key, value], idx) => (
                                                    <tr key={idx} className="border-b last:border-none">
                                                        <td className="py-2 pr-4 text-sm text-gray-700">{key}</td>
                                                        <td className="py-2 text-sm font-medium">{value}</td>
                                                    </tr>
                                                ))}

                                                {tehnilisedData.length > 9 && (
                                                    <tr>
                                                        <td colSpan={2} className="py-3">
                                                            <button
                                                                onClick={() => setShowAll(!showAll)}
                                                                className="flex items-center cursor-pointer"
                                                            >
                                                                {showAll ? (
                                                                    <>
                                                                        <IoIosArrowUp className="text-def mr-2 inline-block" />
                                                                        {product?.naitav}
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <IoIosArrowDown className="text-def mr-2 inline-block" />
                                                                        {product?.naitar}
                                                                    </>
                                                                )}
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </>

                                );
                            })()}
                        </div>

                        <div className='mb-3'>
                            <h3 className="text-lg font-bold border-b pb-2 mb-3">{product?.localePõhinäitajad}</h3>
                            <table className="w-full border-collapse">
                                <tbody>
                                    {(
                                        Object.entries(product?.põhinäitajad || {}) as [string, string][]
                                    ).map(([key, value], idx) => (
                                        <tr key={idx} className="border-b last:border-none">
                                            <td className="py-2 pr-4 text-sm text-gray-700">{key}</td>
                                            <td className="py-2 text-sm font-medium">{value}</td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>

                            {product?.seotuddokumendid && (
                                <div className="mt-8">
                                    <h3 className="text-lg font-bold border-b pb-2 mb-3">{product?.localeSeotuddokumendid}</h3>

                                    {product.seotuddokumendid.joonised?.lisa_pildid && (
                                        <>
                                            <h4 className="font-medium mt-3 mb-2">{product?.localeJoonised}</h4>
                                            <div className="flex flex-wrap gap-4 mb-4">
                                                {(product.seotuddokumendid.joonised?.lisa_pildid as string[] | undefined)?.map((img, i) => (
                                                    <Image
                                                        key={`joonised-${i}`}
                                                        src={img}
                                                        alt={`Toote andmed ${i + 1}`}

                                                        className="border rounded-md object-contain w-[150px] h-[85px]"
                                                    />
                                                ))}
                                            </div>
                                        </>

                                    )}

                                    {product.seotuddokumendid.dokumentatsioon?.files && (
                                        <>
                                            <h4 className="font-medium mt-3 mb-2">{product?.localeDokumentatsioon}</h4>
                                            <ul className="list-disc list-inside">
                                                {(product.seotuddokumendid.dokumentatsioon?.files as { url: string; name: string }[] | undefined)?.map((file, i) => (
                                                    <li key={`doc-file-${i}`}>
                                                        <a
                                                            href={file.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-blue-500 underline"
                                                        >
                                                            {file.name}
                                                        </a>
                                                    </li>
                                                ))}

                                            </ul>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                    <Link className='underline text-def' href="">
                        Kas märkasid viga tooteandmetes? Kirjuta meile
                    </Link>
                </Container>
            </Element>
        </>
    );
}
