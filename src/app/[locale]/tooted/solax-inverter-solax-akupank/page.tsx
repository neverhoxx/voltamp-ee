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
import solaxBanner from "@/images/banners/solax-banner-15-20kwh.png";

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
            price: '6236.7',
            descTitle: 'Voltamp Smart Energy Storage for Modern Homes',
            desc1: `Voltamp.ee presents an all-in-one hybrid energy system that unites the trusted Solax inverter and the advanced Solax battery — built for homes that value independence, innovation, and savings.`,
            desc2: `Our Voltamp solutions let you store renewable energy, use it when grid prices are high, and stay protected from power fluctuations. Experience full control and unmatched reliability with Voltamp smart energy systems.`,
            advantagesTitle: 'Why Voltamp?',
            advantages: [
                { icon: <MdEnergySavingsLeaf />, text: 'Cut electricity costs – store cheap energy and use it at peak hours.' },
                { icon: <MdBatteryChargingFull />, text: 'Integrated performance – Solax inverter and Solax battery work seamlessly together.' },
                { icon: <MdTrendingUp />, text: 'Earn and save – manage energy based on Nord Pool prices and sell excess to the grid.' },
                { icon: <MdEco />, text: 'Sustainable and green – Voltamp systems support the clean energy future.' },
            ],
            freqTitle: 'Smart Market Control',
            freqText: `Voltamp’s Solax hybrid systems are ready for automatic market and frequency control — letting your battery charge or discharge intelligently according to Nord Pool signals to maximize efficiency and revenue.`,
        },
        et: {
            name: 'Solax inverter + Solax akupank',
            details: 'Loe edasi',
            km: 'KM',
            price: '6236.7',
            descTitle: 'Voltamp nutikas energiasalvesti tänapäevasele kodule',
            desc1: `Voltamp.ee pakub terviklikku energialahendust, kus Solax inverter ja Solax akupank moodustavad töökindla hübriidsüsteemi sinu kodu jaoks.`,
            desc2: `Voltamp energiasüsteemid võimaldavad salvestada soodsalt toodetud elektrit, kasutada seda hinnatõusu ajal ning tagavad stabiilse ja efektiivse energiakasutuse. See on samm iseseisvuse ja säästva tuleviku poole.`,
            advantagesTitle: 'Miks valida Voltamp?',
            advantages: [
                { icon: <MdEnergySavingsLeaf />, text: 'Säästa elektrikuludelt – kasuta salvestatud energiat siis, kui hind on kõrge.' },
                { icon: <MdBatteryChargingFull />, text: 'Täiuslik koostoime – Solax inverter ja akupank töötavad ideaalses harmoonias.' },
                { icon: <MdTrendingUp />, text: 'Targa juhtimisega saad energiat osta odavalt ja müüa kallilt – kontroll on sinu käes.' },
                { icon: <MdEco />, text: 'Roheline ja jätkusuutlik – Voltamp aitab vähendada CO₂ jalajälge ja toetab roheenergiat.' },
            ],
            freqTitle: 'Tark börsijuhtimine',
            freqText: `Voltamp Solax süsteemid on valmis automaatseks börsi- ja sagedusjuhtimiseks, mis võimaldab akul laadida või tühjeneda vastavalt Nord Pooli hinnasignaalidele – maksimeerides kasu ja efektiivsust.`,
        },
        lv: {
            name: 'Solax invertors + Solax akumulators',
            details: 'Lasīt vairāk',
            km: 'PVN',
            price: '6236.7',
            descTitle: 'Voltamp viedā enerģijas uzglabāšanas sistēma mājai',
            desc1: `Voltamp.ee piedāvā pilnīgu hibrīdo enerģijas risinājumu – Solax invertoru un Solax akumulatoru vienā sistēmā, kas nodrošina efektivitāti, drošību un enerģijas neatkarību.`,
            desc2: `Ar Voltamp risinājumiem tu vari uzkrāt enerģiju, kad tā ir lētāka, un izmantot to laikā, kad cenas pieaug. Pārej uz ilgtspējīgu enerģijas pārvaldību ar Voltamp.`,
            advantagesTitle: 'Kāpēc Voltamp?',
            advantages: [
                { icon: <MdEnergySavingsLeaf />, text: 'Samazini izmaksas – izmanto uzkrāto enerģiju, kad elektroenerģijas cena pieaug.' },
                { icon: <MdBatteryChargingFull />, text: 'Pilnīga integrācija – Solax invertors un akumulators darbojas kā vienots mehānisms.' },
                { icon: <MdTrendingUp />, text: 'Kontrolē un pelni – Voltamp sistēma palīdz reaģēt uz tirgus cenu izmaiņām.' },
                { icon: <MdEco />, text: 'Videi draudzīga inovācija – ilgtspējīga izvēle enerģijas nākotnei ar Voltamp.' },
            ],
            freqTitle: 'Biržas kontrole un biežuma līdzsvarošana',
            freqText: `Voltamp sistēmas reaģē uz Nord Pool cenu signāliem un frekvences tirgus vajadzībām, lai optimizētu uzlādi, samazinātu izmaksas un radītu papildu ienākumus.`,
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
                    src={solaxBanner}
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
