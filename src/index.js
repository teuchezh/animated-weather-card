import { AnimatedWeatherCard } from './components/card.js';
import { AnimatedWeatherCardEditor } from './components/editor.js';
import { VERSION } from './constants.js';

// Register custom elements
try {
  customElements.define('dynamic-weather-card-editor', AnimatedWeatherCardEditor);
  customElements.define('dynamic-weather-card', AnimatedWeatherCard);

  // Log version info
  console.log(
    `%cDynamic Weather Card %c${VERSION}`,
    'color: #007AFF; font-weight: bold; font-size: 14px;',
    'color: #666; font-size: 12px;',
    '\nДинамическая карточка погоды в стиле iOS для Home Assistant'
  );

  // Register with Home Assistant
  window.customCards = window.customCards || [];
  window.customCards.push({
    type: 'dynamic-weather-card',
    name: 'Dynamic Weather Card',
    description: 'Динамическая карточка погоды в стиле iOS для Home Assistant',
    preview: true,
    documentationURL: 'https://github.com/teuchezh/dynamic-weather-card'
  });

  console.log('✅ Dynamic Weather Card зарегистрирована успешно!');
} catch (error) {
  console.error('❌ Ошибка при регистрации Dynamic Weather Card:', error);
}
