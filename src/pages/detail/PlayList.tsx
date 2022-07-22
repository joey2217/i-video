import { Button, Radio } from 'antd'
import React, { memo, useEffect, useState } from 'react'
import { PlayItem, PlayOption, Video } from '../../types'
import { parseVideoPlayUrl } from '../../utils'

interface Props {
  video: Video
  onUrlChange: (url: string) => void
}

const PlayList: React.FC<Props> = ({ video, onUrlChange }) => {
  const [channel, setChannel] = useState(0) // 线路
  const [playOptions, setPlayOptions] = useState<PlayOption[]>([]) // 线路
  const [playBlocks, setPlayBlocks] = useState<PlayItem[][]>([])
  const [playList, setPlayList] = useState<PlayItem[]>([])
  const [playUrl, setPlayUrl] = useState('')
  useEffect(() => {
    const { blocks, options } = parseVideoPlayUrl(video)
    setPlayBlocks(blocks)
    setPlayOptions(options)
  }, [onUrlChange, video])

  useEffect(() => {
    const list = playBlocks[channel]
    if (list && list.length > 0) {
      setPlayList(list)
      setPlayUrl(list[0].url)
    }
  }, [channel, playBlocks])

  useEffect(() => {
    onUrlChange(playUrl)
  }, [onUrlChange, playUrl])

  return (
    <div>
      <div>
        <div className="text-base py-1">线路</div>
        <div>
          <Radio.Group
            options={playOptions}
            onChange={(e) => setChannel(e.target.value)}
            value={channel}
            optionType="button"
            buttonStyle="solid"
          />
        </div>
      </div>
      <div className="text-base py-1">分集</div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8  gap-4">
        {playList.map((item) => (
          <Button
            type={playUrl === item.url ? 'primary' : 'default'}
            key={item.url}
            onClick={() => setPlayUrl(item.url)}
          >
            {item.name}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default memo(PlayList)
