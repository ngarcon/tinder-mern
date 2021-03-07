import './App.css';
import {Header} from "./App/Header";

import {TinderCards} from './App/TinderCards';

import {SwipeOptions} from './App/SwipeOptions';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header/>
      {/* Photo */}
      <TinderCards/>
      {/* Button */}
      <SwipeOptions/>
    </div>
    );
  }
  
  export default App;
  