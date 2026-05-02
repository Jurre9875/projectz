import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    function middleware(req) {
        const role = req.nextauth.token?.role;

        if (role !== "admin") {
            return NextResponse.redirect(new URL("/login", req.url));
        }
    },
    {
    secret: process.env.AUTH_SECRET,
        callbacks: {
            authorized: ({ token }) => !!token,
        },
    }
);

export const config = {
    matcher: ["/admin/:path*"],
};
