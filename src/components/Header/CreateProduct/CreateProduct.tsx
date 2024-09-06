import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../redux/slices/productsSlice";
import { useNavigate } from "react-router-dom";
import s from "./CreateProduct.module.css";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  liked: boolean;
}

const CreateProduct: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [image, setImage] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateForm = (): boolean => {
    if (!name || !description || !image || price <= 0) {
      setError("Все поля должны быть заполнены и цена больше 0");
      return false;
    }
    setError(null); // Если ошибок нет, очищаем сообщение об ошибке
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    const newProduct: Product = {
      id: Math.random(), // временный id
      name,
      description,
      price,
      image,
      liked: false,
    };

    dispatch(addProduct(newProduct));
    navigate("/");
  };

  return (
    <div className={s.createProduct}>
      <h2>Создать продукт</h2>
      {error && <p className={s.error}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className={s.formGroup}>
          <label>Название:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={s.formGroup}>
          <label>Описание:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className={s.formGroup}>
          <label>Цена:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>
        <div className={s.formGroup}>
          <label>Изображение (URL):</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <button type="submit">Создать</button>
      </form>
    </div>
  );
};

export default CreateProduct;
