import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { success } from "zod";

export async function POST(req) {
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
}
