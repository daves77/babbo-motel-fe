import OverworldMap from './OverworldMap';
import map from './config';
import DirectionInput from './DirectionInput';

export default class Overworld {
  constructor(config) {
    this.images = config.images;
    this.canvas = config.canvas;
    this.ctx = this.canvas.getContext('2d');
  }

  startGameLoop() {
    const step = () => {
      // clear canvas
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // draw map
      this.map.drawLowerImage(this.ctx);
      this.map.drawUpperImage(this.ctx);

      // Draw game objects
      Object.values(this.map.gameObjects).forEach((obj) => {
        // obj.x += 1;
        obj.update({
          direction: this.directionInput.direction,
        });
        obj.sprite.draw(this.ctx);
      });

      requestAnimationFrame(() => {
        step();
      });
    };

    step();
  }

  init() {
    // loading image base
    this.map = new OverworldMap({
      lowerSrc: map.DemoRoom.lowerSrc,
      upperSrc: map.DemoRoom.upperSrc,
      gameObjects: map.DemoRoom.gameObjects,
    });

    this.directionInput = new DirectionInput();
    this.directionInput.init();

    this.startGameLoop();
  }
}
