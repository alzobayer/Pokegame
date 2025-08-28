const Footer = () => {
  return (
    <footer className="bg-footer text-white py-3 mt-auto border-top border-accent shadow-sm">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center small text-center text-md-start">
        <div className="mb-2 mb-md-0">
          <i className="bi bi-c-circle me-2 text-accent"></i>
          {new Date().getFullYear()} <span className="fw-bold text-primary-page">Pokémon Game</span>
          . Fan-made for educational purposes.
        </div>
        <div>
          <i className="bi bi-person-fill me-2 text-accent"></i>
          Created by <span className="fw-semibold text-primary-page">Benjamin Fuentes</span> – Free
          educational license.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
