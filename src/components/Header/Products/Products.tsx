import React, { useEffect } from "react";
import s from "./Products.module.css";
import ProductCard from "./ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  toggleLike,
  toggleShowFavorites,
  deleteProduct,
} from "../../../redux/slices/productsSlice";
import { RootState, AppDispatch } from "../../../redux/store"; // Типизация для useSelector

const Products: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.items);
  const status = useSelector((state: RootState) => state.products.status);
  const showFavorites = useSelector(
    (state: RootState) => state.products.showFavorites
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  const filteredProducts = showFavorites
    ? products.filter((product) => product.liked)
    : products;

  const handleLike = (id: number) => {
    dispatch(toggleLike(id));
  };

  const handleToggleFavorites = () => {
    dispatch(toggleShowFavorites());
  };

  const handleDelete = (id: number) => {
    dispatch(deleteProduct(id));
  };

  if (status === "loading") {
    return <p>Загрузка продуктов...</p>;
  }

  if (status === "failed") {
    return <p>Ошибка при загрузке продуктов.</p>;
  }

  return (
    <div className={s.productsContainer}>
      <button className={s.filterButton} onClick={handleToggleFavorites}>
        {showFavorites ? "Показать все" : "Показать избранное"}
      </button>

      <div className={s.productsList}>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            onDelete={handleDelete}
            product={product}
            onLike={handleLike}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
