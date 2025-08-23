import { Container } from "@/components/shared/container";

import en from '@/locales/katuse-paigaldus/en.json';
import lv from '@/locales/katuse-paigaldus/lv.json';
import et from '@/locales/katuse-paigaldus/et.json';

import { CheckCircle, Hammer, Package, ClipboardList, CheckSquare } from "lucide-react";

interface ValtsplekkKatusSecondBlockProps {
    params: { locale: string };
}

export default function ValtsplekkKatusSecondBlock({ params }: ValtsplekkKatusSecondBlockProps) {
    const { locale } = params;
    const t = locale === 'en' ? en : locale === 'lv' ? lv : et;

    const steps = [
        { icon: ClipboardList, title: t.ValtsStepTitle1, text: t.ValtsStepText1 },
        { icon: CheckCircle, title: t.ValtsStepTitle2, text: t.ValtsStepText2 },
        { icon: Package, title: t.ValtsStepTitle3, text: t.ValtsStepText3 },
        { icon: Hammer, title: t.ValtsStepTitle4, text: t.ValtsStepText4 },
        { icon: CheckSquare, title: t.ValtsStepTitle5, text: t.ValtsStepText5 },
    ];

    return (
        <section className="py-12">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">
                    {t.ValtsSecondBlockTitle}{" "}
                    <span className="text-def">{t.ValtsSecondBlockSpan}</span>
                </h2>
                <div className="grid md:grid-cols-5 gap-6">
                    {steps.map((step, i) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={i}
                                className="p-6 bg-white rounded-2xl shadow flex flex-col items-center text-center"
                            >
                                <Icon className="w-10 h-10 text-def mb-4" />
                                <h3 className="font-semibold mb-2">{step.title}</h3>
                                <p className="text-sm text-gray-600">{step.text}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
