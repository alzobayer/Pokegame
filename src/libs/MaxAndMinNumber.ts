/**
 * Finds the maximum and minimum numbers in an array of numbers.
 * @param numbers - An array of numbers to evaluate.
 * @returns An object containing the maximum and minimum numbers.
 * @throws Will throw an error if the array is empty.
 */

export const findMaxAndMin = (numbers: number[]): { max: number; min: number } => {
  if (numbers.length === 0) {
    throw new Error('The array must contain at least one number.');
  }
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);
  return { max, min };
};
