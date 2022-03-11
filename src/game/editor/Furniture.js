import GameObject from '../GameObject';
import Sprite from '../Sprite';

export default class Furniture extends GameObject {
  constructor(config) {
    super(config);
    this.dimensions = config.dimensions || null;
    this.sprite = new Sprite({
      src: config.src,
      gameObject: this,
    });
  }

  draw() {

  }
}
