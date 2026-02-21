"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function DynamicModal({ items }) {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      {/* Trigger Buttons */}
      <div className="flex gap-4 flex-wrap">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="text-[#3683ab]-600 underline"
          >
            {item.buttonText}
          </button>
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-2xl w-[90%] max-w-md p-6 relative">

            {/* Close */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-3 right-3"
            >
              ✕
            </button>

            {/* Image */}
            <div className="relative w-full h-60 mb-4">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            {/* ✅ YOUR DYNAMIC TITLE HERE */}
            <div className="flex justify-center">
              <Link href={selectedItem.link}>
                <h3 className="inline-block font-medium text-center text-dark 
                  bg-gradient-to-r from-[#3683ab] to-[#3683ab] 
                  bg-[length:0px_1px] bg-left-bottom bg-no-repeat 
                  transition-[background-size] duration-500 
                  hover:bg-[length:100%_3px] 
                  group-hover:bg-[length:100%_1px] 
                  group-hover:text-[#3683ab]">
                  
                  {selectedItem.title}
                  
                </h3>
              </Link>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
