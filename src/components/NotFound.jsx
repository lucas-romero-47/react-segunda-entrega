import { Link } from "react-router-dom";

export default function NotFound({ message = "Recurso no encontrado" }) {
  return (
    <div className="not-found-container">
      <h2 className="not-found-title">Error</h2>
      <p className="not-found-message">{message}</p>
      <Link to="/" className="not-found-button">
        Volver al Inicio
      </Link>
    </div>
  );
}
