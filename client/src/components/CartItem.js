import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FiX } from "react-icons/fi";
import Qty from "../components/Qty";

const CartItem = ({ item }) => {
  const { isOpen, setIsOpen, removeFromCart } = useContext(CartContext);
  return (
    <div className="flex gap-x-8">
      <Link
        onClick={() => setIsOpen(false)}
        to={`product/${item.id}`}
        className="w-[70px] h-[70px]">
        <img
          src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
          alt="img!"
        />
      </Link>
      <div className="flex-1">
        {/* title and remove icon */}
        <div className="flex gap-x-4 mb-3 ">
          <Link to={`product/${item.id}`}>{item.attributes.title} </Link>
          <div
            onClick={() => removeFromCart(item.id)}
            className="cursor-pointer text-[24px] hover:text-accent transition-all">
            <FiX />
          </div>
        </div>
        <div className=" flex items-center gap-x-12">
          {/* quantity */}
          <div className="flex gap-x-4 mb-2">
            <Qty item={item} />
          </div>
          <div className="text-accent text-xl">
            ${item.attributes.price * item.amount}
          </div>
        </div>
        {/* price */}
        <div>
          <span className="text-accent">${item.attributes.price}</span> per
          price
        </div>
      </div>
    </div>
  );
};

export default CartItem;
