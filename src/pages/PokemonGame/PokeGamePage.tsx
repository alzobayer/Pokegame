import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import PokemonDispley from '../../components/PokemonGame/PokemonDispley';
import PokemonForm from '../../components/PokemonGame/PokemonForm';
import PokemonResult from '../../components/PokemonGame/PokemonResult';
import useGame from '../../hooks/useGame';
import usePokemon from '../../hooks/usePokemon';
import PokeScorePage from './PokeScorePage';

const PokeGamePage = () => {
  const { range, isAnswered, error } = usePokemon();
  const { isGameEnd, handleCloseGame } = useGame();
  const navigate = useNavigate();

  useEffect(() => {
    if (!range) {
      handleCloseGame();
      navigate('/');
    }
  }, [range, navigate, handleCloseGame]);

  if (error) {
    return (
      <div className="alert alert-danger text-center">
        <h1>
          <i className="bi bi-bug-fill me-2"></i>Error: {error}
        </h1>
        <Link className="btn btn-outline-info mt-3" to="/">
          <i className="bi bi-arrow-left me-1"></i>Volver al inicio
        </Link>
      </div>
    );
  }

  if (isGameEnd) {
    return <PokeScorePage />;
  }

  return (
    <article className="container-md my-2">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <div className="card shadow-sm border-0 bg-background py-4">
            <div className="card-header bg-primary-page text-center rounded-top py-3">
              <h2 className="card-title fw-bold m-0 fs-3">
                <i className="bi bi-lightning-charge-fill me-2"></i>
                ¡Adivina el Pokémon!
              </h2>
            </div>

            <div className="card-body p-4">
              <div className="mb-4">
                <PokemonDispley />
              </div>
              <div className="mb-4">
                <PokemonForm />
              </div>
              {isAnswered && (
                <div className="mt-4">
                  <PokemonResult />
                </div>
              )}
            </div>

            <div className="card-footer text-center bg-transparent pt-3">
              <small className="d-block text-muted mb-1">
                <i className="bi bi-hourglass-split me-1 text-warning"></i>
                ¡Tienes una sola oportunidad por ronda!
              </small>
              <small className="d-block text-muted">
                <i className="bi bi-exclamation-octagon me-1 text-danger"></i>
                ¡Tienes que escribir el nombre exacto!
              </small>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PokeGamePage;
