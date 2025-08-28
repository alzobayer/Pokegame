import { useEffect, useState, type JSX } from 'react';
import ReactConfetti from 'react-confetti';
import { useNavigate } from 'react-router';
import { useWindowSize } from 'react-use';
import Loading from '../../components/Loading';
import useGame from '../../hooks/useGame';
import usePokemon from '../../hooks/usePokemon';
import type { GameIsWin } from '../../interfaces/Game';
import { GameService } from '../../services/Game.Service';

const LI_CLASS =
  'list-group-item list-group-item-action d-flex justify-content-between align-items-center';

const isWinMessage = new Map<GameIsWin, string>([
  ['perfect', '🌟 ¡Puntuación Perfecta! Alto ahi Profesor Oak'],
  ['win', '👏 ¡Bien hecho! Eres un maestro Pokémon'],
  ['lose', '😢 Mala suerte, inténtalo otra vez'],
  ['worst', '💀 ¡Oh no! Parece que no has salido de Pueblo Paleta'],
]);

const isWinIcon = new Map<GameIsWin, JSX.Element>([
  ['perfect', <i className="bi bi-patch-check-fill text-success fs-2 me-2"></i>],
  ['win', <i className="bi bi-emoji-smile-fill text-success fs-2 me-2"></i>],
  ['lose', <i className="bi bi-emoji-frown-fill text-warning fs-2 me-2"></i>],
  ['worst', <i className="bi bi-emoji-dizzy-fill text-danger fs-2 me-2"></i>],
]);

const PokeScorePage = () => {
  const [isWin, setIsWin] = useState<GameIsWin | undefined>(undefined);
  const { gameState, isGameEnd, handleGameStart, handleCloseGame } = useGame();
  const { range, fetchPokemon } = usePokemon();
  const { width, height } = useWindowSize();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isGameEnd || !gameState) return;
    setIsWin(GameService.isWin(gameState));
  }, [isGameEnd, gameState]);

  if (!gameState || !range || !isWin) return <Loading />;

  const { maxRound, correctCounter, incorrectCounter } = gameState;

  const handleRestartGame = () => {
    handleGameStart(maxRound);
    fetchPokemon(range);
    navigate('/game');
  };

  const handleReturnMenu = () => {
    handleCloseGame();
    navigate('/');
  };

  const items = [
    {
      label: 'Total Rounds',
      value: maxRound,
      className: `${LI_CLASS} list-group-item-secondary`,
    },
    {
      label: 'Correct Answers',
      value: correctCounter,
      className: `${LI_CLASS} list-group-item-success`,
    },
    {
      label: 'Incorrect Answers',
      value: incorrectCounter,
      className: `${LI_CLASS} list-group-item-danger`,
    },
  ];

  return (
    <>
      {(isWin === 'perfect' || isWin === 'win') && (
        <ReactConfetti width={width} height={height} numberOfPieces={300} recycle={false} />
      )}

      <div className="card container-sm my-5 border-0 bg-background">
        <div className="card-header text-center bg-primary-page text-dark rounded-top">
          <h1 className="mb-0 fw-bold">{isWinIcon.get(isWin)} Resumen de la Poke Puntuación</h1>
        </div>

        <div className="card-body text-center shadow-sm">
          <h2 className="mb-4">{isWinMessage.get(isWin)}</h2>
          <ul className="list-group list-group-flush mb-3">
            {items.map(({ label, value, className }, idx) => (
              <li key={idx} className={className}>
                <span>{label}</span>
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card-footer text-center bg-light rounded-bottom bg-background shadow-sm">
          <button className="btn btn-accent me-2" onClick={handleReturnMenu}>
            <i className="bi bi-box-arrow-left me-1"></i> Salir al Menu
          </button>
          <button className="btn btn-primary-page" onClick={handleRestartGame}>
            <i className="bi bi-arrow-clockwise me-1"></i> Jugar de nuevo
          </button>
        </div>
      </div>
    </>
  );
};

export default PokeScorePage;
