// =============================================
// 귀여운 Flat SVG 날씨 아이콘
// ★ 아이콘 색상을 바꾸려면 fill="#색상코드" 부분을 수정하세요
// =============================================
const WEATHER_SVG = {
  sunny: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="13" fill="#FFD93D"/>
    <g stroke="#FFD93D" stroke-width="3.5" stroke-linecap="round">
      <line x1="32" y1="6"  x2="32" y2="13"/>
      <line x1="32" y1="51" x2="32" y2="58"/>
      <line x1="6"  y1="32" x2="13" y2="32"/>
      <line x1="51" y1="32" x2="58" y2="32"/>
      <line x1="14" y1="14" x2="19" y2="19"/>
      <line x1="45" y1="45" x2="50" y2="50"/>
      <line x1="50" y1="14" x2="45" y2="19"/>
      <line x1="19" y1="45" x2="14" y2="50"/>
    </g>
  </svg>`,

  // 구름 조금 — 해 왼쪽 위, 구름 오른쪽 아래 (대체로 맑음보다 구름 많음)
  partlyCloudy: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="22" cy="24" r="11" fill="#FFD93D"/>
    <g stroke="#FFD93D" stroke-width="2.5" stroke-linecap="round">
      <line x1="22" y1="6"  x2="22" y2="11"/>
      <line x1="6"  y1="24" x2="11" y2="24"/>
      <line x1="10" y1="10" x2="14" y2="14"/>
      <line x1="34" y1="10" x2="30" y2="14"/>
    </g>
    <circle cx="38" cy="38" r="12" fill="#D0DCE8"/>
    <circle cx="26" cy="40" r="10" fill="#D0DCE8"/>
    <circle cx="48" cy="42" r="8"  fill="#D0DCE8"/>
    <rect x="16" y="42" width="40" height="9" rx="4.5" fill="#D0DCE8"/>
  </svg>`,

  // 대체로 맑음 (구름 조금) — 해 왼쪽 위, 구름 오른쪽 아래
  cloudy: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="11" fill="#FFD93D"/>
    <g stroke="#FFD93D" stroke-width="2.5" stroke-linecap="round">
      <line x1="24" y1="6"  x2="24" y2="11"/>
      <line x1="6"  y1="24" x2="11" y2="24"/>
      <line x1="10" y1="10" x2="14" y2="14"/>
      <line x1="38" y1="10" x2="34" y2="14"/>
    </g>
    <circle cx="38" cy="36" r="13" fill="#D0DCE8"/>
    <circle cx="26" cy="38" r="11" fill="#D0DCE8"/>
    <circle cx="50" cy="40" r="9"  fill="#D0DCE8"/>
    <rect x="14" y="40" width="44" height="10" rx="5" fill="#D0DCE8"/>
  </svg>`,

  overcast: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="36" cy="30" r="14" fill="#B0BEC5"/>
    <circle cx="22" cy="34" r="12" fill="#B0BEC5"/>
    <circle cx="48" cy="36" r="10" fill="#B0BEC5"/>
    <rect x="10" y="38" width="44" height="10" rx="5" fill="#B0BEC5"/>
  </svg>`,

  // 비 — 구름 색상은 흐림(overcast)과 동일한 #B0BEC5
  rainy: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="36" cy="26" r="13" fill="#B0BEC5"/>
    <circle cx="22" cy="30" r="11" fill="#B0BEC5"/>
    <circle cx="48" cy="32" r="9"  fill="#B0BEC5"/>
    <rect x="12" y="34" width="40" height="8" rx="4" fill="#B0BEC5"/>
    <g stroke="#81D4FA" stroke-width="3" stroke-linecap="round">
      <line x1="22" y1="46" x2="19" y2="54"/>
      <line x1="32" y1="46" x2="29" y2="54"/>
      <line x1="42" y1="46" x2="39" y2="54"/>
    </g>
  </svg>`,

  thunder: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="36" cy="22" r="13" fill="#546E7A"/>
    <circle cx="22" cy="26" r="11" fill="#546E7A"/>
    <circle cx="48" cy="28" r="9"  fill="#546E7A"/>
    <rect x="12" y="30" width="40" height="8" rx="4" fill="#546E7A"/>
    <polygon points="34,40 28,52 33,52 30,62 40,48 35,48" fill="#FFD93D"/>
  </svg>`,

  snowy: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="36" cy="26" r="13" fill="#CFD8DC"/>
    <circle cx="22" cy="30" r="11" fill="#CFD8DC"/>
    <circle cx="48" cy="32" r="9"  fill="#CFD8DC"/>
    <rect x="12" y="34" width="40" height="8" rx="4" fill="#CFD8DC"/>
    <g fill="#90CAF9">
      <circle cx="22" cy="50" r="3"/>
      <circle cx="32" cy="54" r="3"/>
      <circle cx="42" cy="50" r="3"/>
    </g>
  </svg>`,

  // 달 — evenodd fill-rule로 진짜 초승달 (배경색 무관, 어떤 배경에서도 동작)
  night: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M32 14 a18 18 0 1 0 0 36 a18 18 0 1 0 0-36z
         M34 18 a13 13 0 1 1 3 28 a10 13 0 1 1 0-26z"
      fill="#C5B3E6"/>
    <circle cx="52" cy="13" r="2.5" fill="#FFD93D"/>
    <circle cx="58" cy="22" r="1.8" fill="#FFD93D"/>
    <circle cx="46" cy="8"  r="1.8" fill="#FFD93D"/>
  </svg>`,

  foggy: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g stroke="#B0BEC5" stroke-width="4" stroke-linecap="round">
      <line x1="10" y1="22" x2="54" y2="22"/>
      <line x1="14" y1="32" x2="50" y2="32"/>
      <line x1="10" y1="42" x2="54" y2="42"/>
      <line x1="16" y1="52" x2="48" y2="52"/>
    </g>
  </svg>`
};

// 날씨 타입 → SVG 키 매핑
// ★ API 연결 시 기상청 하늘상태 코드:
//   1=맑음(sunny), 3=구름많음(cloudy), 4=흐림(overcast)
//   partlyCloudy = 구름 조금 (별도 코드 없으면 cloudy와 구분해서 사용)
const WEATHER_ICON_MAP = {
  sunny:        "sunny",
  cloudy:       "cloudy",       // 대체로 맑음 (해 크고 구름 작음)
  partlyCloudy: "partlyCloudy", // 구름 조금 (해와 구름 비슷한 크기)
  overcast:     "overcast",
  rainy:        "rainy",
  snowy:        "snowy",
  thunder:      "thunder",
  night:        "night",
  foggy:        "foggy"
};

function getWeatherSvg(type) {
  const key = WEATHER_ICON_MAP[type] || "partlyCloudy";
  return WEATHER_SVG[key] || WEATHER_SVG.partlyCloudy;
}

// 시간별 아이콘용 (이모지 타입 → SVG 키)
const HOURLY_ICON_MAP = {
  "sunny":"sunny", "clear":"sunny",
  "partlyCloudy":"partlyCloudy", "cloudy":"partlyCloudy",
  "overcast":"overcast",
  "rainy":"rainy", "rain":"rainy",
  "thunder":"thunder",
  "snowy":"snowy", "snow":"snowy",
  "night":"night",
  "foggy":"foggy"
};

// =============================================
// 귀여운 Flat SVG 스마일 아이콘
// =============================================
const SMILE_SVG = {
  good: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="18" fill="#7effd4"/>
    <circle cx="14" cy="16" r="2.5" fill="#2d6a4f"/>
    <circle cx="26" cy="16" r="2.5" fill="#2d6a4f"/>
    <path d="M13 24 Q20 31 27 24" stroke="#2d6a4f" stroke-width="2.5" stroke-linecap="round" fill="none"/>
  </svg>`,

  normal: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="18" fill="#ffe082"/>
    <circle cx="14" cy="16" r="2.5" fill="#7a5c00"/>
    <circle cx="26" cy="16" r="2.5" fill="#7a5c00"/>
    <path d="M13 25 Q20 29 27 25" stroke="#7a5c00" stroke-width="2.5" stroke-linecap="round" fill="none"/>
  </svg>`,

  bad: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="18" fill="#ffab76"/>
    <circle cx="14" cy="16" r="2.5" fill="#7a2e00"/>
    <circle cx="26" cy="16" r="2.5" fill="#7a2e00"/>
    <path d="M13 27 Q20 22 27 27" stroke="#7a2e00" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    <!-- 마스크 -->
    <rect x="10" y="22" width="20" height="10" rx="5" fill="white" opacity="0.7"/>
    <path d="M10 27 Q20 27 30 27" stroke="#7a2e00" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`,

  verybad: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="18" fill="#ff7675"/>
    <circle cx="14" cy="15" r="2.5" fill="#7a0000"/>
    <circle cx="26" cy="15" r="2.5" fill="#7a0000"/>
    <!-- X 눈 -->
    <g stroke="#7a0000" stroke-width="2" stroke-linecap="round">
      <line x1="12" y1="13" x2="16" y2="17"/>
      <line x1="16" y1="13" x2="12" y2="17"/>
      <line x1="24" y1="13" x2="28" y2="17"/>
      <line x1="28" y1="13" x2="24" y2="17"/>
    </g>
    <path d="M13 28 Q20 22 27 28" stroke="#7a0000" stroke-width="2.5" stroke-linecap="round" fill="none"/>
  </svg>`
};

function getSmileSvg(cls) {
  const map = { "grade-good": "good", "grade-normal": "normal", "grade-bad": "bad", "grade-verybad": "verybad" };
  return SMILE_SVG[map[cls]] || SMILE_SVG.normal;
}

// =============================================
// Mock Data
// =============================================
const mockData = {
  location: "서울특별시 강남구",
  current: {
    temp: 23, high: 26, low: 17,
    desc: "구름 조금",
    type: "cloudy"
  },
  dust: { pm10: 45, pm25: 18 },
  dustHourly: {
    am: [
      { time: "06시", pm10: 22, pm25: 10 },
      { time: "07시", pm10: 30, pm25: 14 },
      { time: "08시", pm10: 38, pm25: 17 },
      { time: "09시", pm10: 42, pm25: 19 },
      { time: "10시", pm10: 45, pm25: 20 },
      { time: "11시", pm10: 48, pm25: 22 }
    ],
    pm: [
      { time: "12시", pm10: 52, pm25: 25 },
      { time: "13시", pm10: 55, pm25: 27 },
      { time: "14시", pm10: 60, pm25: 30 },
      { time: "15시", pm10: 58, pm25: 28 },
      { time: "16시", pm10: 50, pm25: 24 },
      { time: "17시", pm10: 44, pm25: 20 },
      { time: "18시", pm10: 38, pm25: 17 },
      { time: "19시", pm10: 30, pm25: 13 }
    ]
  },
  // 시간별 날씨 예보 — 현재 시간 기준 12시간
  // ★ type 값: sunny / cloudy / partlyCloudy / overcast / rainy / snowy / thunder / night / foggy
  hourly: [
    { time: "지금", type: "cloudy",       temp: 23 },
    { time: "14시", type: "sunny",        temp: 24 },
    { time: "15시", type: "sunny",        temp: 25 },
    { time: "16시", type: "partlyCloudy", temp: 26 },
    { time: "17시", type: "overcast",     temp: 24 },
    { time: "18시", type: "overcast",     temp: 22 },
    { time: "19시", type: "night",        temp: 20 },
    { time: "20시", type: "night",        temp: 19 },
    { time: "21시", type: "night",        temp: 18 },
    { time: "22시", type: "night",        temp: 17 },
    { time: "23시", type: "night",        temp: 17 },
    { time: "00시", type: "night",        temp: 16 },
    { time: "01시", type: "night",        temp: 16 }
  ],
  // 시간별 미세먼지 — hourly와 동일한 시간대
  hourlyDust: [
    { time: "지금", pm10: 45, pm25: 18 },
    { time: "14시", pm10: 50, pm25: 22 },
    { time: "15시", pm10: 55, pm25: 25 },
    { time: "16시", pm10: 52, pm25: 24 },
    { time: "17시", pm10: 46, pm25: 21 },
    { time: "18시", pm10: 40, pm25: 18 },
    { time: "19시", pm10: 33, pm25: 14 },
    { time: "20시", pm10: 28, pm25: 11 },
    { time: "21시", pm10: 24, pm25: 10 },
    { time: "22시", pm10: 20, pm25: 9  },
    { time: "23시", pm10: 18, pm25: 8  },
    { time: "00시", pm10: 15, pm25: 7  },
    { time: "01시", pm10: 14, pm25: 6  }
  ],
  weekly: [
    { day: "오늘",   type: "cloudy",       desc: "구름 조금",  high: 26, low: 17, dustAm: { pm10: 35, pm25: 15 }, dustPm: { pm10: 55, pm25: 25 } },
    { day: "내일",   type: "sunny",        desc: "맑음",      high: 28, low: 18, dustAm: { pm10: 20, pm25: 9  }, dustPm: { pm10: 30, pm25: 14 } },
    { day: "목요일", type: "rainy",        desc: "비",        high: 20, low: 15, dustAm: { pm10: 15, pm25: 7  }, dustPm: { pm10: 18, pm25: 8  } },
    { day: "금요일", type: "thunder",      desc: "천둥번개",   high: 18, low: 14, dustAm: { pm10: 12, pm25: 5  }, dustPm: { pm10: 14, pm25: 6  } },
    { day: "토요일", type: "partlyCloudy", desc: "대체로 맑음", high: 22, low: 16, dustAm: { pm10: 40, pm25: 18 }, dustPm: { pm10: 60, pm25: 28 } },
    { day: "일요일", type: "sunny",        desc: "맑음",      high: 25, low: 17, dustAm: { pm10: 25, pm25: 11 }, dustPm: { pm10: 35, pm25: 16 } },
    { day: "월요일", type: "overcast",     desc: "흐림",      high: 21, low: 15, dustAm: { pm10: 50, pm25: 23 }, dustPm: { pm10: 70, pm25: 32 } }
  ]
};

// =============================================
// 탭 상태
// =============================================
let dustTab   = "am";
let hourlyTab = "weather";
let weeklyTab = "weather";

// 현재 렌더링된 데이터 저장 (탭 전환 시 재사용)
let currentData = null;

// =============================================
// 배경
// =============================================
const BG_MAP = { sunny:"bg-sunny", cloudy:"bg-cloudy", overcast:"bg-cloudy",
                 rainy:"bg-rainy", snowy:"bg-snowy", thunder:"bg-thunder",
                 night:"bg-night", foggy:"bg-foggy" };

function applyBackground(type) {
  const hour = new Date().getHours();
  const isNight = hour >= 20 || hour < 6;
  document.body.className = isNight ? "bg-night" : (BG_MAP[type] || "bg-default");
}

// =============================================
// 미세먼지 등급 — 에어코리아 공식 기준
// PM10:  좋음 0~30, 보통 31~80, 나쁨 81~150, 매우나쁨 151+
// PM2.5: 좋음 0~15, 보통 16~35, 나쁨 36~75,  매우나쁨 76+
// =============================================
function getDustGrade(type, value) {
  const limits = type === "pm10" ? [30, 80, 150] : [15, 35, 75];
  if (value <= limits[0]) return { text:"좋음",    cls:"grade-good",    pct: (value/limits[0])*25 };
  if (value <= limits[1]) return { text:"보통",    cls:"grade-normal",  pct: 25+((value-limits[0])/(limits[1]-limits[0]))*25 };
  if (value <= limits[2]) return { text:"나쁨",    cls:"grade-bad",     pct: 50+((value-limits[1])/(limits[2]-limits[1]))*25 };
  return                         { text:"매우나쁨", cls:"grade-verybad", pct: 100 };
}

const DUST_COLORS = {
  "grade-good":"#7effd4", "grade-normal":"#ffe082",
  "grade-bad":"#ffab76",  "grade-verybad":"#ff7675"
};

// =============================================
// Open-Meteo 날씨 코드 변환
// 전체 코드표: https://open-meteo.com/en/docs#weathervariables
// =============================================
function weatherCodeToType(code, isNightTime) {
  if (isNightTime && code <= 1) return "night";
  if (code === 0)  return "sunny";
  if (code <= 2)   return "cloudy";
  if (code === 3)  return "overcast";
  if (code <= 49)  return "foggy";
  if (code <= 67)  return "rainy";
  if (code <= 77)  return "snowy";
  if (code <= 82)  return "rainy";
  if (code <= 99)  return "thunder";
  return "cloudy";
}

function weatherCodeToDesc(code) {
  if (code === 0)  return "맑음";
  if (code === 1)  return "대체로 맑음";
  if (code === 2)  return "구름 조금";
  if (code === 3)  return "흐림";
  if (code <= 49)  return "안개";
  if (code <= 55)  return "이슬비";
  if (code <= 67)  return "비";
  if (code <= 77)  return "눈";
  if (code <= 82)  return "소나기";
  if (code <= 99)  return "천둥번개";
  return "흐림";
}

// =============================================
// 역지오코딩 — 위도/경도 → 한국어 지역명
// =============================================
async function getLocationName(lat, lon) {
  try {
    const res  = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&accept-language=ko`);
    const json = await res.json();
    const addr = json.address;
    const city = addr.city || addr.town || addr.province || "";
    const gu   = addr.borough || addr.suburb || addr.county || "";
    return gu ? `${city} ${gu}`.trim() : city || "현재 위치";
  } catch {
    return "현재 위치";
  }
}

