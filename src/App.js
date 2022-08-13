import React from 'react';
import './assets/style.css';

import Header from './components/Header.js';
import Meme from './components/Meme.js';

function App() {
  return (
    <div className="App box-border">
      <Header />

      <div className="meme-container box-border w-full max-w-[860px] md:mx-auto">
        <Meme />
      </div>
    </div>
  );
}

export default App;
