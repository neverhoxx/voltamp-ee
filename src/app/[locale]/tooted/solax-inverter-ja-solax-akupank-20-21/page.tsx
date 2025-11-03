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
import solisBanner2021 from "@/images/banners/solax-banner-20-21.png";

export default function SolisKomplekt() {
    const pathname = usePathname();
    let locale: 'en' | 'et' | 'lv' = 'en';
    if (pathname?.startsWith('/et')) locale = 'et';
    else if (pathname?.startsWith('/lv')) locale = 'lv';

    const t = {
        en: {
            name: 'Solax inverter + Solax Battery',
            details: 'Read more',
            km: 'VAT',
            price: '10632.1',
            descTitle: 'Smart Energy Storage Solution by Voltamp',
            desc1: `Voltamp brings you a modern home energy storage system that automatically adapts to market prices. With market control, your Solax battery charges when electricity is cheap and discharges when it's most valuable.`,
            desc2: `Our Solax inverter and battery combination ensures maximum efficiency, stability, and independence. It’s an intelligent and sustainable solution designed for homeowners who value smart energy and long-term savings.`,
            advantagesTitle: 'Why Choose Voltamp Smart Energy Solution',
            advantages: [
                { icon: <MdEnergySavingsLeaf />, text: 'Cut your electricity costs by storing and using energy at the best price.' },
                { icon: <MdBatteryChargingFull />, text: 'Fully automated operation – your system works efficiently 24/7.' },
                { icon: <MdTrendingUp />, text: 'Earn extra income by selling stored power back to the grid.' },
                { icon: <MdEco />, text: 'Eco-friendly and future-proof solution for a sustainable home.' },
            ],
            freqTitle: 'Participate in the Frequency Market',
            freqText: `Join the growing smart energy network with Voltamp.ee. Your Solax system can balance the grid and earn revenue while keeping your home powered and stable.`,
        },
        et: {
            name: 'Solax inverter + Solax akupank',
            details: 'Loe edasi',
            km: 'KM',
            price: '10632.1',
            descTitle: 'Tark energiasalvestuse lahendus Voltamp.ee-lt',
            desc1: `Voltamp pakub koduomanikele nutikat energiasalvestuse süsteemi, mis juhib ennast automaatselt vastavalt elektrihinna kõikumistele Nord Pooli börsil. Solax akupank salvestab energiat siis, kui hind on madal, ja kasutab seda, kui hind on kõrge.`,
            desc2: `Solax inverteri ja aku kombinatsioon tagab maksimaalse energiatõhususe, stabiilsuse ja sõltumatuse. See on kaasaegne ning jätkusuutlik lahendus targa kodu ja energiasäästliku tuleviku nimel.`,
            advantagesTitle: 'Miks valida Voltamp.ee nutikas energialahendus',
            advantages: [
                { icon: <MdEnergySavingsLeaf />, text: 'Säästa elektrikuludelt – kasuta salvestatud energiat, kui hind on kõrge.' },
                { icon: <MdBatteryChargingFull />, text: 'Täisautomaatne töö – süsteem optimeerib laadimist ja tühjendamist ise.' },
                { icon: <MdTrendingUp />, text: 'Teeni tulu – müü ülejääv energia võrku ja suurenda oma säästu.' },
                { icon: <MdEco />, text: 'Roheline ja tulevikukindel lahendus – samm energiasõltumatuse poole.' },
            ],
            freqTitle: 'Liitu sagedusturuga',
            freqText: `Voltamp võimaldab sul ühineda sagedusturuga ja teenida lisatulu. Sinu Solax süsteem aitab hoida elektrivõrku stabiilsena ning samal ajal tagab kodu usaldusväärse energiavarustuse.`,
        },
        lv: {
            name: 'Solax invertors + Solax akumulators',
            details: 'Lasīt vairāk',
            km: 'PVN',
            price: '10632.1',
            descTitle: 'Viedā enerģijas uzglabāšanas sistēma no Voltamp.ee',
            desc1: `Voltamp piedāvā modernu mājas enerģijas uzglabāšanas risinājumu, kas automātiski pielāgojas elektroenerģijas tirgus cenām. Solax akumulators uzkrāj enerģiju, kad cena ir zema, un atdod to tīklam, kad tā ir visvērtīgākā.`,
            desc2: `Solax invertora un akumulatora kombinācija nodrošina maksimālu efektivitāti un neatkarību. Gudra, droša un videi draudzīga izvēle nākotnes mājai.`,
            advantagesTitle: 'Voltamp.ee priekšrocības',
            advantages: [
                { icon: <MdEnergySavingsLeaf />, text: 'Samazini elektrības izmaksas, izmantojot uzkrāto enerģiju pareizajā brīdī.' },
                { icon: <MdBatteryChargingFull />, text: 'Automatizēta sistēma – efektīva darbība bez liekas piepūles.' },
                { icon: <MdTrendingUp />, text: 'Iespēja nopelnīt, pārdodot uzkrāto enerģiju atpakaļ tīklā.' },
                { icon: <MdEco />, text: 'Videi draudzīgs un ilgtspējīgs risinājums tavai mājai.' },
            ],
            freqTitle: 'Piedalies frekvences tirgū',
            freqText: `Voltamp ļauj tev piedalīties frekvences tirgū un gūt papildu ienākumus, stabilizējot elektrotīklu un samazinot enerģijas izmaksas.`,
        },
    }[locale];

    return (
        <Container className="pt-[114px] max-w-[1250px] min-h-screen relative overflow-hidden">

            {/* Animated background orbs */}
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

            {/* Hero section */}
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative bg-white/80 backdrop-blur-xl p-6 sm:p-10 rounded-3xl shadow-xl flex flex-col sm:flex-row justify-center items-center gap-8 z-10"
            >
                <Image
                    src={solisBanner2021}
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

            {/* Product details */}
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
