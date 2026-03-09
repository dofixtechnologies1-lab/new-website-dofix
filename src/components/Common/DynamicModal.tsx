"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { subCategoryMapping } from "@/Data/subCategoriesMapping";

interface Props {
  categorySlug: string | null;
  onClose: () => void;
}

export default function DynamicModal({
  categorySlug,
  onClose,
}: Props) {
  const router = useRouter();

  if (!categorySlug) return null;

  const subCategories = subCategoryMapping[categorySlug];

  if (!subCategories) return null;

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm p-4 overflow-y-auto"
      onClick={onClose}
    >
      {/* Center Wrapper */}
      <div className="min-h-full flex items-center justify-center pt-20">

        {/* Modal */}
        <div
          className="bg-white w-[95%] max-w-5xl rounded-2xl shadow-2xl p-4 md:p-8 relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
          >
            ✕
          </button>

          {/* Title */}
          <h2 className="text-xl md:text-2xl font-semibold mb-6 capitalize">
            {categorySlug.replace(/-/g, " ")}
          </h2>

          {/* Sub Categories Grid */}
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">

            {subCategories.map((sub: any) => (
              <div
                key={sub.id}
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                  router.push(`/${categorySlug}/${sub.id}`);
                }}
                className="cursor-pointer rounded-xl p-3 md:p-5 hover:shadow-lg hover:scale-105 transition-all duration-300 bg-white"
              >

                {/* Image */}
                <div className="h-16 md:h-24 rounded-lg mb-2 overflow-hidden bg-gray-100">
                  <img
                    src={sub.img}
                    alt={sub.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-xs md:text-lg text-center leading-tight">
                  {sub.title}
                </h3>

              </div>
            ))}

          </div>

        </div>
      </div>
    </div>
  );
}