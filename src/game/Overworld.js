import OverworldMap from './OverworldMap';
import map from './config';
import DirectionInput from './DirectionInput';
import KeyPressListener from './KeypressListener';

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
      // sorting objects based on their position on the y axis so that they appear layered
      Object.values(this.map.gameObjects).sort((a, b) => a.y - b.y).forEach((obj) => {
        obj.sprite.draw(this.ctx, cameraPerson);
      });

      // causes the looping
      requestAnimationFrame(() => {
        step();
      });
    };

    step();
  }

  bindActionInput() {
    this.interactionHandler = new KeyPressListener('Enter', () => {
      this.map.checkForActionCutscene();
    });
  }

  init() {
    // loading image base
    console.log(map.DemoRoom.walls);
    this.map = new OverworldMap({
      lowerSrc: map.DemoRoom.lowerSrc,
      upperSrc: map.DemoRoom.upperSrc,
      walls: map.DemoRoom.walls,
      gameObjects: map.DemoRoom.gameObjects,
    });

    this.map.mountObjects();

    this.directionInput = new DirectionInput();
    this.directionInput.init();

    this.bindActionInput();

    this.startGameLoop();

    // this.map.startCutScene([
    //   { type: 'textMessage', text: 'this is a test' },
    //   // { who: 'hero', direction: 'down', type: 'walk' },
    //   // { who: 'hero', direction: 'down', type: 'walk' },
    //   // { who: 'hero', direction: 'down', type: 'walk' },
    //   // { who: 'hero', direction: 'down', type: 'walk' },
    //   // { who: 'npc1', direction: 'down', type: 'walk' },
    //   // { who: 'npc1', direction: 'down', type: 'walk' },

    // ]);
  }
}
