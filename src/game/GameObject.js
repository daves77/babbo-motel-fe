export default class GameObject {
  constructor(config) {
    this.id = null;
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.direction = config.direction || 'down';
    this.type = config.type || 'person';
  }

  mount(map) {
    map.addWall(this.x, this.y);
  }
}
