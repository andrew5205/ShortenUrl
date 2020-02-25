import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ShortenURL from './components/ShortenURL';
import UrlsDisplay from './components/UrlsDisplay';

import {Router, Redirect} from '@reach/router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <ShortenURL path="urls"/>
          <UrlsDisplay path="urls/all"/>
          <Redirect from='/' to="urls" noThrow/>

        </Router>
      </header>
    </div>

  );
}

export default App;
