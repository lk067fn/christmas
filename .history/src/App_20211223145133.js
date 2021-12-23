import tree from './assets/tree.png';
import './App.css';

import Footer from './Footer';

const myAnimationObj: ANIMATION_OBJ = {
  keyframes: [
    {
      keyframe: 0,
      transform: 'scale(120%)'
    },
    {
      keyframe: 44,
      transform: 'scale(100%)'
    },
    {
      keyframe: 100,
      transform: 'scale(120%)'
    }
  ]
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={tree} className="App-logo" alt="logo" />

        <h1>
        <Animation animations={myAnimationObj}>Animate me</Animation>
        <span>M</span>
        <span>M</span>
        <span>M</span>
        <span>M</span>

          Merry Christmas
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </h1>


      </header>
      <Footer/>
    </div>
    
  );
}

export default App;
