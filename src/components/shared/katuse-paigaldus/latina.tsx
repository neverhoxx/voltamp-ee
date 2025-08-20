import { Container } from "../container";

import en from '@/locales/katuse-paigaldus/en.json';
import lv from '@/locales/katuse-paigaldus/lv.json';
import et from '@/locales/katuse-paigaldus/et.json';

interface LatinaProps {
    params: { locale: string };
}

export default function Latina({ params }: LatinaProps) {
    const { locale } = params;
    const t = locale === 'en' ? en : locale === 'lv' ? lv : et;

    return (
        <div className="bg-[#0094c5]">
            <Container
                className="py-[100px] flex flex-col items-center justify-center"

            >
                <h2 className="text-[32px] font-bold text-white text-center">
                    <blockquote>

                        <cite>
                            "Sub sole tuta domus."
                        </cite>

                        <br />

                        <cite>
                            "{t[`latina`]}"
                        </cite>
                    </blockquote>
                </h2>

            </Container>
        </div>

    );
}
