import React from "react";
import { useProducts } from "../hooks/useProducts.js";
import LoadingSpinner from "../components/LoadingSpinner.jsx";
import NotFound from "../components/NotFound.jsx";
import ItemList from "../components/ItemList.jsx";

export default function Home() {
  const { data, loading, error } = useProducts();
  return (
    <main className="container main-content">
      <h2 className="list-title">¡Bienvenidos a Kiosco Escuela N11!</h2>
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <NotFound message={error} />
      ) : data.length ? (
        <ItemList products={data} />
      ) : (
        <p className="empty-list-message">No hay productos.</p>
      )}
    </main>
  );
}
