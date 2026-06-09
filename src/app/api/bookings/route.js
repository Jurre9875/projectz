import { getPrisma } from "@/lib/prisma";
import { getToken } from "next-auth/jwt";

export async function GET(req) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });
  if (!token) {
    return Response.json({ error: "Niet geautoriseerd. Log in om boekingen te bekijken." }, { status: 401 });
  }

  const prisma = await getPrisma();
  const bookings = await prisma.booking.findMany();

  return Response.json(bookings);
}

export async function POST(req) {
  const prisma = await getPrisma();
  const body = await req.json();

  try {
    const appointmentAt = new Date(`${body.date}T${body.time}`);

    const booking = await prisma.booking.create({
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone,
        service: body.service,
        appointmentAt,
        notes: body.notes,
      },
    });

    return Response.json({ message: "ok", booking });
  } catch (error) {
    console.error("booking error", error);
    return Response.json({ message: "error" }, { status: 500 });
  }
}
