"use client";
import React from "react";

import { Product } from "@/types/product";
import { useModalContext } from "@/app/context/QuickViewModalContext";
import { updateQuickView } from "@/redux/features/quickView-slice";
import { addItemToCart } from "@/redux/features/cart-slice";
import { addItemToWishlist } from "@/redux/features/wishlist-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import Link from "next/link";
import Image from "next/image";

const SingleListItem = ({ item }: { item: Product }) => {
  const { openModal } = useModalContext();
  const dispatch = useDispatch<AppDispatch>();

  const firstVariant = item.variants?.[0];

  // Quick view
  const handleQuickViewUpdate = () => {
    dispatch(updateQuickView({ ...item }));
  };

  // ✅ Add to cart (FIXED)
  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        id: Number(item.id),
        title: item.title,
        price: firstVariant?.price || 0,
        oldPrice: firstVariant?.oldPrice,
        quantity: 1,
        imgs: item.imgs,
      })
    );
  };

  // ✅ Wishlist (FIXED)
  const handleItemToWishList = () => {
    dispatch(
      addItemToWishlist({
        id: Number(item.id),
        title: item.title,
        price: firstVariant?.price || 0,
        oldPrice: firstVariant?.oldPrice,
        quantity: 1,
        imgs: item.imgs,
      })
    );
  };

  return (
    <div className="group rounded-lg bg-white shadow-1">
      <div className="flex">
        <div className="shadow-list relative overflow-hidden flex items-center justify-center max-w-[270px] w-full sm:min-h-[270px] p-4">
          <Image src={item.imgs.previews[0]} alt={item.title} width={250} height={250} />

          <div className="absolute left-0 bottom-0 translate-y-full w-full flex items-center justify-center gap-2.5 pb-5 ease-linear duration-200 group-hover:translate-y-0">
            
            {/* Quick View */}
            <button
              onClick={() => {
                openModal();
                handleQuickViewUpdate();
              }}
              className="flex items-center justify-center w-9 h-9 rounded-[5px] shadow-1 bg-white hover:text-[#3683ab]"
            >
              👁️
            </button>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="inline-flex font-medium text-custom-sm py-[7px] px-5 rounded-[5px] bg-[#3683ab] text-white hover:bg-[#14455b]"
            >
              Add to cart
            </button>

            {/* Wishlist */}
            <button
              onClick={handleItemToWishList}
              className="flex items-center justify-center w-9 h-9 rounded-[5px] shadow-1 bg-white hover:text-[#3683ab]"
            >
              ❤️
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col gap-5 sm:flex-row sm:items-center justify-between py-5 px-4 sm:px-7.5 lg:pl-11 lg:pr-12">
          
          <div>
            <h3 className="font-medium text-dark hover:text-[#3683ab] mb-1.5">
              <Link href="/shop-details">{item.title}</Link>
            </h3>

            {firstVariant && (
              <span className="flex items-center gap-2 font-medium text-lg">
                <span>₹{firstVariant.price}</span>

                {firstVariant.oldPrice && (
                  <span className="line-through text-gray-400">
                    ₹{firstVariant.oldPrice}
                  </span>
                )}
              </span>
            )}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2.5">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src="/images/icons/icon-star.svg"
                  alt="star"
                  width={15}
                  height={15}
                />
              ))}
            </div>
            <p className="text-sm">({item.reviews})</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SingleListItem;