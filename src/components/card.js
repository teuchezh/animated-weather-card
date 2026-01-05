import { LitElement, html, css } from 'lit';
import { CONDITION_NAMES, DEFAULT_CONFIG } from '../constants.js';
import {
  getWindDirectionText,
  getWindDirectionIcon,
  getConditionEmoji,
  getIcon,
  getTimeOfDay,
  getBackgroundGradient,
  formatForecastTime,
  getSunriseSunsetData,
  getTimeOfDayWithSunData,
  formatTime
} from '../utils.js';
import { SunnyAnimation } from '../animations/sunny.js';
import { RainyAnimation } from '../animations/rainy.js';
import { SnowyAnimation } from '../animations/snowy.js';
import { CloudyAnimation } from '../animations/cloudy.js';
import { FoggyAnimation } from '../animations/foggy.js';
import { HailAnimation } from '../animations/hail.js';
import { ThunderstormAnimation } from '../animations/thunderstorm.js';
import { cardStyles } from './styles.js';

export class AnimatedWeatherCard extends LitElement {
  static get properties() {
    return {
      hass: { type: Object },
      config: { type: Object },
    };
  }

  static get styles() {
    return cardStyles;
  }

  constructor() {
    super();
    this.config = {};
    this.animationFrame = null;
    this.canvas = null;
    this.ctx = null;
    this.canvasWidth = 0;
    this.canvasHeight = 0;
    this.animations = {};
  }

  connectedCallback() {
    super.connectedCallback();
    this.updateComplete.then(() => {
      setTimeout(() => {
        this.setupCanvas();
        if (this.canvas && this.ctx) {
          this.initializeAnimations();
          this.startAnimation();
          this.setupResizeObserver();
        }
        this.setupForecastScroll();
      }, 100);
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    }
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
    // Clean up wheel event listener
    if (this._wheelHandler && this.shadowRoot) {
      const forecastScroll = this.shadowRoot.querySelector('.forecast-scroll');
      if (forecastScroll) {
        forecastScroll.removeEventListener('wheel', this._wheelHandler);
      }
      this._wheelHandler = null;
    }
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has('hass') || changedProperties.has('config')) {
      if (this.canvas && this.ctx) {
        this.resizeCanvas();
      }
      this.setupForecastScroll();
    }
  }

  initializeAnimations() {
    this.animations = {
      sunny: new SunnyAnimation(this.ctx),
      rainy: new RainyAnimation(this.ctx),
      snowy: new SnowyAnimation(this.ctx),
      cloudy: new CloudyAnimation(this.ctx),
      foggy: new FoggyAnimation(this.ctx),
      hail: new HailAnimation(this.ctx),
      thunderstorm: new ThunderstormAnimation(this.ctx)
    };
  }

  setupResizeObserver() {
    if (!this.shadowRoot) return;
    const container = this.shadowRoot.querySelector('.canvas-container');
    if (!container) return;

    this.resizeObserver = new ResizeObserver(() => {
      this.resizeCanvas();
    });
    this.resizeObserver.observe(container);
  }

