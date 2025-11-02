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
            descTitle: 'Battery Solutions with Market Control Module',
            desc1: `Market control means automated management of the energy storage system according to electricity price fluctuations on the Nord Pool exchange.`,
            desc2: `Sunergia offers reliable and efficient battery solutions with market control modules such as SolaX and Growatt.`,
            advantagesTitle: 'Advantages of Market Control',
            advantages: [
                { icon: <MdEnergySavingsLeaf />, text: 'Significant electricity cost savings – use energy when prices are low.' },
                { icon: <MdBatteryChargingFull />, text: 'Optimal battery usage – ensures your system operates efficiently.' },
                { icon: <MdTrendingUp />, text: 'Earning potential – sell stored energy back to the grid.' },
                { icon: <MdEco />, text: 'Green and sustainable – supports renewable energy transition.' },
            ],
            freqTitle: 'Frequency Market',
            freqText: `The frequency market helps maintain grid stability. Connected battery systems can earn revenue by balancing supply and demand.`,
        },
        et: {
            name: 'Solax inverter + Solax akupank',
            details: 'Loe edasi',
            km: 'KM',
            price: '6236.7',
            descTitle: 'Akulahendused börsijuhtimismooduliga',
            desc1: `Börsijuhtimine tähendab energiasalvestussüsteemi automatiseeritud haldamist vastavalt elektrihinna kõikumisele Nord Pooli elektribörsil.`,
            desc2: `Sunergia tootevalikust leiad töökindlad ja efektiivsed akulahendused börsijuhtimismooduliga nagu SolaX ja Growatt.`,
            advantagesTitle: 'Börsijuhtimise eelised',
            advantages: [
                { icon: <MdEnergySavingsLeaf />, text: 'Märkimisväärne elektrikulude kokkuhoid – kasuta elektrit siis, kui hind on madal.' },
                { icon: <MdBatteryChargingFull />, text: 'Optimaalne aku kasutamine – tagab süsteemi maksimaalse efektiivsuse.' },
                { icon: <MdTrendingUp />, text: 'Tulu teenimise võimalus – müü võrku energiat, kui elektrihind on kõrge.' },
                { icon: <MdEco />, text: 'Roheline ja jätkusuutlik lahendus – vähendab elektrivõrgu koormust.' },
            ],
            freqTitle: 'Sagedusturg',
            freqText: `Sagedusturg aitab hoida elektrivõrku stabiilsena. Aku saab salvestada ülejäävat energiat ja anda seda võrku tagasi, kui on puudujääk.`,
        },
        lv: {
            name: 'Solax invertors + DynSolaxess akumulators',
            details: 'Lasīt vairāk',
            km: 'PVN',
            price: '6236.7',
            descTitle: 'Akumulatoru risinājumi ar biržas vadības moduli',
            desc1: `Biržas vadība nozīmē automatizētu enerģijas uzglabāšanas sistēmas pārvaldību atbilstoši elektroenerģijas cenu svārstībām Nord Pool biržā.`,
            desc2: `Sunergia piedāvā uzticamus un efektīvus akumulatoru risinājumus ar biržas vadības moduli, piemēram, SolaX un Growatt.`,
            advantagesTitle: 'Biržas vadības priekšrocības',
            advantages: [
                { icon: <MdEnergySavingsLeaf />, text: 'Ievērojams ietaupījums – izmanto elektrību, kad tā ir lētāka.' },
                { icon: <MdBatteryChargingFull />, text: 'Optimāla akumulatora izmantošana – maksimāla efektivitāte.' },
                { icon: <MdTrendingUp />, text: 'Iespēja pelnīt – pārdod uzkrāto enerģiju tīklam, kad cenas ir augstas.' },
                { icon: <MdEco />, text: 'Zaļš un ilgtspējīgs risinājums – veicina pāreju uz tīru enerģiju.' },
            ],
            freqTitle: 'Frekvences tirgus',
            freqText: `Frekvences tirgus palīdz uzturēt elektroenerģijas tīkla stabilitāti un ļauj pelnīt, balansējot piedāvājumu un pieprasījumu.`,
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
