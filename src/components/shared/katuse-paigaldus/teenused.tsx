import { Container } from "../container";

import en from '@/locales/katuse-paigaldus/en.json';
import lv from '@/locales/katuse-paigaldus/lv.json';
import et from '@/locales/katuse-paigaldus/et.json';

import { MdRoofing } from "react-icons/md";
import { MdOutlineBuildCircle } from "react-icons/md";
import { LuReplace } from "react-icons/lu";
import { FaMagnifyingGlass } from "react-icons/fa6";

interface KatusePaigaldusSectionProps {
    params: { locale: string };
}

export default function KatusePaigaldusSection({ params }: KatusePaigaldusSectionProps) {
    const { locale } = params;
    const t = locale === 'en' ? en : locale === 'lv' ? lv : et;

    const teenused = [
        { num: "1", title: t[`teenusTitle1`], description: t[`teenusText1`], icon: <FaMagnifyingGlass size="40" className="mb-1 mr-2" /> },

        { num: "2", title: t[`teenusTitle2`], description: t[`teenusText2`], icon: <MdOutlineBuildCircle size="40" className="mb-1 mr-2" /> },

        { num: "3", title: t[`teenusTitle3`], description: t[`teenusText3`], icon: <LuReplace size="40" className="mb-1 mr-2" /> },

        { num: "4", title: t[`teenusTitle4`], description: t[`teenusText4`], icon: <MdRoofing size="40" className="mb-1 mr-2" /> },

    ]

    return (
        <section className="bg-[#f5f5f5] pt-[50px]">
            <Container>
                <div className="flex flex-wrap justify-between pb-[55px]">
                    <h2 className="text-[32px] font-bold">
                        {t[`firstBlockTitle`]} <span className="text-def">{t[`firstBlockSpan`]}</span>
                    </h2>
                    <p className="font-normal text-[16px] max-w-[840px]">
                        {t[`firstBlockText`]}
                    </p>
                </div>
                <div className="flex flex-wrap gap-10 justify-center pb-10">
                    {teenused.map((item) => (
                        <div key={item.num} className="max-w-[500px] rounded-2xl bg-[#0094c5] p-5">
                            <h3 className="text-[24px] text-white font-black adaptive-teenused">
                                {item.icon} {item.title}
                            </h3>
                            <p className="opacity-75 text-white adaptive-teenused-text">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
