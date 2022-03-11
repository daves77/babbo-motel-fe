import images from '../../assets';
// import GameObject from './GameObject';
import utils from '../../utils';
import Person from '../Person';

const map = {
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

    },
    walls: {
      [utils.asGridCoord(7, 6)]: true,
    },
  },
};

export default map;
