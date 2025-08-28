import { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';

const usePokemon = () => {
  const context = useContext(PokemonContext);

  if (context === undefined) {
    throw new Error('usePokemon must be used within a PokemonProvider');
  }

  return context;
};

export default usePokemon;
