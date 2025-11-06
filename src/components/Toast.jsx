import { X } from "lucide-react";
import { useToast } from "../context/ToastContext.jsx";

export default function Toast() {
  const { message, hide } = useToast();
  if (!message) return null;
  return (
    <div className="toast-root">
      <div className="toast" role="status" aria-live="polite">
        <span className="toast-message">{message}</span>
        <button
          onClick={hide}
          className="toast-close-button"
          aria-label="Cerrar notificación"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
