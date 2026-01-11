import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { title, image, price, description } = product;

  const { cart, dispatch } = useCart();

  const handleAddToCart = () =>
    dispatch({ type: "ADD_TO_CART", payload: product });
  const handleRemoveFromCart = () =>
    dispatch({ type: "REMOVE_FROM_CART", payload: { id: product.id } });

  const inCart = cart.find((item) => item.id === product.id);

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300 border-2 border-gray-200">
      <figure className="flex flex-col p-5 bg-accent/10">
        <img className="h-64 w-auto object-contain" src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          {description.length > 80
            ? description.substring(0, 80) + "..."
            : description}
        </p>
        <p>Price : ${price}</p>
        <button
          className={`btn btn-outline mt-2 ${
            inCart ? " btn-warning" : "btn-accent"
          }`}
          onClick={inCart ? handleRemoveFromCart : handleAddToCart}
        >
          {inCart ? "Remove from Cart" : "Add to Cart "}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