// =============================================
// Open-Meteo API 호출 및 데이터 변환
// =============================================
const WAQI_TOKEN = "7a9a5817df963bf67ede4614390994f12a0e7d93";

async function fetchWeatherData(lat, lon) {
  const tz = "Asia%2FSeoul";

  // 날씨 + Open-Meteo 대기질 + WAQI 현재 미세먼지 동시 호출
  const [weatherRes, airRes, waqiRes] = await Promise.all([
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weathercode&hourly=temperature_2m,weathercode&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=${tz}&forecast_days=7`),
    fetch(`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&current=pm10,pm2_5&hourly=pm10,pm2_5&timezone=${tz}`),
    fetch(`https://api.waqi.info/feed/geo:${lat};${lon}/?token=${WAQI_TOKEN}`)
  ]);
  const weather  = await weatherRes.json();
  const air      = await airRes.json();
  const waqiData = await waqiRes.json();

  const now     = new Date();
  const nowHour = now.getHours();
  const isNight = nowHour >= 20 || nowHour < 6;

  // 기온 보정값 — Open-Meteo가 기상청 대비 낮게 측정됨
  // ★ 오차가 달라지면 아래 값을 조정하세요
  const TEMP_OFFSET_CURRENT = 4; // 현재 기온 보정
  const TEMP_OFFSET_HIGH    = 4; // 일별 최고 기온 보정
  const TEMP_OFFSET_LOW     = 2; // 일별 최저 기온 보정
  const currentCode = weather.current.weathercode;
  const currentTemp = Math.round(weather.current.temperature_2m) + TEMP_OFFSET_CURRENT;
  const todayHigh   = Math.round(weather.daily.temperature_2m_max[0]) + TEMP_OFFSET_HIGH;
  const todayLow    = Math.round(weather.daily.temperature_2m_min[0]) + TEMP_OFFSET_LOW;

  // WAQI 현재 미세먼지 (실측값) — 실패 시 Open-Meteo로 fallback
  let currentPm10, currentPm25;
  if (waqiData.status === "ok") {
    currentPm10 = Math.round(waqiData.data.iaqi?.pm10?.v ?? air.current.pm10  ?? 0);
    currentPm25 = Math.round(waqiData.data.iaqi?.pm25?.v ?? air.current.pm2_5 ?? 0);
  } else {
    currentPm10 = Math.round(air.current.pm10  ?? 0);
    currentPm25 = Math.round(air.current.pm2_5 ?? 0);
  }

  // 시간별 예보 — 현재 시각부터 12시간
  const hourlyTimes = weather.hourly.time;
  const todayStr = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
  const nowKey   = `${todayStr}T${String(nowHour).padStart(2,'0')}:00`;
  const startIdx = Math.max(hourlyTimes.findIndex(t => t === nowKey), 0);

  const hourly     = [];
  const hourlyDust = [];
  for (let i = 0; i <= 12; i++) {
    const idx = startIdx + i;
    if (idx >= hourlyTimes.length) break;
    const h   = new Date(hourlyTimes[idx]).getHours();
    const isN = h >= 20 || h < 6;
    hourly.push({
      time: i === 0 ? "지금" : `${String(h).padStart(2,'0')}시`,
      type: weatherCodeToType(weather.hourly.weathercode[idx], isN),
      temp: Math.round(weather.hourly.temperature_2m[idx]) + TEMP_OFFSET
    });
    hourlyDust.push({
      time: i === 0 ? "지금" : `${String(h).padStart(2,'0')}시`,
      pm10: Math.round(air.hourly.pm10[idx]  ?? 0),
      pm25: Math.round(air.hourly.pm2_5[idx] ?? 0)
    });
  }

  // 미세먼지 오전(06~11시) / 오후(12~19시) 슬롯
  function makeDustSlots(slots) {
    return slots.map(h => {
      const key = `${todayStr}T${String(h).padStart(2,'0')}:00`;
      const idx = air.hourly.time.findIndex(t => t === key);
      return {
        time: `${String(h).padStart(2,'0')}시`,
        pm10: idx >= 0 ? Math.round(air.hourly.pm10[idx]  ?? 0) : 0,
        pm25: idx >= 0 ? Math.round(air.hourly.pm2_5[idx] ?? 0) : 0
      };
    });
  }

  // 주간 예보 7일
  const DAYS = ["일","월","화","수","목","금","토"];
  const weekly = weather.daily.time.map((dateStr, i) => {
    const d    = new Date(dateStr + "T00:00:00");
    const code = weather.daily.weathercode[i];
    const day  = i === 0 ? "오늘" : i === 1 ? "내일" : `${DAYS[d.getDay()]}요일`;
    const amIdx = air.hourly.time.findIndex(t => t === `${dateStr}T06:00`);
    const pmIdx = air.hourly.time.findIndex(t => t === `${dateStr}T14:00`);
    return {
      day,
      type: weatherCodeToType(code, false),
      desc: weatherCodeToDesc(code),
      high: Math.round(weather.daily.temperature_2m_max[i]) + TEMP_OFFSET_HIGH,
      low:  Math.round(weather.daily.temperature_2m_min[i]) + TEMP_OFFSET_LOW,
      dustAm: { pm10: amIdx >= 0 ? Math.round(air.hourly.pm10[amIdx]  ?? 0) : 0,
                pm25: amIdx >= 0 ? Math.round(air.hourly.pm2_5[amIdx] ?? 0) : 0 },
      dustPm: { pm10: pmIdx >= 0 ? Math.round(air.hourly.pm10[pmIdx]  ?? 0) : 0,
                pm25: pmIdx >= 0 ? Math.round(air.hourly.pm2_5[pmIdx] ?? 0) : 0 }
    };
  });

  return {
    location: "로딩 중...",
    current:  { temp: currentTemp, high: todayHigh, low: todayLow,
                desc: weatherCodeToDesc(currentCode),
                type: weatherCodeToType(currentCode, isNight) },
    dust:     { pm10: currentPm10, pm25: currentPm25 },
    dustHourly: { am: makeDustSlots([6,7,8,9,10,11]),
                  pm: makeDustSlots([12,13,14,15,16,17,18,19]) },
    hourly,
    hourlyDust,
    weekly
  };
}

