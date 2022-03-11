import images from '../../assets';
// import CharacterObject from './CharacterObject';
import utils from '../../utils';
import Person from '../Person';
import Furniture from './Furniture';

const map = {
  EditorRoom: {
    lowerSrc: images.Test,
    upperSrc: images.test2,
    gameObjects: {
      person: {
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
      furniture: {

        table: new Furniture({
          x: utils.withGrid(7),
          y: utils.withGrid(8),
          src: images.General,
          animations: {
            'idle-down': [
              [2, 15],
            ],
          },
          dimensions: { x: 2, y: 2 },
          space: { x: 2, y: 1 },
        }),
        chair: new Furniture({
          x: utils.withGrid(6),
          y: utils.withGrid(8),
          src: images.General,
          animations: {
            'idle-down': [
              [4, 11],
            ],
          },
        }),
      },

    },
    walls: {
      [utils.asGridCoord(7, 6)]: true,
    },
  },
};

export default map;
