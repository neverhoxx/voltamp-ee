"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import en from "@/locales/kontakt/en.json";
import lv from "@/locales/kontakt/lv.json";
import et from "@/locales/kontakt/et.json";

import { Button } from "../ui/button";
import { Phone, Mail, MessageSquare } from "lucide-react";
import { useCart } from "@/context/CartContext";
import type { Metadata } from "next";

interface KontaktBlockProps {
    params: { locale: string };
}

export const metadata: Metadata = {
    title: "Voltamp – Contact",
    description: "Voltamp provides high-quality solar panel equipment and energy systems. Complete solutions for homes and businesses – batteries, inverters, installation, and warranty.",
    keywords: [
        "päikesepaneelid, energiasüsteemid, akud, inverterid, päikeseenergia, taastuvenergia, Eesti, Voltamp, hübriidinverter, akuinverter, lisaseadmed",
        "solar panels, energy systems, batteries, inverters, solar energy, renewable energy, Estonia, Voltamp, hybrid inverter, battery inverter, accessories",
        "saules paneļi, enerģijas sistēmas, akumulatori, invertori, saules enerģija, atjaunojamā enerģija, Igaunija, Voltamp, hibrīdinvertors, akumulatora invertors, piederumi"
    ],
    openGraph: {
        title: "Voltamp – Contact",
        description: "Voltamp provides high-quality solar panel equipment and energy systems. Complete solutions for homes and businesses – batteries, inverters, installation, and warranty.",
        url: "https://voltamp.ee/et/contact",
        siteName: "Voltamp – Solar Panels and Energy Solutions",
        images: [
            {
                url: "https://voltamp.ee/images/logos/logo.webp",
                width: 1200,
                height: 630,
                alt: "Voltamp logo"
            }
        ],
        locale: "en_US",
        type: "website",
    },
    alternates: {
        canonical: "https://voltamp.ee/et/kontakt",
        languages: {
            et: "https://voltamp.ee/et/kontakt",
            en: "https://voltamp.ee/en/kontakt",
            ru: "https://voltamp.ee/lv/kontakt"
        }
    }
};



export default function KontaktBlock({ params }: KontaktBlockProps) {
    const { locale } = params;
    const t = locale === "en" ? en : locale === "lv" ? lv : et;

    const { cart } = useCart();
    const [includeCart, setIncludeCart] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name.trim()) newErrors.name = t[`nimiError`];
        if (!formData.email.trim()) {
            newErrors.email = t[`emailError1`];
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
            newErrors.email = t[`emailError2`];
        }
        if (!formData.phone.trim()) newErrors.phone = t[`phoneError1`];
        return newErrors;
    };

    const formatCartAsText = (items: typeof cart) =>
        items
            .map(
                (item) =>
                    `${item.product.name} – ${item.quantity} tk × ${item.product.price}€ = ${(item.product.price * item.quantity).toFixed(2)}€`
            )
            .join("\n");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) return;

        setLoading(true);
        setSuccess(false);

        const formPayload = {
            ...formData,
            cartItems: includeCart && cart.length > 0 ? formatCartAsText(cart) : "",
        };

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                formPayload,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );
            setSuccess(true);
            setFormData({ name: "", phone: "", email: "", message: "" });
            setIncludeCart(false);
        } catch (err) {
            console.error("EmailJS error:", err);
            alert(t[`serverError`]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>

            <section
                className="relative  bg-[#0094c5] select-none py-[114px]"
                style={{ clipPath: "polygon(0 0, 100% 0%, 100% 95%, 0 100%)" }}
            >
                <div className="absolute inset-0 -z-10 bg-[#0094c5]" />
                <div className="mx-auto max-w-4xl px-6 text-white">
                    <h2 className="text-2xl font-semibold sm:text-3xl z-5">
                        {t.kontaktTitle}
                    </h2>
                    <p className="mt-2 text-white/80">{t.kontaktSubTitle}</p>
                    {errors.name && (
                        <p className="text-red-900 text-sm">{errors.name}</p>
                    )}
                    {errors.email && (
                        <p className="text-red-900 text-sm">{errors.email}</p>
                    )}
                    {errors.phone && (
                        <p className="text-red-900 text-sm">{errors.phone}</p>
                    )}
                    <form
                        onSubmit={handleSubmit}
                        className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2"
                    >
                        <input
                            className="rounded-xl border border-white/20 bg-white/50 p-3 placeholder-black outline-none backdrop-blur"
                            placeholder={t.nimi}
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />


                        <input
                            className="rounded-xl border border-white/20 bg-white/50 p-3 placeholder-black outline-none backdrop-blur"
                            placeholder={t.email}
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />


                        <input
                            className="rounded-xl border border-white/20 bg-white/50 p-3 placeholder-black outline-none backdrop-blur md:col-span-2"
                            placeholder={t.phone}
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />


                        <textarea
                            className="h-28 rounded-xl border border-white/20 bg-white/50 p-3 placeholder-black outline-none backdrop-blur md:col-span-2"
                            placeholder={t.description}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        />

                        <div className="md:col-span-2">
                            <label className="flex items-center gap-2 text-white/80">
                                <input
                                    type="checkbox"
                                    checked={includeCart}
                                    onChange={(e) => setIncludeCart(e.target.checked)}
                                />
                                {t[`ostukorv`]}
                            </label>
                        </div>

                        <div className="flex items-center gap-3 md:col-span-2 flex-wrap">
                            <Button
                                className="rounded-2xl px-6 py-6"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? t[`laadimine`] : t.send}
                            </Button>

                            {success && (
                                <span className="text-green-200">
                                    ✅ {t[`saadetud`]}
                                </span>
                            )}

                            <a
                                href="tel:+37255534314"
                                className="inline-flex items-center gap-2 text-white/90 hover:text-white"
                            >
                                <Phone className="h-4 w-4" /> +372 555 343 14
                            </a>
                            <a
                                href="mailto:info@voltamp.ee"
                                className="inline-flex items-center gap-2 text-white/90 hover:text-white"
                            >
                                <Mail className="h-4 w-4" /> info@voltamp.ee
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 text-white/90 hover:text-white"
                            >
                                <MessageSquare className="h-4 w-4" /> {t.vestle}
                            </a>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}
