import React from "react";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import EmptyCart from "../assets/images/cart.jpg";

const Cart = () => {
  const { cart } = useCart();

  return (
    <>
      <div className="container mx-auto my-10 px-4">
        {cart.length === 0 ? (
          <div className="text-center mb-6">
            <h1 className="text-3xl mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600">
              Looks like you haven't added anything to your cart yet.
            </p>
            <img src={EmptyCart} alt="Empty Cart" className="mx-auto w-xl" />
          </div>
        ) : (
          <div className="">
            <h1 className="text-3xl text-center mb-6">Shopping Cart</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
