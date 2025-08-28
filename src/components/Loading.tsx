const Loading = () => {
  return (
    <div className="d-flex flex-column align-items-center my-5 gap-3">
      <div
        className="spinner-border text-primary-page"
        role="status"
        style={{ width: '5rem', height: '5rem' }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="text-center">
        <p className="fw-bold text-secondary-page fs-5 mb-1">🔍 Buscando en la Pokédex...</p>
        <p className="text-muted fst-italic m-0">¡Un momento, entrenador!</p>
      </div>
    </div>
  );
};

export default Loading;
