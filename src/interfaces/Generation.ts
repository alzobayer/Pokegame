import type { PokemonRange } from './Pokemon';

/**
 * Represents a language object as defined in the Pokémon API.
 * This interface is used to describe the name of a language.
 */
export interface Language {
  name: string;
}

/**
 * Represents a name object as defined in the Pokémon API.
 * This interface is used to describe the name of a generation in a specific language.
 */

export interface GenerationName {
  language: Language; //data.names.language
  name: string;
}

/**
 * Represents a generation object as defined in the Pokémon API
 * and the first and last Id of Pokemon in this generation.
 * This interface is used to describe a specific generation of Pokémon.
 */
export interface Generation {
  names: GenerationName[]; //data.names
  range: PokemonRange;
}
