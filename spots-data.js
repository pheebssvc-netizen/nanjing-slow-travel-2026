/* =========================================================
   金陵慢遊 2026
   景點座標資料庫（17 景點）
   ========================================================= */

const spots = [

  /* 01 */
  {
    id: "nanjing-museum",
    number: 1,
    name: "南京博物院",
    lat: 32.040802,
    lng: 118.825064,
    address: "南京市玄武區中山東路321號",
    category: "博物館"
  },

  /* 02 */
  {
    id: "ming-xiaoling",
    number: 2,
    name: "明孝陵",
    lat: 32.058355,
    lng: 118.839731,
    address: "南京市玄武區石象路7號",
    category: "世界遺產"
  },

  /* 03 */
  {
    id: "presidential-palace",
    number: 3,
    name: "總統府",
    lat: 32.044258,
    lng: 118.797318,
    address: "南京市玄武區長江路292號",
    category: "近代歷史"
  },

  /* 04 */
  {
    id: "imperial-examination-museum",
    number: 4,
    name: "科舉博物館",
    lat: 32.02171,
    lng: 118.79049,
    address: "南京市秦淮區貢院街95號",
    category: "博物館"
  },

  /* 05 */
  {
    id: "deji-art-museum",
    number: 5,
    name: "德基藝術博物館",
    lat: 32.050008,
    lng: 118.785075,
    address: "南京市玄武區中山路18號德基廣場二期8樓",
    category: "藝術文化"
  },

  /* 06 */
  {
    id: "six-dynasties-museum",
    number: 6,
    name: "六朝博物館",
    lat: 32.04370,
    lng: 118.79760,
    address: "南京市玄武區長江路302號",
    category: "博物館"
  },

  /* 07 */
  {
    id: "li-xiangjun-former-residence",
    number: 7,
    name: "李香君故居",
    lat: 32.02470,
    lng: 118.78920,
    address: "南京市秦淮區大石壩街150號",
    category: "秦淮文化"
  },

  /* 08 */
  {
    id: "laomendong-historic-district",
    number: 8,
    name: "老門東",
    lat: 32.01162,
    lng: 118.78724,
    address: "南京市秦淮區剪子巷54號",
    category: "歷史街區"
  },

  /* 09 */
  {
    id: "sanqiba-lane",
    number: 9,
    name: "三七八巷",
    lat: 32.01550,
    lng: 118.78050,
    address: "南京市秦淮區長樂路",
    category: "本地生活"
  },

  /* 10 */
  {
    id: "zhanyuan-garden",
    number: 10,
    name: "瞻園",
    lat: 32.020711,
    lng: 118.785706,
    address: "南京市秦淮區瞻園路128號",
    category: "園林"
  },

  /* 11 */
  {
    id: "jiming-temple",
    number: 11,
    name: "雞鳴寺",
    lat: 32.057266,
    lng: 118.798082,
    address: "南京市玄武區雞鳴寺路1號",
    category: "寺院"
  },

  /* 12 */
  {
    id: "xuanwu-lake",
    number: 12,
    name: "玄武湖",
    lat: 32.074816,
    lng: 118.792841,
    address: "南京市玄武區玄武巷1號",
    category: "自然景觀"
  },

  /* 13 */
  {
    id: "zhonghua-gate",
    number: 13,
    name: "南京城牆",
    lat: 32.01280,
    lng: 118.781821,
    address: "南京市秦淮區中華路",
    category: "歷史遺跡"
  },

  /* 14 */
  {
    id: "yihe-road-historic-district",
    number: 14,
    name: "頤和路",
    lat: 32.06420,
    lng: 118.77050,
    address: "南京市鼓樓區頤和路",
    category: "民國建築"
  },

  /* 15 */
  {
    id: "ganxi-residence",
    number: 15,
    name: "甘熙故居",
    lat: 32.02816,
    lng: 118.77642,
    address: "南京市秦淮區中山南路400號熙南里街區",
    category: "民俗文化"
  },

  /* 16 */
  {
    id: "gaochun-old-street",
    number: 16,
    name: "高淳老街",
    lat: 31.32018,
    lng: 118.86773,
    address: "南京市高淳區淳溪街道中山大街",
    category: "古街"
  },

  /* 17 */
  {
    id: "qiqiao-ancient-village",
    number: 17,
    name: "漆橋古村",
    lat: 31.37593,
    lng: 118.992493,
    address: "南京市高淳區漆橋村523號",
    category: "古村"
  }

];


/* =========================================================
   查詢工具
   ========================================================= */

function getSpotById(id) {
  return spots.find(spot => spot.id === id);
}

function getSpotByName(name) {
  return spots.find(spot => spot.name === name);
}

function getSpotByNumber(number) {
  return spots.find(spot => spot.number === number);
}
