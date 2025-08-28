/**
export const normalizePokemonName = (name: string): string => { ... }
 * A mapping of lowercase Roman numeral strings to their uppercase equivalents.
 * This object can be used to normalize or convert Roman numerals from lowercase to uppercase.
 */
export const romanNumerals: Record<string, string> = {
  i: 'I',
  ii: 'II',
  iii: 'III',
  iv: 'IV',
  v: 'V',
  vi: 'VI',
  vii: 'VII',
  viii: 'VIII',
  ix: 'IX',
  x: 'X',
};

/**
 * Formats a generation name by splitting it into parts, converting Roman numerals to uppercase,
 * and capitalizing the first letter of each part.
 * @param name - The generation name to format, typically in a hyphen-separated format.
 * @returns The formatted generation name with proper capitalization and Roman numeral conversion.
 */

export const formatedGenerationName = (generationName: string): string => {
  return generationName
    .split('-')
    .map(
      (part) => romanNumerals[part.toLowerCase()] || part.charAt(0).toUpperCase() + part.slice(1)
    )
    .join(' ');
};

/**
 * Normalizes a Pokémon name by converting it to lowercase, removing diacritics, trimming whitespace,
 * and removing any non-alphanumeric characters.
 * @param name - The Pokémon name to normalize.
 * @returns The normalized Pokémon name as a lowercase alphanumeric string.
 */

export const normalizePokemonName = (pokemonName: string): string => {
  return pokemonName
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '');
};
