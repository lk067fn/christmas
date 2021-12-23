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
            <div className="1">M</div>
            <div className="2">e</div>
            <div className="3">r</div>
            <div className="4">r</div>
            <div className="5">y </div>
            <div className="6"> C</div>
            <div className="7">h</div>
            <div className="8">r</div>
            <div className="9">i</div>
            <div className="10">s</div>
            <div className="11">t</div>
            <div className="12">m</div>
            <div className="13">a</div>
            <div className="14">s</div>
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
