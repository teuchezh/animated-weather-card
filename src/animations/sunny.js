import { BaseAnimation } from './base.js';
import { getSunPosition } from '../utils.js';

/**
 * Sunny weather animation
 */
export class SunnyAnimation extends BaseAnimation {
  /**
   * Draw sunny weather
   * @param {{type: string, progress: number}} timeOfDay - Time of day info
   * @param {number} width - Canvas width
   * @param {number} height - Canvas height
   */
  draw(timeOfDay, width, height) {
    const time = Date.now() * 0.001;
    const sunPos = getSunPosition(timeOfDay, width, height);
    const sunX = sunPos.x;
    const sunY = sunPos.y;

    if (timeOfDay.type === 'day' || timeOfDay.type === 'sunrise' || timeOfDay.type === 'sunset') {
      this.drawSun(sunX, sunY, time);

      // Sunrise/sunset horizon reflection
      if (timeOfDay.type === 'sunrise' || timeOfDay.type === 'sunset') {
        this.drawHorizonReflection(sunX, sunY, height, time);
      }
    } else if (timeOfDay.type === 'night') {
      this.drawNightSky(width, height, time);
    }

    this.drawClouds(time, width, height, 0.3);
  }

  /**
   * Draw the sun with halos
   * @param {number} sunX - Sun X position
   * @param {number} sunY - Sun Y position
   * @param {number} time - Animation time
   */
  drawSun(sunX, sunY, time) {
    const sunRadius = 48 + Math.sin(time * 0.15) * 1.5;

    // Outer halo
    const outerHalo = this.ctx.createRadialGradient(
      sunX, sunY, sunRadius * 0.3,
      sunX, sunY, sunRadius * 3.5
    );
    outerHalo.addColorStop(0, 'rgba(255, 248, 230, 0.25)');
    outerHalo.addColorStop(0.15, 'rgba(255, 240, 200, 0.2)');
    outerHalo.addColorStop(0.3, 'rgba(255, 230, 170, 0.15)');
    outerHalo.addColorStop(0.5, 'rgba(255, 220, 140, 0.1)');
    outerHalo.addColorStop(0.7, 'rgba(255, 210, 120, 0.06)');
    outerHalo.addColorStop(0.85, 'rgba(255, 200, 100, 0.03)');
    outerHalo.addColorStop(1, 'rgba(255, 190, 90, 0)');
    this.ctx.fillStyle = outerHalo;
    this.ctx.beginPath();
    this.ctx.arc(sunX, sunY, sunRadius * 3.5, 0, Math.PI * 2);
    this.ctx.fill();

    // Middle halo
    const midHalo = this.ctx.createRadialGradient(
      sunX, sunY, sunRadius * 0.5,
      sunX, sunY, sunRadius * 2.2
    );
    midHalo.addColorStop(0, 'rgba(255, 250, 220, 0.35)');
    midHalo.addColorStop(0.3, 'rgba(255, 240, 190, 0.25)');
    midHalo.addColorStop(0.6, 'rgba(255, 230, 160, 0.15)');
    midHalo.addColorStop(0.85, 'rgba(255, 220, 140, 0.08)');
    midHalo.addColorStop(1, 'rgba(255, 210, 120, 0)');
    this.ctx.fillStyle = midHalo;
    this.ctx.beginPath();
    this.ctx.arc(sunX, sunY, sunRadius * 2.2, 0, Math.PI * 2);
    this.ctx.fill();

    // Inner halo
    const innerHalo = this.ctx.createRadialGradient(
      sunX, sunY, sunRadius * 0.6,
      sunX, sunY, sunRadius * 1.6
    );
    innerHalo.addColorStop(0, 'rgba(255, 252, 240, 0.5)');
    innerHalo.addColorStop(0.4, 'rgba(255, 245, 210, 0.35)');
    innerHalo.addColorStop(0.7, 'rgba(255, 235, 180, 0.2)');
    innerHalo.addColorStop(1, 'rgba(255, 225, 150, 0)');
    this.ctx.fillStyle = innerHalo;
    this.ctx.beginPath();
    this.ctx.arc(sunX, sunY, sunRadius * 1.6, 0, Math.PI * 2);
    this.ctx.fill();

    // Main sun disk
    const sunGradient = this.ctx.createRadialGradient(
      sunX - sunRadius * 0.1, sunY - sunRadius * 0.1, 0,
      sunX, sunY, sunRadius
    );
    sunGradient.addColorStop(0, '#FFFEF5');
    sunGradient.addColorStop(0.15, '#FFF9E6');
    sunGradient.addColorStop(0.3, '#FFF4D6');
    sunGradient.addColorStop(0.5, '#FFEDC0');
    sunGradient.addColorStop(0.7, '#FFE4A8');
    sunGradient.addColorStop(0.85, '#FFDC95');
    sunGradient.addColorStop(1, '#FFD37F');

    this.ctx.fillStyle = sunGradient;
    this.ctx.beginPath();
    this.ctx.arc(sunX, sunY, sunRadius, 0, Math.PI * 2);
    this.ctx.fill();
  }

  /**
   * Draw horizon reflection for sunrise/sunset
   * @param {number} sunX - Sun X position
   * @param {number} sunY - Sun Y position
   * @param {number} height - Canvas height
   * @param {number} time - Animation time
   */
  drawHorizonReflection(sunX, sunY, height, time) {
    const sunRadius = 48 + Math.sin(time * 0.15) * 1.5;
    const horizonY = height * 0.85;

    if (sunY >= horizonY - 50) {
      const reflectionAlpha = Math.max(0, (horizonY - sunY) / 50) * 0.3;
      this.ctx.fillStyle = `rgba(255, 140, 0, ${reflectionAlpha})`;
      this.ctx.beginPath();
      this.ctx.ellipse(sunX, horizonY, sunRadius * 1.5, sunRadius * 0.5, 0, 0, Math.PI * 2);
      this.ctx.fill();
    }
  }

  /**
   * Draw night sky with stars and moon
   * @param {number} width - Canvas width
   * @param {number} height - Canvas height
   * @param {number} time - Animation time
   */
  drawNightSky(width, height, time) {
    // Stars
    this.ctx.fillStyle = '#FFFFFF';
    for (let i = 0; i < 20; i++) {
      const x = (width * 0.2 + i * 47) % width;
      const y = (height * 0.2 + i * 23) % (height * 0.6);
      const twinkle = Math.sin(time * 0.8 + i) * 0.5 + 0.5;
      this.ctx.globalAlpha = twinkle * 0.8;
      this.ctx.beginPath();
      this.ctx.arc(x, y, 1.5, 0, Math.PI * 2);
      this.ctx.fill();
    }

    // Moon
    const moonX = width * 0.75;
    const moonY = height * 0.3;
    this.ctx.globalAlpha = 0.9;
    this.ctx.fillStyle = '#F0F0F0';
    this.ctx.beginPath();
    this.ctx.arc(moonX, moonY, 25, 0, Math.PI * 2);
    this.ctx.fill();

    // Moon crescent shadow
    this.ctx.fillStyle = '#1a1a2e';
    this.ctx.beginPath();
    this.ctx.arc(moonX - 8, moonY - 5, 22, 0, Math.PI * 2);
    this.ctx.fill();

    this.ctx.globalAlpha = 1;
  }
}
