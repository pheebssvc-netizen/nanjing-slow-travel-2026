/* =========================================================
   金陵慢遊 2026
   景點座標資料庫（18 景點 + 12 餐廳）
   座標已全部重新核對
   ========================================================= */

// ===== 景點座標 =====

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
    lat: 32.02472,
    lng: 118.78906,
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
    lat: 32.01557,
    lng: 118.78039,
    address: "南京市秦淮區長樂路",
    category: "本地生活"
  },

  /* 10 */
  {
    id: "zhanyuan-garden",
    number: 10,
    name: "瞻園",
    lat: 32.02052,
    lng: 118.78550,
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
    lat: 32.01295,
    lng: 118.78168,
    address: "南京市秦淮區中華路",
    category: "歷史遺跡"
  },

  /* 14 */
  {
    id: "yihe-road-historic-district",
    number: 14,
    name: "頤和路",
    lat: 32.06485,
    lng: 118.77062,
    address: "南京市鼓樓區頤和路",
    category: "民國建築"
  },

  /* 15 */
  {
    id: "ganxi-residence",
    number: 15,
    name: "甘熙故居",
    lat: 32.02852,
    lng: 118.77598,
    address: "南京市秦淮區中山南路400號熙南里街區",
    category: "民俗文化"
  },

  /* 16 */
  {
    id: "nanjing-massacre-memorial",
    number: 16,
    name: "南京大屠殺紀念館",
    lat: 32.03535,
    lng: 118.74215,
    address: "南京市建鄴區水西門大街418號",
    category: "歷史教育"
  },

  /* 17 */
  {
    id: "gaochun-old-street",
    number: 17,
    name: "高淳老街",
    lat: 31.32018,
    lng: 118.86773,
    address: "南京市高淳區淳溪街道中山大街",
    category: "古街"
  },

  /* 18 */
  {
    id: "qiqiao-ancient-village",
    number: 18,
    name: "漆橋古村",
    lat: 31.37593,
    lng: 118.992493,
    address: "南京市高淳區漆橋村523號",
    category: "古村"
  },

  /* 19 - 酒店（獨立標記用） */
  {
    id: "fuzi-atour-hotel",
    number: 19,
    name: "夫子廟亞朵酒店",
    lat: 32.01947,
    lng: 118.78772,
    address: "南京市秦淮區大石壩街35號",
    category: "住宿"
  }

];


// ===== 餐廳座標 =====

const restaurants = [

  {
    id: "tianyuan-lou",
    name: "天圓樓·老南京菜",
    lat: 32.01985,
    lng: 118.78780,
    address: "夫子廟大石壩街75號",
    feature: "30年老字號 · 金陵烤鴨"
  },
  {
    id: "tan-shan-he",
    name: "碳山河·茶湯火鍋",
    lat: 32.05050,
    lng: 118.78620,
    address: "金陵天地5樓L551",
    feature: "龍井茉莉茶湯 + 鮮切吊龍"
  },
  {
    id: "nanjing-da-pai-dang",
    name: "南京大牌檔",
    lat: 32.01850,
    lng: 118.78650,
    address: "夫子廟平江府店",
    feature: "金陵小吃全集"
  },
  {
    id: "qi-fang-ge",
    name: "奇芳閣",
    lat: 32.02020,
    lng: 118.78700,
    address: "夫子廟貢院街",
    feature: "鴨油酥燒餅 · 素菜包"
  },
  {
    id: "han-fu-xing",
    name: "韓復興板鴨店",
    lat: 32.01920,
    lng: 118.78850,
    address: "夫子廟石壩街126號",
    feature: "鹽水鴨 · 鴨油燒餅（1866年）"
  },
  {
    id: "jin-hong-xing",
    name: "金宏興鴨子店",
    lat: 32.04500,
    lng: 118.78350,
    address: "明瓦廊5號105室（新街口）",
    feature: "烤鴨 · 鹽水鴨"
  },
  {
    id: "li-ji-qing-zhen",
    name: "李記清真館",
    lat: 32.02680,
    lng: 118.77680,
    address: "秦淮區打釘巷1號",
    feature: "牛肉鍋貼（百年老字號）"
  },
  {
    id: "jiang-you-ji",
    name: "蔣有記",
    lat: 32.01120,
    lng: 118.78750,
    address: "老門東三條營49-3號",
    feature: "牛肉鍋貼（1922年創立）"
  },
  {
    id: "ji-ming-tang-bao",
    name: "雞鳴湯包",
    lat: 32.05650,
    lng: 118.79850,
    address: "玄武區太平門街10號",
    feature: "雞汁湯包"
  },
  {
    id: "xiao-pan-ji",
    name: "小潘記鴨血粉絲湯",
    lat: 32.04900,
    lng: 118.79550,
    address: "玄武區珠江路275-3號",
    feature: "鴨血粉絲湯"
  },
  {
    id: "hui-wei",
    name: "回味鴨血粉絲湯",
    lat: 32.01650,
    lng: 118.78650,
    address: "夫子廟站4號口店",
    feature: "連鎖老字號"
  },
  {
    id: "xiao-chu-niang",
    name: "小廚娘淮揚菜",
    lat: 32.04550,
    lng: 118.78550,
    address: "新街口艾尚天地B座3樓",
    feature: "淮揚菜（29年本地品牌）"
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

function getRestaurantById(id) {
  return restaurants.find(r => r.id === id);
}

function getRestaurantByName(name) {
  return restaurants.find(r => r.name === name);
}
