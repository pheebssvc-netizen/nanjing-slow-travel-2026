/* =========================================================
   金陵慢遊 2026
   景點座標資料庫（19 景點 + 14 餐廳）
   餐廳已加入分類：dining（正餐）/ snack（小食·下午茶）
   ========================================================= */

// ===== 景點座標 =====
const spots = [
  { id: "nanjing-museum", number: 1, name: "南京博物院", lat: 32.040802, lng: 118.825064, address: "南京市玄武區中山東路321號", category: "博物館" },
  { id: "ming-xiaoling", number: 2, name: "明孝陵", lat: 32.058355, lng: 118.839731, address: "南京市玄武區石象路7號", category: "世界遺產" },
  { id: "presidential-palace", number: 3, name: "總統府", lat: 32.044258, lng: 118.797318, address: "南京市玄武區長江路292號", category: "近代歷史" },
  { id: "imperial-examination-museum", number: 4, name: "科舉博物館", lat: 32.02171, lng: 118.79049, address: "南京市秦淮區貢院街95號", category: "博物館" },
  { id: "deji-art-museum", number: 5, name: "德基藝術博物館", lat: 32.050008, lng: 118.785075, address: "南京市玄武區中山路18號德基廣場二期8樓", category: "藝術文化" },
  { id: "six-dynasties-museum", number: 6, name: "六朝博物館", lat: 32.04370, lng: 118.79760, address: "南京市玄武區長江路302號", category: "博物館" },
  { id: "li-xiangjun-former-residence", number: 7, name: "李香君故居", lat: 32.02472, lng: 118.78906, address: "南京市秦淮區大石壩街150號", category: "秦淮文化" },
  { id: "laomendong-historic-district", number: 8, name: "老門東", lat: 32.01162, lng: 118.78724, address: "南京市秦淮區剪子巷54號", category: "歷史街區" },
  { id: "sanqiba-lane", number: 9, name: "三七八巷", lat: 32.01557, lng: 118.78039, address: "南京市秦淮區長樂路", category: "本地生活" },
  { id: "zhanyuan-garden", number: 10, name: "瞻園", lat: 32.02052, lng: 118.78550, address: "南京市秦淮區瞻園路128號", category: "園林" },
  { id: "jiming-temple", number: 11, name: "雞鳴寺", lat: 32.057266, lng: 118.798082, address: "南京市玄武區雞鳴寺路1號", category: "寺院" },
  { id: "xuanwu-lake", number: 12, name: "玄武湖", lat: 32.074816, lng: 118.792841, address: "南京市玄武區玄武巷1號", category: "自然景觀" },
  { id: "zhonghua-gate", number: 13, name: "南京城牆", lat: 32.01295, lng: 118.78168, address: "南京市秦淮區中華路", category: "歷史遺跡" },
  { id: "yihe-road-historic-district", number: 14, name: "頤和路", lat: 32.06485, lng: 118.77062, address: "南京市鼓樓區頤和路", category: "民國建築" },
  { id: "ganxi-residence", number: 15, name: "甘熙故居", lat: 32.02852, lng: 118.77598, address: "南京市秦淮區中山南路400號熙南里街區", category: "民俗文化" },
  { id: "nanjing-massacre-memorial", number: 16, name: "南京大屠殺紀念館", lat: 32.03535, lng: 118.74215, address: "南京市建鄴區水西門大街418號", category: "歷史教育" },
  { id: "gaochun-old-street", number: 17, name: "高淳老街", lat: 31.32018, lng: 118.86773, address: "南京市高淳區淳溪街道中山大街", category: "古街" },
  { id: "qiqiao-ancient-village", number: 18, name: "漆橋古村", lat: 31.37593, lng: 118.992493, address: "南京市高淳區漆橋村523號", category: "古村" },
  { id: "fuzi-atour-hotel", number: 19, name: "夫子廟亞朵酒店", lat: 32.01947, lng: 118.78772, address: "南京市秦淮區大石壩街35號", category: "住宿" }
];


