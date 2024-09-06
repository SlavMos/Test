// Интерфейс для продукта
export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  liked: boolean;
  price: number;
}

// Интерфейс для состояния продуктов
export interface ProductsState {
  items: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  showFavorites: boolean;
}