// =============================================
// 탭 전환 함수
// =============================================
function switchDustTab(tab) {
  dustTab = tab;
  document.getElementById("dtab-am").classList.toggle("active", tab === "am");
  document.getElementById("dtab-pm").classList.toggle("active", tab === "pm");
  if (currentData) renderDustHourly(currentData.dustHourly[tab]);
}

function switchHourlyTab(tab) {
  hourlyTab = tab;
  document.getElementById("htab-weather").classList.toggle("active", tab === "weather");
  document.getElementById("htab-dust").classList.toggle("active", tab === "dust");
  if (!currentData) return;
  if (tab === "weather") renderHourlyWeather(currentData.hourly);
  else                   renderHourlyDust(currentData.hourlyDust);
}

function switchWeeklyTab(tab) {
  weeklyTab = tab;
  document.getElementById("wtab-weather").classList.toggle("active", tab === "weather");
  document.getElementById("wtab-dust").classList.toggle("active", tab === "dust");
  if (!currentData) return;
  if (tab === "weather") renderWeeklyWeather(currentData.weekly);
  else                   renderWeeklyDust(currentData.weekly);
}

// =============================================
// 렌더 함수들
// =============================================
function renderDustHourly(list) {
  document.getElementById("dust-hourly-list").innerHTML = list.map(item => {
    const g10 = getDustGrade("pm10", item.pm10);
    const g25 = getDustGrade("pm25", item.pm25);
    return `<div class="dust-hourly-item">
      <span class="dh-time">${item.time}</span>
      <span class="dh-smile">${getSmileSvg(g10.cls)}</span>
      <div class="dh-row">
        <span class="dh-pm10" style="color:${DUST_COLORS[g10.cls]}">${item.pm10}</span>
        <span class="dh-pm25" style="color:${DUST_COLORS[g25.cls]}">${item.pm25}</span>
      </div>
      <div class="dh-row"><span class="dh-label">PM10</span><span class="dh-label">PM2.5</span></div>
      <span class="dh-grade ${g10.cls}">${g10.text}</span>
    </div>`;
  }).join("");
}

