"use client";
import { Component, ErrorInfo, ReactNode } from "react";
import { useRouter } from "next/navigation";

interface Props { children: ReactNode }

interface State { hasError: boolean }

export class ClientErrorBoundary extends Component<Props, State> {
    state = { hasError: false };
    router = useRouter();

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.error(error, info);
        this.router.replace("/et");
    }

    render() {
        if (this.state.hasError) return null;
        return this.props.children;
    }
}
