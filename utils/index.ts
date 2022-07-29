import type { PlayItem } from '../types'

//vod_play_from = "jinyingm3u8$$$jinyingyun
//vod_play_url = 第01集$https://hd.njeere.com/play/50756/index.m3u8#第02集$https://hd.njeere.com/play/50758/index.m3u8#第03集$https://hd.njeere.com/play/50759/index.m3u8#第04集$https://hd.njeere.com/play/50761/index.m3u8#第05集$https://hd.njeere.com/play/50762/index.m3u8#第06集$https://hd.njeere.com/play/51958/index.m3u8#第07集$https://hd.njeere.com/play/51959/index.m3u8#第08集$https://hd.njeere.com/play/52292/index.m3u8#第09集$https://hd.njeere.com/play/52629/index.m3u8#第10集$https://hd.njeere.com/play/53227/index.m3u8$$$第01集$https://hd.njeere.com/play/50756#第02集$https://hd.njeere.com/play/50758#第03集$https://hd.njeere.com/play/50759#第04集$https://hd.njeere.com/play/50761#第05集$https://hd.njeere.com/play/50762#第06集$https://hd.njeere.com/play/51958#第07集$https://hd.njeere.com/play/51959#第08集$https://hd.njeere.com/play/52292#第09集$https://hd.njeere.com/play/52629#第10集$https://hd.njeere.com/play/53227

// 第1集 -> 1
const videoReg = /第(\d+)集(.*)/
function parseName(name: string) {
  return name.replace(videoReg, (m, p1, p2) => {
    if (p2) {
      return Number(p1) + `(${p2})`
    }
    return Number(p1).toString()
  })
}

const separator = '$$$'
export function parseVideoPlayUrl(vod_play_from: string, vod_play_url: string) {
  const options = vod_play_from.split(separator)
  const blocks = vod_play_url.split(separator).map((item: string) =>
    item.split('#').map((part: string) => {
      const [name, url] = part.split('$')
      return { name: parseName(name), url }
    })
  )
  const [option1, option2] = options
  let m3u8List: PlayItem[] = []
  let yunList: PlayItem[] = []
  if (option1 === 'jinyingm3u8') {
    m3u8List = blocks[0]
  }
  if (option2 === 'jinyingyun') {
    yunList = blocks[1]
  }

  return {
    m3u8List,
    yunList,
  }
}

// function debounce(func: Function, wait = 500, immediate: false) {
//   let timer: NodeJS.Timeout | undefined
//   return (...args: any[]) => {
//     if (timer) clearTimeout(timer)
//     if (immediate) {
//       const callNow = !timer
//       timer = setTimeout(() => {
//         timer = undefined
//       }, wait)
//       if (callNow) func(...args)
//     } else {
//       timer = setTimeout(function () {
//         func(...args)
//       }, wait)
//     }
//   }
// }
