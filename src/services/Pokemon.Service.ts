import { getRandomNumber } from '../libs/RandomNumber';
import type { Pokemon, PokemonRange } from './../interfaces/Pokemon';
import { CommonService } from './Common.Service';

const POKEMON_API_URL = 'https://pokeapi.co/api/v2/pokemon';

interface data {
  id: number;
  name: string;
  sprites: { other: { 'official-artwork': { front_default: string } } };
}

const getRandomPokemon = async ({
  firstPokemonId,
  lastPokemonId,
}: PokemonRange): Promise<Pokemon> => {
  const ramdonId = getRandomNumber(firstPokemonId, lastPokemonId);
  const data = await CommonService.fetchData<data>(`${POKEMON_API_URL}/${ramdonId}`);

  return {
    id: data.id,
    name: data.name,
    image: data.sprites.other['official-artwork'].front_default,
  };
};
export const PokemonService = {
  getRandomPokemon,
};
