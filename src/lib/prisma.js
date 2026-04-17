import { PrismaPg } from "@prisma/adapter-pg";

const globalForPrisma = globalThis;

export async function getPrisma() {
  if (globalForPrisma.prisma) {
    return globalForPrisma.prisma;
  }

  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error("DATABASE_URL is niet goed");
  }

  const [{ PrismaClient }] = await Promise.all([import("@prisma/client")]);

  const adapter = new PrismaPg({
    connectionString,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  const prisma = new PrismaClient({ adapter });

  if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
  }

  return prisma;
}
