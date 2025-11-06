import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";
import { ToastProvider } from "./context/ToastContext.jsx";
import NavBar from "./components/NavBar.jsx";
import Toast from "./components/Toast.jsx";
import Home from "./pages/Home.jsx";
import Category from "./pages/Category.jsx";
import Product from "./pages/Product.jsx";
import NotFound from "./components/NotFound.jsx";

export default function App() {
  return (
    <CartProvider>
      <ToastProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/c/:categoryId" element={<Category />} />
          <Route path="/p/:id" element={<Product />} />
          <Route
            path="*"
            element={<NotFound message="Página no encontrada" />}
          />
        </Routes>
        <Toast />
      </ToastProvider>
    </CartProvider>
  );
}
