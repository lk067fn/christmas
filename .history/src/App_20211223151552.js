import tree from './assets/tree.png';

import './App.css';

import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={tree} className="App-logo" alt="logo" />

        <h1>
          <marquee behavior="scroll" width="100%" direction="right">Merry Christmas</marquee>

          <div className="bouncing-text">
            <div className="b">B</div>
            <div className="o">O</div>
            <div className="u">U</div>
            <div className="n">N</div>
            <div className="c">C</div>
            <div className="e">E</div>
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
