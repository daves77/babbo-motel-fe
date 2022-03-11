import images from '../assets';
// import GameObject from './GameObject';
import utils from '../utils';
import Person from './Person';

const map = {
  DemoRoom: {
    lowerSrc: images.Test,
    upperSrc: images.test2,
    gameObjects: {
      hero: new Person({
        x: utils.withGrid(4),
        y: utils.withGrid(3),
        src: images.char,
        isPlayerControlled: true,
      }),
      npc1: new Person({
        x: utils.withGrid(5),
        y: utils.withGrid(6),
        src: images.char,
        behaviourLoop: [
          { type: 'stand', direction: 'up', time: 800 },
          { type: 'stand', direction: 'down', time: 800 },
        ],
        talking: [
          {
            events: [
              { type: 'textMessage', text: 'go away !', faceHero: 'npc1' },
              { type: 'textMessage', text: 'im buys' },
            ],
          },
        ],
      }),
    },
    walls: {
      [utils.asGridCoord(7, 6)]: true,
    },
  },
  EditorRoom: {
    lowerSrc: images.Test,
    upperSrc: images.test2,
    gameObjects: {
      hero: new Person({
        x: utils.withGrid(4),
        y: utils.withGrid(3),
        src: images.char,
        isPlayerControlled: true,
      }),
      npc1: new Person({
        x: utils.withGrid(5),
        y: utils.withGrid(6),
        src: images.char,
        behaviourLoop: [
          { type: 'stand', direction: 'up', time: 800 },
          { type: 'stand', direction: 'down', time: 800 },
        ],
        talking: [
          {
            events: [
              { type: 'textMessage', text: 'go away !', faceHero: 'npc1' },
              { type: 'textMessage', text: 'im buys' },
            ],
          },
        ],
      }),
    },
    walls: {
      [utils.asGridCoord(7, 6)]: true,
    },
  },
};

export default map;
