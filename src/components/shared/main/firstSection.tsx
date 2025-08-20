import { Container } from "../container";

import en from '@/locales/main-first/en.json';
import lv from '@/locales/main-first/lv.json';
import et from '@/locales/main-first/et.json';

import image from '@/images/section-pics/first-section-img.webp';

import Image from "next/image";
import Link from "next/link";

import { HiArrowNarrowRight } from "react-icons/hi";

interface MainFirstSection {
    params: { locale: string };
}

export default function MainFirstSection({ params }: MainFirstSection) {
    const { locale } = params;
    const t = locale === 'en' ? en : locale === 'lv' ? lv : et;

    return (
        <div className="pt-[150px] flex">
            <div className="max-w-[1338px] w-full h-full flex flex-col md:flex-row ">

                <div className="flex items-center mb-10 md:mb-0">
                    <Image
                        src={image}
                        alt="..."
                        width={600}
                        height={560}
                        className="w-[600px] h-[560px] object-cover select-none rounded-tr-[57px] drop-shadow-[0_62px_54px_rgba(0,191,255,0.2)] 
      md:w-[550px] md:h-[467px] md:drop-shadow-none 
      sm:w-[400px] sm:h-[373px] 
      xs:w-[300px] xs:h-[280px]"
                        priority
                    />
                </div>




                <div className="sm:pl-[70px] flex flex-col justify-center px-2.5
      md:ml-0 md:mb-[50px] max-w-[700px]">

                    <div
                        className="w-[169px] h-1 rounded-[2px] mb-[17px]"
                        style={{ background: "linear-gradient(to right, #00BFFF, #000000)" }}
                    ></div>

                    <h2 className="mb-5 md:mb-4 font-bold text-[24px] md:text-[30px]">
                        {t.firstSecTitle}
                    </h2>

                    <p className="mb-[30px] text-black opacity-60 text-[15px] md:text-[16px] font-medium">
                        {t.firstSecText}
                    </p>

                    <Link
                        href=""
                        className="max-w-[209px] px-10 py-[25px] rounded-tr-[18px] bg-black text-white cursor-pointer select-none
          hover:rounded-tr-0 transition-[border-radius] duration-500 flex items-center justify-center"
                    >
                        {t.firstSecBtn}
                        <HiArrowNarrowRight className="ml-[19px] text-[#00BFFF]" />
                    </Link>
                </div>

            </div>
        </div>

    );
}
