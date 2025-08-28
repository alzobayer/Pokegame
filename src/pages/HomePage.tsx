import OptionForm from '../components/PokemonOption/OptionForm';

const HomePage = () => {
  return (
    <article className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm border-0 bg-background">
            <div className="card-header text-center bg-primary-page rounded-top">
              <h1 className="card-title m-0 fw-bold">
                <i className="bi bi-controller me-2"></i>
                ¡Adivina el Pokémon!
              </h1>
            </div>
            <div className="card-body text-center">
              <p className="lead mb-4">
                <i className="bi bi-stars me-2 text-accent"></i>
                ¡Escoge tus opciones y demuestra tus conocimientos Pokémon!
              </p>
              <OptionForm />
            </div>
            <div className="card-footer text-center bg-transparent">
              <small className="text-muted">
                <i className="bi bi-lightbulb-fill me-1 text-warning"></i>
                ¡Prepárate para una aventura!
              </small>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default HomePage;
