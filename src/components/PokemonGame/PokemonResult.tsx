import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import useGame from '../../hooks/useGame';
import usePokemon from '../../hooks/usePokemon';

const PokemonResult = () => {
  const { range, fetchPokemon, isCorrect } = usePokemon();
  const { handleNextStep, handleIsGameEnd } = useGame();
  const navigate = useNavigate();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleOnClick = () => {
    if (!range) return navigate('/');

    handleNextStep(isCorrect);
    handleIsGameEnd();
    fetchPokemon(range);
    setVisible(false);
  };

  return (
    <div
      className={`card rounded-4 text-center py-4 px-3 bg-result-bg transition-opacity`}
      style={{
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.6s ease-in-out',
      }}
    >
      <div className={`mb-3 display-5 fw-bold ${isCorrect ? 'text-success' : 'text-danger'}`}>
        {isCorrect ? '¡Correcto!' : '¡Incorrecto!'}
      </div>

      <button
        className={`btn btn-${isCorrect ? 'success' : 'danger'} btn-lg d-flex align-items-center gap-2 mx-auto`}
        onClick={handleOnClick}
      >
        <i className={`bi ${isCorrect ? 'bi-check-circle-fill' : 'bi-x-circle-fill'}`}></i>
        ¡Siguiente!
      </button>
    </div>
  );
};

export default PokemonResult;
