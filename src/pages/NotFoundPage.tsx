import { Link } from 'react-router';

const NotFoundPage = () => {

    return (
        <div className="container text-center py-5">
            <h1 className="display-1 fw-bold text-danger">404</h1>
            <p className="fs-3">🔍 ¡Pikachu no encuentra la ruta!</p>
            <p className="lead">
                Parece que te perdiste en la hierba alta. Esta página no existe.
            </p>
            <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
                alt="Pikachu confundido"
                width="150"
                height="150"
                className="my-4"
            />
            <br />
            <Link
                to="/"
                className="btn btn-primary-page px-4 py-2"
            >
            🔙 Volver al menú
            </Link>
        </div>
);
};

export default NotFoundPage;
