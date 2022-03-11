import utils from '../../utils';

export default class DragListener {
  constructor(config) {
    console.log(config);
    this.overworld = config.overworld;
    this.canvas = config.canvas;
    this.ctx = config.ctx;
    this.object = config.object;

    this.draggable = false;
    this.currentX = 0;
    this.currentY = 0;
  }

  mousedown(e) {
    this.currentX = e.offsetX - (utils.withGrid(10.5) - utils.withGrid(5));
    this.currentY = e.offsetY - (utils.withGrid(6) - utils.withGrid(5));
    if (
      this.currentX <= this.object.x + utils.withGrid(this.object.space.x)
        && this.currentX >= this.object.x
        && this.currentY <= this.object.y + utils.withGrid(this.object.space.y)
        && this.currentY >= this.object.y
    ) {
      this.draggable = true;
      console.log('clicked img');
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
        this.currentX = e.offsetX - (utils.withGrid(10.5) - utils.withGrid(5));
        this.currentY = e.offsetY - (utils.withGrid(6) - utils.withGrid(5));

        // util to snap to closest 16px grid

        // update furniture position
        this.object.x = this.currentX - (this.currentX % 16);
        this.object.y = this.currentY - (this.currentY % 16);

        this.overworld.renderObjects();
      }
    };

    this.canvas.onmouseup = () => {
      this.draggable = false;
    };
  }
}
