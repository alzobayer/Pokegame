import usePokemon from '../../hooks/usePokemon';
import Loading from '../Loading';

const PokemonDispley = () => {
  const { pokemon, isLoading, isAnswered } = usePokemon();
  const { name, image } = pokemon || {};

  if (isLoading) return <Loading />;

  return (
    <div className="card shadow-lg border-0 rounded-4 bg-light p-3">
      <div className="card-header text-accent text-center rounded-top">
        <h2 className="m-0">{isAnswered ? `¡Es ${name}!` : '¿Quién es ese Pokémon?'}</h2>
      </div>

      {/* Body */}
      <div className="card-body d-flex justify-content-center align-items-center">
        <img
          src={image}
          alt={name || 'Pokemon'}
          className="img-fluid"
          onDragStart={(e) => e.preventDefault()}
          style={{
            width: '300px',
            height: '300px',
            filter: isAnswered ? 'none' : 'blur(8px) brightness(0%)',
            transition: 'filter 0.5s ease-in-out, transform 0.3s',
            borderRadius: '1rem',
          }}
        />
      </div>
    </div>
  );
};

export default PokemonDispley;
