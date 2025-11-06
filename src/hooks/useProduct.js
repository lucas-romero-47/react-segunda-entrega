import { useEffect, useState } from "react";
import { getProductById } from "../services/products.js";

export function useProduct(id) {
  const [data, setData] = useState(null),
    [loading, setLoading] = useState(true),
    [error, setError] = useState(null);
  useEffect(() => {
    let alive = true;
    setLoading(true);
    setError(null);
    getProductById(id)
      .then((r) => alive && setData(r))
      .catch((e) => alive && setError(e.message))
      .finally(() => alive && setLoading(false));
    return () => {
      alive = false;
    };
  }, [id]);
  return { data, loading, error };
}
