/**
 * Generates a random integer between the specified minimum and maximum values, inclusive.
 *
 * The function ensures that the minimum value is rounded up and the maximum value is rounded down
 * before generating the random number. This guarantees that the result is always an integer within
 * the specified range.
 *
 * @param min - The minimum value (inclusive).
 * @param max - The maximum value (inclusive).
 * @returns A random integer between `min` and `max`.
 *
 * @remarks
 * This function is useful for scenarios where you need a random number within a specific range,
 * such as games or simulations.
 *
 * @example
 * ```typescript
 * const random = getRandomNumber(1, 10);
 * console.log(random); // Outputs a random number between 1 and 10.
 * ```
 */
export function getRandomNumber(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
