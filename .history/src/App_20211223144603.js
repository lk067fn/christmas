import tree from './assets/tree.png';
import './App.css';

import Footer from './Footer';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={tree} className="App-logo" alt="logo" />
        {/* <h1>
  <span>a</span>
  <span>r</span>
  <span>l</span>
  <span>i</span>
  <span>n</span>
  <span>a</span>
</br>
  <span>d</span>
  <span>e</span>
  <span>s</span>
  <span>i</span>
  <span>g</span>
  <span>n</span>
</h1> */}
        <h1>
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
