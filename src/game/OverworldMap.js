import utils from '../utils';
import OverworldEvent from './OverworldEvent';

export default class OverworldMap {
  constructor(config) {
    this.gameObjects = config.gameObjects;
    this.walls = config.walls || {
      default: 'default placeholder',
    };

    this.lowerImage = new Image();
    this.lowerImage.src = config.lowerSrc;

    this.upperImage = new Image();
    this.upperImage.src = config.upperSrc;

    this.isCutScenePlaying = false;
  }

  // eslint-disable-next-line no-unused-vars
  drawLowerImage(ctx, cameraPerson) {
    ctx.drawImage(
      this.lowerImage,
      utils.withGrid(10.5) - cameraPerson.x,
      utils.withGrid(6) - cameraPerson.y,
    );
  }

  // eslint-disable-next-line no-unused-vars
  drawUpperImage(ctx, cameraPerson) {
    ctx.drawImage(
      this.upperImage,
      utils.withGrid(10.5) - cameraPerson.x,
      utils.withGrid(6) - cameraPerson.y,
    );
  }

  isSpaceTaken(currentX, currentY, direction) {
    const { x, y } = utils.nextPosition(currentX, currentY, direction);
    return this.walls[`${x},${y}`] || false;
  }

  mountObjects() {
    Object.keys(this.gameObjects).forEach((key) => {
      const object = this.gameObjects[key];
      object.id = key;
      object.mount(this);
    });
  }

  async startCutScene(events) {
    this.isCutScenePlaying = true;

    // loop through the event cutscene
    for (let i = 0; i < events.length; i += 1) {
      const eventHandler = new OverworldEvent({
        event: events[i],
        map: this,
      });

      // eslint-disable-next-line no-await-in-loop
      await eventHandler.init();
    }

    this.isCutScenePlaying = false;

    Object.values(this.gameObjects).forEach((obj) => obj.playBehaviourEvent(this));
  }

  checkForActionCutscene() {
    const { hero } = this.gameObjects;
    const nextCoords = utils.nextPosition(hero.x, hero.y, hero.direction);
    const match = Object.values(this.gameObjects).find((object) => `${object.x},${object.y}` === `${nextCoords.x},${nextCoords.y}`);

    if (!this.isCutScenePlaying && match && match.talking.length) {
      this.startCutScene(match.talking[0].events);
    }
  }

  addWall(x, y) {
    this.walls[`${x},${y}`] = true;
  }

  removeWall(x, y) {
    delete this.walls[`${x},${y}`];
  }

  moveWall(wasX, wasY, direction) {
    this.removeWall(wasX, wasY);
    const { x, y } = utils.nextPosition(wasX, wasY, direction);
    this.addWall(x, y);
  }
}
