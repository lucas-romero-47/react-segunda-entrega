import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../services/products.js";

export function useProducts(categoryId) {
  const [data, setData] = useState([]),
    [loading, setLoading] = useState(true),
    [error, setError] = useState(null);
  useEffect(() => {
    let alive = true;
    setLoading(true);
    setError(null);
    const req = categoryId ? getProductsByCategory(categoryId) : getProducts();
    req
      .then((r) => alive && setData(r))
      .catch((e) => alive && setError(e.message))
      .finally(() => alive && setLoading(false));
    return () => {
      alive = false;
    };
  }, [categoryId]);
  return { data, loading, error };
}
