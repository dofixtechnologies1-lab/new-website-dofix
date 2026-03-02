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

export default function ServiceVariantPage() {
  const params = useParams();
  const id = Number(params?.id);

  const router = useRouter();
  const dispatch = useAppDispatch();

  const service = shopData.find((s) => s.id === id);

  const cartItems = useAppSelector(selectCartItems);
  const totalPrice = useAppSelector(selectTotalPrice);

  if (!service) return <div className="p-10">Service Not Found</div>;

  const handleAdd = (variant: any) => {
    dispatch(
      addItemToCart({
        id: variant.id,
        title: variant.name,
        price: variant.price,
        discountedPrice: variant.discountedPrice,
        quantity: 1,
        imgs: {
          thumbnails: [variant.image],
          previews: [variant.image],
        },
      })
    );
  };

  const getItemQuantity = (variantId: number) => {
    const item = cartItems.find((item) => item.id === variantId);
    return item ? item.quantity : 0;
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-32 pt-32 px-6">
      <h2 className="text-3xl font-bold mb-8">
        {service.title}
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {service.variants.map((variant) => (
          <div
            key={variant.id}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <Image
              src={variant.image}
              alt={variant.name}
              width={400}
              height={250}
              className="rounded-lg mb-4 object-cover"
            />

            <h3 className="text-xl font-semibold mb-2">
              {variant.name}
            </h3>

            <div className="mb-4">
              <span className="text-gray-400 line-through mr-2">
                ₹{variant.price}
              </span>
              <span className="text-green-600 font-bold text-lg">
                ₹{variant.discountedPrice}
              </span>
            </div>

            <button
              onClick={() => handleAdd(variant)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Add to Cart
            </button>

            {getItemQuantity(variant.id) > 0 && (
              <p className="mt-2 text-sm text-gray-600">
                In Cart: {getItemQuantity(variant.id)}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 flex justify-between items-center">
        <span className="font-semibold">
          Total: ₹{totalPrice}
        </span>
        <button
          onClick={() => router.push("/cart")}
          className="bg-green-600 text-white px-6 py-2 rounded-lg"
        >
          View Cart ({cartItems.length})
        </button>
      </div>
    </div>
  );
}