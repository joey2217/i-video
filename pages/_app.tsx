import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ConfigProvider } from 'antd'
import dayjs from 'dayjs'
import Header from '../components/Header'
import FavoritesContext from '../context/FavoritesContext'
import useFavorites from '../hooks/useFavorites'
import 'dayjs/locale/zh-cn'
import zhCN from 'antd/lib/locale/zh_CN'
import { HistoryProvider } from '../context/HistoryContext'

dayjs.locale('zh-cn')

function MyApp({ Component, pageProps }: AppProps) {
  const value = useFavorites()
  return (
    <HistoryProvider>
      <FavoritesContext.Provider value={value}>
        <Head>
          <title>视频资源网</title>
          <meta name="description" content="a video resource website" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ConfigProvider locale={zhCN}>
          <Header />
          <main>
            <Component {...pageProps} />
          </main>
          <footer className="text-center py-4">所有资源均来自互联网</footer>
        </ConfigProvider>
      </FavoritesContext.Provider>
    </HistoryProvider>
  )
}

export default MyApp
