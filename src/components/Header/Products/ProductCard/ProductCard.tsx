import React from "react";
import s from "./ProductCard.module.css";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    liked: boolean;
  };
  onLike: (id: number) => void;
  onDelete: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onLike,
  onDelete,
}) => {
  return (
    <div className={s.card}>
      <img src={product.image} alt={product.name} className={s.image} />
      <div className={s.content}>
        <h3 className={s.name}>{product.name}</h3>
        <p className={s.description}>{product.description}</p>
        <div className={s.actions}>
          <div className={s.favorite}>
            <img
              onClick={() => onLike(product.id)}
              src={product.liked ? "/img/heart-1.svg" : "/img/heart-0.svg"}
              alt="Like"
            />
          </div>
          <Link to={`/product/${product.id}`}>
            <button>Подробнее</button>
          </Link>
          <button className={s.deleteBtn} onClick={() => onDelete(product.id)}>
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
