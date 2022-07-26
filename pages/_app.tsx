import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import dayjs from 'dayjs'
import Header from '../components/Header'
import FavoritesContext from '../context/FavoritesContext'
import useFavorites from '../hooks/useFavorites'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')

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
      <footer className="text-center pb-4">所有资源均来自互联网</footer>
    </FavoritesContext.Provider>
  )
}

export default MyApp
