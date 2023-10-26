import React, { useContext, useState } from "react";
// icons
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiX } from "react-icons/fi";
import "./EmptyCart/scrollbar.css";
// components
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import Empty from "./EmptyCart/Empty";
import { Link, useNavigate } from "react-router-dom";
const Cart = () => {
  const { setIsOpen, cart, total, clearCart } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  // handle CheckOut
  const handleCheckOut = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigate("/orders");
    }, 5000);
  };
  return (
    <div className="w-full h-full px-4 text-white">
      <div className="overflow-y-auto overflow-x-hidden h-[70vh] scrollbar__cart">
        <div
          onClick={() => setIsOpen(false)}
          className="text-3xl w-20 h-[98px] flex justify-start items-center cursor-pointer">
          <FiX />
        </div>
        <div className="flex flex-col gap-y-10 px-2">
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>
      </div>
      {/* subtotal and total  */}
      {cart.length >= 1 && (
        <div className="px-6 py-10 flex flex-col">
          {/* subtotal */}
          <div className="flex justify-between text-lg">
            <div>Subtotal</div>
            <div className="text-accent">${total}</div>
          </div>
          {/* total */}
          <div className="flex justify-between text-2xl">
            <div>Total:</div>
            <div className="text-accent">${total}</div>
          </div>
        </div>
      )}
      {/* buttons */}
      <div className="px-6">
        {cart.length >= 1 ? (
          <div className="flex justify-between gap-x-4 relative -top-[15px]">
            <button
              onClick={clearCart}
              className="btn btn-accent hover:bg-accent-hover text-primary">
              Clear Cart
            </button>
            <div>
              {isLoading ? (
                <div className="w-10 h-10 border-4 border-primary border-t-accent rounded-full animate-spin"></div>
              ) : (
                <button
                  onClick={handleCheckOut}
                  className="btn btn-accent hover:bg-accent-hover text-primary flex items-center gap-[10px]">
                  Check Out
                  <AiOutlineArrowRight className="text-lg" />
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="h-full  absolute top-0 right-0 left-0  flex justify-center items-center -z-10">
            <div>
              <Empty />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
