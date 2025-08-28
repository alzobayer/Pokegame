import { createContext } from 'react';
import type { GameState } from '../interfaces/Game';

interface GameContext {
  gameState: GameState | undefined;
  isGameEnd: boolean;
  handleGameStart: (round: number) => void;
  handleNextStep: (wasCorrect: boolean) => void;
  handleCloseGame: () => void;
  handleIsGameEnd: () => void;
}

export const GameContext = createContext<GameContext | undefined>(undefined);
