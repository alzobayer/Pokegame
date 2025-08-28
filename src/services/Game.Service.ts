import { GameIsWin, type GameState } from '../interfaces/Game';

const calculateNextGameState = (
  wasCorrect: boolean,
  gameState: GameState
): GameState | undefined => {
  if (!gameState) return undefined;

  const nextRound = gameState.currentRound + 1;
  const nextCorrect = wasCorrect ? gameState.correctCounter + 1 : gameState.correctCounter;
  const nextIncorrect = !wasCorrect ? gameState.incorrectCounter + 1 : gameState.incorrectCounter;
  const isEnd = nextRound > gameState.maxRound;

  return {
    ...gameState,
    currentRound: isEnd ? gameState.currentRound : nextRound,
    correctCounter: nextCorrect,
    incorrectCounter: nextIncorrect,
  };
};

const isGameEnd = (gameState: GameState) => {
  const isEnd = gameState.currentRound + 1 > gameState.maxRound;
  return isEnd;
};

const isWin = (gameState: GameState) => {
  const { maxRound, correctCounter, incorrectCounter } = gameState;
  const halfRounded = Math.ceil(maxRound / 2);

  return (
    (correctCounter === maxRound && GameIsWin.Perfect) ||
    (correctCounter >= halfRounded && GameIsWin.Win) ||
    ((correctCounter === 0 || incorrectCounter === maxRound) && GameIsWin.Worst) ||
    GameIsWin.Lose
  );
};

export const GameService = {
  calculateNextGameState,
  isGameEnd,
  isWin,
};
