'use client';

import { Container } from '@/components/shared/container';
import Image from 'next/image';
import { IoIosArrowDown } from "react-icons/io";
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Link as ScrollLink, Element } from 'react-scroll';
import {
    MdEnergySavingsLeaf,
    MdBatteryChargingFull,
    MdTrendingUp,
    MdEco,
} from "react-icons/md";

import ProductImage from "@/images/Akulahendus_koju_Sunergia_landing_webp-1536x1026.webp";
import solisBanner1015 from "@/images/banners/solis-banner-10-15kwh.png";

export default function SolisKomplekt() {
    const pathname = usePathname();
    let locale: 'en' | 'et' | 'lv' = 'en';
    if (pathname?.startsWith('/et')) locale = 'et';
    else if (pathname?.startsWith('/lv')) locale = 'lv';

    const t = {
        en: {
            name: 'Solis inverter + Leapton Battery',
            details: 'Read more',
            km: 'VAT',
            price: '5845.5',
            descTitle: 'Complete Energy Storage Solutions from Voltamp',
            desc1: `Voltamp offers innovative battery systems like the Solis inverter and Leapton battery, ensuring stable and smart home energy management. Our solutions help you make the most of dynamic electricity prices and store clean solar energy efficiently.`,
            desc2: `With Voltamp.ee, you get a reliable and future-proof setup — combining high-quality components, smart automation, and market control integration for maximum performance and savings.`,
            advantagesTitle: 'Why Choose Voltamp Market-Controlled System',
            advantages: [
                { icon: <MdEnergySavingsLeaf />, text: 'Reduce your energy costs by using stored energy when prices are low.' },
                { icon: <MdBatteryChargingFull />, text: 'Smart and efficient charging management extends battery lifespan.' },
                { icon: <MdTrendingUp />, text: 'Generate income by selling excess energy back to the grid.' },
                { icon: <MdEco />, text: 'Sustainable and green — optimized for renewable energy usage.' },
            ],
            freqTitle: 'Frequency Market and Smart Grid Integration',
            freqText: `Voltamp systems support frequency market participation, helping balance grid demand while generating passive income from your battery setup.`,
        },
        et: {
            name: 'Solis inverter + Leapton akupank',
            details: 'Loe edasi',
            km: 'KM',
            price: '5845.5',
            descTitle: 'Täislahendus akusalvestiga Voltamp.ee-lt',
            desc1: `Voltamp pakub nutikaid energiasalvestuslahendusi nagu Solis inverter ja Leapton akupank, mis tagavad sinu kodu energiatarbimise stabiilsuse ja efektiivsuse. Meie süsteemid võimaldavad kasutada elektrit soodsa hinnaga ja salvestada päikeseenergiat tulevikuks.`,
            desc2: `Valides Voltamp komplekti, saad töökindla ja kaasaegse lahenduse, mis ühendab kvaliteetsed seadmed, automaatse juhtimise ning börsijuhtimise mooduli maksimaalse energiatõhususe saavutamiseks.`,
            advantagesTitle: 'Miks valida Voltamp.ee börsijuhtimisega süsteem',
            advantages: [
                { icon: <MdEnergySavingsLeaf />, text: 'Säästa elektrikuludelt, kasutades salvestatud energiat odava hinna ajal.' },
                { icon: <MdBatteryChargingFull />, text: 'Tark laadimishaldus pikendab aku eluiga ja parandab tõhusust.' },
                { icon: <MdTrendingUp />, text: 'Teeni lisatulu, müües ülejäävat energiat võrku tagasi.' },
                { icon: <MdEco />, text: 'Roheline ja jätkusuutlik lahendus – toetab taastuvenergia kasutust.' },
            ],
            freqTitle: 'Sagedusturg ja nutivõrgu integratsioon',
            freqText: `Voltamp süsteemid on loodud sagedusturul osalemiseks, aidates stabiliseerida elektrivõrku ja teenida tulu akuressursi kasutamise kaudu.`,
        },
        lv: {
            name: 'Solis invertors + Leapton akumulators',
            details: 'Lasīt vairāk',
            km: 'PVN',
            price: '5845.5',
            descTitle: 'Voltamp.ee enerģijas uzglabāšanas risinājumi',
            desc1: `Voltamp piedāvā modernus enerģijas uzglabāšanas risinājumus, piemēram, Solis invertoru un Leapton akumulatoru, kas nodrošina efektīvu enerģijas izmantošanu un neatkarību no svārstīgām elektrības cenām.`,
            desc2: `Izvēloties Voltamp.ee komplektu, jūs iegūstat drošu un viedu sistēmu ar tirgus vadības moduli, kas optimizē uzlādi un ļauj pelnīt, pārdodot lieko enerģiju tīklam.`,
            advantagesTitle: 'Voltamp sistēmas priekšrocības ar tirgus vadību',
            advantages: [
                { icon: <MdEnergySavingsLeaf />, text: 'Samaziniet izmaksas, izmantojot enerģiju, kad cena ir zema.' },
                { icon: <MdBatteryChargingFull />, text: 'Gudra uzlādes vadība pagarina akumulatora kalpošanas laiku.' },
                { icon: <MdTrendingUp />, text: 'Iespēja pelnīt, pārdodot lieko enerģiju tīklam.' },
                { icon: <MdEco />, text: 'Videi draudzīgs risinājums – ilgtspējīga enerģijas izmantošana.' },
            ],
            freqTitle: 'Frekvences tirgus un tīkla līdzsvarošana',
            freqText: `Voltamp risinājumi atbalsta dalību frekvences tirgū, nodrošinot stabilu elektroenerģijas padevi un papildu ienākumus no akumulatora sistēmas.`,
        },
    }[locale];

    return (
        <Container className="pt-[114px] max-w-[1250px] min-h-screen relative overflow-hidden">
            <motion.div
                className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#00BFFF]/20 rounded-full blur-3xl"
                animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
                transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-300/10 rounded-full blur-3xl"
                animate={{ x: [0, -80, 0], y: [0, -40, 0] }}
                transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
            />

            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative bg-white/80 backdrop-blur-xl p-6 sm:p-10 rounded-3xl shadow-xl flex flex-col sm:flex-row justify-center items-center gap-8 z-10"
            >
                <Image
                    src={solisBanner1015}
                    alt={t.name}
                    className="rounded-2xl shadow-lg w-full sm:w-1/2"
                    style={{ objectFit: "contain" }}
                    width={500}
                    height={300}
                />

                <div className="sm:w-1/2 text-center sm:text-left space-y-5">
                    <h2 className="text-[26px] sm:text-[34px] font-extrabold text-gray-900 leading-tight">
                        {t.name}
                    </h2>
                    <h3 className="text-[30px] sm:text-[40px] font-black text-[#00BFFF]">
                        {t.price}€ + {t.km}
                    </h3>

                    <ScrollLink
                        to="product-details"
                        smooth={true}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 text-lg font-semibold border-2 border-[#00BFFF] text-[#00BFFF] rounded-2xl cursor-pointer hover:bg-[#00BFFF] hover:text-white transition-all shadow-md"
                    >
                        <IoIosArrowDown className="text-xl" /> {t.details}
                    </ScrollLink>
                </div>
            </motion.div>

            <Element name="product-details">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-24 sm:mt-32 text-center flex flex-col items-center relative z-10"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-[#00BFFF]">{t.descTitle}</h2>

                    <div className="flex flex-col sm:flex-row items-center gap-10">
                        <Image
                            src={ProductImage}
                            alt={t.name}
                            className="rounded-2xl shadow-lg w-full sm:w-1/2"
                            style={{ objectFit: "contain" }}
                            width={500}
                            height={300}
                        />
                        <div className="sm:w-1/2 text-left text-gray-700 leading-relaxed">
                            <p className="mb-4">{t.desc1}</p>
                            <p>{t.desc2}</p>
                        </div>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold mt-20 mb-8 text-[#00BFFF]">{t.advantagesTitle}</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-4">
                        {t.advantages.map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.07, y: -5 }}
                                className="p-6 bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg flex flex-col items-center text-center border border-transparent hover:border-[#00BFFF]/50 transition-all"
                            >
                                <div className="text-[#00BFFF] text-5xl mb-4">{item.icon}</div>
                                <p className="text-gray-700 font-medium text-sm sm:text-base">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold mt-20 mb-6 text-[#00BFFF]">{t.freqTitle}</h3>
                    <p className="max-w-3xl text-gray-700 leading-relaxed px-4">{t.freqText}</p>
                </motion.div>
            </Element>
        </Container>
    );
}
