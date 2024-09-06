import "./App.css";
import Header from "./components/Header/Header";
import ProductInfo from "./components/Header/ProductInfo/ProductInfo";
import Products from "./components/Header/Products/Products";
import { Routes, Route } from "react-router-dom";
import CreateProduct from "./components/Header/CreateProduct/CreateProduct";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<ProductInfo />} />
        <Route path="/create-product" element={<CreateProduct />} />
      </Routes>
    </div>
  );
}

export default App;
