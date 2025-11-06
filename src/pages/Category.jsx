import { useParams } from "react-router-dom";
import { useProducts } from "../hooks/useProducts.js";
import LoadingSpinner from "../components/LoadingSpinner.jsx";
import NotFound from "../components/NotFound.jsx";
import ItemList from "../components/ItemList.jsx";

export default function Category() {
  const { categoryId } = useParams();
  const { data, loading, error } = useProducts(categoryId);
  const title = `Categoría: ${categoryId
    .charAt(0)
    .toUpperCase()}${categoryId.slice(1)}`;
  return (
    <main className="container main-content">
      <h2 className="list-title">{title}</h2>
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <NotFound message={error} />
      ) : data.length ? (
        <ItemList products={data} />
      ) : (
        <p className="empty-list-message">
          No se encontraron productos en esta categoría.
        </p>
      )}
    </main>
  );
}
