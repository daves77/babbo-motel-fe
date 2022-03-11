import images from '../../assets';
// import CharacterObject from './CharacterObject';
import utils from '../../utils';
import Person from '../Person';
// import Furniture from './Furniture';

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

      // table: new Furniture({
      //   x: utils.withGrid(5),
      //   y: utils.withGrid(6),
      //   src: images.General,
      //   animations: {
      //     'idle-down': [
      //       [4, 11],
      //     ],
      //   },
      // }),

    },
    walls: {
      [utils.asGridCoord(7, 6)]: true,
    },
  },
};

export default map;
