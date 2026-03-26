import React from "react";
import BookingAddress from "@/components/BookingAddress";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Cart",
  description: " Cart Page",
  // other metadata
};

const BookingAddressPage = () => {
  return (
    <>
      <BookingAddress />
    </>
  );
};

export default BookingAddressPage;
