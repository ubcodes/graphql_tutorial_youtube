import logo from './logo.svg';
import './App.css';
import Languages from './pages/Languages';
import Search from './pages/Search';
import Language from './pages/Language';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route strict exact path='/' element={ <Languages />} />
      <Route strict exact path='/search' element={ <Search />} />
      <Route strict exact path='/:code' element={ <Language />} />
    </Routes>
    </div>
  );
}

export default App;
