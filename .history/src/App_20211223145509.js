import tree from './assets/tree.png';
import './App.css';

import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={tree} className="App-logo" alt="logo" />

        <h1>
        <marquee width="60%" direction="right" height="100px">
This is a sample scrolling text that has scrolls texts to right.
</marquee>

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
