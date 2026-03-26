"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BookingForm() {

  const router = useRouter();

  const [step, setStep] = useState(1);

  const [serviceType, setServiceType] = useState("On-site Service");
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState("");

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");

  const [address, setAddress] = useState<any>(null);

  const dates = [
    { day: "Tue", date: "17" },
    { day: "Wed", date: "18" },
    { day: "Thu", date: "19" },
    { day: "Fri", date: "20" },
    { day: "Sat", date: "21" },
  ];

  const slots = [
    "09:00 AM","10:00 AM","11:00 AM",
    "12:00 PM","01:00 PM","02:00 PM",
    "03:00 PM","04:00 PM","05:00 PM",
    "06:00 PM","07:00 PM","08:00 PM"
  ];

  // ✅ Load saved step + address
  useEffect(() => {

    const savedStep = localStorage.getItem("bookingStep");
    if (savedStep) {
      setStep(Number(savedStep));
    }

    const savedAddress = localStorage.getItem("selectedAddress");
    if (savedAddress) {
      setAddress(JSON.parse(savedAddress));
      setStep(2); // 🔥 always go to step 2 if address exists
    }

  }, []);

  // ✅ Save step
  useEffect(() => {
    localStorage.setItem("bookingStep", step.toString());
  }, [step]);


  // ✅ Save step
useEffect(() => {
  localStorage.setItem("bookingStep", step.toString());
}, [step]);

