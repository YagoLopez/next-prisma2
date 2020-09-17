import { PrismaClient } from '@prisma/client'
import Head from 'next/head'
import styles from '../styles/Home.module.css'


export async function getServerSideProps(context) {
  const prisma = new PrismaClient()
  const users = await prisma.user.findMany({
    include: { posts: true }
  })
  return {
    props: { users }, // will be passed to the page component as props
  }
}

export default function Index({ users = {} }) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>List of users:</h1>
        <pre>{JSON.stringify(users, null, 2)}</pre>
      </main>

    </div>
  )
}
