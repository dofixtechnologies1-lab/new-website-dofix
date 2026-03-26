"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { removeAllItemsFromCart } from "@/redux/features/cart-slice";

export default function ThankYouPage() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    // Page load hote hi cart clear ho jayega
    dispatch(removeAllItemsFromCart());
  }, [dispatch]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray px-4">
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-lg w-full text-center">

        <h1 className="text-2xl font-semibold mb-3">
          Thank You!
        </h1>

        <p className="text-gray-600 mb-6">
          Your booking successfully submit.
        </p>

        <Link
          href="/"
          className="bg-[#3683ab] text-white px-6 py-3 rounded-lg"
        >
          Back to Home
        </Link>

      </div>
    </div>
  );
}