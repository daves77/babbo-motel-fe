import Sprite from './Sprite';
import OverworldEvent from './OverworldEvent';

export default class GameObject {
  constructor(config) {
    this.id = null;
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.direction = config.direction || 'down';
    this.sprite = new Sprite({
      gameObject: this,
      src: config.src || 'default image.png',
    });

    this.behaviourLoop = config.behaviourLoop || [];
    this.behaviourLoopFrame = 0;
  }

  mount(map) {
    this.isMounted = true;
    map.addWall(this.x, this.y);

    setTimeout(() => {
      this.playBehaviourEvent(map);
    }, 10);
  }

  async playBehaviourEvent(map) {
    if (map.isCutScenePlaying || this.behaviourLoop.length === 0) {
      return;
    }

    // setting event
    const eventConfig = this.behaviourLoop[this.behaviourLoopFrame];
    eventConfig.who = this.id;

    // create event instance
    const eventHandler = new OverworldEvent({ map, event: eventConfig });
    await eventHandler.init();

    // set next event to fire
    this.behaviourLoopFrame += 1;
    if (this.behaviourLoopFrame === this.behaviourLoop.length) this.behaviourLoopFrame = 0;

    // recursive
    this.playBehaviourEvent(map);
  }

  // eslint-disable-next-line class-methods-use-this
  update() {

  }
}
