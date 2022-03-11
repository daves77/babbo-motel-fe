import React, { useRef, useEffect } from 'react';

import OverworldEditor from '../game/OverworldEditor';
import images from '../assets';

export default function GameEditor() {
  const canvasRef = useRef();

  useEffect(() => {
    const overworldEditor = new OverworldEditor({
      canvas: canvasRef.current,
      images,
    });
    overworldEditor.init();
  });

  return (
    <div className="h-[198px] w-[352px] relative outline-dotted outline-1 outline-gray-600 m-auto mt-4 scale-[2] translate-y-2/4">
      <canvas ref={canvasRef} height="198px" width="352" style={{ imageRendering: 'pixelated' }} />
    </div>
  );
}
