import { createContext } from 'react';
import type { Pokemon, PokemonRange } from '../interfaces/Pokemon';

interface PokemonContext {
  pokemon: Pokemon | undefined;
  range: PokemonRange | undefined;
  isLoading: boolean;
  isAnswered: boolean;
  isCorrect: boolean;
  error: string | undefined;
  handleAnswer: (answer: string) => void;
  fetchPokemon: (r: PokemonRange) => Promise<void>;
  handleRangePokemon: (r: PokemonRange) => void;
}

export const PokemonContext = createContext<PokemonContext | undefined>(undefined);
