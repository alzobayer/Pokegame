import { useState } from 'react';
import usePokemon from '../../hooks/usePokemon';

const PokemonForm = () => {
  const { handleAnswer } = usePokemon();
  const [inputValue, setInputValue] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inputValue.trim()) return;
    handleAnswer(inputValue.trim());
    setInputValue('');
  };

  return (
    <form className="my-3" onSubmit={handleSubmit}>
      <div className="input-group shadow-sm rounded-3 overflow-hidden">
        <input
          type="text"
          className="form-control border-0 px-3"
          placeholder="Ingresa el nombre del Pokémon"
          aria-label="Ingresa el nombre del Pokémon"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          autoFocus
        />
        <button
          type="submit"
          className="btn btn-outline-secondary-page d-flex align-items-center gap-2 px-4"
          disabled={!inputValue.trim()}
        >
          <i className="bi bi-question-circle-fill"></i>
          Adivinar
        </button>
      </div>
    </form>
  );
};

export default PokemonForm;
