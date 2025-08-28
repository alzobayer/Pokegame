import { useCallback, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router';
import Loading from '../components/Loading';
import useGame from '../hooks/useGame';
import { useGeneration } from '../hooks/useGeneration';
import usePokemon from '../hooks/usePokemon';
import type { PokemonRange } from '../interfaces/Pokemon';

const LoadingDetailPage = () => {
  const { fetchPokemon, handleRangePokemon } = usePokemon();
  const { handleGameStart } = useGame();
  const navigate = useNavigate();
  const params = useParams();
  const hasLoaded = useRef(false); //flag prevent re-render and infinite loops
  const { id, round } = params;
  const { detailGenerations, isLoading, error } = useGeneration(id || '');

  const LoadData = useCallback(() => {
    const isValidParams = (id?: string, round?: string) => {
      return id && round && !isNaN(parseInt(round));
    };

    const setupGameFromGeneration = () => {
      if (!detailGenerations) return;
      const {
        range: { firstPokemonId, lastPokemonId },
      } = detailGenerations;
      const range: PokemonRange = {
        firstPokemonId,
        lastPokemonId,
      };
      handleRangePokemon(range);
      fetchPokemon(range);
      handleGameStart(parseInt(round!));
    };
    if (hasLoaded.current) return;
    if (!detailGenerations) return;
    if (!isValidParams(id, round)) navigate('/');

    setupGameFromGeneration();
    hasLoaded.current = true;
    navigate('/game');
  }, [detailGenerations, id, round, navigate, fetchPokemon, handleGameStart, handleRangePokemon]);

  useEffect(() => {
    LoadData();
  }, [LoadData]);

  if (isLoading) return <Loading />;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return null;
};

export default LoadingDetailPage;
