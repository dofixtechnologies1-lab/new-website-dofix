"use client";
import React from "react";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";

import { removeItemFromWishlist } from "@/redux/features/wishlist-slice";
import { addItemToCart } from "@/redux/features/cart-slice";

import Image from "next/image";

interface Props {
  item: any;
}

const SingleItem = ({ item }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleRemoveFromWishlist = () => {
    dispatch(removeItemFromWishlist(item.id));
  };

  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        ...item,
        quantity: 1,
      })
    );
  };

  return (
    <div className="flex items-center border-t border-gray-200 py-5 px-10">

      {/* Remove Button */}
      <div className="min-w-[80px]">
        <button
          onClick={handleRemoveFromWishlist}
          className="flex items-center justify-center w-9 h-9 rounded-lg border border-gray-300 bg-gray-100 hover:bg-red-100 hover:text-red-600 transition"
        >
          ✕
        </button>
      </div>

      {/* Service Info */}
      <div className="min-w-[420px]">
        <div className="flex items-center gap-5">

          <div className="flex items-center justify-center bg-gray-100 rounded-md w-[70px] h-[70px]">
            <Image
              src={item.imgs?.thumbnails?.[0]}
              alt={item.title}
              width={60}
              height={60}
              className="object-contain"
            />
          </div>

          <div>
            <h3 className="text-dark font-medium hover:text-[#3683ab] transition">
              {item.title}
            </h3>
          </div>

        </div>
      </div>

      {/* Price */}
      <div className="min-w-[200px]">
        <p className="text-dark font-medium">
          ₹{item.discountedPrice}
        </p>
      </div>

      {/* Action */}
      <div className="min-w-[150px] flex justify-end">
        <button
          onClick={handleAddToCart}
          className="bg-[#3683ab] hover:bg-[#14455b] text-white px-6 py-2.5 rounded-md font-medium -mr-12 transition"
        >
          Add to Cart
        </button>
      </div>

    </div>
  );
};

export default SingleItem;