"use client";
import { rateCardsData } from "@/Data/rateCardsData";

interface Props {
  rateCardKey: string;
}

const RateCardTable = ({ rateCardKey }: Props) => {
  const category = rateCardsData[rateCardKey];

  if (!category)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">
          No rate card available.
        </p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">

          {/* Heading */}
          <div className="px-6 md:px-8 py-6 border-b">
            <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
              {category.heading}
            </h1>
          </div>

          {/* Note */}
          {category.note && (
            <div className="bg-gray-50 text-gray-600 text-sm px-6 md:px-8 py-4 border-b">
              {category.note}
            </div>
          )}

          {/* Desktop Table Header */}
          <div className="hidden md:grid grid-cols-3 bg-gray-100 px-8 py-4 font-semibold text-gray-700 text-sm">
            <p>Sr. No.</p>
            <p>Description</p>
            <p className="text-right">Service Charge</p>
          </div>

          {/* Rows */}
          <div className="divide-y">
            {category.items.map((item, index) => (
              <div key={index}>

                {/* Desktop Row */}
                <div className="hidden md:grid grid-cols-3 px-8 py-4 text-sm text-gray-700 hover:bg-gray-50 transition">
                  <p>{index + 1}</p>
                  <p>{item.name}</p>
                  <p className="text-right font-medium text-[#3683ab]">
                    {item.price}
                  </p>
                </div>

                {/* Mobile Card Layout */}
                <div className="md:hidden px-6 py-4 space-y-2 bg-white">
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold text-gray-600">
                      Sr. No.
                    </span>
                    <span>{index + 1}</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="font-semibold text-gray-600">
                      Description
                    </span>
                    <span className="text-right max-w-[60%]">
                      {item.name}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="font-semibold text-gray-600">
                      Service Charge
                    </span>
                    <span className="font-medium text-[#3683ab]">
                      {item.price}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default RateCardTable;