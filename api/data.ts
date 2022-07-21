const sources = [
  {
    id: 1,
    key: '39kan',
    name: '39影视',
    api: 'https://www.39kan.com/api.php/provide/vod/at/json',
    jiexiUrl: '',
    group: '影视',
    isActive: true,
    status: '可用',
    reverseOrder: false,
  },
  {
    id: 2,
    key: 'vipmv',
    name: '天堂资源',
    api: 'http://vipmv.cc/api.php/provide/vod/at/xml',
    jiexiUrl: 'https://titan.mgtv.com.o8tv.com/jiexi/?url=',
    group: '影视',
    isActive: true,
    status: '可用',
    reverseOrder: false,
  },
  {
    id: 3,
    key: 'yilans',
    name: '8090资源',
    api: 'http://zy.yilans.net:8090/api.php/provide/vod/at/xml',
    jiexiUrl: '',
    group: '影视',
    isActive: true,
    status: '可用',
    reverseOrder: false,
  },
  {
    id: 4,
    key: '6Uzy',
    name: '6U资源',
    api: 'http://zy.ataoju.com/inc/api.php',
    jiexiUrl: '',
    group: '影视',
    isActive: true,
    status: '可用',
    reverseOrder: false,
  },
  {
    id: 5,
    key: 'leduozy',
    name: '乐多资源网',
    api: 'http://api.leduozy.com/inc/api.php',
    jiexiUrl: '',
    group: '影视',
    isActive: true,
    status: '可用',
    reverseOrder: false,
  },
  {
    id: 6,
    key: 'zitv',
    name: '橘猫影视',
    api: 'http://www.zitv.cc/api.php/provide/vod/at/xml',
    jiexiUrl: '',
    group: '影视',
    isActive: true,
    status: '可用',
    reverseOrder: false,
  },
  {
    id: 7,
    key: 'lehootv',
    name: '乐活影视',
    api: 'https://lehootv.com/api.php/provide/vod/at/xml',
    jiexiUrl: '',
    group: '影视',
    isActive: true,
    status: '可用',
    reverseOrder: false,
  },
  {
    id: 8,
    key: 'kuaibozy',
    name: '快播资源',
    api: 'http://www.kuaibozy.com/api.php/provide/vod/at/xml',
    jiexiUrl: '',
    group: '影视',
    isActive: true,
    status: '可用',
    reverseOrder: false,
  },
  {
    id: 9,
    key: 'apibdzy',
    name: '百度云资源',
    api: 'https://api.apibdzy.com/api.php/provide/vod/at/xml',
    jiexiUrl: '',
    group: '影视',
    isActive: true,
    status: '可用',
    reverseOrder: false,
  },
  {
    id: 10,
    key: 'foxzyapi',
    name: 'FOX资源',
    api: 'https://api.foxzyapi.com/api.php/provide/vod/from/foxyun/at/xml',
    jiexiUrl: '',
    group: '影视',
    isActive: true,
    status: '可用',
    reverseOrder: false,
  },
  {
    id: 11,
    key: 'wolongzyw',
    name: '卧龙资源站综合资源',
    api: 'https://collect.wolongzyw.com/api.php/provide/vod/at/xml',
    jiexiUrl: '',
    group: '影视',
    isActive: true,
    status: '可用',
    reverseOrder: false,
  },
  {
    id: 12,
    key: 'fqzy',
    name: '番茄影视资源网',
    api: 'http://api.fqzy.cc/seacmsapi.php/provide/vod/at/xml',
    jiexiUrl: '',
    group: '影视',
    isActive: true,
    status: '可用',
    reverseOrder: false,
  },
  {
    id: 13,
    key: 'taopianapi',
    name: '淘片资源采集网',
    api: 'https://taopianapi.com/home/cjapi/as/mc/vod/xml',
    jiexiUrl: '',
    group: '影视',
    isActive: true,
    status: '可用',
    reverseOrder: false,
  },
  {
    id: 14,
    key: 'xinlangapi',
    name: '新浪资源',
    api: 'https://api.xinlangapi.com/xinlangapi.php/provide/vod/at/xml',
    jiexiUrl: '',
    group: '影视',
    isActive: true,
    status: '可用',
    reverseOrder: false,
  },
  {
    id: 15,
    key: 'lziapi',
    name: '量子资源',
    api: 'https://cj.lziapi.com/api.php/provide/vod/from/liangzi/at/xml',
    jiexiUrl: '',
    group: '影视',
    isActive: true,
    status: '可用',
    reverseOrder: false,
  },
  {
    id: 16,
    key: 'yulecj',
    name: '鱼乐资源网',
    api: 'https://api.yulecj.com/api.php/provide/vod/at/xml',
    jiexiUrl: '',
    group: '影视',
    isActive: true,
    status: '可用',
    reverseOrder: false,
  },
  {
    id: 17,
    key: 'sdzyapi',
    name: '闪电资源网',
    api: 'https://sdzyapi.com/api.php/provide/vod/at/xml',
    jiexiUrl: '',
    group: '影视',
    isActive: true,
    status: '可用',
    reverseOrder: false,
  },
  {
    id: 18,
    key: 'yparse',
    name: '步步高资源',
    api: 'https://api.yparse.com/api/xml',
    jiexiUrl: '',
    group: '影视',
    isActive: true,
    status: '可用',
    reverseOrder: false,
  },
  {
    id: 19,
    key: 'ckzy',
    name: 'CK资源',
    api: 'https://ckzy.me/api.php/provide/vod/at/xml',
    jiexiUrl: '',
    group: '影视',
    isActive: true,
    status: '可用',
    reverseOrder: false,
  },
  {
    id: 20,
    key: 'travelbooking',
    name: '唯一资源',
    api: 'http://api.travelbooking.cc/xml',
    jiexiUrl: '',
    group: '影视',
    isActive: true,
    status: '可用',
    reverseOrder: false,
  },
  {
    id: 21,
    key: 'guangsuapi',
    name: '光速资源',
    api: 'https://api.guangsuapi.com/api.php/provide/vod/at/xml',
    jiexiUrl: '',
    group: '影视',
    isActive: true,
    status: '可用',
    reverseOrder: false,
  },
  {
    id: 22,
    key: 'jyzyapi',
    name: '金鹰资源',
    api: 'https://jyzyapi.com/provide/vod/at/xml',
    jiexiUrl: '',
    group: '影视',
    isActive: true,
    status: '可用',
    reverseOrder: false,
  },
  {
    id: 23,
    key: 'tiankongapi',
    name: '天空资源',
    api: 'https://api.tiankongapi.com/api.php/provide/vod/at/xml/from/tkm3u8',
    jiexiUrl: '',
    group: '影视',
    isActive: true,
    status: '可用',
    reverseOrder: false,
  },
  {
    id: 24,
    key: 'bajiecaiji',
    name: '八戒采集',
    api: 'http://cj.bajiecaiji.com/inc/bjm3u8.php',
    jiexiUrl: '',
    group: '影视',
    isActive: true,
    status: '可用',
    reverseOrder: false,
  },
  {
    id: 25,
    key: 'zycaiji',
    name: '星辰资源',
    api: 'http://www.zycaiji.net:7788/api.php/provide/vod/at/xml',
    jiexiUrl: '',
    group: '影视',
    isActive: true,
    status: '可用',
    reverseOrder: false,
  },
  {
    id: 26,
    key: 'kudian8',
    name: '酷点资源',
    api: 'https://kudian8.com/api.php/provide/vod/at/xml',
    jiexiUrl: '',
    group: '影视',
    isActive: true,
    status: '可用',
    reverseOrder: false,
  },
  {
    id: 27,
    key: 'zzrhgg',
    name: '飘花资源',
    api: 'http://www.zzrhgg.com/api.php/provide/vod/at/xml',
    jiexiUrl: '',
    group: '影视',
    isActive: true,
    status: '可用',
    reverseOrder: false,
  },
  {
    id: 28,
    key: '523zyw',
    name: '523资源',
    api: 'https://caiji.523zyw.com/inc/seacmsapi.php',
    jiexiUrl: '',
    group: '18+',
    isActive: true,
    status: '可用',
    reverseOrder: false,
  },
  {
    id: 29,
    key: 'naichaapi',
    name: '奶茶资源',
    api: 'https://caiji.naichaapi.com/inc/api.php',
    jiexiUrl: '',
    group: '18+',
    isActive: true,
    status: '可用',
    reverseOrder: false,
  },
  {
    id: 30,
    key: 'putaozy',
    name: '葡萄资源',
    api: 'https://caiji.putaozy.net/inc/api.php',
    jiexiUrl: '',
    group: '18+',
    isActive: true,
    status: '可用',
    reverseOrder: false,
  },
  {
    id: 31,
    key: 'siwazyw',
    name: '丝袜资源',
    api: 'https://siwazyw.cc/api.php/provide/vod/at/xml',
    jiexiUrl: '',
    group: '18+',
    isActive: true,
    status: '可用',
    reverseOrder: false,
  },
  {
    id: 32,
    key: 'apilyzy',
    name: '老鸭',
    api: 'https://api.apilyzy.com/api.php/provide/vod/at/xml',
    jiexiUrl: '',
    group: '18+',
    isActive: true,
    status: '可用',
    reverseOrder: false,
  },
  {
    id: 33,
    key: 'huakuiapi',
    name: '花魁',
    api: 'https://caiji.huakuiapi.com/inc/api.php',
    jiexiUrl: '',
    group: '18+',
    isActive: true,
    status: '可用',
    reverseOrder: false,
  },
  {
    id: 34,
    key: 'apittzy',
    name: '探探资源',
    api: 'https://apittzy.com/api.php/provide/vod/at/xml',
    jiexiUrl: '',
    group: '18+',
    isActive: true,
    status: '可用',
    reverseOrder: false,
  },
  {
    id: 35,
    key: 'kkzy',
    name: 'KK资源网',
    api: 'https://kkzy.me/api.php/provide/vod/at/xmlsea',
    jiexiUrl: '',
    group: '18+',
    isActive: true,
    status: '可用',
    reverseOrder: false,
  },
  {
    id: 36,
    key: 'maozyapi',
    name: '色猫资源',
    api: 'https://api.maozyapi.com/inc/api.php',
    jiexiUrl: '',
    group: '18+',
    isActive: true,
    status: '可用',
    reverseOrder: false,
  },
  {
    id: 37,
    key: 'wmcj8',
    name: 'AG资源',
    api: 'http://wmcj8.com/inc/sapi.php',
    jiexiUrl: '',
    group: '18+',
    isActive: true,
    status: '可用',
    reverseOrder: false,
  },
  {
    id: 38,
    key: 'apiabzy',
    name: '爱播资源',
    api: 'https://cj.apiabzy.com/api.php/provide/vod/at/xml',
    jiexiUrl: '',
    group: '18+',
    isActive: true,
    status: '可用',
    reverseOrder: false,
  },
  {
    id: 40,
    key: 'shayu',
    name: 'shayu',
    api: 'https://shayuapi.com/api.php/Seacms/vod',
    jiexiUrl: '',
    group: '18+',
    isActive: true,
    status: '可用',
    reverseOrder: false,
  },
  {
    id: 41,
    key: '7777688',
    name: '76色色',
    api: 'http://m.7777688.com/inc/api.php',
    jiexiUrl: '',
    group: '18+',
    isActive: true,
    status: '可用',
    reverseOrder: false,
  },
  {
    id: 42,
    key: 'lb',
    name: '乐播',
    api: 'https://lbapi9.com/api.php/provide/vod/at/xml',
    jiexiUrl: '',
    group: '18+',
    isActive: true,
    status: '可用',
    reverseOrder: false,
  },
  {
    id: 43,
    key: 'bttcj',
    name: 'BT天堂',
    api: 'http://bttcj.com/inc/sapi.php',
    jiexiUrl: '',
    group: '18+',
    isActive: true,
    status: '可用',
    reverseOrder: false,
  },
  {
    id: 44,
    key: 'hjzy',
    name: '花椒资源',
    api: 'https://apihjzy.com/api.php/Seacms/vod/at/xml',
    jiexiUrl: '',
    group: '18+',
    isActive: true,
    status: '可用',
    reverseOrder: false,
  },
  {
    id: 45,
    key: 'caomeiapi',
    name: '草莓资源',
    api: 'https://caiji.caomeiapi.com/inc/api.php',
    jiexiUrl: '',
    group: '18+',
    isActive: true,
    status: '可用',
    reverseOrder: false,
  },
]

export default sources