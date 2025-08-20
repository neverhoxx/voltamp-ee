import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "../container";

import en from '@/locales/in-roof/en.json';
import lv from '@/locales/in-roof/lv.json';
import et from '@/locales/in-roof/et.json';

import { Shield, Wrench, House, Zap } from "lucide-react";

interface InRoofEelisedProps {
    params: { locale: string };
}

export default function InRoofEelised({ params }: InRoofEelisedProps) {
    const { locale } = params;
    const t = locale === 'en' ? en : locale === 'lv' ? lv : et;

    const benefits = [
        {
            icon: <House className="h-6 w-6" aria-hidden />,
            title: t.card1Title,
            text: t.card1Text,
        },
        {
            icon: <Shield className="h-6 w-6" aria-hidden />,
            title: t.card2Title,
            text: t.card2Text,
        },
        {
            icon: <Zap className="h-6 w-6" aria-hidden />,
            title: t.card3Title,
            text: t.card3Text,
        },
        {
            icon: <Wrench className="h-6 w-6" aria-hidden />,
            title: t.card4Title,
            text: t.card4Text,
        },
    ];

    return (
        <Container className="py-[50px] ">
            <div className="mb-8 max-w-2xl">
                <h2 className="text-2xl font-bold sm:text-3xl">{t.sectionTitle}</h2>
                <p className="mt-2 text-slate-600 text-semibold">
                    {t.sectionText}
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 select-none">
                {benefits.map((b, i) => (
                    <Card key={i} className="rounded-2xl border-slate-200 shadow-sm">
                        <CardHeader className="flex flex-row items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                                {b.icon}
                            </div>
                            <h3 className="text-base font-semibold">{b.title}</h3>
                        </CardHeader>
                        <CardContent className="pt-0 text-sm text-slate-700">{b.text}</CardContent>
                    </Card>
                ))}
            </div>
        </Container>
    );
}
