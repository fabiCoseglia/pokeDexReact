import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './pages/Home';
import { DetailPokemon } from './pages/DetailPokemon';
import PokemonContextProvider from './contexts/PokemonContext';

function App() {
  return (
    <Router>
      <PokemonContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<DetailPokemon />} />
      </Routes>
      </PokemonContextProvider>
    </Router>
  );
}

export default App;
