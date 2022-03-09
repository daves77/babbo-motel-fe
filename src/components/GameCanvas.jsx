import React, { useRef, useEffect } from 'react';
import Overworld from '../game/Overworld';
import images from '../assets';

export default function GameCanvas() {
  const canvasRef = useRef();

  useEffect(() => {
    const overworld = new Overworld({
      canvas: canvasRef.current,
      images,
    });
    overworld.init();
  });

  return (
    <div className="h-[198px] w-[352px] relative outline-dotted outline-1 outline-gray-600 m-auto mt-4 scale-[2] translate-y-2/4">
      <canvas ref={canvasRef} height="198px" width="352" style={{ imageRendering: 'pixelated' }} />
    </div>
  );
}
