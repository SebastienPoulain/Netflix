import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./request";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="Netflix"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row
        isLargeRow={false}
        title="Tendances"
        fetchUrl={requests.fetchTrending}
      />
      <Row
        isLargeRow={false}
        title="Mieux notés"
        fetchUrl={requests.fetchTopRated}
      />
      <Row
        isLargeRow={false}
        title="Action"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        isLargeRow={false}
        title="Comédie"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        isLargeRow={false}
        title="Horreur"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row
        isLargeRow={false}
        title="Romance"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row
        isLargeRow={false}
        title="Documentaire"
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
}

export default App;
