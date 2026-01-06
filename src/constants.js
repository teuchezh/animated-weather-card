// Version is injected from package.json during build
export const VERSION = __VERSION__;

// Weather condition emojis
export const CONDITION_EMOJI = {
  'sunny': '☀️',
  'clear': '☀️',
  'clear-night': '🌙',
  'partlycloudy': '⛅',
  'overcast': '☁️',
  'cloudy': '☁️',
  'rainy': '🌧️',
  'pouring': '🌧️',
  'lightning': '⚡',
  'lightning-rainy': '⛈️',
  'snowy': '❄️',
  'snowy-rainy': '🌨️',
  'foggy': '🌫️',
  'hail': '🌨️',
  'windy': '💨',
  'windy-variant': '💨'
};

// Weather condition names
export const CONDITION_NAMES = {
  en: {
    'sunny': 'Sunny',
    'clear': 'Clear',
    'overcast': 'Overcast',
    'cloudy': 'Cloudy',
    'partlycloudy': 'Partly Cloudy',
    'rainy': 'Rainy',
    'rain': 'Rain',
    'snowy': 'Snowy',
    'snow': 'Snow',
    'foggy': 'Foggy',
    'fog': 'Fog',
    'lightning': 'Lightning',
    'lightning-rainy': 'Thunderstorm',
    'pouring': 'Heavy Rain',
    'snowy-rainy': 'Sleet',
    'hail': 'Hail',
    'clear-night': 'Clear Night'
  },
  ru: {
    'sunny': 'Солнечно',
    'clear': 'Ясно',
    'overcast': 'Пасмурно',
    'cloudy': 'Облачно',
    'partlycloudy': 'Переменная облачность',
    'rainy': 'Дождь',
    'rain': 'Дождь',
    'snowy': 'Снег',
    'snow': 'Снег',
    'foggy': 'Туман',
    'fog': 'Туман',
    'lightning': 'Гроза',
    'lightning-rainy': 'Гроза с дождем',
    'pouring': 'Сильный дождь',
    'snowy-rainy': 'Мокрый снег',
    'hail': 'Град',
    'clear-night': 'Ясная ночь'
  }
};

// Translations
export const TRANSLATIONS = {
  en: {
    'feels_like': 'Feels like',
    'forecast_title': 'Today\'s Forecast'
  },
  ru: {
    'feels_like': 'Ощущается как',
    'forecast_title': 'Прогноз на сегодня'
  }
};

// Icon mappings
export const ICON_MAP = {
  'humidity-icon.svg': '💧',
  'wind-icon.svg': '💨',
  'wind-gust-icon.svg': '🌪️',
  'wind-n.svg': '⬆️',
  'wind-ne.svg': '↗️',
  'wind-e.svg': '➡️',
  'wind-se.svg': '↘️',
  'wind-s.svg': '⬇️',
  'wind-sw.svg': '↙️',
  'wind-w.svg': '⬅️',
  'wind-nw.svg': '↖️',
};

// Wind direction icons
export const WIND_DIRECTION_ICONS = [
  'wind-n.svg',
  'wind-ne.svg',
  'wind-e.svg',
  'wind-se.svg',
  'wind-s.svg',
  'wind-sw.svg',
  'wind-w.svg',
  'wind-nw.svg'
];

// Wind direction text (Russian)
export const WIND_DIRECTIONS = ['С', 'СВ', 'В', 'ЮВ', 'Ю', 'ЮЗ', 'З', 'СЗ'];

// Time of day thresholds (in minutes from midnight)
export const TIME_THRESHOLDS = {
  SUNRISE_START: 360,  // 6:00
  SUNRISE_END: 480,    // 8:00
  DAY_END: 1080,       // 18:00
  SUNSET_END: 1200     // 20:00
};

// Default configuration
export const DEFAULT_CONFIG = {
  showFeelsLike: true,
  showWind: false,
  showWindGust: false,
  showWindDirection: false,
  showHumidity: false,
  showMinTemp: true,
  showForecast: false,
  showSunriseSunset: false,
  language: 'auto',
  height: null
};
