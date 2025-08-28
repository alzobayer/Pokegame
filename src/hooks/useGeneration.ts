import { useCallback, useEffect, useState } from 'react';
import type { Generation } from '../interfaces/Generation';
import { GenerationService } from '../services/Generation.Service';

export const useGeneration = (id: string) => {
  const [detailGenerations, setDetailGenerations] = useState<Generation | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchDetailGeneration = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await GenerationService.getGeneration(id);
      setDetailGenerations(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchDetailGeneration();
  }, [fetchDetailGeneration]);

  return {
    detailGenerations,
    isLoading,
    error,
  };
};
