import { Route, Routes } from 'react-router';
import GameProvider from '../context/GameProvider';
import PokemonProvider from '../context/PokemonProvider';
import PublicLayout from '../layout/PublicLayout';
import HomePage from '../pages/HomePage';
import LoadingDetailPage from '../pages/LoadingDetailPage';
import NotFoundPage from '../pages/NotFoundPage';
import PokeGamePage from '../pages/PokemonGame/PokeGamePage';
import Test from '../pages/Test';

const Index = () => {
  return (
    <GameProvider>
      <PokemonProvider>
        <Routes>
          <Route path="loading-detail/:id/:round" element={<LoadingDetailPage />} />
          <Route path="test" element={<Test />} />
          <Route element={<PublicLayout />}>
            <Route index element={<HomePage />} />
            <Route path="Game" element={<PokeGamePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </PokemonProvider>
    </GameProvider>
  );
};

export default Index;
