import { getPrisma } from "@/lib/prisma";

export async function GET() {
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
  } catch {
    return Response.json({ message: "error" }, { status: 500 });
  }
}
