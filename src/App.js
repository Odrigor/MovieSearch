import './App.css';
import Title from './components/Title'
import 'bulma/css/bulma.css'
import Searchform from './components/Searchform'

import React, { useState } from 'react';

function App() {

  const [results , setResults] = useState([]);
  
  const _handleResults=(results)=>{
    setResults({results})
  }

  const _renderResults=(r)=>{
    const {results} = r;
    return results.map(movie => {
      return <p key={movie.imdbID}>{movie.Title}</p>
    })
  }

  return (
    <div className="App">
      <Title>Movie Searcher</Title>
      <div className="Searchform-wrapper">
      <Searchform onResults={_handleResults}/>
      </div>
      {results.length === 0 ? <p>sin resultados</p> : _renderResults(results) }
    </div>
  );
}

export default App;
