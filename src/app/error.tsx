"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
    const router = useRouter();

    useEffect(() => {
        console.error("500 Error:", error);
        router.replace("/et");
    }, [error, router]);

    return null;
}
