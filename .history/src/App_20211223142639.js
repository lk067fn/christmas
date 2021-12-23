import logo from './logo.svg';
import './App.css';

import Footer from './Footer'
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Merry Christmas
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>


      </header>
    </div>
    
  );
}

export default App;
