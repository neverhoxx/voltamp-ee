import KomplektidClient from "@/components/shared/komplektid/KoplektidClient";

interface KomplektidPageProps {
    params: {
        locale: string;
    };
}

export default function Komplektid({ params }: KomplektidPageProps) {
    return (
        <KomplektidClient locale={params.locale} />
    );
}
