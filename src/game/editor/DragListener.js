import utils from '../../utils';

export default class DragListener {
  constructor(config) {
    console.log(config);
    this.canvas = config.canvas;
    this.ctx = config.ctx;
    this.object = config.object;

    this.draggable = false;
  }

  mousedown(e) {
    const currentX = e.offsetX - (utils.withGrid(10.5) - utils.withGrid(5));
    const currentY = e.offsetY - (utils.withGrid(6) - utils.withGrid(5));
    console.log(this.object.x, currentX, currentY);
    if (
      currentX <= this.object.x + utils.withGrid(this.object.space.x)
        && currentX >= this.object.x
        && currentY <= this.object.y + utils.withGrid(this.object.space.y)
        && currentY >= this.object.y
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
  }
}
