// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client';

export default async (req, res) => {
  const prisma = new PrismaClient()
  const users = await prisma.user.findMany()

  res.statusCode = 200
  res.json(users)
}
