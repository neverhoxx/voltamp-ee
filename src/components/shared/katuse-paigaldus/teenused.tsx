import { Container } from "../container";

import en from '@/locales/katuse-paigaldus/en.json';
import lv from '@/locales/katuse-paigaldus/lv.json';
import et from '@/locales/katuse-paigaldus/et.json';

import Link from "next/link";
import heroImg from '@/images/bgs/katusetööd-bg.jpg';

interface KatusePaigaldusSectionProps {
    params: { locale: string };
}

export default function KatusePaigaldusSection({ params }: KatusePaigaldusSectionProps) {
    const { locale } = params;
    const t = locale === 'en' ? en : locale === 'lv' ? lv : et;

    const teenused = [
        { num: "1", title: t[`teenusTitle1`], description: t[`teenusText1`] },

        { num: "2", title: t[`teenusTitle2`], description: t[`teenusText2`] },

        { num: "3", title: t[`teenusTitle3`], description: t[`teenusText3`] },

        { num: "4", title: t[`teenusTitle4`], description: t[`teenusText4`] },

    ]

    return (
        <section
            className="bg-[#f5f5f5] mt-[50px] pt-[100px]"
            style={{ clipPath: "polygon(0 5%, 100% 0%, 100% 95%, 0 100%)" }}
        >
            <Container>
                <div className="flex justify-between pb-[85px]">
                    <h2 className="text-[32px] font-bold">
                        {t[`firstBlockTitle`]} <span className="text-def">{t[`firstBlockSpan`]}</span>
                    </h2>
                    <p className="font-normal text-[16px] max-w-[840px]">
                        {t[`firstBlockText`]}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 pb-25">
                    {teenused.map((item) => (
                        <div
                            key={item.num}
                            className="
                p-6 md:p-7 rounded-2xl
                bg-white/40 border border-white
                shadow-[0_4px_30px_rgba(0,0,0,0.1)]
                backdrop-blur-[20px]
                transition-transform duration-200 ease-in-out
                hover:-translate-y-1 hover:shadow-[0_6px_25px_rgba(0,0,0,0.1)]
              "
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div
                                    className="
                    flex items-center justify-center 
                    rounded-full bg-[#E1DEDA] text-black font-black 
                    w-[50px] h-[50px] text-[28px] 
                    md:w-[71px] md:h-[71px] md:text-[40px]
                    select-none
                  "
                                >
                                    {item.num}
                                </div>
                                <div>
                                    <h2 className="uppercase tracking-[6px] text-[15px] md:text-[16px] font-extralight mb-[3px]">
                                        {t[`midaMeTeeme`]}
                                    </h2>
                                    <h1 className="font-black leading-[1.1] text-[20px] md:text-[clamp(24px,3vw,40px)]">
                                        {item.title}
                                    </h1>
                                </div>
                            </div>
                            <p className="text-[16px] leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
