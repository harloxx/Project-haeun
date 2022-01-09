import './App.css';
import requests from './request';
import Row from './Row';

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
