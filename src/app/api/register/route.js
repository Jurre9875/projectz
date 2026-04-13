import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
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
        console.log("register error", error);

        return Response.json({
            succes: false,
            message: "user al aangemaakt"
        });
    }
}
