import './App.css';
import requests from './requests';
import Row from './Row';
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Let's build netfilx</h1>
      <Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
