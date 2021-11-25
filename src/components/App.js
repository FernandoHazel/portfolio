import React from 'react'
import ReactPlayer from 'react-player'
import demoReel from '../resources/Demo_Reel.mp4'
import '../App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="video">
          <ReactPlayer url={demoReel}
          width='100%'
          height='100%'
          loop
          controls
          />
        </div>
      </header>
    </div>
  );
}

export default App;
