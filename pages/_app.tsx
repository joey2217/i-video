import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../components/Header'
import FavoritesContext from '../context/FavoritesContext'
import useFavorites from '../hooks/useFavorites'

function MyApp({ Component, pageProps }: AppProps) {
  const value = useFavorites()
  return (
    <FavoritesContext.Provider value={value}>
      <Head>
        <title>视频资源网</title>
        <meta name="description" content="a video resource website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </FavoritesContext.Provider>
  )
}

export default MyApp
