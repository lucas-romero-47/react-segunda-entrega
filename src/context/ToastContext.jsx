import React, { createContext, useContext, useState, useCallback } from "react";

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [message, setMessage] = useState(null);
  const show = useCallback((msg, ms = 3000) => {
    setMessage(msg);
    window.clearTimeout(show._t);
    show._t = window.setTimeout(() => setMessage(null), ms);
  }, []);
  const hide = () => setMessage(null);
  return (
    <ToastContext.Provider value={{ message, show, hide }}>
      {children}
    </ToastContext.Provider>
  );
}

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
};
