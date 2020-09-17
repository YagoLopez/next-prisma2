// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client';

export default async (req, res) => {
  try {
    const prisma = new PrismaClient()
    const newUser = await prisma.user.create({
      data: {
        name: 'Alice',
        email: 'alice@prisma.io',
      },
    })

    res.statusCode = 200
    res.json(newUser)

  } catch (e) {
    res.statusCode = 500
    res.send(e)
    console.error(e)
  }
}
