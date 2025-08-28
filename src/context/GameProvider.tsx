import { useState } from 'react';
import type { GameState } from '../interfaces/Game';
import { GameService } from '../services/Game.Service';
import { GameContext } from './GameContext';

interface Props {
  children?: React.ReactNode;
}

const GameProvider = ({ children }: Props) => {
  const [gameState, setGameState] = useState<GameState | undefined>(undefined);
  const [isGameEnd, setIsGameEnd] = useState<boolean>(false);

  const handleGameStart = (round: number) => {
    setIsGameEnd(false);
    setGameState({
      maxRound: round,
      currentRound: 1,
      correctCounter: 0,
      incorrectCounter: 0,
    });
  };

  const handleIsGameEnd = () => {
    if (!gameState) {
      return;
    }
    const isEnd = GameService.isGameEnd(gameState);
    setIsGameEnd(isEnd);
  };

  const handleNextStep = (wasCorrect: boolean) => {
    if (!gameState) return;
    const nextState = GameService.calculateNextGameState(wasCorrect, gameState);
    if (nextState) {
      setGameState(nextState);
    }
  };

  const handleCloseGame = () => {
    if (!gameState) {
      return;
    }
    setGameState(undefined);
  };

  return (
    <GameContext.Provider
      value={{
        gameState,
        isGameEnd,
        handleGameStart,
        handleNextStep,
        handleCloseGame,
        handleIsGameEnd,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
