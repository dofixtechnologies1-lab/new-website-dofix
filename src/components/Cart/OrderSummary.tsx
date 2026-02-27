"use client";
import { selectTotalPrice } from "@/redux/features/cart-slice";
import { useAppSelector } from "@/redux/hooks";
import React from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const OrderSummary = () => {
  const router = useRouter();
  const cartItems = useAppSelector((state) => state.cartReducer.items);
  const totalPrice = useSelector(selectTotalPrice);

  const tax = Math.round(totalPrice * 0.18); // 18% GST example
  const finalAmount = totalPrice + tax;

  return (
    <div className="w-full lg:max-w-[420px]">
      <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6">

        {/* Heading */}
        <h3 className="text-xl font-semibold mb-5">
          Billing Details
        </h3>

        {/* Product List */}
        <div className="space-y-4 mb-6">
          {cartItems.map((item, key) => (
            <div key={key} className="flex justify-between text-sm">
              <span className="text-gray-600">
                {item.title} × {item.quantity}
              </span>
              <span className="font-medium">
                ₹{item.discountedPrice * item.quantity}
              </span>
            </div>
          ))}
        </div>

        <hr className="mb-5" />

        {/* Price Breakdown */}
        <div className="space-y-3 text-sm">
          <div className="flex justify-between text-gray-600">
            <span>Item Total</span>
            <span>₹{totalPrice}</span>
          </div>

          <div className="flex justify-between text-gray-600">
            <span>Tax & Fees (18%)</span>
            <span>₹{tax}</span>
          </div>
        </div>

        <hr className="my-5" />

        {/* Total */}
        <div className="flex justify-between items-center text-lg font-semibold">
          <span>Total Amount</span>
          <span className="text-[#3683ab]">
            ₹{finalAmount}
          </span>
        </div>

        {/* CTA Button */}
        <button
          type="button"
          onClick={() => router.push("/booking")}
          className="w-full mt-6 bg-[#3683ab] text-white py-3 rounded-xl font-medium hover:bg-[#14455b] transition"
        >
          Continue To Booking
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;