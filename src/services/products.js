export const mockProducts = [
  {
    id: "1",
    name: "Pebete de Jamón y Queso",
    price: 1200,
    category: "panaderia",
    stock: 15,
    description:
      "Clásico pebete con jamón cocido de primera calidad y queso tybo.",
    imageUrl: "https://placehold.co/600x400/FACC15/333?text=Pebete",
  },
  {
    id: "2",
    name: "Medialuna de Manteca",
    price: 300,
    category: "panaderia",
    stock: 50,
    description: "Medialuna dulce y esponjosa, perfecta para el desayuno.",
    imageUrl: "https://placehold.co/600x400/FACC15/333?text=Medialuna",
  },
  {
    id: "3",
    name: "Hamburguesa Completa",
    price: 2500,
    category: "comidas",
    stock: 20,
    description: "Hamburguesa con lechuga, tomate, jamón, queso y huevo.",
    imageUrl: "https://placehold.co/600x400/FB923C/333?text=Hamburguesa",
  },
  {
    id: "4",
    name: "Pancho Clásico",
    price: 1000,
    category: "comidas",
    stock: 30,
    description:
      "Pancho con salchicha de viena y pan esponjoso. Aderezos a gusto.",
    imageUrl: "https://placehold.co/600x400/FB923C/333?text=Pancho",
  },
  {
    id: "5",
    name: "Papas Fritas",
    price: 1500,
    category: "comidas",
    stock: 25,
    description: "Porción grande de papas fritas crujientes.",
    imageUrl: "https://placehold.co/600x400/FB923C/333?text=Papas+Fritas",
  },
  {
    id: "6",
    name: "Coca Cola 500ml",
    price: 800,
    category: "bebidas",
    stock: 40,
    description: "Coca Cola 500ml.",
    imageUrl: "https://placehold.co/600x400/EF4444/333?text=Coca+Cola",
  },
  {
    id: "7",
    name: "Pepsi 500ml",
    price: 750,
    category: "bebidas",
    stock: 40,
    description: "Pepsi 500ml.",
    imageUrl: "https://placehold.co/600x400/3B82F6/333?text=Pepsi",
  },
];

export const getProducts = () =>
  new Promise((res) => setTimeout(() => res(mockProducts), 800));

export const getProductsByCategory = (categoryId) =>
  new Promise((res) =>
    setTimeout(
      () => res(mockProducts.filter((p) => p.category === categoryId)),
      800
    )
  );

export const getProductById = (id) =>
  new Promise((res, rej) =>
    setTimeout(() => {
      const p = mockProducts.find((x) => x.id === id);
      p ? res(p) : rej(new Error("Producto no encontrado"));
    }, 800)
  );
