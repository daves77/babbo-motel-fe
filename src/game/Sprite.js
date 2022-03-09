import utils from '../utils';

export default class Sprite {
  constructor(config) {
    this.image = new Image();
    this.image.src = config.src;
    this.image.onload = () => {
      this.isLoaded = true;
    };

    // initiail state and animation config
    this.animations = config.animations || {
      'idle-down': [
        [3, 0],
      ],
      'idle-right': [
        [0, 0],
      ],
      'idle-left': [
        [2, 0],
      ],
      'idle-up': [
        [1, 0],
      ],
      'walk-down': [
        [18, 8], [19, 8], [20, 8], [21, 8], [22, 8], [23, 8],
      ],
      'walk-right': [
        [0, 8], [1, 8], [2, 8], [3, 8], [4, 8], [5, 8],
      ],
      'walk-left': [
        [12, 8], [13, 8], [14, 8], [15, 8], [16, 8], [17, 8],
      ],
      'walk-up': [
        [6, 8], [7, 8], [8, 8], [9, 8], [10, 8], [11, 8],
      ],
    };
    this.currentAnimation = config.currentAnimation || 'idle-down';
    this.currentAnimationFrame = 0;

    this.animationFrameLimit = config.animationFrameLimit || 8;
    this.animationFrameProgress = this.animationFrameLimit;

    this.gameObject = config.gameObject;
  }

  get frame() {
    return this.animations[this.currentAnimation][this.currentAnimationFrame];
  }

  setAnimation(animation) {
    if (this.currentAnimation !== animation) {
      this.currentAnimation = animation;
      this.currentAnimationFrame = 0;
      this.animationFrameProgress = this.animationFrameLimit;
    }
  }

  updateAnimationProgress() {
    if (this.animationFrameProgress > 0) {
      this.animationFrameProgress -= 1;
      return;
    }
    this.animationFrameProgress = this.animationFrameLimit;
    this.currentAnimationFrame += 1;
    if (this.frame === undefined) {
      this.currentAnimationFrame = 0;
    }
  }

  draw(ctx, cameraPerson) {
    const x = this.gameObject.x - 0 + utils.withGridWidth(10) - cameraPerson.x;
    const y = this.gameObject.y - 6 + utils.withGridHeight(10) - cameraPerson.y;

    const [frameX, frameY] = this.frame;
    if (this.isLoaded) {
      ctx.drawImage(
        this.image,
        utils.withGridWidth(frameX),
        utils.withGridHeight(frameY),
        16,
        32,
        x,
        y,
        16,
        32,
      );
    }
    this.updateAnimationProgress();
  }
}
