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
import Level2Final from './pages/Level2Final';
import Level3 from './pages/Level3';
import Level3Final from './pages/Level3Final';
import Final from './pages/Final';
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
                <h3>To encrypt a Caesar Cipher, simply take the Caesar wheel, and choose a key from 1 to 26. Rotate the wheel a number of times equal to the key. Then, take each letter of the text you want to encrypt, find it on the inner wheel, and replace it with its corresponding letter on the outer wheel. To decrypt it, simply do the same process but in reverse!</h3>
              </div>
            } nextLevel="/level1final"/>
          </Route>
          <Route path="/level1final">
            <Level1Final />
          </Route>
          <Route path="/level2">
            <Level2 />
          </Route>
          <Route path="/level2tutorial">
            <Tutorial text={
              <div>
                <h1>Key Cipher</h1>
                <h3>Like the Caesar Cipher, this cipher has a plain alphabet, and a cipher alphabet. However, this time, the key is a whole word! To create the cipher alphabet, start with the key, which cannot contain any repeating letters, then add the remaining letters in their usual order. To encrypt and decrypt, just switch back and forth between the plain and cipher alphabet, like you would in a Caesar Shift.</h3>
              </div>
            } nextLevel="/level2final"/>
          </Route>
          <Route path="/level2final">
            <Level2Final />
          </Route>
          <Route path="/level3">
            <Level3 />
          </Route>
          <Route path="/level3tutorial">
            <Tutorial text={
              <div>
                <h1>Vignere Cipher</h1>
                <h3>The Vignere Cipher also utilizes a key to encrypt the message. However, unlike the key cipher, the Vignere cipher does not have a single key alphabet. Instead, while encrypting, one matches the letters of the key with the letters of the plaintext, and picks out the row of the Vignere table that starts with the corresponding letter of the key, using that row as the key alphabet. To decrypt, do the same process. This cipher cannot be cracked with traditional frequency analysis, and because of this, it remained uncracked for 3 centuries after it was introduced.</h3>
              </div>
            } nextLevel="/level3final"/>
          </Route>
          <Route path="/level3final">
            <Level3Final />
          </Route>
          <Route path="/final">
            <Final />
          </Route>
          <Route path="/">
            <Intro />
          </Route>
          
        </Switch>
     
    </Router>
    </div>
  );
}





export default App;
