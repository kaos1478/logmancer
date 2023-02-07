import type { NextPage } from 'next'
import Head from 'next/head'

import Typography from '@/components/atoms/Typography'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="NextJS ts template" />
      </Head>
      <Typography as="body1">NextJS ts template</Typography>
    </div>
  )
}

export default Home
