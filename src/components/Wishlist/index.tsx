"use client";
import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
// import { clearWishlist } from "@/redux/features/wishlist-slice";
import { removeAllItemsFromWishlist } from "@/redux/features/wishlist-slice";
import SingleItem from "./SingleItem";

export const Wishlist = () => {
  const dispatch = useAppDispatch();

  const wishlistItems = useAppSelector(
    (state) => state.wishlistReducer.items
  );

  // const handleClearWishlist = () => {
  //   dispatch(clearWishlist());
  // };
  const handleClearWishlist = () => {
  dispatch(removeAllItemsFromWishlist());
};

  return (
    <>
      <Breadcrumb title={"Wishlist"} pages={["Wishlist"]} />

      <section className="overflow-hidden py-20 bg-gray-2">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">

          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-5 mb-7.5">

            <h2 className="font-semibold text-dark text-2xl">
              Your Saved Services
            </h2>

            {wishlistItems.length > 0 && (
              <button
                onClick={handleClearWishlist}
                className="text-[#3683ab] hover:underline font-medium"
              >
                Clear Wishlist
              </button>
            )}

          </div>

          {/* Empty State */}
          {wishlistItems.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-12 text-center">
              <p className="text-gray-500 text-lg">
                Your wishlist is empty
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-[10px] shadow-1">

              <div className="w-full overflow-x-auto">

                <div className="min-w-[900px]">

                  {/* Table Header */}
                  <div className="flex items-center py-5 px-10 border-b">

                    <div className="min-w-[80px]"></div>

                    <div className="min-w-[420px]">
                      <p className="text-dark font-medium">Service</p>
                    </div>

                    <div className="min-w-[200px]">
                      <p className="text-dark font-medium">Price</p>
                    </div>

                    <div className="min-w-[150px] text-right">
                      <p className="text-dark font-medium">Action</p>
                    </div>

                  </div>

                  {/* Wishlist Items */}
                  {wishlistItems.map((item, key) => (
                    <SingleItem item={item} key={key} />
                  ))}

                </div>
              </div>

            </div>
          )}

        </div>
      </section>
    </>
  );
};