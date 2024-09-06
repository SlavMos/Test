// redux/productsSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// Интерфейсы для продуктов
interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  liked: boolean;
  price: number;
}

interface ProductsState {
  items: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  showFavorites: boolean;
}

// Начальное состояние
const initialState: ProductsState = {
  items: [],
  status: "idle",
  showFavorites: false,
};

// Асинхронное действие для получения продуктов
export const fetchProducts = createAsyncThunk<Product[]>(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(
      "https://66d824b737b1cadd80538854.mockapi.io/test"
    );
    return response.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<number>) => {
      const product = state.items.find((item) => item.id === action.payload);
      if (product) {
        product.liked = !product.liked;
      }
    },
    toggleShowFavorites: (state) => {
      state.showFavorites = !state.showFavorites;
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (product) => product.id !== action.payload
      );
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { toggleLike, toggleShowFavorites, deleteProduct, addProduct } =
  productsSlice.actions;
export default productsSlice.reducer;
