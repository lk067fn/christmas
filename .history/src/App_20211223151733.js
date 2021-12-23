import tree from './assets/tree.png';

import './App.css';

import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={tree} className="App-logo" alt="logo" />

        <h1>
          {/* <marquee behavior="scroll" width="100%" direction="right">Merry Christmas</marquee> */}

          <div className="bouncing-text">
            <div className="b">M</div>
            <div className="o">e</div>
            <div className="u">r</div>
            <div className="n">r</div>
            <div className="c">y</div>
            <div className="e"> </div>
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
