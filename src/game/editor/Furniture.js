import GameObject from '../GameObject';
import Sprite from '../Sprite';
import DragListener from './DragListener';

export default class Furniture extends GameObject {
  constructor(config) {
    super(config);
    this.dimensions = config.dimensions || { x: 1, y: 2 };
    this.space = config.space || { x: 1, y: 1 };
    this.sprite = new Sprite({
      src: config.src,
      gameObject: this,
      dimensions: this.dimensions,
      animations: config.animations,
    });
  }

  mount(map, overworld, canvas, ctx) {
    console.log('mounts');
    // TODO: needa loop through the dimensions
    this.dragListener = new DragListener({
      overworld,
      canvas,
      ctx,
      object: this,
    });
    console.log(this.dragListener);
    this.dragListener.init();

    map.addWall(this.x, this.y);
  }

  draw() {

  }
}
