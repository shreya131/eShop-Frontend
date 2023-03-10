import React from "react";
import { Link } from "react-router-dom";

import "./Styling.css";
const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <Link to="/" className="shopName">
          eShop
        </Link>
        <Link to="/cart" className="cartButton">
          Cart
        </Link>
      </div>
    </>
  );
};
export default Navbar;
