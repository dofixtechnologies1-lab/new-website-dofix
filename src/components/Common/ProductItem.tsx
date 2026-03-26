"use client";
import React from "react";
import Image from "next/image";
import { Product } from "@/types/product";
import { useRouter } from "next/navigation";
import { useModalContext } from "@/app/context/QuickViewModalContext";
import { updateQuickView } from "@/redux/features/quickView-slice";
import { addItemToCart } from "@/redux/features/cart-slice";
import { addItemToWishlist } from "@/redux/features/wishlist-slice";
import { updateproductDetails } from "@/redux/features/product-details";
import { useAppDispatch } from "@/redux/hooks";

const ProductItem = ({
  item,
  hideCart,
  hidePrice,
}: {
  item: Product;
  hideCart?: boolean;
  hidePrice?: boolean;
}) => {
  const { openModal } = useModalContext();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const firstVariant = item.variants?.[0];

  // Quick view
  const handleQuickViewUpdate = () => {
    dispatch(updateQuickView({ ...item }));
  };

  // Slug generator
  const slugify = (text: string) => {
    return text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");
  };

  // ✅ Add to cart (FIXED)
  const handleAddToCart = () => {
    if (!firstVariant) return;

    dispatch(
      addItemToCart({
        id: Number(item.id),
        title: item.title,
        price: firstVariant.price, // final price
        oldPrice: firstVariant.oldPrice, // optional
        quantity: 1,
        imgs: item.imgs,
      })
    );
  };

  // ✅ Wishlist (FIXED)
  const handleItemToWishList = () => {
    if (!firstVariant) return;

    dispatch(
      addItemToWishlist({
        id: Number(item.id),
        title: item.title,
        price: firstVariant.price,
        oldPrice: firstVariant.oldPrice,
        quantity: 1,
        imgs: item.imgs,
      })
    );
  };

  const handleProductDetails = () => {
    dispatch(updateproductDetails({ ...item }));
  };

  return (
    <div className="group">
      <div className="relative overflow-hidden flex items-center justify-center rounded-lg bg-[#F6F7FB] min-h-[270px] mb-4">
        <Image
          src={item.imgs.previews[0]}
          alt={item.title}
          width={300}
          height={250}
        />

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
          {!hideCart && (
            <button
              onClick={handleAddToCart}
              className="inline-flex font-medium text-custom-sm py-[7px] px-5 rounded-[5px] bg-[#3683ab] text-white ease-out duration-200 hover:bg-[#14455b]"
            >
              Add to cart
            </button>
          )}

          {/* Wishlist */}
          <button
            onClick={handleItemToWishList}
            className="flex items-center justify-center w-9 h-9 rounded-[5px] shadow-1 bg-white hover:text-[#3683ab]"
          >
            ❤️
          </button>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center justify-center gap-2.5 mb-2">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Image
              key={i}
              src="/images/icons/icon-star.svg"
              alt="star"
              width={14}
              height={14}
            />
          ))}
        </div>
        <p className="text-custom-sm">({item.reviews})</p>
      </div>

      {/* Title */}
      <h3
        onClick={() =>
          router.push(`/ac-services/${slugify(item.title)}`)
        }
        className="cursor-pointer flex items-center justify-center text-center text-white bg-[#3683ab] mb-1.5 rounded-md px-3 py-2 hover:bg-[#2f6f91] transition"
      >
        {item.title}
      </h3>

      {/* Price */}
      {!hidePrice && firstVariant && (
        <span className="flex items-center justify-center gap-2 font-medium text-lg">
          <span className="text-dark">₹{firstVariant.price}</span>

          {firstVariant.oldPrice && (
            <span className="text-dark-4 line-through">
              ₹{firstVariant.oldPrice}
            </span>
          )}
        </span>
      )}
    </div>
  );
};

export default ProductItem;