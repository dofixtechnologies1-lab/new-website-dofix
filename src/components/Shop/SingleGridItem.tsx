"use client";
import React from "react";
import { Product } from "@/types/product";
import Link from "next/link";
import Image from "next/image";

const SingleGridItem = ({ item }: { item: Product }) => {
  return (
    <Link
      href={`/ac-services/${item.id}`}
      className="block group"
    >
      <div className="bg-white rounded-3xl shadow-md hover:shadow-lg transition duration-300 p-6 flex flex-col sm:flex-row items-center gap-6">

        {/* Image */}
        <div className="w-40 h-40 rounded-2xl overflow-hidden flex-shrink-0">
          <Image
            src={item.imgs.previews[0]}
            alt={item.title}
            width={160}
            height={160}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center flex-1">

          <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-[#3683ab] transition">
            {item.title}
          </h3>

          <p className="text-gray-500 mt-2">
            {item.reviews} Reviews
          </p>

          <span className="text-[#3683ab] mt-4 font-medium">
            View Options →
          </span>

        </div>

      </div>
    </Link>
  );
};

export default SingleGridItem;