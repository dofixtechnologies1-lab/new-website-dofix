import React from "react";
// import ACServices from "@/components/Services/AC";
import ShopWithoutSidebar from "@/components/ShopWithoutSidebar";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dofix Technologies Pvt Ltd",
  description: "This is Service Page for Dofix",
  // other metadata
};

const Services = () => {
  return (
    <main>
      <ShopWithoutSidebar />
    </main>
  );
};

export default Services;
