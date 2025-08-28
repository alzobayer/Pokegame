export interface Pokemon {
  id: number;
  name: string;
  image: string; //sprites.other["official-artwork"].front_default
}

// range of pokemon for fetching
export interface PokemonRange {
  firstPokemonId: number;
  lastPokemonId: number; //data.pokemon_species.length
}
