import React from "react";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {

  const { cart } = useCart();
  const CartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-10">
      <div className="flex-1">
        <Link className="text-xl flex gap-2 ps-2 items-baseline" to="/"><FcLike/> myStore</Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end me-6">
          <Link to='/cart' role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />{" "}
              </svg>
              <span className="badge badge-sm indicator-item bg-green-500 text-amber-50 rounded-full">{CartCount}</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
