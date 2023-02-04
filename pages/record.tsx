import React, { memo } from 'react'
import Head from 'next/head'
import HistoryList from '../components/VideoList/HistoryList'

const Record: React.FC = () => {
  return (
    <section className="page">
      <Head>
        <title>看过 - 视频资源网</title>
      </Head>
      <div>
        <HistoryList />
      </div>
    </section>
  )
}

export default memo(Record)
