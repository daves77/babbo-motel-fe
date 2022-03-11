import utils from '../../utils';
import Overworld from '../Overworld';
import OverworldMapEditor from './OverworldMapEditor';
import map from './config';
import DirectionInput from '../DirectionInput';

export default class OverworldEditor extends Overworld {
  constructor(config) {
    super(config);
    this.placeholder = true;
  }

  renderObjects() {
    const step = () => {
      console.log('called');
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      const centerPosition = { x: utils.withGrid(5), y: utils.withGrid(5) };

      this.map.drawLowerImage(this.ctx, centerPosition);

      const gameObjects = [
        ...Object.values(this.map.gameObjects.furniture),
      ];
      // Draw game objects
      // sorting objects based on their position on the y axis so that they appear layered
      gameObjects.sort((a, b) => a.y - b.y).forEach((obj) => {
        obj.sprite.draw(this.ctx, centerPosition);
      });
    };

    step();
  }

  init() {
    this.map = new OverworldMapEditor({
      lowerSrc: map.EditorRoom.lowerSrc,
      gameObjects: map.EditorRoom.gameObjects,
      walls: map.EditorRoom.walls,
    });

    console.log(this.canvas, this.ctx);
    this.map.mountObjects(this, this.canvas, this.ctx);

    this.directionInput = new DirectionInput();
    this.directionInput.init();

    setTimeout(() => {
      this.renderObjects();
    }, 100);
  }
}
