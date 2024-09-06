import React from "react";
import s from "./Header.module.css";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <div className={s.logos}>
        <Link to="/" className={s.logo}>
          MrBurgers
        </Link>
      </div>
      <nav className={s.nav}>
        <Link to="/products" className={s.navLink}>
          Products
        </Link>
        <Link to="/create-product" className={s.navLink}>
          Create Product
        </Link>
      </nav>
    </header>
  );
};

export default Header;
