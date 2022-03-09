// import utils from '../utils';

export default class OverworldMap {
  constructor(config) {
    this.gameObjects = config.gameObjects;

    this.lowerImage = new Image();
    this.lowerImage.src = config.lowerSrc;

    this.upperImage = new Image();
    this.upperImage.src = config.upperSrc;
  }

  // eslint-disable-next-line no-unused-vars
  drawLowerImage(ctx, cameraPerson) {
    ctx.drawImage(
      this.lowerImage,
      // utils.withGrid(10) - cameraPerson.x,
      // utils.withGrid(10) - cameraPerson.y,
      0,
      0,
    );
  }

  // eslint-disable-next-line no-unused-vars
  drawUpperImage(ctx, cameraPerson) {
    ctx.drawImage(
      this.upperImage,
      // utils.withGrid(10) - cameraPerson.x,
      // utils.withGrid(10) - cameraPerson.y,
      0,

      0,
    );
  }
}
