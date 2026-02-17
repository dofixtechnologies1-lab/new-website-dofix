import React from "react";
import ACServices from "@/components/Services/AC";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dofix Technologies Pvt Ltd",
  description: "This is Service Page for Dofix",
  // other metadata
};

const Services = () => {
  return (
    <main>
      <ACServices />
    </main>
  );
};

export default Services;
