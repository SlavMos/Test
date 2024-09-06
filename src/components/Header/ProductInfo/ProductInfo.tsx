import React from "react";
import { RootState } from "../../../redux/store";
import s from "./ProductInfo.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductInfo = () => {
  interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    liked: boolean;
  }

  const { id } = useParams();
  const products = useSelector((state: RootState) => state.products.items);
  const product = products.find((p: Product) => p.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} className={s.productImage} />
      <p>{product.description}</p>
      <p>Цена: {product.price}</p>
      <Link to="/" className={s.navLink}>
        Назад
      </Link>
    </div>
  );
};

export default ProductInfo;
