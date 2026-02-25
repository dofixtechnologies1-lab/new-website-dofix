"use client";

import React, { useState } from "react";
import Breadcrumb from "../Common/Breadcrumb";
import SingleGridItem from "../Shop/SingleGridItem";
import SingleListItem from "../Shop/SingleListItem";
import CustomSelect from "../ShopWithSidebar/CustomSelect";
import shopData from "../Shop/shopData";

const AcRepairInstallation = () => {
  const [productStyle, setProductStyle] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState("0");

  const options = [
    { label: "All Services", value: "0" },
    { label: "Ac Service", value: "1" },
    { label: "Ac Repair", value: "2" },
    { label: "Ac Installation", value: "3" },
    { label: "Ac Uninstallation", value: "4" },
    { label: "Ac Gas Refilling", value: "5" },
  ];

  const filteredServices =
    selectedCategory === "0"
      ? shopData
      : shopData.filter(
          (item) => item.categoryId === selectedCategory
        );

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb
        title={"Ac Repair & Installation"}
        pages={["", "/", "Ac Services"]}
      />

      <section className="bg-gray-100 py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Bar */}
          <div className="bg-gray rounded-xl shadow-sm p-4 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <CustomSelect
                  options={options}
                  onChange={(value: string) =>
                    setSelectedCategory(value)
                  }
                />
                <p className="text-gray-700 font-medium">
                  All Available Services
                </p>
              </div>

            </div>
          </div>

          {/* Grid / List Section */}
          <div
            className={
              productStyle === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6"
                : "flex flex-col gap-6"
            }
          >
            {filteredServices.map((item, key) =>
              productStyle === "grid" ? (
                <SingleGridItem item={item} key={key} />
              ) : (
                <SingleListItem item={item} key={key} />
              )
            )}
          </div>

        </div>
      </section>
    </>
  );
};

export default AcRepairInstallation;