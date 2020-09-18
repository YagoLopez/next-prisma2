const { PrismaClient } = require('@prisma/client')

module.exports = async (req, res) => {
  try {
    const prisma = new PrismaClient()
    const users = await prisma.user.findMany()
    res.status(200).json(users)
    // res.status(200).json({"test": "hola"})

  } catch (error) {
    console.error(error)
    res.status(500).json(error)
  }
  // const { name = 'World' } = req.query
  // res.status(200).send(`Hello world!`)
}