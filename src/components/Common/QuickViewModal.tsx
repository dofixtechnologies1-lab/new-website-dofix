"use client";
import React, { useEffect, useState } from "react";
import { useModalContext } from "@/app/context/QuickViewModalContext";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import RateCardPreview from "@/components/rate-card/RateCardPreview";
import { usePreviewSlider } from "@/app/context/PreviewSliderContext";
import { updateproductDetails } from "@/redux/features/product-details";
import { usePathname, useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";

const QuickViewModal = () => {
  const { isModalOpen, closeModal } = useModalContext();
  const { openPreviewModal } = usePreviewSlider();

  const [activePreview] = useState(0);

  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const product = useAppSelector((state) => state.quickViewReducer.value);

  const handlePreviewSlider = () => {
    dispatch(updateproductDetails(product));
    openPreviewModal();
  };

  const handleBookNow = () => {
    if (!product) return;
    router.push(`/service/${product.id}`);
    closeModal();
  };

  useEffect(() => {
    if (isModalOpen) closeModal();
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement;
      if (!target.closest(".modal-content")) closeModal();
    }

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  if (!product) return null;

  return (
    <div
      className={`${
        isModalOpen ? "z-[9999]" : "hidden"
      } fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4`}
    >
      <div className="modal-content w-full max-w-[1100px] bg-white rounded-2xl shadow-2xl p-8 relative max-h-[90vh] overflow-y-auto">

        {/* Close Button */}
        <button
          onClick={closeModal}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-50 flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-md hover:bg-gray-100 transition"
        >
          ✕
        </button>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT IMAGE */}
          <div className="relative flex items-center justify-center w-full bg-gray-50 rounded-xl">
            {product?.imgs?.previews?.[activePreview] && (
              <Image
                src={product.imgs.previews[activePreview]}
                alt="preview"
                width={450}
                height={450}
                className="object-contain rounded-xl"
              />
            )}
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col">

            {/* Title */}
            <h3 className="text-2xl font-semibold bg-[#d7f1ff] text-[#3683ab] px-6 py-2.5 rounded-md mb-4 w-fit">
              {product.title}
            </h3>

            {/* About Service */}
            {product?.description?.about && (
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-800 mb-2">
                  Service Includes
                </h4>

                <ul className="text-gray-600 text-sm space-y-1">
                  {product.description.about.slice(0, 4).map((item: string, index: number) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Benefits */}
            {product?.description?.benefits && (
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-800 mb-2">
                  Benefits
                </h4>

                <ul className="text-gray-600 text-sm space-y-1">
                  {product.description.benefits.slice(0, 3).map((item: string, index: number) => (
                    <li key={index}>✔ {item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Rate Card */}
            {product?.rateCardKey && (
              <div className="mb-6">
                <RateCardPreview rateCardKey={product.rateCardKey} />
              </div>
            )}

            {/* Book Now */}
            <button
              onClick={handleBookNow}
              className="w-[220px] bg-[#3683ab] hover:bg-[#14455b] text-white py-3 rounded-lg font-semibold transition shadow-md"
            >
              Book Now
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;