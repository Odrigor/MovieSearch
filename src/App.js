import './App.css';
import Title from './components/Title'
import 'bulma/css/bulma.css'
import Searchform from './components/Searchform'

function App() {
  return (
    <div className="App">
      <Title>Movie Searcher</Title>
      <div className="Searchform-wrapper">
      <Searchform/>
      </div>
    </div>
  );
}

export default App;
