import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Intro from './pages/Intro';
import Level1 from './pages/Level1';
import Level1Final from './pages/Level1Final';
import Level2 from './pages/Level2';
import Tutorial from './pages/Tutorial';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/intro">
            <Intro />
          </Route>
          <Route path="/level1">
            <Level1 />
          </Route>
          <Route path="/level1tutorial">
            <Tutorial text={
              <div>
                <h1>Caesar Cipher</h1>
                <h3>To encrypt To encrypt a Caesar Cipher, simply take the Caesar wheel, and choose a key from 1 to 26. Rotate the wheel a number of times equal to the key. Then, take each letter of the text you want to encrypt, find it on the inner wheel, and replace it with its corresponding letter on the outer wheel. To decrypt it, simply do the same process but in reverse!</h3>
              </div>
            }/>
          </Route>
          <Route path="/level1final">
            <Level1Final />
          </Route>
          <Route path="/level2">
            <Level2 />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          
        </Switch>
     
    </Router>
    </div>
  );
}





export default App;
