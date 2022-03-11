import GameObject from '../GameObject';
import Sprite from '../Sprite';

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

  mount(map) {
    console.log('mounts');
    // TODO: needa loop through the dimensions

    map.addWall(this.x, this.y);
  }

  draw() {

  }
}
