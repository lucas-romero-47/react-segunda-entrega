import { Loader2 } from "lucide-react";

export default function LoadingSpinner() {
  return (
    <div className="loading-spinner-container">
      <Loader2 className="loading-spinner-icon" />
      <span className="loading-spinner-text">Cargando...</span>
    </div>
  );
}
