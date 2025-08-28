import { useContext } from 'react';
import { GameContext } from '../context/GameContext';

const useGame = () => {
  const context = useContext(GameContext);

  if (context === undefined) {
    throw new Error('usePokemon must be used within a PokemonProvider');
  }

  return context;
};

export default useGame;
