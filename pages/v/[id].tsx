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
import type { Video, PlayItem } from '../../types'
import { parseVideoPlayUrl } from '../../utils'
import Player from '../../components/Player'
import VideoInfo from '../../components/VideoInfo'
import FavoritesContext from '../../context/FavoritesContext'
import { useHistory } from '../../context/HistoryContext'

const { TabPane } = Tabs

let timer: string | number | NodeJS.Timeout | undefined

const Detail: React.FC = () => {
  const router = useRouter()
  const { addHistory, histories } = useHistory()
  const { id } = router.query

  const [video, setVideo] = useState<Video>()
  const [show, setShow] = useState(true)
  const [liveList, setLiveList] = useState<PlayItem[]>([])
  const [playList, setPlayList] = useState<PlayItem[]>([])
  const [playIndex, setPlayIndex] = useState(0)
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
    if (video) {
      const his = histories.find((h) => h.vod_id === video.vod_id)
      if (his) {
        setPlayIndex(his.episode)
        setSeek(his.seek)
      } else {
        setPlayIndex(0)
        addHistory({
          ...video,
          seek: 0,
          episode: 0,
          episodeName: liveList[0].name,
          date: Date.now(),
        })
      }
    }
    return () => {
      clearTimeout(timer)
    }
  }, [addHistory, histories, liveList, video])

  const goNext = useCallback(() => {
    if (liveList.length > 0 && playIndex + 1 < liveList.length) {
      setSeek(undefined)
      setPlayIndex(playIndex + 1)
    }
  }, [liveList.length, playIndex])

  const onTimeUpdate = useCallback(
    (num: number) => {
      clearTimeout(timer)
      setTimeout(() => {
        if (video) {
          addHistory({
            ...video,
            seek: num,
            episode: playIndex,
            episodeName,
            date: Date.now(),
          })
        }
      }, 1000)
    },
    [addHistory, episodeName, playIndex, video]
  )

  const onPlay = useCallback(
    (index: number) => {
      setPlayIndex(index)
      if (video) {
        addHistory({
          ...video,
          seek: 0,
          episode: index,
          episodeName,
          date: Date.now(),
        })
      }
    },
    [addHistory, episodeName, video]
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
        } transition-all ease-in-out delay-150 mt-4 lg:mt-0`}
      >
        <Tabs defaultActiveKey="1" type="card" size="small">
          <TabPane tab="在线播放" key="1">
            <div className="flex justify-between items-center flex-wrap mb-2 pr-2">
              <span className="text-lg font-bold truncate">
                {video?.vod_name}
              </span>
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
            <div className="grid grid-cols-6 lg:grid-cols-4 gap-1">
              {liveList.map((v, index) => (
                <Button
                  key={v.url}
                  size="small"
                  type={playIndex === index ? 'primary' : 'default'}
                  onClick={() => onPlay(index)}
                >
                  {v.name}
                </Button>
              ))}
            </div>
          </TabPane>
          <TabPane tab="云播(站外)" key="2">
            <div className="flex justify-between items-center flex-wrap mb-2 pr-2">
              <span className="text-lg font-bold truncate">
                {video?.vod_name}
              </span>
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
            <div className="grid grid-cols-6 lg:grid-cols-4 gap-1">
              {playList.map((v, index) => (
                <Button
                  key={v.url}
                  size="small"
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="跳转"
                >
                  {v.name}
                  <svg
                    className="ml-1"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                  >
                    <path d="M843.648 981.333333H89.6A46.08 46.08 0 0 1 42.666667 934.485333V183.253333a46.08 46.08 0 0 1 46.933333-46.890666H512c26.581333 0 46.933333 20.309333 46.933333 46.890666A46.08 46.08 0 0 1 512 230.101333H136.533333v657.493334h660.181334v-373.248a46.08 46.08 0 0 1 46.933333-46.848c26.624 0 46.933333 20.309333 46.933333 46.848v418.56c0 26.581333-20.309333 48.426667-46.933333 48.426666zM934.4 420.650667a46.08 46.08 0 0 1-46.933333-46.890667V136.362667h-237.781334a46.08 46.08 0 0 1-46.933333-46.848A46.08 46.08 0 0 1 649.685333 42.666667H934.4c26.581333 0 46.933333 20.309333 46.933333 46.848V373.76c0 25.002667-21.888 46.890667-46.933333 46.890667z"></path>
                    <path d="M374.314667 695.509333c-12.501333 0-23.466667-4.693333-32.853334-14.08-18.773333-18.730667-18.773333-48.384 0-65.578666L879.658667 78.592c18.773333-18.773333 48.469333-18.773333 65.706666 0 18.773333 18.773333 18.773333 48.426667 0 65.578667L407.168 681.472c-9.386667 9.386667-20.309333 14.08-32.853333 14.08z"></path>
                  </svg>
                </Button>
              ))}
            </div>
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
