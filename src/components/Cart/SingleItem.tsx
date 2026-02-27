"use client";
import React from "react";
import { useDispatch } from "react-redux";
import {
  removeItemFromCart,
  updateCartItemQuantity,
} from "@/redux/features/cart-slice";
import Image from "next/image";

const SingleItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncreaseQuantity = () => {
    dispatch(
      updateCartItemQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecreaseQuantity = () => {
    if (item.quantity > 1) {
      dispatch(
        updateCartItemQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    }
  };

  const handleRemoveFromCart = () => {
    dispatch(removeItemFromCart(item.id));
  };

  return (
    <div className="flex flex-col sm:flex-row gap-5">
      
      {/* Image */}
      <div className="w-full sm:w-28 h-28 relative rounded-xl overflow-hidden bg-gray-100">
        <Image
          src={item.imgs?.thumbnails[0]}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between">
        
        {/* Title + Remove */}
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-dark">
            {item.title}
          </h3>

          <button
            onClick={handleRemoveFromCart}
            className="text-red-500 hover:text-red-600 text-sm font-medium"
          >
            Remove
          </button>
        </div>

        {/* Price */}
        <p className="text-gray-500 text-sm mt-1">
          ₹{item.discountedPrice}
        </p>

        {/* Bottom Row */}
        <div className="flex items-center justify-between mt-4">
          
          {/* Quantity Selector */}
          <div className="flex items-center border rounded-full overflow-hidden">
            <button
              onClick={handleDecreaseQuantity}
              className="px-4 py-1 text-[#3683ab] font-bold hover:bg-gray-100"
            >
              -
            </button>

            <span className="px-4 font-medium">
              {item.quantity}
            </span>

            <button
              onClick={handleIncreaseQuantity}
              className="px-4 py-1 text-[#3683ab] font-bold hover:bg-gray-100"
            >
              +
            </button>
          </div>

          {/* Subtotal */}
          <div className="text-lg font-semibold text-[#3683ab]">
            ₹{item.discountedPrice * item.quantity}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;