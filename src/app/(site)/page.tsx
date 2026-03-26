import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dofix | Home",
  description: "Dofix Home Page",
  
  // other metadata
};

export default function HomePage() {
  return (
    
    <>
      <Home />
    </>
  );
}
