'use client';

import { Container } from "@/components/shared/container";

import en from '@/locales/täiskatuse/en.json';
import lv from '@/locales/täiskatuse/lv.json';
import et from '@/locales/täiskatuse/et.json';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import Link from "next/link";

interface FaqProps {
    params: { locale: string };
}

export default function Faq({ params }: FaqProps) {
    const { locale } = params;
    const t = locale === 'en' ? en : locale === 'lv' ? lv : et;

    return (
        <div className="relative pt-20">
            <Container className="max-w-[1000px] relative">
                <div
                    className="w-[169px] h-1 rounded-[2px] mb-[17px]"
                    style={{ background: "linear-gradient(to right, #00BFFF, #000000)" }}
                ></div>
                <h2 className="font-black text-2xl sm:text-[32px] mb-5">
                    KKK: ehitisintegreeritavate päikesekatuste kohta
                </h2>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                >
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-def font-black text-[20px] cursor-pointer">Mis on ehitisintegreeritav päikesekatuse süsteem?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p className="font-bold">
                                Ehitisintegreeritav päikesekatuse süsteem on innovatiivne lahendus, kus päikesepaneelidest moodustub katusekattematerjal, mis on kombineeritud üheks terviklikuks kaks-ühes süsteemiks. See tähendab, et päikesepaneelid asuvad otse katuse konstruktsioonil ning muudavad kogu hoone katuse stiilseks ja funktsionaalseks ning energiat tootvaks ja raha säästvaks süsteemiks.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-def font-black text-[20px] cursor-pointer">Kuidas see töötab?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p className="font-bold">
                                Süsteem on projekteeritud nii, et päikesepaneelid toimivad samaaegselt katuse kattematerjalina ning vastavad kõigile ehitusstandarditele. Katuse ehitustööd on täpselt samasugused nagu tavalise katuse puhul – eeltööd ning ettevalmistus on täielikult sarnased klassikalise katuse ehitusega. Päikesepaneelid paigaldatakse konstruktsioonile vastavalt tehnilistele nõuetele ning ühendatakse elektrisüsteemiga.
                            </p>

                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-def font-black text-[20px] cursor-pointer">Kas ehitisintegreeritud päikesekatus on vastupidav ning töökindel?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p className="font-bold ">
                                Jah, see süsteem on loodud vastama tavalisele katuse standardile ning on mõeldud kestma aastakümneid. Päikesepaneelid ja katusematerjalid on hoolikalt valitud nii, et hoone kaitse ning veekindlus oleks sama usaldusväärne kui tavalistel katustel.
                            </p>

                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="text-def font-black text-[20px] cursor-pointer">Miks valida ehitisintegreeritav päikesekatus?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p className="font-bold ">
                                Esteetilisus: Päikesepaneelid moodustavad katusekatte materjali ning need muudavad hoone valimust tunduvalt silmapaistvamaks ja kaunimaks.
                            </p>
                            <p className="font-bold ">
                                Raha kokkuhoid: Ei ole vaja eraldiseisevaid päikesepaneelide raamitisi, mille integreerimine tavalistele katustele võib kahjustada aluspinda ning lisaks jääb ära topelt töö ja topelt kulu, et muuta oma maja keskkonnasõbralikuks ja tulutoovaks.meie toode Teie kodu katusel on Teie investeering ning ainus raha tagasi teeniv lahendus!
                            </p>
                            <p className="font-bold ">
                                Keskkonnasõbralikkus: Puhas ja jätkusuutlik energia, mis on harmooniline hoone disainiga.
                            </p>
                            <p className="font-bold ">
                                Kestvus ja kvaliteet: Vastab või ületab tavakatustele seatavad nõuded ning tagab pikaajalise töökindluse.
                            </p>
                            <p className="font-bold ">
                                Kuidas toimub paigaldus?
                            </p>
                            <p className="font-bold ">
                                Paigaldus on väga sarnane tavapärastele katuseehitustele.Katuse eeltööd ning materjalide paigaldus toimuvad sama moodi nagu tavakatusel, ning päikesepaneelid integreeritakse konstruktsioonile vastavalt tehnilistele nõuetele.
                            </p>

                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger className="text-def font-black text-[20px] cursor-pointer">Kas see sobib kõigile hoone tüüpidele?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p className="font-bold ">
                                Jah, enamikul katusekonstruktsioonidel saab kasutada ehitisintegreeritavaid päikesekatuseid. See lahendus sobib nii uusehitistele kui ka olemasolevate hoonete renoveerimiseks ning aitab saavutada harmoonilise välimuse ning kauakestva energiat- ja raha tootva katuse.
                            </p>

                        </AccordionContent>
                    </AccordionItem>
                </Accordion>


            </Container>
        </div>
    );
}