// ===== 餐廳座標 + 分類資料 =====
// category: "dining"（正餐）/ "snack"（小食·下午茶）
const restaurants = [

  /* ===== 正餐 ===== */
  {
    id: "tianyuan-lou",
    name: "天圓樓·老南京菜",
    category: "dining",
    tags: ["南京菜", "老字號"],
    desc: "30年老字號，二樓靠窗可看秦淮河街景",
    signatureDishes: ["金陵烤鴨", "鮑魚紅燒肉", "松鼠桂魚"],
    lat: 32.01985, lng: 118.78780,
    address: "夫子廟大石壩街75號",
    nearby: "夫子廟，步行約5分鐘",
    duration: "建議預留 1 ~ 1.5 小時",
    queueTip: "💡 建議提前喺大眾點評取號，避開 12:00-13:00 高峰"
  },
  {
    id: "tan-shan-he",
    name: "碳山河·茶湯火鍋",
    category: "dining",
    tags: ["火鍋", "茶湯鍋底"],
    desc: "龍井茉莉茶湯 + 紅油鍋底，鮮切吊龍牛肉",
    signatureDishes: ["鮮切吊龍", "龍井茉莉茶湯鍋", "鮮切黃牛肉"],
    lat: 32.05050, lng: 118.78620,
    address: "金陵天地5樓L551",
    nearby: "金陵天地，鄰近新街口",
    duration: "建議預留 1.5 小時",
    queueTip: "💡 晚市較繁忙，建議 6 點前入座"
  },
  {
    id: "nanjing-da-pai-dang",
    name: "南京大牌檔（夫子廟平江府店）",
    category: "dining",
    tags: ["金陵小吃全集", "連鎖老字號"],
    desc: "一站食齊南京特色，遊客首選",
    signatureDishes: ["鹽水鴨", "民國美齡粥", "天王烤鴨包"],
    lat: 32.01850, lng: 118.78650,
    address: "秦淮區大石壩街48號",
    nearby: "夫子廟，步行約3分鐘",
    duration: "建議預留 1 ~ 1.5 小時",
    queueTip: "⚠️ 飯口必排隊！建議提前1小時喺小程序取號，避開 12:00-13:00 高峰"
  },
  {
    id: "jin-hong-xing",
    name: "金宏興鴨子店",
    category: "dining",
    tags: ["烤鴨", "鹽水鴨"],
    desc: "南京排名第一烤鴨店，一日賣1000隻",
    signatureDishes: ["烤鴨", "鹽水鴨", "鴨翅膀"],
    lat: 32.04500, lng: 118.78350,
    address: "明瓦廊5號105室（新街口）",
    nearby: "新街口地鐵站，步行約8分鐘",
    duration: "外帶為主 / 建議 30 分鐘",
    queueTip: "⚠️ 7點開門就排長龍，建議早去"
  },
  {
    id: "li-ji-qing-zhen",
    name: "李記清真館",
    category: "dining",
    tags: ["牛肉鍋貼", "百年老字號"],
    desc: "南京官方認定清真老字號，鍋貼即點即煎",
    signatureDishes: ["牛肉鍋貼", "牛雜湯", "牛肉小餛飩"],
    lat: 32.02680, lng: 118.77680,
    address: "秦淮區打釘巷1號",
    nearby: "夫子廟，打車約8分鐘",
    duration: "建議預留 1 小時",
    queueTip: "⚠️ 排隊人龍長！建議避開 12:00-13:00 高峰"
  },
  {
    id: "xiao-pan-ji",
    name: "小潘記鴨血粉絲湯",
    category: "dining",
    tags: ["鴨血粉絲湯", "米芝蓮推薦"],
    desc: "南京超人氣排隊小吃，老鴨湯頭濃郁",
    signatureDishes: ["招牌鴨血粉絲湯", "鴨油酥燒餅", "烤鴨"],
    lat: 32.04900, lng: 118.79550,
    address: "玄武區珠江路275-3號",
    nearby: "總統府，打車約10分鐘",
    duration: "建議預留 45 分鐘 ~ 1 小時",
    queueTip: "⚠️ 米芝蓮指南推薦，排隊必不可免，建議避開用餐高峰"
  },
  {
    id: "hui-wei",
    name: "回味鴨血粉絲湯",
    category: "dining",
    tags: ["鴨血粉絲湯", "連鎖老字號"],
    desc: "南京著名連鎖，分店眾多，方便就腳",
    signatureDishes: ["鴨血粉絲湯", "鴨油燒餅"],
    lat: 32.01650, lng: 118.78650,
    address: "夫子廟站4號口店",
    nearby: "夫子廟地鐵站4號口",
    duration: "建議預留 45 分鐘",
    queueTip: "💡 分店多，可就近選擇，唔使專登去"
  },
  {
    id: "xiao-chu-niang",
    name: "小廚娘淮揚菜",
    category: "dining",
    tags: ["淮揚菜", "29年本地品牌"],
    desc: "本地人認可嘅淮揚菜連鎖，環境雅緻",
    signatureDishes: ["太祖金陵脆皮烤鴨", "蟹粉蝦仁豆腐", "黑豬肉小籠包"],
    lat: 32.04550, lng: 118.78550,
    address: "新街口艾尚天地B座3樓",
    nearby: "新街口地鐵站，步行約5分鐘",
    duration: "建議預留 1 ~ 1.5 小時",
    queueTip: "💡 建議提前致電訂座，晚餐時段較繁忙"
  },
  {
    id: "nanjing-da-pai-dang-1912",
    name: "南京大牌檔（1912街區店）",
    category: "dining",
    tags: ["金陵小吃", "1912街區"],
    desc: "位於1912街區，鄰近總統府，行完順路醫肚",
    signatureDishes: ["鹽水鴨", "鴨血粉絲湯", "民國美齡粥"],
    lat: 32.04450, lng: 118.79920,
    address: "玄武區長江路288號1912街區",
    nearby: "總統府，步行約3分鐘",
    duration: "建議預留 1 ~ 1.5 小時",
    queueTip: "💡 總統府行程後順路晚餐首選"
  },

  /* ===== 小食 / 下午茶 ===== */
  {
    id: "qi-fang-ge",
    name: "奇芳閣",
    category: "snack",
    tags: ["秦淮八絕", "百年清真老字號"],
    desc: "非遺秦淮小吃傳承單位，鴨油酥燒餅酥到掉渣",
    signatureDishes: ["鴨油酥燒餅", "麻油素乾絲", "狀元豆"],
    lat: 32.02020, lng: 118.78700,
    address: "秦淮區貢院西街12-1號",
    nearby: "夫子廟，地鐵站步行5分鐘",
    duration: "即買即食 / 建議 20-30 分鐘",
    queueTip: "💡 外帶窗口排隊較快，可買返酒店慢慢食"
  },
  {
    id: "han-fu-xing",
    name: "韓復興板鴨店",
    category: "snack",
    tags: ["鹽水鴨", "鴨油燒餅", "1866年創立"],
    desc: "南京桂花鴨集團旗下，清真老字號",
    signatureDishes: ["鹽水鴨", "鴨油酥燒餅", "五香牛肉"],
    lat: 32.01920, lng: 118.78850,
    address: "夫子廟石壩街126號",
    nearby: "夫子廟，步行約3分鐘",
    duration: "外帶為主 / 建議 15-20 分鐘",
    queueTip: "💡 可真空包裝，適合買返香港做伴手禮"
  },
  {
    id: "jiang-you-ji",
    name: "蔣有記（老門東店）",
    category: "snack",
    tags: ["牛肉鍋貼", "1922年創立"],
    desc: "秦淮八絕之一，鍋貼外皮酥脆爆汁",
    signatureDishes: ["牛肉鍋貼", "牛雜湯", "牛肉餛飩"],
    lat: 32.01120, lng: 118.78750,
    address: "老門東三條營49-3號",
    nearby: "老門東，步行約2分鐘",
    duration: "即買即食 / 建議 30 分鐘",
    queueTip: "⚠️ 老門東店排隊較長，建議 11:00 前或 14:00 後前往"
  },
  {
    id: "ji-ming-tang-bao",
    name: "雞鳴湯包",
    category: "snack",
    tags: ["雞汁湯包"],
    desc: "皮薄如紙，雞汁鮮美",
    signatureDishes: ["雞汁湯包", "菊葉湯包", "鴨血粉絲湯"],
    lat: 32.05650, lng: 118.79850,
    address: "玄武區太平門街10號",
    nearby: "雞鳴寺，步行約8分鐘",
    duration: "即買即食 / 建議 20-30 分鐘",
    queueTip: "💡 建議避開早餐高峰（7:30-9:00）"
  },
  {
    id: "1912-cafe-district",
    name: "1912街區（咖啡·茶館）",
    category: "snack",
    tags: ["咖啡", "茶館", "歇腳點"],
    desc: "1912街區內咖啡茶館，行完總統府歇腳之選",
    signatureDishes: ["手沖咖啡", "熱茶", "輕食"],
    lat: 32.04480, lng: 118.79980,
    address: "玄武區長江路288號1912街區",
    nearby: "總統府，步行約3分鐘",
    duration: "建議 30-45 分鐘",
    queueTip: "💡 適合行完總統府後飲杯茶休息"
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