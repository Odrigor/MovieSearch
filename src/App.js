import './App.css';
import Title from './components/Title'
import 'bulma/css/bulma.css'
import Searchform from './components/Searchform'
import React, { useState } from 'react';
import MovieList from './components/MovieList';

function App() {

  const [results , setResults] = useState([]);
  
  const _handleResults=(results)=>{
    setResults({results})
  }



  return (
    <div className="App">
      <Title>Movie Searcher</Title>
      <div className="Searchform-wrapper">
      <Searchform onResults={_handleResults}/>
      </div>
      {results.length === 0 ? <p>sin resultados</p> : <MovieList movies={results}></MovieList> }
    </div>
  );
}

export default App;
