import React from 'react';
import { Routes, Route } from 'react-router-dom';

import GameCanvas from './components/GameCanvas';
import GameEditor from './components/GameEditor';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<GameCanvas />} />
        <Route path="/editor" element={<GameEditor />} />
      </Routes>

    </div>
  );
}

export default App;
