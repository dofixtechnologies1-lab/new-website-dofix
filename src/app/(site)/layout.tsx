"use client";

import { useEffect, useState } from "react";

import "../css/euclid-circular-a-font.css";
import "../css/style.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { ReduxProvider } from "@/redux/provider";
import { CartModalProvider } from "../context/CartSidebarModalContext";
import { ModalProvider } from "../context/QuickViewModalContext";
import { ModalProviderService } from "../context/QuickViewModalContextService";
import { PreviewSliderProvider } from "../context/PreviewSliderContext";

import QuickViewModal from "@/components/Common/QuickViewModal";
import CartSidebarModal from "@/components/Common/CartSidebarModal";
import PreviewSliderModal from "@/components/Common/PreviewSlider";
import ScrollToTop from "@/components/Common/ScrollToTop";
import PreLoader from "@/components/Common/PreLoader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <html lang="en">
      <body>
        {!mounted && <PreLoader />}

        {mounted && (
          <ReduxProvider>
            <CartModalProvider>
              <ModalProvider>
                <ModalProviderService>
                  <PreviewSliderProvider>
                    <Header />

                    {children}

                    <QuickViewModal />
                    <CartSidebarModal />
                    <PreviewSliderModal />
                  </PreviewSliderProvider>
                </ModalProviderService>
              </ModalProvider>
            </CartModalProvider>
          </ReduxProvider>
        )}

        {mounted && (
          <>
            <ScrollToTop />
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}