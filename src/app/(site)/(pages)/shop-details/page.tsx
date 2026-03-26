import React from "react";
import ShopDetails from "@/components/ShopDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Services Page",
  // other metadata
};

const ShopDetailsPage = () => {
  return (
    <main>
      <ShopDetails />
    </main>
  );
};

export default ShopDetailsPage;
