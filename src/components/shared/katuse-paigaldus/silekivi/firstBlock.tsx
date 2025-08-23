import { Container } from "@/components/shared/container";

import en from '@/locales/katuse-paigaldus/en.json';
import lv from '@/locales/katuse-paigaldus/lv.json';
import et from '@/locales/katuse-paigaldus/et.json';

import { CheckCircle, Hammer, Package, ClipboardList, CheckSquare } from "lucide-react";

interface SilekiviKatusFirstBlockProps {
    params: { locale: string };
}

export default function SilekiviKatusFirstBlock({ params }: SilekiviKatusFirstBlockProps) {
    const { locale } = params;
    const t = locale === 'en' ? en : locale === 'lv' ? lv : et;

    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-6">
                    {t.SileKiviFirstBlockTitle}{" "}
                    <span className="text-def">{t.SileKiviFirstBlockSpan}</span>
                </h2>
                <div className="grid md:grid-cols-4 gap-6">
                    <div className="p-6 bg-white rounded-2xl shadow flex flex-col items-center">
                        <CheckCircle className="w-10 h-10 text-def mb-4" />
                        <h3 className="font-semibold">{t.SileKiviEeliseSpan1}</h3>
                        <p className="text-sm text-gray-600">{t.LaineKiviEeliseTitle1}</p>
                    </div>
                    <div className="p-6 bg-white rounded-2xl shadow flex flex-col items-center">
                        <Hammer className="w-10 h-10 text-def mb-4" />
                        <h3 className="font-semibold">{t.SileKiviEeliseSpan2}</h3>
                        <p className="text-sm text-gray-600">{t.SileKiviEeliseTitle2}</p>
                    </div>
                    <div className="p-6 bg-white rounded-2xl shadow flex flex-col items-center">
                        <Package className="w-10 h-10 text-def mb-4" />
                        <h3 className="font-semibold">{t.SileKiviEeliseSpan3}</h3>
                        <p className="text-sm text-gray-600">{t.SileKiviEeliseTitle3}</p>
                    </div>
                    <div className="p-6 bg-white rounded-2xl shadow flex flex-col items-center">
                        <CheckSquare className="w-10 h-10 text-def mb-4" />
                        <h3 className="font-semibold">{t.SileKiviEeliseSpan4}</h3>
                        <p className="text-sm text-gray-600">{t.SileKiviEeliseTitle4}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
