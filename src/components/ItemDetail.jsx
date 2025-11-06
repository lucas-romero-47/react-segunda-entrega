import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount.jsx";
import { useCart } from "../context/CartContext.jsx";
import { useToast } from "../context/ToastContext.jsx";

export default function ItemDetail({ product }) {
  const { dispatch } = useCart();
  const { show } = useToast();

  const handleAdd = (qty) => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        qty,
      },
    });
    show(`Agregaste ${qty} "${product.name}" al carrito`);
  };

  return (
    <div className="item-detail-card">
      <div className="item-detail-image-wrapper">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="item-detail-image"
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/600x400/gray/white?text=Imagen+No+Disponible";
          }}
        />
      </div>
      <div className="item-detail-content">
        <div>
          <Link to="/" className="back-button">
            ← Volver al catálogo
          </Link>
          <h2 className="item-detail-title">{product.name}</h2>
          <p className="item-detail-description">{product.description}</p>
          <p className="item-detail-price">${product.price}</p>
        </div>
        <ItemCount stock={product.stock} onAdd={handleAdd} />
      </div>
    </div>
  );
}
