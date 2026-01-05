import { BaseAnimation } from './base.js';

/**
 * Foggy weather animation
 */
export class FoggyAnimation extends BaseAnimation {
  /**
   * Draw foggy weather
   * @param {{type: string, progress: number}} timeOfDay - Time of day info
   * @param {number} width - Canvas width
   * @param {number} height - Canvas height
   */
  draw(timeOfDay, width, height) {
    const time = Date.now() * 0.0003;
    this.ctx.fillStyle = 'rgba(200, 200, 200, 0.4)';

    // Draw fog layers
    for (let i = 0; i < 3; i++) {
      const y = height * (0.4 + i * 0.2);
      const offset = Math.sin(time + i) * 20;

      this.ctx.beginPath();
      this.ctx.moveTo(0, y);

      for (let x = 0; x <= width; x += 5) {
        const wave = Math.sin((x / width + time) * Math.PI * 4 + i) * 15;
        this.ctx.lineTo(x, y + wave + offset);
      }

      this.ctx.lineTo(width, height);
      this.ctx.lineTo(0, height);
      this.ctx.closePath();
      this.ctx.fill();
    }
  }
}
