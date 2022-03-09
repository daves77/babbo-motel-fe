import Sprite from './Sprite';

export default class GameObject {
  constructor(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.direction = config.direction || 'down';
    this.sprite = new Sprite({
      gameObject: this,
      src: config.src || 'default image.png',
    });
  }

  mount(map) {
    this.isMounted = true;
    map.addWall(this.x, this.y);
  }

  // eslint-disable-next-line class-methods-use-this
  update() {

  }
}
