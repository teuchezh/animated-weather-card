import { BaseAnimation } from './base.js';
import { RainyAnimation } from './rainy.js';

/**
 * Thunderstorm weather animation
 */
export class ThunderstormAnimation extends BaseAnimation {
  constructor(ctx) {
    super(ctx);
    this.rainyAnimation = new RainyAnimation(ctx);
  }

  /**
   * Draw thunderstorm weather
   * @param {{type: string, progress: number}} timeOfDay - Time of day info
   * @param {number} width - Canvas width
   * @param {number} height - Canvas height
   * @param {boolean} withRain - Include rain flag
   */
  draw(timeOfDay, width, height, withRain = true) {
    const time = Date.now() * 0.001;

    // Dark clouds
    this.drawClouds(time, width, height, 1.0);

    // Rain if specified
    if (withRain) {
      this.rainyAnimation.draw(timeOfDay, width, height, false);
    }

    // Lightning flash effect
    this.drawLightning(width, height, time);
  }

  /**
   * Draw lightning flash effect
   * @param {number} width - Canvas width
   * @param {number} height - Canvas height
   * @param {number} time - Animation time
   */
  drawLightning(width, height, time) {
    // Create unpredictable flash pattern
    const flashPattern = Math.sin(time * 2.5) * Math.sin(time * 5.3) * Math.sin(time * 7.1);
    const flashIntensity = Math.max(0, flashPattern);

    // Flashes occur less frequently and more sharply
    if (flashIntensity > 0.4) {
      const normalizedIntensity = (flashIntensity - 0.4) / 0.6;
      const alpha = normalizedIntensity * 0.6;

      // Smooth fade for realistic effect
      const fadeAlpha = Math.min(alpha, Math.sin(normalizedIntensity * Math.PI) * 0.6);

      this.ctx.fillStyle = `rgba(255, 255, 255, ${fadeAlpha})`;
      this.ctx.fillRect(0, 0, width, height);
    }
  }
}
