import React from "react";
import { Link } from "react-router-dom";
import { CartState } from "../context/context";
import ProductCard from "./ProductCard";
function Cart() {
  const {
    state: { cart },
  } = CartState();

  return (
    <>
      {cart.length === 0 ? (
        <h1>
          No Products added to Cart,{" "}
          <Link to="/" style={{ textDecoration: "none" }}>
            Continue Shopping!{" "}
          </Link>
        </h1>
      ) : (
        <div className="products">
          {cart.map((element, index) => {
            return (
              <ProductCard
                id={element.id}
                title={element.title}
                image={element.imageUrl}
                key={index}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default Cart;
