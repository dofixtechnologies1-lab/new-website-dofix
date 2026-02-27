"use client";
import React from "react";
import Discount from "./Discount";
import OrderSummary from "./OrderSummary";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { removeAllItemsFromCart } from "@/redux/features/cart-slice";
import SingleItem from "./SingleItem";
import Breadcrumb from "../Common/Breadcrumb";
import Link from "next/link";

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cartReducer.items);
  const dispatch = useAppDispatch();

  return (
    <>
      {/* Breadcrumb */}
      <section>
        <Breadcrumb title={"Cart"} pages={["Cart"]} />
      </section>

      {cartItems.length > 0 ? (
        <section className="py-12 bg-gray-100 min-h-screen">
          <div className="max-w-[900px] mx-auto px-4">

            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-dark">
                Your Cart
              </h2>

              <button
                onClick={() => dispatch(removeAllItemsFromCart())}
                className="text-[#3683ab] font-medium hover:underline"
              >
                Clear Cart
              </button>
            </div>

            {/* Cart Items */}
            <div className="space-y-5">
              {cartItems.map((item, key) => (
                <div
                  key={key}
                  className="bg-white rounded-xl shadow-sm p-5 border border-gray-200"
                >
                  <SingleItem item={item} />
                </div>
              ))}
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col lg:flex-row gap-6 mt-10">
              <Discount />
              <OrderSummary />
            </div>
          </div>
        </section>
      ) : (
        /* Empty Cart UI */
        <div className="flex flex-col items-center justify-center py-24 bg-gray-50 min-h-screen">
          <div className="bg-white shadow-md rounded-2xl p-10 text-center max-w-md w-full">
            
            <div className="mb-6">
              <svg
                className="mx-auto"
                width="90"
                height="90"
                viewBox="0 0 100 100"
                fill="none"
              >
                <circle cx="50" cy="50" r="50" fill="#F3F4F6" />
              </svg>
            </div>

            <h3 className="text-xl font-semibold mb-3">
              Your Cart is Empty
            </h3>

            <p className="text-gray-500 mb-6">
              Looks like you haven’t added any services yet.
            </p>

            <Link
              href="/"
              className="w-full flex justify-center font-medium text-white bg-[#3683ab] py-3 px-6 rounded-lg hover:bg-[#14455b] transition"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;