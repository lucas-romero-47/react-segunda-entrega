import React from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext.jsx";

export default function CartWidget() {
  const { totalQty } = useCart();
  return (
    <button className="cart-widget" aria-label="Carrito">
      <ShoppingCart className="h-6 w-6" />
      {totalQty > 0 && <span className="cart-badge">{totalQty}</span>}
    </button>
  );
}
