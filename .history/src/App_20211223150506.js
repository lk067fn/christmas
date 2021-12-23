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
        </h1>


      </header>
      <Footer/>
    </div>
    
  );
}

export default App;
