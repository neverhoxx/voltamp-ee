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
import solisbanner1010 from "@/images/banners/solis-x-dyness-10-10-banner.png";

export default function SolisKomplekt() {
    const pathname = usePathname();
    let locale: 'en' | 'et' | 'lv' = 'en';
    if (pathname?.startsWith('/et')) locale = 'et';
    else if (pathname?.startsWith('/lv')) locale = 'lv';

    const t = {
        en: {
            name: 'Solis inverter + Dyness Battery',
            details: 'Read more',
            km: 'VAT',
            price: '5473.9',
            descTitle: 'Voltamp Energy Storage Solutions for Smart Homes',
            desc1: `Voltamp brings you a complete hybrid energy solution for your home — combining the reliability of the Solis inverter with the intelligent Dyness battery system.`,
            desc2: `Our integrated solution optimizes energy consumption, reduces dependence on the grid, and allows you to take advantage of electricity price fluctuations on the Nord Pool market. Trusted quality, local support, and long-term efficiency — all under the Voltamp brand.`,
            advantagesTitle: 'Why Choose Voltamp?',
            advantages: [
                { icon: <MdEnergySavingsLeaf />, text: 'Lower your energy bills — use stored power when prices rise.' },
                { icon: <MdBatteryChargingFull />, text: 'Smart hybrid system — Solis inverter and Dyness battery work in perfect sync.' },
                { icon: <MdTrendingUp />, text: 'Earn more — sell excess energy and control your home’s energy balance.' },
                { icon: <MdEco />, text: 'Eco-friendly innovation — reduce CO₂ and move toward energy independence.' },
            ],
            freqTitle: 'Market and Frequency Control',
            freqText: `Voltamp systems support automated market control, enabling your home battery to charge or discharge according to Nord Pool price signals and frequency market needs — giving you both savings and revenue potential.`,
        },
        et: {
            name: 'Solis inverter + Dyness akupank',
            details: 'Loe edasi',
            km: 'KM',
            price: '5473.9',
            descTitle: 'Voltamp nutikas energiasalvesti kodu jaoks',
            desc1: `Voltamp pakub terviklikku hübriidlahendust, mis ühendab Solis inverteri töökindluse ja Dyness akupanga nutikuse.`,
            desc2: `See lahendus aitab vähendada elektrivõrgust sõltuvust, salvestada energiat soodsa hinnaga ning kasutada seda siis, kui elektri hind on kõrge. Voltamp – sinu kindel partner energiasäästliku tuleviku poole.`,
            advantagesTitle: 'Miks valida Voltamp?',
            advantages: [
                { icon: <MdEnergySavingsLeaf />, text: 'Säästa elektrikuludelt – kasuta salvestatud energiat hinnatõusu ajal.' },
                { icon: <MdBatteryChargingFull />, text: 'Tark hübriidsüsteem – Solis inverter ja Dyness aku töötavad ideaalses kooskõlas.' },
                { icon: <MdTrendingUp />, text: 'Teeni tulu – müü võrku ülejäänud energiat ja optimeeri tarbimist.' },
                { icon: <MdEco />, text: 'Keskkonnasõbralik ja jätkusuutlik – vähenda CO₂ jalajälge ja suurenda iseseisvust.' },
            ],
            freqTitle: 'Börsi- ja sagedusjuhtimine',
            freqText: `Voltamp energiasüsteemid võimaldavad automaatset börsijuhtimist, mille abil aku laeb ja tühjeneb vastavalt Nord Pooli hinnasignaalidele ning sagedusturu vajadustele – tagades maksimaalse kasu ja stabiilsuse.`,
        },
        lv: {
            name: 'Solis invertors + Dyness akumulators',
            details: 'Lasīt vairāk',
            km: 'PVN',
            price: '5473.9',
            descTitle: 'Voltamp viedā enerģijas uzglabāšanas sistēma mājām',
            desc1: `Voltamp.ee piedāvā pilnīgu hibrīda risinājumu, apvienojot Solis invertora uzticamību ar Dyness akumulatora efektivitāti.`,
            desc2: `Šī sistēma ļauj samazināt atkarību no elektroenerģijas tīkla, izmantot elektrību, kad tā ir lētāka, un ietaupīt, kad cenas pieaug. Voltamp – enerģijas brīvība un drošība tavā mājā.`,
            advantagesTitle: 'Kāpēc izvēlēties Voltamp?',
            advantages: [
                { icon: <MdEnergySavingsLeaf />, text: 'Samazini izmaksas – izmanto uzkrāto enerģiju, kad elektrības cena pieaug.' },
                { icon: <MdBatteryChargingFull />, text: 'Viedā hibrīdsistēma – Solis un Dyness darbojas perfekti sinhroni.' },
                { icon: <MdTrendingUp />, text: 'Pelni vairāk – pārdod lieko enerģiju tīklam un iegūsti papildu ienākumus.' },
                { icon: <MdEco />, text: 'Videi draudzīgs risinājums – pārej uz tīru un ilgtspējīgu enerģiju ar Voltamp.' },
            ],
            freqTitle: 'Biržas un frekvences kontrole',
            freqText: `Voltamp sistēmas atbalsta automatizētu biržas kontroli, ļaujot akumulatoram reaģēt uz Nord Pool cenu signāliem un frekvences tirgus vajadzībām – nodrošinot ietaupījumus un stabilitāti.`,
        },
    }[locale];


    return (
        <Container className="pt-[114px] max-w-[1250px] min-h-screen relative overflow-hidden">

            {/* Animated gradient blobs in the background */}
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

            {/* Top Product Section */}
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative bg-white/80 backdrop-blur-xl p-6 sm:p-10 rounded-3xl shadow-xl flex flex-col sm:flex-row justify-center items-center gap-8 z-10"
            >
                <Image
                    src={solisbanner1010}
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
