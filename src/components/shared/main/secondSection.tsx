import { Container } from "../container";

import en from '@/locales/main-second/en.json';
import lv from '@/locales/main-second/lv.json';
import et from '@/locales/main-second/et.json';

interface MainSecondSection {
    params: { locale: string };
}

export default function MainSecondSection({ params }: MainSecondSection) {
    const { locale } = params;
    const t = locale === 'en' ? en : locale === 'lv' ? lv : et;

    const items = [
        { num: '01', title: t.secondSecTitle01, text: t.secondSecText01, align: 'left' },
        { num: '02', title: t.secondSecTitle02, text: t.secondSecText02, align: 'right' },
        { num: '03', title: t.secondSecTitle03, text: t.secondSecText03, align: 'left' },
        { num: '04', title: t.secondSecTitle04, text: t.secondSecText04, align: 'right' },
    ];

    return (
        <div
            className="bg-[#f5f5f5] py-[100px] md:py-[150px]"
            style={{ clipPath: "polygon(0 5%, 100% 0%, 100% 95%, 0 100%)" }}
        >
            <Container className="flex flex-col md:flex-row">

                <div className="w-full md:w-[360px] px-[5px] mb-10 md:mb-0">
                    <div className="md:sticky top-[124px] text-center md:text-left">
                        <h2 className="max-w-[360px] text-2xl font-bold">{t.secondSecTitle}</h2>
                    </div>
                </div>

                <div className="flex-1 flex flex-col justify-center items-center md:items-end">
                    {items.map(({ num, title, text, align }, i) => (
                        <div
                            key={i}
                            className={`w-full md:w-[80%] flex flex-col mb-[50px]`}
                        >
                            <div
                                className={`flex items-start ${align === 'right' ? 'md:flex md:justify-end' : ''}`}
                            >
                                <span className="px-[5px] text-def text-[50px] font-black mr-5 md:mr-5 select-none">
                                    {num}
                                </span>
                                <div className="w-full md:w-1/2">
                                    <h3 className="text-lg font-bold mb-2">{title}</h3>
                                    <p className="text-base font-medium">{text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </Container>
        </div>
    );
}