  setupForecastScroll() {
    if (!this.shadowRoot) return;
    const forecastScroll = this.shadowRoot.querySelector('.forecast-scroll');
    if (!forecastScroll) return;

    // Remove existing listener if any
    if (this._wheelHandler) {
      forecastScroll.removeEventListener('wheel', this._wheelHandler);
    }

    // Add horizontal scroll on mouse wheel
    this._wheelHandler = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        forecastScroll.scrollLeft += e.deltaY;
      }
    };

    forecastScroll.addEventListener('wheel', this._wheelHandler, { passive: false });
  }

  resizeCanvas() {
    if (!this.canvas) return;
    const container = this.shadowRoot.querySelector('.canvas-container');
    if (!container) return;

    const rect = container.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const dpr = window.devicePixelRatio || 2;
    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';

    this.ctx = this.canvas.getContext('2d');
    this.ctx.scale(dpr, dpr);

    this.canvasWidth = rect.width;
    this.canvasHeight = rect.height;

    // Reinitialize animations with new context
    this.initializeAnimations();
  }

  setupCanvas() {
    const container = this.shadowRoot.querySelector('.canvas-container');
    if (!container) return;

    const oldCanvas = container.querySelector('canvas');
    if (oldCanvas) {
      oldCanvas.remove();
    }

    this.canvas = document.createElement('canvas');
    container.appendChild(this.canvas);
    this.resizeCanvas();
  }

  getState(entityId) {
    if (!this.hass || !entityId) return null;
    const entity = this.hass.states[entityId];
    return entity ? entity.state : null;
  }

  getAttributes(entityId) {
    if (!this.hass || !entityId) return {};
    const entity = this.hass.states[entityId];
    return entity ? entity.attributes : {};
  }

  getWeatherData() {
    const entityId = this.config.entity || 'weather.home';
    const state = this.getState(entityId);
    const attrs = this.getAttributes(entityId);

    // Get condition from attributes or entity state
    const condition = attrs.condition || state || 'sunny';

    return {
      condition: condition,
      temperature: attrs.temperature || 20,
      apparentTemperature: attrs.apparent_temperature || null,
      humidity: attrs.humidity != null ? attrs.humidity : null,
      windSpeed: attrs.wind_speed != null ? attrs.wind_speed : null,
      windGust: attrs.wind_gust_speed || attrs.wind_gust || null,
      windBearing: attrs.wind_bearing != null ? attrs.wind_bearing : null,
      windDirection: attrs.wind_direction || null,
      pressure: attrs.pressure || null,
      forecast: attrs.forecast || attrs.forecast_hourly || [],
      friendlyName: attrs.friendly_name || 'Weather',
      templow: attrs.templow || (attrs.forecast && attrs.forecast[0] ? attrs.forecast[0].templow : null) || (attrs.forecast_hourly && attrs.forecast_hourly[0] ? attrs.forecast_hourly[0].native_templow : null)
    };
  }

  getTodayForecast() {
    if (!this.hass || !this.config) return [];
    const weather = this.getWeatherData();
    if (!weather.forecast || weather.forecast.length === 0) return [];

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const todayForecast = weather.forecast.filter(item => {
      if (!item.datetime) return false;
      const itemDate = new Date(item.datetime);
      const itemDay = new Date(itemDate.getFullYear(), itemDate.getMonth(), itemDate.getDate());
      // Show all forecasts for today (including past hours) and tomorrow until current hour
      return itemDay.getTime() === today.getTime() ||
             (itemDay.getTime() === tomorrow.getTime() && itemDate.getHours() <= now.getHours());
    });

    return todayForecast
      .sort((a, b) => new Date(a.datetime) - new Date(b.datetime))
      .slice(0, 8);
  }

  startAnimation() {
    const animate = () => {
      this.draw();
      this.animationFrame = requestAnimationFrame(animate);
    };
    animate();
  }

  draw() {
    if (!this.ctx || !this.canvas) return;
    if (!this.canvasWidth || !this.canvasHeight) {
      this.resizeCanvas();
      if (!this.canvasWidth || !this.canvasHeight) return;
    }

    const width = this.canvasWidth;
    const height = this.canvasHeight;

    this.ctx.clearRect(0, 0, width, height);

    const weather = this.getWeatherData();
    const weatherState = this.hass?.states[this.config.entity];
    const sunData = getSunriseSunsetData(weatherState);

    // Allow test override of time of day
    const timeOfDay = this._testTimeOfDay || getTimeOfDayWithSunData(sunData);
    const condition = weather.condition.toLowerCase();

    switch (condition) {
      case 'sunny':
      case 'clear':
        this.animations.sunny.draw(timeOfDay, width, height);
        break;
      case 'clear-night':
        this.animations.sunny.draw({ type: 'night', progress: 0 }, width, height);
        break;
      case 'rainy':
      case 'rain':
        this.animations.rainy.draw(timeOfDay, width, height, false);
        break;
      case 'pouring':
        this.animations.rainy.draw(timeOfDay, width, height, true);
        break;
      case 'snowy':
      case 'snow':
        this.animations.snowy.draw(timeOfDay, width, height);
        break;
      case 'snowy-rainy':
        this.animations.rainy.draw(timeOfDay, width, height, false);
        this.animations.snowy.draw(timeOfDay, width, height);
        break;
      case 'hail':
        this.animations.hail.draw(timeOfDay, width, height);
        break;
      case 'foggy':
      case 'fog':
        this.animations.foggy.draw(timeOfDay, width, height);
        break;
      case 'lightning':
        this.animations.thunderstorm.draw(timeOfDay, width, height, false);
        break;
      case 'lightning-rainy':
        this.animations.thunderstorm.draw(timeOfDay, width, height, true);
        break;
      case 'cloudy':
      case 'partlycloudy':
      default:
        this.animations.cloudy.draw(timeOfDay, width, height);
        break;
    }
  }

  renderTodayForecast() {
    const forecast = this.getTodayForecast();
    if (forecast.length === 0) {
      return html`<div style="opacity: 0.6; font-size: 14px;">Прогноз недоступен</div>`;
    }

    return html`
      <div class="forecast-scroll">
        ${forecast.map(item => html`
          <div class="forecast-item">
            <div class="forecast-time">${formatForecastTime(item.datetime)}</div>
            <div class="forecast-icon">${getConditionEmoji(item.condition)}</div>
            <div class="forecast-temp">${Math.round(item.temperature || item.temp || item.native_temperature || 0)}°</div>
          </div>
        `)}
      </div>
    `;
  }

  getConditionName(condition) {
    return CONDITION_NAMES[condition.toLowerCase()] || condition;
  }

  render() {
    if (!this.hass) {
      return html`<div>No Home Assistant connection</div>`;
    }

    const weather = this.getWeatherData();
    const weatherState = this.hass.states[this.config.entity];
    const sunData = getSunriseSunsetData(weatherState, this.config.sunriseEntity, this.config.sunsetEntity, this.hass);

    // Allow test override of time of day
    const timeOfDay = this._testTimeOfDay || getTimeOfDayWithSunData(sunData);
    const cardClasses = `weather-card ${timeOfDay.type}`;

    let minHeight = this.config.height ? `${this.config.height}px` : '200px';

    const bgGradient = getBackgroundGradient(timeOfDay);
    const bgStyle = bgGradient
      ? `background: linear-gradient(135deg, rgb(${bgGradient.start.r}, ${bgGradient.start.g}, ${bgGradient.start.b}), rgb(${bgGradient.end.r}, ${bgGradient.end.g}, ${bgGradient.end.b}));`
      : '';

    return html`
      <ha-card>
        <div class="${cardClasses}" style="min-height: ${minHeight}; ${bgStyle}">
          <div class="canvas-container"></div>
          <div class="content">
            <div class="header">
              <div class="location">${this.config.name || weather.friendlyName}</div>
            </div>
            <div>
              <div class="condition">${this.getConditionName(weather.condition)}</div>
              <div class="temperature">${Math.round(weather.temperature)}°</div>
              ${this.config.showMinTemp && weather.templow ? html`
                <div class="temp-range">
                  <span class="temp-min">↓ ${Math.round(weather.templow)}°</span>
                </div>
              ` : ''}
              ${this.config.showFeelsLike && weather.apparentTemperature ? html`
                <div class="feels-like">Ощущается как ${Math.round(weather.apparentTemperature)}°</div>
              ` : ''}
            </div>
            <div class="details">
              <div class="info-grid">
                ${this.config.showHumidity && weather.humidity != null ? html`
                  <div class="info-item">
                    <span class="info-icon">${getIcon('humidity-icon.svg')}</span>
                    <span>${weather.humidity} %</span>
                  </div>
                ` : ''}
                ${this.config.showSunriseSunset && sunData.hasSunData ? html`
                  <div class="info-item">
                    <span class="info-icon">🌅</span>
                    <span>${formatTime(sunData.sunrise)}</span>
                  </div>
                ` : ''}
                ${this.config.showWind && weather.windSpeed != null ? html`
                  ${this.config.showWindDirection && weather.windBearing != null ? html`
                    <div class="info-item">
                      <span class="info-icon">${getIcon(getWindDirectionIcon(weather.windBearing))}</span>
                      <span>${weather.windSpeed} м/с${this.config.showWindGust && weather.windGust ? ` / ${weather.windGust} м/с` : ''}</span>
                    </div>
                  ` : html`
                    <div class="info-item">
                      <span class="info-icon">${getIcon('wind-icon.svg')}</span>
                      <span>${weather.windSpeed} м/с${this.config.showWindGust && weather.windGust ? ` / ${weather.windGust} м/с` : ''}</span>
                    </div>
                  `}
                ` : ''}
                ${this.config.showSunriseSunset && sunData.hasSunData ? html`
                  <div class="info-item">
                    <span class="info-icon">🌇</span>
                    <span>${formatTime(sunData.sunset)}</span>
                  </div>
                ` : ''}
              </div>
            </div>
            ${this.config.showForecast ? html`
              <div class="forecast-container">
                <div class="forecast-title">Прогноз на сегодня</div>
                ${this.renderTodayForecast()}
              </div>
            ` : ''}
          </div>
        </div>
      </ha-card>
    `;
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error('Please define a weather entity');
    }
    this.config = {
      entity: config.entity,
      icons_path: config.icons_path,
      name: config.name,
      height: config.height || DEFAULT_CONFIG.height,
      showFeelsLike: config.show_feels_like !== false,
      showWind: config.show_wind !== false,
      showWindGust: config.show_wind_gust !== false,
      showWindDirection: config.show_wind_direction !== false,
      showHumidity: config.show_humidity !== false,
      showMinTemp: config.show_min_temp !== false,
      showForecast: config.show_forecast === true,
      showSunriseSunset: config.show_sunrise_sunset !== false,
      sunriseEntity: config.sunrise_entity || null,
      sunsetEntity: config.sunset_entity || null
    };
  }

  getCardSize() {
    return 1;
  }
}
