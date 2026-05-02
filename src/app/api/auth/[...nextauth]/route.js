import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { getPrisma } from "@/lib/prisma";

const handler = NextAuth({
    secret: process.env.AUTH_SECRET,
    pages: { signIn: "/login" },

    providers: [
        CredentialsProvider({
            async authorize({ email, password }) {
                const prisma = await getPrisma();
                const user = await prisma.user.findUnique({ where: { email } });
                if (!user) return null;

                const geldig = await bcrypt.compare(password, user.password);
                if (!geldig) return null;

                return { id: user.id.toString(), email: user.email, role: user.role };
            },
        }),
    ],

    callbacks: {
        jwt({ token, user }) {
            if (user) token.role = user.role;
            return token;
        },
        session({ session, token }) {
            session.user.role = token.role;
            return session;
        },
    },
});

export { handler as GET, handler as POST };
