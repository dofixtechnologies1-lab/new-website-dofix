"use client";

import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-lg w-full text-center">

        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-3xl">
            ✓
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-3">
          Thank You!
        </h1>

        {/* Message */}
        <p className="text-gray-600 mb-6">
          Your service request has been successfully submitted.
          Our team will contact you shortly to confirm the booking.
        </p>

        {/* Booking Info */}
        <div className="bg-gray-50 rounded-lg p-4 text-left mb-6">
          <p className="text-sm text-gray-600">
            <strong>Booking ID:</strong> #DFX12345
          </p>
          <p className="text-sm text-gray-600">
            <strong>Status:</strong> Pending Confirmation
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <Link
            href="/"
            className="bg-[#3683ab] text-white px-6 py-3 rounded-lg hover:bg-[#14455b] transition"
          >
            Back to Home
          </Link>

          <Link
            href="/account"
            className="border border-[#3683ab] text-[#3683ab] px-6 py-3 rounded-lg hover:bg-blue-50 transition"
          >
            View My Bookings
          </Link>

        </div>

      </div>

    </div>
  );
}