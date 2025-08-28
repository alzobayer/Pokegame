import type { Generation, GenerationName } from '../interfaces/Generation';
import type { PokemonRange } from '../interfaces/Pokemon';
import { CommonService } from './Common.Service';

const POKEMON_GENERATIONS = 'https://pokeapi.co/api/v2/generation';

interface data {
  names: { language: { name: string }; name: string }[];
  pokemon_species: { name: string; url: string }[];
}

const extractPokemonId = (url: string): number => {
  const parts = url.split('/').filter(Boolean);
  return parseInt(parts[parts.length - 1], 10);
};

const mapNames = (names: GenerationName[]) => {
  return names.map((n) => ({
    language: { name: n.language.name },
    name: n.name,
  }));
};

const calculatePokemonRange = (pokemonSpecies: { name: string; url: string }[]): PokemonRange => {
  const allIds = pokemonSpecies.map((p) => extractPokemonId(p.url));

  return {
    firstPokemonId: Math.min(...allIds),
    lastPokemonId: Math.max(...allIds),
  };
};

const getGeneration = async (id: string): Promise<Generation> => {
  const data = await CommonService.fetchData<data>(`${POKEMON_GENERATIONS}/${id}`);

  const range = calculatePokemonRange(data.pokemon_species);
  return {
    names: mapNames(data.names),
    range,
  };
};

export const GenerationService = {
  getGeneration,
};
