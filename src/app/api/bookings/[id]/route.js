import { getPrisma } from "@/lib/prisma";

export async function DELETE(req, { params }) {
  const { id } = await params;
  const prisma = await getPrisma();
  await prisma.booking.delete({ where: { id: parseInt(id) } });
  return Response.json({ message: "ok" });
}

export async function PATCH(req, { params }) {
  const { id } = await params;
  const prisma = await getPrisma();
  const body = await req.json();
  const booking = await prisma.booking.update({
    where: { id: parseInt(id) },
    data: { status: body.status },
  });
  return Response.json(booking);
}
