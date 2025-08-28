import { Link } from 'react-router';
import useGame from '../hooks/useGame';

const Header = () => {
  const { gameState, handleCloseGame } = useGame();

  const handleOnClick = () => {
    if (gameState) {
      handleCloseGame();
    }
  };

  const currentRoundText = gameState
    ? `Ronda ${gameState.currentRound} de ${gameState.maxRound}`
    : '¡Vamos a jugar!';

  return (
    <header className="bg-primary-page shadow-sm">
      <nav className="navbar navbar-expand-lg container py-2 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-3">
          <Link to="/" onClick={handleOnClick}>
            <img
              src="/pokeIcon.svg"
              alt="logo"
              className="img-fluid"
              style={{ width: '50px', height: '50px' }}
            />
          </Link>
          <h4 className="m-0 fw-bold text-dark d-flex align-items-center">
            <i className="bi bi-dice-3 me-2"></i>
            ¡Adivina el Pokémon!
          </h4>
        </div>
        <div className="d-flex align-items-center gap-4">
          <div className="text-dark text-center">
            <i className="bi bi-hourglass-split me-1"></i>
            <span className="fw-semibold">{currentRoundText}</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
