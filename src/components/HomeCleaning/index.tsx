"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Breadcrumb from "../Common/Breadcrumb";
import CustomSelect from "../ShopWithSidebar/CustomSelect";
import homeCleaningData from "../Shop/homeCleaningData";
import { Product } from "@/types/product";

const HomeCleaning = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("0");

  const options = [
    { label: "All Services", value: "0" },
    { label: "Bathroom Cleaning", value: "1" },
    { label: "Kitchen Cleaning", value: "2" },
    { label: "Full Home Cleaning", value: "3" },
  ];

const filteredServices =
  selectedCategory === "0"
    ? homeCleaningData
    : homeCleaningData.filter(
        (item) => item.categoryId === selectedCategory
      );

  return (
    <>
      <Breadcrumb
        title={"Home Cleaning Services"}
        pages={["", "/", "Home Cleaning Services"]}
      />

      <section className="bg-gray py-8">
        <div className="max-w-[800px] mx-auto px-4">

          {/* Filter Box */}
          <div className="bg-white rounded-2xl shadow-sm p-4 mb-8">
            <div className="flex items-center gap-4">
              <CustomSelect
                options={options}
                onChange={(value: string) =>
                  setSelectedCategory(value)
                }
              />
              <p className="font-medium">
                {filteredServices.length} Services Available
              </p>
            </div>
          </div>

          {/* Service Cards */}
          <div className="flex flex-col gap-6">

            {filteredServices.map((item) => (

              <div
                key={item.id}
                onClick={() => router.push(`/home-cleaning/${item.id}`)}
                className="cursor-pointer bg-white rounded-3xl shadow-md p-5 flex gap-5 hover:shadow-lg transition"
              >

                {/* Image */}
                <div className="w-40 h-40 rounded-2xl overflow-hidden">
                  <img
                    src={item.imgs?.thumbnails?.[0]}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>

                  <div className="text-sm text-gray-500 mt-2">
                    {item.reviews} Reviews
                  </div>

                  <div className="text-[#3683ab] mt-4 font-medium">
                    View Options →
                  </div>
                </div>

              </div>

            ))}

          </div>

        </div>
      </section>
    </>
  );
};

export default HomeCleaning;