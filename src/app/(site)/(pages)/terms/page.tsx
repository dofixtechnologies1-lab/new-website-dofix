import Terms from "@/components/Terms";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Terms & Condition",
  description: "This is Terms & Condition Page",
  // other metadata
};

const TermsPage = () => {
  return (
    <main>
      <Terms />
    </main>
  );
};

export default TermsPage;
