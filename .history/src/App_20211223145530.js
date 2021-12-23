import tree from './assets/tree.png';
import './App.css';

import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={tree} className="App-logo" alt="logo" />

        <h1>
        <marquee behavior="scroll" direction="down">Order is active.</marquee>

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
