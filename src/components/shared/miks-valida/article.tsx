import { Container } from "../container";

import en from '@/locales/miks-valida/en.json';
import lv from '@/locales/miks-valida/lv.json';
import et from '@/locales/miks-valida/et.json';

import heroImg from '@/images/bgs/meist-bg.webp';

import Link from "next/link";

interface MiksValidaArticlesProps {
    params: { locale: string };
}

export default function MiksValidaArticles({ params }: MiksValidaArticlesProps) {
    const { locale } = params;
    const t = locale === 'en' ? en : locale === 'lv' ? lv : et;

    return (
        <div className="bg-[#f5f5f5]">
            <div className="bg-[#f5f5f5]">
                <Container className="flex flex-col md:flex-row pt-18 max-w-[1000px]">
                    <div className="w-full md:w-1/2 px-[5px] mb-10 md:mb-0">
                        <div className="md:sticky top-[124px] text-left flex gap-2">
                            <div
                                className="w-[3px] h-25 rounded-[2px] mb-[17px]"
                                style={{ background: "linear-gradient(to bottom, #00BFFF, #000000)" }}
                            ></div>
                            <div className="">
                                <span className="text-def font-bold">
                                    {t.firstTitleSpan}
                                </span>
                                <h2 className="max-w-[360px] text-2xl font-bold">{t.firstTitle}</h2>
                            </div>

                        </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-center pb-20">
                        <p className="text-[16px] opacity-80 font-semibold">
                            {t.firstText}
                        </p>
                        <span className="font-bold mt-7 mb-2 text-[20px] text-left">{t.näide}:</span>
                        <div
                            className="bg-[#0094c5] p-5 pt-10 text-white w-full"
                            style={{ clipPath: "polygon(0 10%, 100% 0%, 100% 100%, 0 100%)" }}
                        >

                            <ul className="text-[15px] font-semibold">
                                <li className="mb-2">{t.firstLi1}</li>
                                <li className="mb-2">{t.firstLi2}</li>
                                <li>{t.firstLi3}</li>
                            </ul>
                        </div>
                    </div>


                </Container>
            </div>

            <div className="max-w-[1000px] w-full mx-auto my-10">
                <div
                    className="w-full h-1 rounded-[2px]"
                    style={{ background: "linear-gradient(to right, #00BFFF, #000000)" }}
                ></div>
            </div>

            <div>
                <Container className="flex flex-col-reverse md:flex-row max-w-[1000px]">
                    <div className="flex-1 flex flex-col justify-center pb-20">
                        <p className="text-[16px] opacity-80 font-semibold">
                            {t.secondText}
                        </p>
                        <span className="font-bold mt-7 mb-2 text-[20px] text-left">{t.näide}:</span>
                        <div
                            className="bg-[#0094c5] pt-10 p-5 text-white w-full"
                            style={{ clipPath: "polygon(0 0%, 100% 10%, 100% 100%, 0 100%)" }}

                        >

                            <ul className="text-[15px] font-semibold">
                                <li className="mb-2">{t.secondLi1}</li>
                                <li className="mb-2">{t.secondLi2}</li>
                                <li>{t.secondLi3}</li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 px-[5px] mb-10 md:mb-0">
                        <div className="md:sticky top-[124px] justify-end text-right flex gap-2">
                            <div className="">
                                <span className="text-def font-bold">
                                    {t.secondTitleSpan}
                                </span>
                                <h2 className="max-w-[360px] text-2xl font-bold">{t.secondTitle}</h2>
                            </div>

                            <div
                                className="w-[3px] h-25 rounded-[2px] mb-[17px]"
                                style={{ background: "linear-gradient(to bottom, #00BFFF, #000000)" }}
                            ></div>
                        </div>
                    </div>

                </Container>
            </div>

            <div className="max-w-[1000px] w-full mx-auto my-10">
                <div
                    className="w-full h-1 rounded-[2px]"
                    style={{ background: "linear-gradient(to right, #00BFFF, #000000)" }}
                ></div>
            </div>

            <div>
                <Container className="flex flex-col-reverse md:flex-row max-w-[1000px]">
                    <div className="w-full md:w-1/2 px-[5px] mb-10 md:mb-0">
                        <div className="md:sticky top-[124px] text-left flex gap-2">
                            <div
                                className="w-[3px] h-25 rounded-[2px] mb-[17px]"
                                style={{ background: "linear-gradient(to bottom, #00BFFF, #000000)" }}
                            ></div>

                            <div className="">
                                <span className="text-def font-bold">
                                    {t.thirdTitleSpan}
                                </span>
                                <h2 className="max-w-[360px] text-2xl font-bold">{t.thirdTitle}</h2>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-center pb-20">
                        <p className="text-[16px] opacity-80 font-semibold">
                            {t.thirdText}
                        </p>
                        <span className="font-bold mt-7 mb-2 text-[20px] text-left">{t.näide}:</span>
                        <div
                            className="bg-[#0094c5] p-5 text-white w-full"
                            style={{ clipPath: "polygon(0 0%, 100% 10%, 100% 100%, 0 100%)" }}

                        >

                            <ul className="text-[15px] font-semibold">
                                <li className="mb-2">{t.thirdLi1}</li>
                                <li>{t.thirdLi2}</li>
                            </ul>
                        </div>
                    </div>



                </Container>
            </div>



        </div>
    );
}
