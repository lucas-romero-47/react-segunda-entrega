import React from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../hooks/useProduct.js";
import LoadingSpinner from "../components/LoadingSpinner.jsx";
import NotFound from "../components/NotFound.jsx";
import ItemDetail from "../components/ItemDetail.jsx";

export default function Product() {
  const { id } = useParams();
  const { data, loading, error } = useProduct(id);
  return (
    <main className="container main-content">
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <NotFound message={error} />
      ) : data ? (
        <ItemDetail product={data} />
      ) : null}
    </main>
  );
}
