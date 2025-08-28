// This interface defines the structure of the GameState object,
// which keeps track of the game's state, including the maximum number of rounds,
// the current round, and counters for correct and incorrect answers.
export interface GameState {
  maxRound: number; // Maximum number of rounds in the game
  currentRound: number; // Current round number
  correctCounter: number; // Number of correct answers so far
  incorrectCounter: number; // Number of incorrect answers so far
}

export const GameIsWin = {
  Perfect: 'perfect',
  Win: 'win',
  Lose: 'lose',
  Worst: 'worst',
} as const;

export type GameIsWin = (typeof GameIsWin)[keyof typeof GameIsWin];
