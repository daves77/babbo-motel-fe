import utils from '../../utils';

export default class DragListener {
  constructor(config) {
    console.log(config);
    this.overworld = config.overworld;
    this.canvas = config.canvas;
    this.ctx = config.ctx;
    this.furniture = config.furniture;

    this.draggable = false;
    this.object = null;
  }

  mousedown(e) {
    const currentX = e.offsetX - (utils.withGrid(10.5) - utils.withGrid(5));
    const currentY = e.offsetY - (utils.withGrid(6) - utils.withGrid(5));

    const match = Object.values(this.furniture).find((obj) => currentX >= obj.x
        && currentX <= obj.x + utils.withGrid(obj.space.x)
        && currentY >= obj.y
        && currentY <= obj.y + utils.withGrid(obj.space.y));

    if (
      match
    ) {
      console.log(match);
      this.draggable = true;
      this.object = match;
    } else {
      console.log('didnt click');
    }
  }

  init() {
    this.canvas.onmousedown = (e) => {
      this.mousedown(e);
    };

    this.canvas.onmousemove = (e) => {
      if (this.draggable) {
        const currentX = e.offsetX - (utils.withGrid(10.5) - utils.withGrid(5));
        const currentY = e.offsetY - (utils.withGrid(6) - utils.withGrid(5));

        // util to snap to closest 16px grid

        // update furniture position
        this.object.x = currentX - (currentX % 16);
        this.object.y = currentY - (currentY % 16);

        this.overworld.renderObjects();
      }
    };

    this.canvas.onmouseup = () => {
      this.draggable = false;
      this.object = null;
    };
  }
}
