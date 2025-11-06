import React from "react";
import { Link } from "react-router-dom";

export default function Item({ product }) {
  return (
    <div className="item-card">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="item-card-image"
        onError={(e) => {
          e.currentTarget.src =
            "https://placehold.co/600x400/gray/white?text=Imagen+No+Disponible";
        }}
      />
      <div className="item-card-body">
        <h3 className="item-card-title">{product.name}</h3>
        <p className="item-card-price">${product.price}</p>
        <Link to={`/p/${product.id}`} className="item-card-button">
          Ver Detalle
        </Link>
      </div>
    </div>
  );
}
