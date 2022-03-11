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
      ...utils.drawWallLineCoord([1, 2], [11, 2]),
      ...utils.drawWallLineCoord([0, 3], [0, 10]),
      ...utils.drawWallLineCoord([11, 3], [11, 10]),
    },
  },

};

export default map;
