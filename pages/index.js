import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Starship Creative</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Starship Creative, llc" />
        <p className="description">
        Building Communities. Connecting People.
        </p>
      </main>

      <Footer />
    </div>
  )
}
