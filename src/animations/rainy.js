import { BaseAnimation } from './base.js';

/**
 * Rainy weather animation
 */
export class RainyAnimation extends BaseAnimation {
  constructor(ctx) {
    super(ctx);
    this.rainDrops = [];
  }

  /**
   * Draw rainy weather
   * @param {{type: string, progress: number}} timeOfDay - Time of day info
   * @param {number} width - Canvas width
   * @param {number} height - Canvas height
   * @param {boolean} heavy - Heavy rain flag
   */
  draw(timeOfDay, width, height, heavy = false) {
    const time = Date.now() * 0.001;
    this.drawClouds(time, width, height, heavy ? 1.0 : 0.8);
    this.drawRain(width, height, heavy);
  }

  /**
   * Draw rain drops
   * @param {number} width - Canvas width
   * @param {number} height - Canvas height
   * @param {boolean} heavy - Heavy rain flag
   */
  drawRain(width, height, heavy) {
    const dropCount = heavy ? 130 : 90;

    // Initialize rain drops
    if (this.rainDrops.length !== dropCount) {
      this.rainDrops = [];
      for (let i = 0; i < dropCount; i++) {
        this.rainDrops.push({
          startX: Math.random() * width,
          startY: Math.random() * (height + 200) - 100,
          speed: heavy ? (80 + Math.random() * 100) : (60 + Math.random() * 80),
          windOffset: (Math.random() - 0.5) * 30,
          width: heavy ? (1.2 + Math.random() * 1.0) : (0.8 + Math.random() * 0.7),
          length: heavy ? (8 + Math.random() * 10) : (6 + Math.random() * 8),
          alpha: heavy ? (0.75 + Math.random() * 0.15) : (0.65 + Math.random() * 0.2),
          phase: Math.random() * Math.PI * 2
        });
      }
    }

    const time = Date.now() * 0.0015;

    for (let i = 0; i < this.rainDrops.length; i++) {
      const drop = this.rainDrops[i];
      const dropY = (drop.startY + time * drop.speed) % (height + 200);

      // Reset drop position when it goes off screen
      if (dropY > height + 50) {
        drop.startY = -50 - Math.random() * 50;
        drop.startX = Math.random() * width;
      }

      // Wind effect
      const wind = drop.windOffset * (1 + Math.sin(time * 0.5 + drop.phase) * 0.2);
      const dropX = (drop.startX + wind + (time * 15) % width) % width;

      // Wrap around horizontally
      if (dropX < -10) {
        drop.startX = width + 10;
      } else if (dropX > width + 10) {
        drop.startX = -10;
      }

      this.drawRainDrop(dropX, dropY, drop);
    }
  }

  /**
   * Draw a single rain drop
   * @param {number} dropX - Drop X position
   * @param {number} dropY - Drop Y position
   * @param {Object} drop - Drop parameters
   */
  drawRainDrop(dropX, dropY, drop) {
    this.ctx.save();
    this.ctx.globalAlpha = drop.alpha;

    const topY = dropY - drop.length * 0.5;
    const tipY = dropY + drop.length * 0.5;

    this.ctx.fillStyle = `rgba(220, 240, 255, ${drop.alpha})`;
    this.ctx.strokeStyle = `rgba(240, 250, 255, ${drop.alpha * 0.5})`;
    this.ctx.lineWidth = 0.4;

    this.ctx.beginPath();

    // Top rounded part
    const topRadius = drop.width;
    this.ctx.arc(dropX, topY, topRadius, 0, Math.PI * 2, false);

    // Left side
    this.ctx.moveTo(dropX - topRadius, topY);
    this.ctx.quadraticCurveTo(
      dropX - topRadius * 0.5, dropY,
      dropX - topRadius * 0.15, tipY - drop.width * 0.5
    );

    // Pointed tip
    this.ctx.lineTo(dropX, tipY);

    // Right side
    this.ctx.lineTo(dropX + topRadius * 0.15, tipY - drop.width * 0.5);
    this.ctx.quadraticCurveTo(
      dropX + topRadius * 0.5, dropY,
      dropX + topRadius, topY
    );

    this.ctx.closePath();
    this.ctx.fill();
    this.ctx.stroke();

    this.ctx.restore();
  }
}
