import tree from './assets/tree.png';

import './App.css';

import React, {useEffect, useState} from 'react';

import Footer from './Footer';

import Song from './assets/jingleBellRock.mp3'

import ReactAudioPlayer from 'react-audio-player';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  let audio = new Audio(Song)


  const start = () => {
    // audio.play()
    alert(isPlaying)
    if (isPlaying) {
      console.log("pausing")
      audio.pause()
      setIsPlaying(false)
    }
    else { 
      console.log("playing")
      audio.play()
      setIsPlaying(true)

    }
    // if (!isPlaying) {
    //   audio.play()
    //   setIsPlaying(false)
    // }
    // else { 
    //   audio.pause();
    //   setIsPlaying(true)
    //   alert("aa")
    // }

    


  }




  return (
    
    <div className="App">

      <header className="App-header">
        <img src={tree} className="App-logo" alt="logo" />

        
        <button className="play" onClick={() => {start()} }>Touch me 🙂</button>

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
