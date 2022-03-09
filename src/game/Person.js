import GameObject from './GameObject';

export default class Person extends GameObject {
  constructor(config) {
    super(config);
    this.movingProgressRemaining = 0;
    this.isPlayerControlled = config.isPlayerControlled || false;
    this.directionUpdate = {
      up: ['y', -1],
      down: ['y', 1],
      left: ['x', -1],
      right: ['x', 1],
    };
  }

  update(state) {
    if (this.movingProgressRemaining > 0) {
      this.updatePosition();
    } else {
      if (this.isPlayerControlled && state.direction) {
        this.startBehavior(state, {
          type: 'walk',
          direction: state.direction,
        });
      }
      this.updateSprite(state);
    }
  }

  startBehavior(state, behavior) {
    this.direction = state.direction;
    if (behavior.type === 'walk') {
      const taken = state.map.isSpaceTaken(this.x, this.y, this.direction);

      if (taken) return;

      state.map.moveWall(this.x, this.y, this.direction);
      this.movingProgressRemaining = 16;
    }
  }

  updatePosition() {
    const [property, change] = this.directionUpdate[this.direction];
    this[property] += change;
    this.movingProgressRemaining -= 1;
  }

  updateSprite() {
    if (this.movingProgressRemaining > 0) {
      this.sprite.setAnimation(`walk-${this.direction}`);
      return;
    }
    this.sprite.setAnimation(`idle-${this.direction}`);
  }
}
