import utils from '../utils';

export default class OverworldMap {
  constructor(config) {
    this.gameObjects = config.gameObjects;

    this.lowerImage = new Image();
    this.lowerImage.src = config.lowerSrc;

    this.upperImage = new Image();
    this.upperImage.src = config.upperSrc;
  }

  drawLowerImage(ctx, cameraPerson) {
    ctx.drawImage(
      this.lowerImage,
      utils.withGridWidth(10) - cameraPerson.x,
      utils.withGridHeight(10) - cameraPerson.y,
    );
  }

  drawUpperImage(ctx, cameraPerson) {
    ctx.drawImage(
      this.upperImage,
      utils.withGridWidth(10) - cameraPerson.x,
      utils.withGridHeight(10) - cameraPerson.y,
    );
  }
}
