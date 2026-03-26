import Signin from "@/components/Auth/Signin";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in Page",
  // other metadata
};

const SigninPage = () => {
  return (
    <main>
      <Signin />
    </main>
  );
};

export default SigninPage;
