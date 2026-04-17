import { getPrisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
        const prisma = await getPrisma();
        const { email, password } = await req.json();

        const hashed = await bcrypt.hash(password, 10);
    
        const user = await prisma.user.create({
            data: {
                email,
                password: hashed,
            },
        });
    
        return Response.json(user);
        
    } catch (error) {
        console.error("register error", error);

        return Response.json({
            success: false,
            message: "Registreren is tijdelijk niet beschikbaar."
        }, { status: 500 });
    }
}
