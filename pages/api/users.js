// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client';

export default async (req, res) => {
  try {
    const prisma = new PrismaClient()
    const users = await prisma.user.findMany()
    res.status(200).json(users)

  } catch (error) {
    console.error(error)
    res.status(500).json(error)
  }}
