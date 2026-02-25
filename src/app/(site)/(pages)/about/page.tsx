import About from "@/components/About";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy Policy Page",
  description: "This is Privacy Policy",
  // other metadata
};

const AboutPage = () => {
  return (
    <main>
      <About />
    </main>
  );
};

export default AboutPage;
