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
      return { name, url }
    })
  )
  const m3u8Index = options.indexOf('jinyingm3u8') || 0
  const m3u8List = blocks[m3u8Index]
  const yunIndex = options.indexOf('jinyingyun') || 1
  const yunList = blocks[yunIndex]
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

const LOCAL_HISTORY = 'local_history'
export const MAX_HISTORY_NUM = 120

export function getLocalHistory() {
  const localData = localStorage.getItem(LOCAL_HISTORY)
  if (localData) {
    try {
      return JSON.parse(localData)
    } catch (error) {
      console.error(error)
      return []
    }
  }
  return []
}

export function setLocalHistory(data: any) {
  localStorage.setItem(LOCAL_HISTORY, JSON.stringify(data))
}

const now = Date.now

export function throttle(
  func: Function,
  wait: number,
  options: { leading?: boolean; trailing?: boolean } = {}
) {
  let timeout: string | number | NodeJS.Timeout | null | undefined
  let context: null = null
  let args: IArguments | null = null
  let result: any
  let previous = 0
  if (!options) options = {}

  let later = function () {
    previous = options.leading === false ? 0 : now()
    timeout = null
    result = func.apply(context, args)
    if (!timeout) context = args = null
  }

  let throttled: any = function (this: any) {
    let _now = now()
    if (!previous && options.leading === false) previous = _now
    let remaining = wait - (_now - previous)
    context = this
    args = arguments
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = _now
      result = func.apply(context, args)
      if (!timeout) context = args = null
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining)
    }
    return result
  }

  throttled.cancel = function () {
    timeout && clearTimeout(timeout)
    previous = 0
    timeout = context = args = null
  }

  return throttled
}

export function seconds2Minute(s: number) {
  let remain = s
  const h = Math.floor(remain / 60 / 60)
  remain = remain - h * 3600
  const m = Math.floor(remain / 60)
  const seconds = remain - m * 60
  return `${h > 0 ? h + '小时' : ''}${m > 0 ? m + '分钟' : ''}${seconds}秒`
}
