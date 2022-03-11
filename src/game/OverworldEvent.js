import TextMessage from './TextMessage';
import utils from '../utils';

export default class OverworldEvent {
  constructor({ map, event }) {
    this.map = map;
    this.event = event;
  }

  stand(resolve) {
    const who = this.map.gameObjects.person[this.event.who];
    who.startBehavior({
      map: this.map,
    }, {
      type: 'stand',
      direction: this.event.direction,
      time: this.event.time,
    });

    const completeHandler = (e) => {
      if (e.detail.whoId === this.event.who) {
        document.removeEventListener('PersonStandComplete', completeHandler);
        resolve();
      }
    };

    document.addEventListener('PersonStandComplete', completeHandler);
  }

  walk(resolve) {
    const who = this.map.gameObjects.person[this.event.who];
    who.startBehavior({
      map: this.map,
    }, {
      type: 'walk',
      direction: this.event.direction,
      retry: true,
    });

    const completeHandler = (e) => {
      if (e.detail.whoId === this.event.who) {
        document.removeEventListener('PersonWalkingComplete', completeHandler);
        resolve();
      }
    };

    document.addEventListener('PersonWalkingComplete', completeHandler);
  }

  textMessage(resolve) {
    if (this.event.faceHero) {
      const obj = this.map.gameObjects.person[this.event.faceHero];
      obj.direction = utils.getOppositeDirection(this.map.gameObjects.person.hero.direction);
    }

    const message = new TextMessage({
      text: this.event.text,
      onComplete: () => resolve(),
    });
    message.init(this.event);
  }

  init() {
    return new Promise((resolve) => {
      // calling function from within class based on action type
      this[this.event.type](resolve);
    });
  }
}
