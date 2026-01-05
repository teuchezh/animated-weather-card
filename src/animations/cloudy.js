import { BaseAnimation } from './base.js';

/**
 * Cloudy weather animation
 */
export class CloudyAnimation extends BaseAnimation {
  /**
   * Draw cloudy weather
   * @param {{type: string, progress: number}} timeOfDay - Time of day info
   * @param {number} width - Canvas width
   * @param {number} height - Canvas height
   */
  draw(timeOfDay, width, height) {
    const time = Date.now() * 0.001;
    this.drawClouds(time, width, height, 0.7);
  }
}
