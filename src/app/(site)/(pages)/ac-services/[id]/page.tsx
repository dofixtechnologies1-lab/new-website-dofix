"use client";

import { useParams, useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  addItemToCart,
  selectCartItems,
  selectTotalPrice,
} from "@/redux/features/cart-slice";
import shopData from "@/components/Shop/shopData";
import Image from "next/image";
import { useState } from "react";
import VariantModal from "@/components/VarientModal";

export default function ServiceVariantPage() {

  const params = useParams();
  const id = (params?.id);

  const router = useRouter();
  const dispatch = useAppDispatch();

  // const service = shopData.find((s) => s.id === id);
  const service = shopData.find((s) => s.id === id);

  const cartItems = useAppSelector(selectCartItems);
  const totalPrice = useAppSelector(selectTotalPrice);

  const [selectedVariant, setSelectedVariant] = useState<any>(null);

  if (!service) return <div className="p-10">Service Not Found</div>;

  const handleAdd = (variant: any) => {
    dispatch(
      addItemToCart({
        id: variant.id,
        title: variant.title,
        price: variant.price,
        discountedPrice: variant.oldPrice,
        quantity: 1,
        imgs: service.imgs,
      })
    );
  };

  return (
    <div className="min-h-screen bg-gray pt-55 pb-40 px-4 md:px-8">

      {/* Hero Image */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8">

        <div className="relative">

          <Image
            src={service.imgs.thumbnails[0]}
            alt={service.title}
            width={1200}
            height={400}
            className="w-full h-[220px] object-cover"
          />

          <div className="absolute bottom-4 left-4 text-white text-2xl font-semibold">
            {service.title}
          </div>

        </div>

        <div className="px-5 py-4 flex items-center text-gray-600 text-sm border-t">
          <span className="mr-2">🏠</span>
          AC Service, Repair & Installation
        </div>

      </div>

      {/* Section Title */}
      <h2 className="text-xl md:text-2xl font-bold mb-6">
        Available Services
      </h2>

      {/* Variant Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {service.variants.map((variant) => (

          <div
            key={variant.id}
            onClick={() => setSelectedVariant(variant)}
            className="bg-white rounded-xl shadow-sm p-4 cursor-pointer hover:shadow-md transition"
          >

            {/* Top Section */}
            <div className="flex justify-between items-start">

              <Image
                src={service.imgs.thumbnails[0]}
                alt={variant.title}
                width={160}
                height={110}
                className="rounded-lg object-cover h-[110px] w-[160px]"
              />

              <button
                onClick={(e) => {
                  e.stopPropagation();   // prevents modal
                  handleAdd(variant);
                }}
                className="bg-[#2b7a9a] text-white px-6 py-2 rounded-md text-sm"
              >
                Add
              </button>

            </div>

            {/* Title */}
            <h3 className="font-semibold text-lg mt-4">
              {variant.title}
            </h3>

            {/* Price */}
            <div className=" mt-1">

              <span className="font-bold text-lg text-[#14455b]">
                ₹{variant.price}
              </span>

              {variant.oldPrice && (
                <span className="line-through text-md text-gray-400 ml-2">
                  ₹{variant.oldPrice}
                </span>
              )}

            </div>

            {/* Description */}
            <p className="text-sm text-gray-500 mt-2">
              {variant.description}
            </p>

            {/* Rate Card */}
            <div className="flex justify-between items-center mt-3">

              <span className="text-yellow-500 italic text-sm">
                The Dofix Rate Card
              </span>

              <button
                onClick={(e) => {
                  e.stopPropagation(); // prevent modal
                  router.push(`/rate-card/${service.rateCardKey}`);
                }}
                className="text-[#3683ab] font-medium"
              >
                View Rate Card
              </button>

            </div>

          </div>

        ))}

      </div>

      {/* About Service */}
      {service.description?.about && (

        <div className="mt-8">

          <h3 className="text-lg font-semibold mb-2">
            About This Service
          </h3>

          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            {service.description.about.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

        </div>

      )}

      {/* Benefits */}
      {service.description?.benefits && (

        <div className="mt-6">

          <h3 className="text-lg font-semibold mb-2">
            Benefits
          </h3>

          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            {service.description.benefits.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

        </div>

      )}

      {/* Variant Modal */}
      {selectedVariant && (
        <VariantModal
          variant={selectedVariant}
          service={service}
          onClose={() => setSelectedVariant(null)}
        />
      )}

      {/* Sticky Cart */}
      {cartItems.length > 0 && (

        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] md:w-[600px] bg-[#2b7a9a] text-white rounded-xl shadow-lg flex justify-between items-center px-6 py-4">

          <div>
            <p className="text-sm">
              {cartItems.length} item in cart
            </p>

            <p className="text-lg font-semibold">
              ₹{totalPrice}
            </p>
          </div>

          <button
            onClick={() => router.push("/cart")}
            className="bg-white text-[#2b7a9a] px-6 py-2 rounded-lg font-semibold"
          >
            View Cart
          </button>

        </div>

      )}

    </div>
  );
}