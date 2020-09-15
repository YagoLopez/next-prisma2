// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client';

export default async (req, res) => {
  try {
    const prisma = new PrismaClient()
    const users = await prisma.user.findMany()

    res.statusCode = 200
    res.json(users)

  } catch (e) {
    res.statusCode = 500
    res.send(e)
    console.error(e)
  }
}
