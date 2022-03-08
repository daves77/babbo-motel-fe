import images from '../assets';
import GameObject from './GameObject';

const map = {
  DemoRoom: {
    lowerSrc: images.Test,
    upperSrc: images.test2,
    gameObjects: {
      hero: new GameObject({
        x: 1,
        y: 4,
        src: images.char,
      }),
    },
  },
};

export default map;
