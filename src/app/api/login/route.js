import { getPrisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
        const prisma = await getPrisma();
        const { email, password } = await req.json();

        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            return Response.json({ success: false });
        }

        const valid = await bcrypt.compare(password, user.password);

        if (!valid) {
            return Response.json({ success: false });
        }

        return Response.json({ success: true, user });
    } catch (error) {
        console.error("login error", error);

    return Response.json(
    { success: false, message: "Login is niet beschikbaar" },
    { status: 500 }
    );
    }
}
