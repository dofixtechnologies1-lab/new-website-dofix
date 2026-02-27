"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const dates = [
  { day: "Thu", date: "26 Feb" },
  { day: "Fri", date: "27 Feb" },
  { day: "Sat", date: "28 Feb" },
  { day: "Sun", date: "01 Mar" },
  { day: "Mon", date: "02 Mar" },
];

const slots = [
  "09:00 AM","10:00 AM","11:00 AM",
  "12:00 PM","01:00 PM","02:00 PM",
  "03:00 PM","04:00 PM","05:00 PM",
  "06:00 PM","07:00 PM","08:00 PM"
];

export default function BookingForm() {
  const router = useRouter();

  const [serviceType, setServiceType] = useState("On-site Service");
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cash");

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4 pt-40">
      <div className="max-w-[800px] mx-auto bg-white rounded-3xl shadow-xl p-6 space-y-6">

        <h2 className="text-2xl font-semibold text-center">Book Service</h2>

        {/* Service Preference */}
        <div>
          <h3 className="font-medium mb-3">Service Preference</h3>
          <div className="flex gap-3">
            {["On-site Service", "Technician Pickup"].map((type) => (
              <button
                key={type}
                onClick={() => setServiceType(type)}
                className={`flex-1 py-2 rounded-xl border transition ${
                  serviceType === type
                    ? "bg-[#3683ab] text-white border-[#3683ab]"
                    : "border-gray-300 text-gray-600"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Select Date */}
        <div>
          <h3 className="font-medium mb-3">Select Date</h3>
          <div className="flex gap-3 overflow-x-auto">
            {dates.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedDate(index)}
                className={`min-w-[80px] py-2 rounded-xl border text-sm ${
                  selectedDate === index
                    ? "bg-[#3683ab] text-white border-[#3683ab]"
                    : "border-gray-300 text-gray-600"
                }`}
              >
                <div>{item.day}</div>
                <div>{item.date}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Select Slot */}
        <div>
          <h3 className="font-medium mb-3">Select Slot</h3>
          <div className="grid grid-cols-3 gap-3">
            {slots.map((slot, index) => (
              <button
                key={index}
                onClick={() => setSelectedSlot(slot)}
                className={`py-2 rounded-xl border text-sm ${
                  selectedSlot === slot
                    ? "bg-[#3683ab] text-white border-[#3683ab]"
                    : "border-gray-300 text-gray-600"
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        {/* Payment Method */}
        <div>
          <h3 className="font-medium mb-3">Payment Method</h3>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={paymentMethod === "cash"}
                onChange={() => setPaymentMethod("cash")}
              />
              Cash After Service
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={paymentMethod === "online"}
                onChange={() => setPaymentMethod("online")}
              />
              Online After Service
            </label>
          </div>
        </div>

        {/* Address Field */}
        <div>
          <h3 className="font-medium mb-3">Add Address</h3>
          <div
            onClick={() => router.push("/booking-address")}
            className="w-full border p-3 rounded-xl cursor-pointer flex justify-between items-center text-gray-500 hover:border-[#3683ab]"
          >
            <span>Select an Address</span>
            ✏️
          </div>
        </div>

        {/* Submit */}
        <button className="w-full bg-[#3683ab] hover:bg-[#14455b] text-white py-4 rounded-2xl font-semibold text-lg transition">
          Create Booking
        </button>

      </div>
    </div>
  );
}