import './App.css';
import requests from './requests';
import Row from './Row';
import React from 'react';
import Banner from './Banner';
import Nav from './Nav';
function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner />
      <Row 
        title="NETFLIX ORIGINAL" 
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Horror Now" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Now" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries Now" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
