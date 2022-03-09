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

      const cameraPerson = this.map.gameObjects.hero;

      Object.values(this.map.gameObjects).forEach((obj) => {
        obj.update({
          direction: this.directionInput.direction,
          map: this.map,
        });
      });

      // draw map
      this.map.drawLowerImage(this.ctx, cameraPerson);
      this.map.drawUpperImage(this.ctx, cameraPerson);

      // Draw game objects
      Object.values(this.map.gameObjects).forEach((obj) => {
        obj.sprite.draw(this.ctx, cameraPerson);
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

    this.map.mountObjects();

    this.directionInput = new DirectionInput();
    this.directionInput.init();

    this.startGameLoop();
  }
}
