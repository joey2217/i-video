import React, {
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { useRouter } from 'next/router'
import { Button, Tabs } from 'antd'
import Head from 'next/head'
import { fetchVideo } from '../../utils/api'
import type { Video, PlayItem, IHistory } from '../../types'
import { parseVideoPlayUrl } from '../../utils'
import Player from '../../components/Player'
import VideoInfo from '../../components/VideoInfo'
import FavoritesContext from '../../context/FavoritesContext'
import { useHistory } from '../../context/HistoryContext'
import PlayList from '../../components/PlayList'

const { TabPane } = Tabs

const durationReg = /(\d+).+/

const Detail: React.FC = () => {
  const router = useRouter()
  const { addHistory, histories } = useHistory()
  const { id } = router.query

  const [video, setVideo] = useState<Video>()
  const [show, setShow] = useState(true)
  const [liveList, setLiveList] = useState<PlayItem[]>([])
  const [playList, setPlayList] = useState<PlayItem[]>([])
  const [playIndex, setPlayIndex] = useState(0)
  const [currentHistory, setCurrentHistory] = useState<IHistory | null>(null)
  const [seek, setSeek] = useState<number | undefined>(undefined)
  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoritesContext)

  const included = useMemo(
    () => (video ? favorites.includes(video?.vod_id) : false),
    [favorites, video]
  )

  const episodeName = useMemo(() => {
    if (liveList.length > 0) {
      return liveList[playIndex].name
    } else {
      return ''
    }
  }, [liveList, playIndex])

  const videoSeconds = useMemo(() => {
    if (video && video.vod_duration) {
      const m = video.vod_duration.replace(durationReg, (m, p1) => p1)
      return Number(m) * 60
    }
    return 0
  }, [video])

  useEffect(() => {
    if (id) {
      fetchVideo(id as string).then((data) => {
        const { vod_play_from, vod_play_url } = data
        setVideo({ ...data, vod_play_url: '' })
        const { m3u8List, yunList } = parseVideoPlayUrl(
          vod_play_from,
          vod_play_url
        )
        setLiveList(m3u8List)
        setPlayList(yunList)
      })
    }
  }, [id])

  useEffect(() => {
    if (video && currentHistory == null) {
      const his = histories.find((h) => h.vod_id === video.vod_id)
      if (his) {
        setPlayIndex(his.episode)
        setSeek(his.seek)
        console.log('seek', his.seek, video.vod_name, video.vod_id)
        setCurrentHistory(his)
      } else {
        setPlayIndex(0)
        const newHistory = {
          vod_id: video.vod_id,
          vod_pic: video.vod_pic,
          vod_name: video.vod_name,
          vod_douban_score: video.vod_douban_score,
          vod_time: video.vod_time,
          vod_tag: video.vod_tag,
          vod_remarks: video.vod_remarks,
          seek: 0,
          seekPercentage: '0%',
          episode: 0,
          episodeName: liveList[0].name,
          date: Date.now(),
        } as IHistory
        setCurrentHistory(newHistory)
        addHistory(newHistory)
      }
    }
  }, [addHistory, currentHistory, histories, liveList, video])

  const goNext = useCallback(() => {
    if (liveList.length > 0 && playIndex + 1 < liveList.length) {
      setSeek(undefined)
      setPlayIndex(playIndex + 1)
    }
  }, [liveList.length, playIndex])

  const onTimeUpdate = useCallback(
    (num: number) => {
      console.log(num, video?.vod_name, 'onTimeUpdate')
      setSeek(undefined)
      if (video) {
        let seekPercentage = ''
        if (videoSeconds) {
          const p = Math.round((num / videoSeconds) * 100)
          seekPercentage = `${p}%`
        }
        addHistory({
          vod_id: video.vod_id,
          vod_pic: video.vod_pic,
          vod_name: video.vod_name,
          vod_douban_score: video.vod_douban_score,
          vod_time: video.vod_time,
          vod_tag: video.vod_tag,
          vod_remarks: video.vod_remarks,
          seek: num,
          seekPercentage,
          episode: playIndex,
          episodeName,
          date: Date.now(),
        } as IHistory)
      }
    },
    [addHistory, episodeName, playIndex, video, videoSeconds]
  )

  const onPlay = useCallback(
    (index: number) => {
      setPlayIndex(index)
      if (video) {
        addHistory({
          vod_id: video.vod_id,
          vod_pic: video.vod_pic,
          vod_name: video.vod_name,
          vod_douban_score: video.vod_douban_score,
          vod_time: video.vod_time,
          vod_tag: video.vod_tag,
          vod_remarks: video.vod_remarks,
          seek: 0,
          seekPercentage: '0%',
          episode: index,
          episodeName: liveList[index].name,
          date: Date.now(),
        } as IHistory)
      }
    },
    [addHistory, liveList, video]
  )

  return (
    <section className="lg:flex" id="detail">
      <Head>
        <title>
          {video && `${video.vod_name} - ${episodeName} - `}
          视频资源网
        </title>
      </Head>
      <div className="lg:flex-1">
        <Player
          liveUrl={liveList.length > 0 ? liveList[playIndex].url : undefined}
          playUrl={playList.length > 0 ? playList[playIndex].url : undefined}
          seek={seek}
          onEnd={goNext}
          onTimeUpdate={onTimeUpdate}
        />
      </div>
      <div className="hidden lg:flex items-center">
        <svg
          className="cursor-pointer fill-white hover:fill-green-400 transition ease-in-out delay-150"
          style={{
            transform: show ? 'none' : 'rotate(180deg)',
          }}
          onClick={() => setShow((s) => !s)}
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="40"
        >
          <path d="M761.056 532.128c0.512-0.992 1.344-1.824 1.792-2.848 8.8-18.304 5.92-40.704-9.664-55.424L399.936 139.744c-19.264-18.208-49.632-17.344-67.872 1.888-18.208 19.264-17.376 49.632 1.888 67.872l316.96 299.84-315.712 304.288c-19.072 18.4-19.648 48.768-1.248 67.872 9.408 9.792 21.984 14.688 34.56 14.688 12 0 24-4.48 33.312-13.44l350.048-337.376c0.672-0.672 0.928-1.6 1.6-2.304 0.512-0.48 1.056-0.832 1.568-1.344C757.76 538.88 759.2 535.392 761.056 532.128z"></path>
        </svg>
      </div>
      <div
        id="info-tabs"
        className={`w-full ${
          show ? 'lg:w-96' : 'lg:w-0'
        } transition-all ease-in-out delay-150`}
      >
        <div className="flex justify-between items-center flex-wrap p-2">
          <span className="text-lg font-bold truncate">{video?.vod_name}</span>
          <div
            className="cursor-pointer flex items-center"
            onClick={() => {
              if (video) {
                if (included) {
                  removeFavorite(video.vod_id)
                } else {
                  addFavorite(video.vod_id)
                }
              }
            }}
          >
            <svg
              className={included ? 'fill-white' : ''}
              width="16"
              height="16"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z"
                stroke="#fff"
                strokeWidth="4"
                strokeLinejoin="round"
              />
            </svg>
            {included ? '取消收藏' : '收藏'}
          </div>
        </div>
        <Tabs defaultActiveKey="1" type="card" size="small">
          <TabPane tab="在线播放" key="1">
            <PlayList
              dataSource={liveList}
              currentIndex={playIndex}
              renderItem={(v: PlayItem, index) => (
                <Button
                  key={v.url}
                  size="small"
                  type={playIndex === index ? 'primary' : 'default'}
                  onClick={() => onPlay(index)}
                >
                  {v.name}
                </Button>
              )}
            />
          </TabPane>
          <TabPane tab="云播(站外)" key="2">
            <PlayList
              dataSource={playList}
              renderItem={(v: PlayItem) => (
                <Button
                  key={v.url}
                  size="small"
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="跳转"
                >
                  {v.name}
                </Button>
              )}
            />
          </TabPane>
          <TabPane tab="简介" key="3">
            {video && <VideoInfo {...video} />}
          </TabPane>
        </Tabs>
      </div>
    </section>
  )
}

export default memo(Detail)
