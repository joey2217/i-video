import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>视频资源网</title>
        <meta name="description" content="a video resource website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
