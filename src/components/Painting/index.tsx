"use client";
import React, { useState } from "react";
import Breadcrumb from "../Common/Breadcrumb";

import PaintingSingleGridItem from "../Shop/paintingSingleGridItem";
// import SingleListItem from "../Shop/SingleListItem";
import CustomSelect from "../ShopWithSidebar/CustomSelect";

import PaintingData from "../Shop/paintingData";

const Painting = () => {
  const [productStyle, setProductStyle] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState("0");

  const options = [
    { label: "All Services", value: "0" },
    { label: "Washing Machine", value: "1" },
    { label: "Refrigeartor", value: "2" },
    { label: "", value: "3" },
    { label: "Ac Uninstallation", value: "4" },
    { label: "Ac Gas Refilling", value: "5" },
  ];

  // 🔥 FILTER LOGIC
  const filteredServices =
    selectedCategory === "0"
      ? PaintingData
      : PaintingData.filter(
          (item) => item.categoryId === selectedCategory
        );

  return (
    <>
      <Breadcrumb
        title={"Explore All Services"}
        pages={["services", "/", "all services"]}
      />

      <section className="overflow-hidden relative pb-20 pt-5 lg:pt-20 xl:pt-28 bg-[#f3f4f6] -mt-50">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex gap-7.5">
            <div className="w-full">
              {/* Top Bar */}
              <div className="rounded-lg bg-white shadow-1 pl-3 pr-2.5 py-2.5 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap items-center gap-4">
                    
                    {/* 🔥 Dropdown Working */}
                    <CustomSelect
                      options={options}
                      onChange={(value: string) =>
                        setSelectedCategory(value)
                      }
                    />

                    <p>Explore All Services</p>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <button
                      onClick={() => setProductStyle("grid")}
                      className={`${
                        productStyle === "grid"
                          ? "bg-[#3683ab] border-[#3683ab] text-white"
                          : "text-dark bg-gray-1 border-gray-3"
                      } flex items-center justify-center w-10.5 h-9 rounded-[5px] border`}
                    >
                      Grid
                    </button>

                    <button
                      onClick={() => setProductStyle("list")}
                      className={`${
                        productStyle === "list"
                          ? "bg-[#3683ab] border-[#3683ab] text-white"
                          : "text-dark bg-gray-1 border-gray-3"
                      } flex items-center justify-center w-10.5 h-9 rounded-[5px] border`}
                    >
                      List
                    </button>
                  </div>
                </div>
              </div>

              {/* Products Grid/List */}
              <div
                className={`${
                  productStyle === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-7.5 gap-y-9"
                    : "flex flex-col gap-7.5"
                }`}
              >
                {filteredServices.map((item, key) =>
                  productStyle === "grid" ? (
                    <PaintingSingleGridItem item={item} key={key} />
                  ) : (
                    <PaintingSingleGridItem item={item} key={key} />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Painting;
