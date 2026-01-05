import { BaseAnimation } from './base.js';

/**
 * Snowy weather animation
 */
export class SnowyAnimation extends BaseAnimation {
  /**
   * Draw snowy weather
   * @param {{type: string, progress: number}} timeOfDay - Time of day info
   * @param {number} width - Canvas width
   * @param {number} height - Canvas height
   */
  draw(timeOfDay, width, height) {
    const time = Date.now() * 0.001;
    this.drawClouds(time, width, height, 0.7);
    this.drawSnowflakes(width, height, time);
  }

  /**
   * Draw snowflakes
   * @param {number} width - Canvas width
   * @param {number} height - Canvas height
   * @param {number} time - Animation time
   */
  drawSnowflakes(width, height, time) {
    this.ctx.lineWidth = 1;
    this.ctx.lineCap = 'round';

    for (let i = 0; i < 40; i++) {
      const x = (width * 0.15 + i * 22 + Math.sin(time * 0.15 + i) * 15) % width;
      const y = ((time * 60 + i * 25) % (height + 60)) - 30;
      const size = 1.5 + (i % 4) * 0.8;
      const alpha = 0.7 + (i % 2) * 0.2;
      const rotation = time * 0.25 + i * 0.3;

      this.drawSnowflake(x, y, size, alpha, rotation);
    }
  }

  /**
   * Draw a single snowflake
   * @param {number} x - X position
   * @param {number} y - Y position
   * @param {number} size - Snowflake size
   * @param {number} alpha - Opacity
   * @param {number} rotation - Rotation angle
   */
  drawSnowflake(x, y, size, alpha, rotation) {
    this.ctx.save();
    this.ctx.translate(x, y);
    this.ctx.rotate(rotation);
    this.ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;

    // Draw 6-pointed snowflake
    for (let j = 0; j < 6; j++) {
      // Main branch
      this.ctx.beginPath();
      this.ctx.moveTo(0, 0);
      this.ctx.lineTo(0, size * 2.5);
      this.ctx.stroke();

      // Side branches
      this.ctx.beginPath();
      this.ctx.moveTo(size * 0.5, size * 1.5);
      this.ctx.lineTo(size * 1.2, size * 1.8);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.moveTo(-size * 0.5, size * 1.5);
      this.ctx.lineTo(-size * 1.2, size * 1.8);
      this.ctx.stroke();

      this.ctx.rotate(Math.PI / 3);
    }

    this.ctx.restore();
  }
}
