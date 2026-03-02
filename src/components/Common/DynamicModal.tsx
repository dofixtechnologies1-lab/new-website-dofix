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

  // 🔥 Extra safety — agar slug null ho to render mat karo
  if (!categorySlug) return null;

  const subCategories = subCategoryMapping[categorySlug];

  // 🔥 Agar mapping exist nahi karti to render mat karo
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white w-[95%] max-w-5xl rounded-2xl shadow-2xl p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-600 hover:text-black text-2xl"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-3xl font-semibold mb-8 capitalize">
          {categorySlug.replace(/-/g, " ")}
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {subCategories.map((sub: any) => (
            <div
              key={sub.id}
              onClick={(e) => {
                e.stopPropagation();
                onClose();

                router.push(`/${categorySlug}/${sub.id}`);
              }}
              className="cursor-pointer border rounded-xl p-5 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="h-24 rounded-lg mb-4 overflow-hidden bg-gray-100 flex items-center justify-center">
                <img
                  src={sub.img}
                  alt={sub.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-semibold text-lg text-center">
                {sub.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}