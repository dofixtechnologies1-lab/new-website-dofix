import React from "react";
import BookingService from "@/components/BookingForm";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Booking",
  description: " Booking Page",
  // other metadata
};

const BookingPage = () => {
  return (
    <>
      <BookingService />
    </>
  );
};

export default BookingPage;
