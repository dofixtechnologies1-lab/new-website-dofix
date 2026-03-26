"use client";
import React, { useState } from "react";

const RateCard = () => {
  const [open, setOpen] = useState(false);

  const rateData = [
    { name: "Non-Inverter PCB repaired", price: "₹1500" },
    { name: "Inverter PCB repaired", price: "₹4500" },
    { name: "LVT (Transformer)", price: "₹900 + ₹349 (Labour)" },
    { name: "Replace sensor", price: "₹350 + ₹499 (Labour)" },
    { name: "Contactor replaced", price: "₹500 + ₹499 (Labour)" },
    { name: "Convert PCB with remote", price: "₹1500" },
    { name: "Fan Capacitor - 2.5 to 10 mfd", price: "₹250 + ₹449 (Labour)" },
  ];

  return (
    <div className="mt-6 rounded-xl border border-gray-200 overflow-hidden">

      {/* Top Click Bar */}
      <button
        onClick={() => (window.location.href = "/ac-rate-card")}
        className="w-full flex justify-between items-center px-5 py-4 bg-gray-100 hover:bg-gray-200 transition"
      >
        <div className="flex items-center gap-3">
          <span className="text-dark font-medium">
            Rate card
          </span>
        </div>
      
        <span className="text-xl">›</span>
      </button>

      {/* Expand Section */}
      {open && (
        <div className="bg-white">

          {/* Black Header */}
          <div className="bg-black text-white px-5 py-3 font-semibold">
            Electrical Parts
          </div>

          {/* Labour Note */}
          <div className="bg-gray-50 text-sm text-gray-600 px-5 py-3 border-b">
            Labour charges are capped at ₹499 per appliance.  
            All prices include spare parts, sourcing & partner conveyance.
          </div>

          {/* Table */}
          <div className="divide-y">
            <div className="grid grid-cols-2 font-semibold px-5 py-3 bg-gray-100">
              <p>Description</p>
              <p className="text-right">Service Charge</p>
            </div>

            {rateData.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-2 px-5 py-4 text-sm hover:bg-gray-50 transition"
              >
                <p>{item.name}</p>
                <p className="text-right font-medium">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RateCard;