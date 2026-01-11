import React from "react";
import { useCart } from "../context/CartContext";

const CartItem = ({ item }) => {

  const {cart, dispatch } = useCart();

  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img
        src={item.image}
        alt={item.title}
        className="h-40 w-full object-contain mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
      <p className="mb-2">Price: ${item.price}</p>
      <div className="flex items-center mb-4">
        <button
          className="btn btn-sm btn-outline btn-accent me-2"
          onClick={() =>
            dispatch({ type: "DECREASE_QUANTITY", payload: { id: item.id } })
          }
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          className="btn btn-sm btn-outline btn-accent ms-2"
          onClick={() =>
            dispatch({ type: "INCREASE_QUANTITY", payload: { id: item.id } })
          }
        >
          +
        </button>
      </div>
      <button
        className="btn btn-sm btn-error"
        onClick={() =>
          dispatch({ type: "REMOVE_FROM_CART", payload: { id: item.id } })
        }
      >
        Remove from Cart
      </button>
    </div>
  );
};

export default CartItem;
