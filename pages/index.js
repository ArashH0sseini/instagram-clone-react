import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Modal from '../components/Modal'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/fav.ico" />
      </Head>

      <Modal />
      <Header />
      <Feed />
    </div>
  )
}
