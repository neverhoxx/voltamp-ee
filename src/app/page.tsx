import { redirect } from "next/navigation";
import Script from 'next/script';

export default function RootPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Voltamp",
    "description": "Voltamp - Päikesеkatused, päikesеpaneelid, energiasüsteemid ja paigaldus",
    "url": "https://voltamp.ee"
  };
  redirect("/et");

  return (
    <>
      <Script
        id="schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>)
}