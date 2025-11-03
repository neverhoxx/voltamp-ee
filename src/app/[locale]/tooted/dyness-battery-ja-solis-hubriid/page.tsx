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
import solisbanner1514 from "@/images/banners/solis-x-dyness-15-20-banner.png";

export default function VoltampSolisKomplekt() {
    const pathname = usePathname();
    let locale: 'en' | 'et' | 'lv' = 'en';
    if (pathname?.startsWith('/et')) locale = 'et';
    else if (pathname?.startsWith('/lv')) locale = 'lv';

    const t = {
        en: {
            name: 'Dyness Battery + Solis Hybrid',
            details: 'Discover more',
            km: 'VAT',
            price: '6618.7',
            descTitle: 'Voltamp Smart Energy System',
            desc1: `The Dyness + Solis hybrid solution by Voltamp brings intelligent energy management directly to your home. Designed for those who value efficiency, autonomy, and smart savings.`,
            desc2: `Our hybrid system automatically stores energy when prices are low and releases it when electricity is expensive – maximizing your comfort and minimizing your costs.`,
            advantagesTitle: 'Why choose Voltamp?',
            advantages: [
                { icon: <MdEnergySavingsLeaf />, text: 'Save money daily — use electricity when it’s cheapest thanks to smart automation.' },
                { icon: <MdBatteryChargingFull />, text: 'High-performance Dyness battery ensures reliable backup and long lifespan.' },
                { icon: <MdTrendingUp />, text: 'Turn energy into profit — sell surplus back to the grid effortlessly.' },
                { icon: <MdEco />, text: 'Eco-conscious technology — support the green transition and reduce CO₂ footprint.' },
            ],
            freqTitle: 'Smart Energy Balance',
            freqText: `Voltamp systems connect to the frequency market, helping stabilize the grid and rewarding you for participating in the balance of supply and demand.`,
        },
        et: {
            name: 'Dyness aku + Solis hübriid',
            details: 'Avasta rohkem',
            km: 'KM',
            price: '6618.7',
            descTitle: 'Voltamp nutikas energialahendus',
            desc1: `Voltampi Dyness + Solis hübriidlahendus toob sinu koju tõhusa ja intelligentse energiasalvestuse. Ideaalne valik neile, kes soovivad kontrollida oma energiakulusid ja suurendada iseseisvust.`,
            desc2: `Süsteem salvestab energiat siis, kui hind on madal, ning kasutab seda, kui elekter on kallim – tagades mugavuse ja maksimaalse säästu automaatselt.`,
            advantagesTitle: 'Miks valida Voltamp?',
            advantages: [
                { icon: <MdEnergySavingsLeaf />, text: 'Igapäevane kokkuhoid – kasuta elektrit siis, kui see on odavaim.' },
                { icon: <MdBatteryChargingFull />, text: 'Dyness aku tagab töökindla jõudluse ja pika eluea.' },
                { icon: <MdTrendingUp />, text: 'Tieni lisatulu – müü ülejääv energia võrku ilma pingutuseta.' },
                { icon: <MdEco />, text: 'Roheline tehnoloogia – aita vähendada CO₂ jalajälge ja toeta taastuvenergiat.' },
            ],
            freqTitle: 'Tark energiabilanss',
            freqText: `Voltampi süsteemid saavad liituda sagedusturuga, aidates stabiliseerida elektrivõrku ja teenides lisatulu energiavoogude tasakaalustamisel.`,
        },
        lv: {
            name: 'Dyness akumulators + Solis hibrīds',
            details: 'Uzzināt vairāk',
            km: 'PVN',
            price: '6618.7',
            descTitle: 'Voltamp gudrā enerģijas sistēma',
            desc1: `Voltamp Dyness + Solis risinājums ir gudra un efektīva enerģijas uzglabāšanas sistēma tiem, kas vēlas maksimālu neatkarību un ekonomiju.`,
            desc2: `Sistēma automātiski uzkrāj enerģiju, kad tā ir lētāka, un izmanto to, kad cenas kāpj – pilnībā automatizēta enerģijas pārvaldība jūsu mājās.`,
            advantagesTitle: 'Kāpēc izvēlēties Voltamp?',
            advantages: [
                { icon: <MdEnergySavingsLeaf />, text: 'Ietaupiet katru dienu – izmantojiet elektrību, kad tā ir vislētākā.' },
                { icon: <MdBatteryChargingFull />, text: 'Dyness akumulators nodrošina drošu un ilgstošu darbību.' },
                { icon: <MdTrendingUp />, text: 'Pelniet, pārdodot pārpalikušo enerģiju atpakaļ tīklā.' },
                { icon: <MdEco />, text: 'Videi draudzīga tehnoloģija – samaziniet CO₂ pēdu un atbalstiet zaļo enerģiju.' },
            ],
            freqTitle: 'Gudrais līdzsvars',
            freqText: `Voltamp sistēmas piedalās frekvences tirgū, stabilizējot tīklu un nodrošinot ienākumus par līdzsvarošanu starp piedāvājumu un pieprasījumu.`,
        },
    }[locale];

    return (
        <Container className="pt-[114px] max-w-[1250px] min-h-screen relative overflow-hidden">

            {/* Background animation */}
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
                    src={solisbanner1514}
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

            {/* Details section */}
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
