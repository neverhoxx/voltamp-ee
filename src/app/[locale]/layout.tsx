import { ReactNode } from 'react';

import Header from "@/components/shared/header";
import KontaktBlock from '@/components/shared/kontakt';

import Faq from '@/components/shared/faq';
import Bipv from '@/components/shared/bipv';

import Footer from '@/components/shared/footer';
import React from 'react';


export const dynamic = "force-dynamic";
export default async function LocaleLayout({ children, params }: { children: React.ReactNode, params: Promise<{ locale: string }> }) {
    const { locale } = await params;

    const childrenArray = React.Children.toArray(children);
    const hasMarker = childrenArray.some(
        (child: any) => child?.props?.["data-hide-kontakt"] !== undefined
    );

    return (
        <>

            <Header locale={locale} />
            <main className='main'>
                {children}
                <Faq params={{ locale }} />
                <Bipv params={{ locale }} />
                <KontaktBlock params={{ locale }} />
            </main>
            <Footer params={{ locale }} />
        </>
    );
}