function renderHourlyWeather(list) {
  document.getElementById("hourly-list").innerHTML = list.map(h => `
    <div class="hourly-item">
      <span class="hourly-time">${h.time}</span>
      <span class="hourly-icon">${getWeatherSvg(h.type)}</span>
      <span class="hourly-temp">${h.temp}°</span>
    </div>
  `).join("");
}

function renderHourlyDust(list) {
  const timeRow = list.map(item => `<div class="dg-cell dg-time">${item.time}</div>`).join("");
  const pm10Row = list.map(item => {
    const g = getDustGrade("pm10", item.pm10);
    return `<div class="dg-cell"><span class="dg-smile">${getSmileSvg(g.cls)}</span><span class="dg-grade ${g.cls}">${g.text}</span></div>`;
  }).join("");
  const pm25Row = list.map(item => {
    const g = getDustGrade("pm25", item.pm25);
    return `<div class="dg-cell"><span class="dg-smile">${getSmileSvg(g.cls)}</span><span class="dg-grade ${g.cls}">${g.text}</span></div>`;
  }).join("");

  document.getElementById("hourly-list").innerHTML = `
    <div class="dust-grid">
      <div class="dg-row-wrap"><div class="dg-row-label"></div>
        <div class="dg-scroll" id="dg-scroll-time"><div class="dg-row">${timeRow}</div></div></div>
      <div class="dg-row-wrap"><div class="dg-row-label">미세</div>
        <div class="dg-scroll" id="dg-scroll-pm10"><div class="dg-row">${pm10Row}</div></div></div>
      <div class="dg-row-wrap"><div class="dg-row-label">초미세</div>
        <div class="dg-scroll" id="dg-scroll-pm25"><div class="dg-row">${pm25Row}</div></div></div>
    </div>`;

  const scrollEls = ["dg-scroll-time","dg-scroll-pm10","dg-scroll-pm25"].map(id => document.getElementById(id));
  let isSyncing = false;
  scrollEls.forEach(el => {
    el.addEventListener("scroll", () => {
      if (isSyncing) return;
      isSyncing = true;
      scrollEls.forEach(other => { if (other !== el) other.scrollLeft = el.scrollLeft; });
      isSyncing = false;
    });
  });
}

