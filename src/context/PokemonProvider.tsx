import React, { useCallback, useState } from 'react';
import type { Pokemon, PokemonRange } from '../interfaces/Pokemon';
import { isPokemonNameValid } from '../libs/ValidateString';
import { PokemonService } from '../services/Pokemon.Service';
import { PokemonContext } from './PokemonContext';

interface Props {
  children?: React.ReactNode;
}

const PokemonProvider = ({ children }: Props) => {
  const [pokemon, setPokemon] = useState<Pokemon | undefined>(undefined);
  const [range, setRange] = useState<PokemonRange | undefined>(undefined);
  const [isLoading, setIsLoaing] = useState<boolean>(false);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const fetchPokemon = useCallback(async (r: PokemonRange) => {
    setIsLoaing(true);
    setError(undefined);
    setIsAnswered(false);
    setIsCorrect(false);
    try {
      const randomPokemon = await PokemonService.getRandomPokemon(r);
      setPokemon(randomPokemon);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsLoaing(false);
    }
  }, []);

  const handleAnswer = useCallback(
    (answer: string) => {
      if (!pokemon) return;
      const result = isPokemonNameValid(pokemon.name, answer);
      setIsCorrect(result);
      setIsAnswered(true);
    },
    [pokemon]
  );

  const handleRangePokemon = (r: PokemonRange) => {
    setRange(r);
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemon,
        range,
        isLoading,
        isAnswered,
        isCorrect,
        error,
        handleAnswer,
        fetchPokemon,
        handleRangePokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
