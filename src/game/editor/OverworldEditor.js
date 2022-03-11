import Overworld from '../Overworld';
import OverworldMapEditor from './OverworldMapEditor';
import map from '../config';

export default class OverworldEditor extends Overworld {
  constructor(config) {
    super(config);
    this.placeholder = true;
  }

  startGameLoop() {
    const step = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      this.map.drawLowerImage(this.ctx);

      requestAnimationFrame(() => {
        step();
      });
    };

    step();
  }

  init() {
    this.map = new OverworldMapEditor({
      lowerSrc: map.EditorRoom.lowerSrc,
      gameObjects: map.EditorRoom.gameObjects,
    });

    this.startGameLoop();

    document.addEventListener('mousemove', (e) => {
      console.log(e);
    });
  }
}