function renderWeeklyWeather(list) {
  document.getElementById("weekly-list").innerHTML = list.map(w => `
    <div class="weekly-item">
      <span class="weekly-day">${w.day}</span>
      <span class="weekly-icon">${getWeatherSvg(w.type)}</span>
      <span class="weekly-desc">${w.desc}</span>
      <span class="weekly-temps">
        <span class="weekly-low">${w.low}°</span>
        <span class="weekly-high">${w.high}°</span>
      </span>
    </div>
  `).join("");
}

function renderWeeklyDust(list) {
  document.getElementById("weekly-list").innerHTML = list.map(w => {
    const gAm = getDustGrade("pm10", w.dustAm.pm10);
    const gPm = getDustGrade("pm10", w.dustPm.pm10);
    return `<div class="weekly-item">
      <span class="weekly-day">${w.day}</span>
      <span class="weekly-dust">
        <span class="wd-block">
          <span class="wd-period">오전</span>
          <span class="wd-smile">${getSmileSvg(gAm.cls)}</span>
          <span class="wd-grade ${gAm.cls}">${gAm.text}</span>
        </span>
        <span class="wd-block">
          <span class="wd-period">오후</span>
          <span class="wd-smile">${getSmileSvg(gPm.cls)}</span>
          <span class="wd-grade ${gPm.cls}">${gPm.text}</span>
        </span>
      </span>
    </div>`;
  }).join("");
}

