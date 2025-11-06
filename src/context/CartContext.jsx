import React, { createContext, useContext, useReducer, useMemo } from "react";

const CartContext = createContext(null);

function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.find((i) => i.id === action.payload.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === existing.id ? { ...i, qty: i.qty + action.payload.qty } : i
          ),
        };
      }
      return { ...state, items: [...state.items, { ...action.payload }] };
    }
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((i) => i.id !== action.payload),
      };
    case "CLEAR":
      return { items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, { items: [] });
  const totalQty = state.items.reduce((a, b) => a + b.qty, 0);
  const totalPrice = state.items.reduce((a, b) => a + b.qty * b.price, 0);

  const value = useMemo(
    () => ({ state, dispatch, totalQty, totalPrice }),
    [state, totalQty, totalPrice]
  );
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
