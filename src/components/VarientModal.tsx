"use client";

import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addItemToCart } from "@/redux/features/cart-slice";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Props {
  variant: any;
  service: any;
  onClose: () => void;
}

export default function VariantModal({ variant, service, onClose }: Props) {

  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  if (!variant) return null;

  const discount = variant.oldPrice
    ? Math.round(((variant.oldPrice - variant.price) / variant.oldPrice) * 100)
    : 0;

  const imageSrc = variant.img || service.imgs.thumbnails[0];

  // ADD TO CART
  const handleAddToCart = () => {

    dispatch(
      addItemToCart({
        id: variant.id,
        title: variant.title,
        price: variant.price,
        discountedPrice: variant.oldPrice,
        quantity: 1,
        imgs: {
          thumbnails: [imageSrc],
          previews: [imageSrc],
        },
      })
    );

    onClose();
  };

  // VIEW RATE CARD
  const handleViewRateCard = () => {
    router.push(`/rate-card/${service.rateCardKey}`);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-start justify-center pt-55 px-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-xs rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-1 right-1 bg-[#14455b] rounded-full w-7 h-7 flex items-center justify-center text-white shadow"
        >
          ✕
        </button>

        {/* Image */}
        <div className="p-3 pb-0">
          <Image
            src={imageSrc}
            alt={variant.title}
            width={400}
            height={200}
            className="w-full h-28 object-cover rounded-lg"
          />
        </div>

        {/* Content */}
        <div className="p-3">

          <h2 className="text-sm font-semibold mb-1">
            {variant.title}
          </h2>

          {/* Price */}
          <div className="flex items-center gap-2 mb-1">

            <span className="text-lg font-bold">
              ₹{variant.price}
            </span>

            {variant.oldPrice && (
              <span className="line-through text-gray-400 text-xs">
                ₹{variant.oldPrice}
              </span>
            )}

            {variant.oldPrice && (
              <span className="bg-[#2c7da0] text-white text-[10px] px-2 py-1 rounded-full">
                {discount}% OFF
              </span>
            )}

          </div>

          {variant.oldPrice && (
            <p className="text-green-600 text-[11px] mb-2">
              You save ₹{variant.oldPrice - variant.price}
            </p>
          )}

          {/* About */}
          {service.description?.about && (
            <ul className="text-[11px] text-gray-600 space-y-1 mb-2">
              {service.description.about.slice(0, 2).map((item: string, i: number) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          )}

          {/* Benefits */}
          {service.description?.benefits && (
            <ul className="text-[11px] text-gray-600 space-y-1">
              {service.description.benefits.slice(0, 2).map((item: string, i: number) => (
                <li key={i}>✓ {item}</li>
              ))}
            </ul>
          )}

        </div>

        {/* Buttons */}
        <div className="p-3 pt-0 space-y-2">

          <button
            onClick={handleAddToCart}
            className="w-full bg-[#2c7da0] text-white py-2 rounded-lg text-sm font-medium hover:bg-[#256d8a]"
          >
            Add to Cart
          </button>

          <button
            onClick={handleViewRateCard}
            className="w-full border border-[#2c7da0] py-2 rounded-lg text-[#2c7da0] text-xs hover:bg-[#2c7da0] hover:text-white"
          >
            View Rate Card →
          </button>

        </div>

      </div>
    </div>
  );
}