// =============================================
// 전체 렌더
// =============================================
function render(data) {
  currentData = data;
  applyBackground(data.current.type);

  document.getElementById("location-name").textContent  = data.location;
  const now = new Date();
  document.getElementById("current-date").textContent   =
    now.toLocaleDateString("ko-KR", { month:"long", day:"numeric", weekday:"short" });

  document.getElementById("weather-icon").innerHTML     = getWeatherSvg(data.current.type);
  document.getElementById("temp-now").textContent       = data.current.temp + "°";
  document.getElementById("weather-desc").textContent   = data.current.desc;
  document.getElementById("temp-high").textContent      = data.current.high + "°";
  document.getElementById("temp-low").textContent       = data.current.low + "°";

  ["pm10","pm25"].forEach(type => {
    const val   = data.dust[type];
    const grade = getDustGrade(type, val);
    document.getElementById(`${type}-smile`).innerHTML  = getSmileSvg(grade.cls);
    const gradeEl = document.getElementById(`${type}-grade`);
    gradeEl.textContent = grade.text;
    gradeEl.className   = "main-dust-grade " + grade.cls;
    document.getElementById(`${type}-bar`).style.width      = grade.pct + "%";
    document.getElementById(`${type}-bar`).style.background = DUST_COLORS[grade.cls];
  });

  if (hourlyTab === "weather") renderHourlyWeather(data.hourly);
  else                         renderHourlyDust(data.hourlyDust);
  if (weeklyTab === "weather") renderWeeklyWeather(data.weekly);
  else                         renderWeeklyDust(data.weekly);

  document.getElementById("updated-time").textContent =
    now.toLocaleTimeString("ko-KR", { hour:"2-digit", minute:"2-digit" }) + " 업데이트";
}

// =============================================
// 위치 → API → 렌더
// =============================================
async function loadWeather() {
  const btn = document.getElementById("refresh-btn");
  btn.classList.add("spinning");
  document.getElementById("location-name").textContent = "위치 확인 중...";

  try {
    // GPS 위치 요청
    const pos = await new Promise((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 10000 })
    );
    const { latitude: lat, longitude: lon } = pos.coords;

    // API 호출
    const data = await fetchWeatherData(lat, lon);
    render(data);

    // 역지오코딩으로 위치명 업데이트 (비동기)
    getLocationName(lat, lon).then(name => {
      document.getElementById("location-name").textContent = name;
      if (currentData) currentData.location = name;
    });

  } catch (err) {
    // GPS 거부 또는 API 오류 → mock 데이터로 fallback
    console.warn("API 실패, 샘플 데이터 사용:", err.message);
    render(mockData);
    document.getElementById("location-name").textContent = mockData.location + " (샘플)";
  } finally {
    btn.classList.remove("spinning");
  }
}

// =============================================
// 새로고침 버튼 & 앱 시작
// =============================================
document.getElementById("refresh-btn").addEventListener("click", loadWeather);
loadWeather();