// 👇 YAHAN DALNA HAI
const validateForm = () => {

  if (step === 1) {
    if (!selectedSlot) {
      alert("Please select a time slot");
      return false;
    }
  }

  if (step === 2) {

    if (!customerName.trim()) {
      alert("Please enter customer name");
      return false;
    }

    if (customerPhone.length !== 10) {
      alert("Phone number must be 10 digits");
      return false;
    }

    if (!customerEmail.trim()) {
      alert("Please enter email");
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail)) {
      alert("Invalid email");
      return false;
    }

    if (!address) {
      alert("Please select address");
      return false;
    }
  }

  return true;
};

  return (
    <div className="min-h-screen bg-gray flex justify-center items-start pt-60 sm:pt-55 lg:pt-55 pb-10">
    
      {/* CONTAINER */}
      <div className="w-full max-w-[350px] sm:max-w-[600px] lg:max-w-[800px] bg-white rounded-3xl shadow-xl overflow-hidden relative pb-24">
     
        {/* HEADER */}
        <div className="flex items-center px-4 py-4 border-b">
          <button onClick={() => router.back()} className="text-xl">←</button>
          <h2 className="flex-1 text-center text-lg font-semibold">
            Book Service
          </h2>
        </div>

        {/* STEP INDICATOR */}
        <div className="flex items-center justify-between px-6 mt-4">

          {["Schedule", "Details", "Review"].map((label, i) => (
            <div key={i} className="flex-1 text-center">

              <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center
                ${step >= i+1 ? "bg-[#3683ab] text-white" : "border text-gray-400"}`}>
                {step > i+1 ? "✓" : i+1}
              </div>

              <p className={`mt-1 text-sm ${
                step === i+1 ? "text-[#3683ab]" : "text-gray-400"
              }`}>
                {label}
              </p>

            </div>
          ))}

        </div>

        {/* ================= STEP 1 ================= */}
        {step === 1 && (
          <div className="px-4 mt-6">

            <h3 className="text-lg font-semibold">
              Step 1 • Schedule Service
            </h3>

            <p className="text-sm text-gray-500 mt-1 mb-4">
              Choose service type, date and preferred time slot
            </p>

            <h4 className="font-medium mb-2">Service Preference</h4>

            <div className="flex gap-3 mb-5">
              {["On-site Service", "Technician Pickup"].map((type) => (
                <button
                  key={type}
                  onClick={() => setServiceType(type)}
                  className={`flex-1 py-3 rounded-xl text-sm ${
                    serviceType === type
                      ? "border-2 border-[#3683ab] text-[#3683ab]"
                      : "bg-white border text-gray-600"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            <h4 className="font-medium mb-2">Select Date</h4>

            <div className="flex gap-3 mb-5 overflow-x-auto">
              {dates.map((d, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedDate(i)}
                  className={`min-w-[70px] py-3 rounded-xl text-sm ${
                    selectedDate === i
                      ? "bg-[#3683ab] text-white"
                      : "bg-white border"
                  }`}
                >
                  <div>{d.day}</div>
                  <div className="font-semibold">{d.date}</div>
                </button>
              ))}
            </div>

            <h4 className="font-medium mb-2">Select Slot</h4>

            <div className="grid grid-cols-3 gap-3 mb-6">
              {slots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setSelectedSlot(slot)}
                  className={`py-3 rounded-xl text-sm ${
                    selectedSlot === slot
                      ? "border-2 border-[#3683ab] text-[#3683ab]"
                      : "border text-gray-400"
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>

          </div>
        )}

        {/* ================= STEP 2 ================= */}
        {step === 2 && (
          <div className="px-4 mt-6">

            <h3 className="text-lg font-semibold">
              Step 2 • Customer & Address
            </h3>

            <p className="text-sm text-gray-500 mt-1 mb-4">
              Assign customer details and select service location
            </p>

            <h4 className="font-medium mb-3">Assign Customer Details</h4>

            <div className="space-y-3 mb-5">

              <input
                placeholder="Customer Name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full bg-white border rounded-xl p-4"
              />

              <input
                placeholder="Customer Phone"
                value={customerPhone}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^0-9]/g, "");
                  if (value.length <= 10) {
                    setCustomerPhone(value);
                  }
                }}
                className="w-full bg-white border rounded-xl p-4"
              />

              <input
                placeholder="Customer Email"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                className="w-full bg-white border rounded-xl p-4"
              />

            </div>

            <h4 className="font-medium mb-2">Service Address</h4>

            <div
              onClick={() => router.push("/booking-address")}
              className="bg-white border rounded-xl p-4 flex justify-between items-center cursor-pointer"
            >
              <span className="text-gray-500">
                {address ? address.fullAddress : "Select an Address"}
              </span>

              <div className="w-10 h-10 bg-[#e3eef3] rounded-full flex items-center justify-center">
                ✏️
              </div>
            </div>

          </div>
        )}

        {/* ================= STEP 3 ================= */}
        {step === 3 && (
          <div className="px-4 mt-6">

            <h3 className="text-lg font-semibold mb-4">
              Review Booking
            </h3>

            <div className="text-sm space-y-2">
              <p><b>Service:</b> {serviceType}</p>
              <p><b>Date:</b> {dates[selectedDate].date}</p>
              <p><b>Slot:</b> {selectedSlot}</p>
              <p><b>Name:</b> {customerName}</p>
              <p><b>Phone:</b> {customerPhone}</p>
            </div>

          </div>
        )}

        {/* BOTTOM BUTTON */}
        <div className="absolute bottom-0 left-0 right-0 bg-white p-4 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">

          {step === 1 && (
            <button
             onClick={() => {
              if (!validateForm()) return;
              setStep(2);
            }}
              className="w-full bg-[#3683ab] text-white py-4 rounded-xl text-lg"
            >
              Continue
            </button>
          )}

          {step === 2 && (
            <div className="flex gap-3">
              <button
                onClick={() => setStep(1)}
                className="w-1/2 border py-4 rounded-xl text-[#3683ab]"
              >
                Back
              </button>

              <button
                onClick={() => {
                if (!validateForm()) return;
                setStep(3);
              }}
                className="w-1/2 bg-[#3683ab] text-white py-4 rounded-xl"
              >
                Review Booking
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="flex gap-3">
              <button
                onClick={() => setStep(2)}
                className="w-1/2 border py-4 rounded-xl"
              >
                Back
              </button>

              <button
                onClick={() => router.push("/thank-you")}
                className="w-1/2 bg-[#3683ab] text-white py-4 rounded-xl"
              >
                Confirm
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}