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
          { type: 'walk', direction: 'left' },
          { type: 'stand', direction: 'up', time: 800 },
          { type: 'walk', direction: 'up' },
          { type: 'walk', direction: 'right' },
          { type: 'walk', direction: 'down' },
        ],
      }),
    },
    walls: {
      [utils.asGridCoord(7, 6)]: true,
    },
  },
};

export default map;
