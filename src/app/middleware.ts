// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const url = req.nextUrl.clone();

    if (
        url.pathname.startsWith("/api") ||
        url.pathname.startsWith("/_next") ||
        url.pathname === "/et"
    ) {
        return NextResponse.next();
    }
    try {
        return NextResponse.next();
    } catch (err) {
        url.pathname = "/et";
        return NextResponse.redirect(url);
    }
}

export const config = {
    matcher: "/:path*",
};
