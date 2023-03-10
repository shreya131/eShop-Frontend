import React from "react";
import { CartState } from "../context/context";
import "./Styling.css";
function ProductCard(props) {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="Product">
      <img className="Image" src={props.image} alt="No image available!" />
      <h5 className="Title">{props.title}</h5>
      <div className="Description">
        {cart.some((p) => p.id === props.id) ? (
          <button
            className="Remove"
            onClick={() => {
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: {
                  id: props.id,
                  title: props.title,
                  imageUrl: props.image,
                },
              });
            }}
          >
            {" "}
            Remove From Cart{" "}
          </button>
        ) : (
          <button
            className="Add"
            onClick={() => {
              dispatch({
                type: "ADD_TO_CART",
                payload: {
                  id: props.id,
                  title: props.title,
                  imageUrl: props.image,
                },
              });
            }}
          >
            {" "}
            Add to Cart{" "}
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
