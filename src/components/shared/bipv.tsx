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

interface BipvProps {
    params: { locale: string };
}

export default function Bipv({ params }: BipvProps) {
    const { locale } = params;
    const t = locale === 'en' ? en : locale === 'lv' ? lv : et;

    return (
        <div className="relative pt-20 px-[5px]">
            <div className="max-w-[1440px] mx-auto">
                <h2 className="font-black text-2xl sm:text-[32px] mb-5 text-left sm:text-center">
                    Miks kasutatakse innovatiivseid ehitisintegreeritud päikesesüsteeme (BIPV)?
                </h2>
                <p className="opacity-60 text-left sm:text-center font-bold mb-5">
                    Sest siis ei ole vaja eraldi päikesepaneele ja katusekattematerjali. Ehitisintegreeritud päikesekatuse näol on tegemist kaks - ühes katusekattematerjaliga, mis on samaaegselt hoone kaitse- ja energiatootmise lahendus. Selline süsteem teenib ennast tagasi tasakaalustatud ja turvalise investeeringuna ning jätkab kasumi teenimist kogu oma elutsükli jooksul, pakkudes nii kaitset ilmastiku eest kui täites ka olulist elektritootmise funktsiooni.
                </p>

                <p className="text-[16px]  mx-auto  sm:text-2xl font-bold text-left my-10">
                    <span className="text-def">Müüdid ja vastuväited</span>: Kuna päikesepaneelide, inverterite, akude ja lisaseadmete kohta on väga palju levivaid müüte, siis siinkohal toome esile enamlevinud negatiivsed arvamused ja lükkame need ümber. Oleme oma meeskonnaga kuulnud täiesti uskumatuid jutte aga meie positiivne kogemus tõestab vastupidist nendele juttudele.
                </p>
            </div>

            <Container className="max-w-[1000px] relative ">
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                >
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-def font-black sm:text-[20px] text-[16px] cursor-pointer py-5">Päikesepaneelide ja ehitisintegreeritud energiasüsteemide puhul on hinnad liiga kõrged ning nende tasuvus ei ole põhjendatud.</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p className="font-bold">
                                Tegelikkus on see, et innovatiivsed päikesepaneelid ja hoone energiasüsteemid, nagu BIPV (ehitisintegreeritud päikesepaneelid), on tasuvad pikaajalise energia kokkuhoiu ning hoone väärtuse tõstmise tõttu. Need toimivad kui investeering, mis aitab oluliselt vähendada energiakulu ning toetada jätkusuutlikku arhitektuuri ja energiatõhusat ehitust.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-def font-black sm:text-[20px] text-[16px] cursor-pointer py-5">Ehitisintegreeritud päikesekatused ja energialahendused ei sobi kõigile hoonetüüpidele ega arhitektuuristiilidele.</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p className="font-bold">
                                Tänapäeval on saadaval laia disainvaliku ning täiustatud tehnoloogiate valik, mis võimaldab integreerida päikesepaneele ning ehitisenergiatootmise lahendusi peaaegu iga hoone arhitektuuri ning disainiga, säilitades või isegi täiustades selle esteetilist väärtust.
                            </p>

                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-def font-black sm:text-[20px] text-[16px] cursor-pointer py-5">Ehitisintegreeritud päikesesüsteemide paigaldus ja hooldus on keeruline ning kulukas.</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p className="font-bold ">
                                Professionaalselt välja töötatud ja paigaldatud integreeritud päikesetehnoloogiad ning energiamoodulid võimaldavad lihtsat ning hooldusvaba kasutamist. Meie kogemustega meeskond tagab, et paigaldus on tõhus ning hooldusvajadus minimaalne, aidates hoida energiasüsteemid töökorras.
                            </p>

                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="text-def font-black sm:text-[20px] text-[16px] cursor-pointer py-5">Päikesepaneelid ja energiasüsteemid ei ole veel piisavalt tõhusad ning toodavad liiga vähe energiat, et kiiresti investeeringu tasuvust saavutada.</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p className="font-bold ">
                                Tänapäeva päikesepaneelid ja ehitisintegreeritud energialahendused, nagu BIPV katused ja fassaadid on oluliselt tõhusamad ning suudavad katta märkimisväärse osa hoone energiavajadusest.See aitab vähendada sõltuvust välistest energiaallikatest ning alandada hoone süsinikujalajälge, olles seega keskkonnasõbralikum ning pikaajaliselt kasumlik valik.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger className="text-def font-black sm:text-[20px] text-[16px] cursor-pointer py-5">Ehitisintegreeritud energiasüsteemid on uus tehnoloogia ning nende usaldusväärsus on kaheldav.</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p className="font-bold ">
                                BIPV ja teised hoone energiatootmise tehnoloogiad on kiiresti arenevad ning laialdaselt kasutatavad rahvusvaheliselt. Nad on läbinud põhjalikud testimised ja sertifikaadid, ning meie lahendused vastavad kõigile energiatõhususe- ning turvastandarditele.
                            </p>

                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger className="text-def font-black sm:text-[20px] text-[16px] cursor-pointer py-5">Kui BIPV-seadmed või katusekomponendid lähevad katki, on nende parandamine keeruline ja kulukas.</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p className="font-bold ">
                                Tegelikkus on see, et kaasaegsed BIPV-infrastruktuurid on disainitud nii, et nende hooldus ja parandamine oleks võimalikult lihtne ning kulutõhus. Meie kogenud meeskond teostab hooldust ning parandust kiiresti ja professionaalselt, tagades hoone pikaajalise toimivuse ning energiatõhususe.
                            </p>

                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                        <AccordionTrigger className="text-def font-black sm:text-[20px] text-[16px] cursor-pointer py-5">Kui maja tarbimine on väike, siis pole mõtet investeerida päikesesüsteemi, sest see ei tasu end ära.</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p className="font-bold ">
                                Tegelikkus on vastupidine – uued ja renoveeritavad majad ning hooned, millele paigaldatakse energiakulukad küttesüsteemid ja muud tehnoloogiad, sageli suurendavad oma elektri vajadust ning kogu energiatarbimist. Sellistel juhtudel on päikesesüsteem tõhus ning tasuv, aidates märkimisväärselt vähendada elektriarvet ning kiirendada süsteemi tasuvust.
                            </p>

                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-8">
                        <AccordionTrigger className="text-def font-black sm:text-[20px] text-[16px] cursor-pointer py-5">Suvel on elektrihinnad odavad ning seetõttu ei ole mõtet investeerida päikesesüsteemi, kuna see pole kasulik aastaringselt.</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p className="font-bold ">
                                Nutikate inverterite, akude ja lisaseadmete abil saab elektritootmise ja -tarbimise hallata nii, et enda vajadused ja kasumlikkus tõuseb aastaringselt. Isegi talvel, kui elektrihinnad võivad piirkonniti olla kõrgemad, aitab akupank ning nutikas seade hoida kulud madalad ning optimeerida elektritarbimist. Lisaks võimaldab katuse lumest ettevaatlikult puhastamine ning päikesepaneelide hoidmine heas korras toota elektrit ka talvel, mis veelgi suurendab süsteemi kasulikkust.
                            </p>

                        </AccordionContent>
                    </AccordionItem>
                </Accordion>


            </Container>
        </div>
    );
}
