import React, { useRef, useEffect } from 'react';
import Overworld from '../game/Overworld';
import GameObject from '../game/GameObject';
import images from '../assets';

export default function GameCanvas() {
  const canvasRef = useRef();

  useEffect(() => {
    const overworld = new Overworld({
      canvas: canvasRef.current,
      images,
    });
    overworld.init();

    const hero = new GameObject({
      x: 1,
      y: 4,
      src: images.char,
    });

    setTimeout(() => {
      hero.sprite.draw(overworld.ctx);
    }, 200);

    // overworld.startGameLoop();
  });

  return (
    <div className="h-[198px] w-[352px] relative outline-dotted outline-1 outline-gray-600 m-auto mt-4 scale-[2] translate-y-2/4">
      <canvas ref={canvasRef} width="352" height="198" style={{ imageRendering: 'pixelated' }} />
    </div>
  );
}
