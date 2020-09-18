import { PrismaClient } from '@prisma/client'
import Head from 'next/head'
import styles from '../styles/Home.module.css'


export async function getStaticProps(context) {

  let users;

  try {
    const prisma = new PrismaClient()
    const newUser = await prisma.user.create({
      data: {
        name: 'Alice',
        email: 'alice@prisma.io',
      },
    })
    users = await prisma.user.findMany()
    console.log('users', users)
  } catch (e) {
    console.error(e)
  }

  return {
    props: {  }, // will be passed to the page component as props
  }
}

export default function Index({ users = {} }) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create New User</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>List of users:</h1>
        <pre>{JSON.stringify(users, null, 2)}</pre>
      </main>

    </div>
  )
}
