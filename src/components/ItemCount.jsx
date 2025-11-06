import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function ItemCount({ stock, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);
  const noStock = stock === 0;
  return (
    <div className="item-count">
      <div className="count-controls">
        <button
          onClick={() => setCount((c) => Math.max(1, c - 1))}
          disabled={count <= 1 || noStock}
          className="count-button"
        >
          <Minus className="h-5 w-5" />
        </button>
        <span className="count-display">{noStock ? 0 : count}</span>
        <button
          onClick={() => setCount((c) => Math.min(stock, c + 1))}
          disabled={count >= stock || noStock}
          className="count-button"
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>
      {noStock ? (
        <p className="no-stock-message">¡Sin stock disponible!</p>
      ) : (
        <p className="stock-message">Stock disponible: {stock}</p>
      )}
      <button
        onClick={() => onAdd(count)}
        disabled={noStock}
        className="add-to-cart-button"
      >
        Agregar al carrito
      </button>
    </div>
  );
}
