import tree from './assets/tree.png';

import './App.css';

import React, {useEffect, useState} from 'react';

import Footer from './Footer';

import Song from './assets/jingleBellRock.mp3'

function App() {
 
  // const audioTune = new Audio('./assets/jingleBellRock.mp3')
  // const [playInLoop, setPlayInLoop] = useState(true);
  
  // useEffect(() => {
  //   audioTune.load();
  // }, [])
  
  // useEffect(() => {
  //   audioTune.loop = playInLoop;
  // }, [playInLoop])
  
  // const playSound = () => {
  //   audioTune.play();
  // }

  let audio = new Audio("./assets/jingleBellRock.mp3")

  const start = () => {
    audio.play()
  }

  return (
    
    <div className="App">
    {/* <audio ref="audio_tag" src="./assets/sounds/jingleBellRock.mp3" controls autoPlay/> */}
    {/* <audio
      autoPlay={true}
      controls={true}>
      <source type="audio/mp3" src="./assets/jingleBellRock.mp3" />
    </audio> */}
        <audio
          controls={true}
          src={require("./assets/jingleBellRock.mp3")}
          type="audio/mp3"
        />

      <header className="App-header">
        <img src={tree} className="App-logo" alt="logo" />

        <h1>
          {/* <marquee behavior="scroll" width="100%" direction="right">Merry Christmas</marquee> */}

          <div className="bouncing-text">
            <div className="m">M</div>
            <div className="e">e</div>
            <div className="r">r</div>
            <div className="r2">r</div>
            <div className="y">y</div>
            <div className="e"> </div>
            <div className="c">C</div>
            <div className="h">h</div>
            <div className="r3">r</div>
            <div className="i">i</div>
            <div className="s">s</div>
            <div className="t">t</div>
            <div className="m2">m</div>
            <div className="a">a</div>
            <div className="s2">s</div>
            <div className="shadow"></div>
            <div className="shadow-two"></div>
          </div>
        </h1>


      </header>
      <Footer/>
    </div>
    
  );
}

export default App;
