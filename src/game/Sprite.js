export default class Sprite {
  constructor(config) {
    this.image = new Image();
    this.image.src = config.src;
    this.image.onload = () => {
      this.isLoaded = true;
    };

    // initiail state and animation config
    this.animations = config.animations || {
      idleDown: [
        [0, 0],
      ],
    };
    this.currentAnimation = config.currentAnimation || 'idleDown';
    this.currentAnimationFrame = 0;

    this.gameObject = config.gameObject;
  }

  draw(ctx) {
    const { x } = this.gameObject;
    const y = this.gameObject.y - 8;

    if (this.isLoaded) {
      ctx.drawImage(
        this.image,
        48,
        0,
        16,
        32,
        x,
        y,
        16,
        32,
      );
    }
  }
}
