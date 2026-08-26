/* =========================================================
   金陵慢遊 2026
   25個景點統一資料庫
   ---------------------------------------------------------
   lat = 緯度
   lng = 經度

   mapLat / mapLng = 互動地圖代表位置
   navName / navAddress = 導航使用
   ========================================================= */

const spots = [

  {
    id: "airport",
    number: 1,
    name: "南京祿口國際機場（T2）",
    shortName: "祿口機場 T2",
    lat: 31.73834,
    lng: 118.88016,
    address: "南京市江寧區空港南路",
    navName: "南京祿口國際機場T2"
  },

  {
    id: "hotel",
    number: 2,
    name: "南京夫子廟秦淮遊船碼頭亞朵酒店",
    shortName: "夫子廟亞朵酒店",
    lat: 32.01965,
    lng: 118.78750,
    address: "南京市秦淮區大石壩街35號",
    navName: "南京夫子廟秦淮遊船碼頭亞朵酒店"
  },

  {
    id: "confucius-street",
    number: 3,
    name: "夫子廟步行街",
    shortName: "夫子廟步行街",
    lat: 32.0157931,
    lng: 118.7773852,
    address: "南京市秦淮區瞻園路7號",
    navName: "南京夫子廟步行街"
  },

  {
    id: "wuyi-lane",
    number: 4,
    name: "烏衣巷",
    shortName: "烏衣巷",
    lat: 32.017116,
    lng: 118.790742,
    address: "南京市秦淮區秦淮河上文德橋南岸",
    navName: "烏衣巷"
  },

  {
    id: "jiangnan-gongyuan",
    number: 5,
    name: "江南貢院牌坊",
    shortName: "江南貢院牌坊",
    lat: 32.023086,
    lng: 118.785478,
    address: "南京市秦淮區貢院街65號",
    navName: "江南貢院牌坊"
  },

  {
    id: "tianxia-wenshu",
    number: 6,
    name: "天下文樞",
    shortName: "天下文樞",
    lat: 32.02270,
    lng: 118.78580,
    address: "南京市秦淮區貢院西街與貢院街交叉口夫子廟內",
    navName: "天下文樞"
  },

  {
    id: "nanjing-museum",
    number: 7,
    name: "南京博物院",
    shortName: "南京博物院",
    lat: 32.040802,
    lng: 118.825064,
    address: "南京市玄武區中山東路321號",
    navName: "南京博物院"
  },

  {
    id: "ming-xiaoling",
    number: 8,
    name: "明孝陵",
    shortName: "明孝陵",
    lat: 32.058355,
    lng: 118.839731,
    address: "南京市玄武區石象路7號",
    navName: "明孝陵"
  },

  {
    id: "deji-art",
    number: 9,
    name: "德基藝術博物館",
    shortName: "德基藝術博物館",
    lat: 32.050008,
    lng: 118.785075,
    address: "南京市玄武區中山路18號德基廣場二期8樓",
    navName: "德基藝術博物館"
  },

  {
    id: "presidential-palace",
    number: 10,
    name: "總統府",
    shortName: "總統府",
    lat: 32.044258,
    lng: 118.797318,
    address: "南京市玄武區長江路292號",
    navName: "南京總統府"
  },

  {
    id: "imperial-exam",
    number: 11,
    name: "科舉博物館",
    shortName: "科舉博物館",
    lat: 32.02171,
    lng: 118.79049,
    address: "南京市秦淮區貢院街95號",
    navName: "中國科舉博物館"
  },

  {
    id: "li-xiangjun",
    number: 12,
    name: "李香君故居（媚香樓）",
    shortName: "李香君故居",
    lat: 32.02470,
    lng: 118.78920,
    address: "南京市秦淮區大石壩街150號",
    navName: "李香君故居陳列館"
  },

  {
    id: "qinhuai-cruise",
    number: 13,
    name: "秦淮河（夜遊畫舫碼頭）",
    shortName: "秦淮河遊船碼頭",
    lat: 32.02145,
    lng: 118.78850,
    address: "南京市秦淮區貢院街121號",
    navName: "夫子廟景區步行街泮池遊船碼頭"
  },

  {
    id: "laomendong",
    number: 14,
    name: "老門東歷史街區",
    shortName: "老門東",
    lat: 32.01162,
    lng: 118.78724,
    address: "南京市秦淮區剪子巷54號",
    navName: "老門東歷史街區"
  },

  {
    id: "sanqiba",
    number: 15,
    name: "三七八巷",
    shortName: "三七八巷",
    lat: 32.01550,
    lng: 118.78050,
    address: "南京市秦淮區長樂路",
    navName: "三七八巷"
  },

  {
    id: "gaochun-old-street",
    number: 16,
    name: "高淳老街",
    shortName: "高淳老街",
    lat: 31.32018,
    lng: 118.86773,
    address: "南京市高淳區淳溪街道中山大街",
    navName: "高淳老街"
  },

  {
    id: "qiqiao",
    number: 17,
    name: "漆橋古村",
    shortName: "漆橋古村",
    lat: 31.37593,
    lng: 118.992493,
    address: "南京市高淳區漆橋村523號",
    navName: "漆橋古村"
  },

  {
    id: "zhanyuan",
    number: 18,
    name: "瞻園",
    shortName: "瞻園",
    lat: 32.020711,
    lng: 118.785706,
    address: "南京市秦淮區瞻園路128號",
    navName: "瞻園"
  },

  {
    id: "jiming-temple",
    number: 19,
    name: "雞鳴寺",
    shortName: "雞鳴寺",
    lat: 32.057266,
    lng: 118.798082,
    address: "南京市玄武區雞鳴寺路1號",
    navName: "雞鳴寺"
  },

  {
    id: "xuanwu-lake",
    number: 20,
    name: "玄武湖公園",
    shortName: "玄武湖",
    lat: 32.074816,
    lng: 118.792841,
    address: "南京市玄武區玄武巷1號",
    navName: "玄武湖公園"
  },

  {
    id: "zhonghua-gate",
    number: 21,
    name: "南京城牆（中華門甕城）",
    shortName: "中華門甕城",
    lat: 32.01280,
    lng: 118.781821,
    address: "南京市秦淮區中華路",
    navName: "南京城牆中華門"
  },

  {
    id: "yihe-road",
    number: 22,
    name: "頤和路民國公館區",
    shortName: "頤和路",
    lat: 32.06420,
    lng: 118.77050,
    address: "南京市鼓樓區頤和路",
    navName: "南京市鼓樓區頤和路"
  },

  {
    id: "ganxi",
    number: 23,
    name: "甘熙故居（南京民俗博物館）",
    shortName: "甘熙故居",
    lat: 32.02816,
    lng: 118.77642,
    address: "南京市秦淮區中山南路400號熙南里街區",
    navName: "甘熙故居"
  },

  {
    id: "nanjing-memorial",
    number: 24,
    name: "侵華日軍南京大屠殺遇難同胞紀念館",
    shortName: "南京大屠殺紀念館",
    lat: 32.035217,
    lng: 118.742372,
    address: "南京市建鄴區水西門大街418號",
    navName: "侵華日軍南京大屠殺遇難同胞紀念館"
  },

  {
    id: "six-dynasties",
    number: 25,
    name: "六朝博物館",
    shortName: "六朝博物館",
    lat: 32.04370,
    lng: 118.79760,
    address: "南京市玄武區長江路302號",
    navName: "六朝博物館"
  }

];


/* =========================================================
   輔助函數
   ========================================================= */

function getSpotById(id) {
  return spots.find(spot => spot.id === id);
}

function getSpotByNumber(number) {
  return spots.find(spot => spot.number === number);
}
