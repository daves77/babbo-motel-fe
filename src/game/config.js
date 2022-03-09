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
        x: utils.withGridWidth(1),
        y: utils.withGridHeight(4),
        src: images.char,
        isPlayerControlled: true,
      }),
      npc1: new Person({
        x: utils.withGridWidth(5),
        y: utils.withGridHeight(6),
        src: images.char,
      }),
    },
  },
};

export default map;
