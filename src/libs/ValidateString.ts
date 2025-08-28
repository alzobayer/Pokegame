/**
 * Determines if the given user input matches the specified Pokémon name after normalization.
 *
 * This function normalizes both the Pokémon name and the user input using the `normalizePokemonName`
 * function and then compares them for equality.
 *
 * @param pokemonName - The official name of the Pokémon to validate against.
 * @param userInput - The user-provided input to compare with the Pokémon name.
 * @returns `true` if the normalized Pokémon name matches the normalized user input, otherwise `false`.
 *
 * @inspiredBy Bluuweb
 */
import { normalizePokemonName } from './NormalizateString';

export const isPokemonNameValid = (pokemonName: string, userInput: string): boolean => {
  const normalizedPokemonName = normalizePokemonName(pokemonName);
  const normalizedUserInput = normalizePokemonName(userInput);

  return normalizedPokemonName === normalizedUserInput;
};
