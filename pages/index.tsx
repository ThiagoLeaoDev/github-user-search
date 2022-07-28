import Head from 'next/head'
import * as SC from '../styles/sharedstyles'

export default function Home() {
  return (
    <SC.Container>
      <Head>
        <title>Github User Search</title>
        <meta name="description" content="Search user with Github API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SC.Main>
        <SC.Title>
        </SC.Title>

        <SC.Description>
        </SC.Description>
      </SC.Main>
    </SC.Container>
  )
}
