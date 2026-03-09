"use client";

import React, { useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ProductItem from "@/components/Common/ProductItem";
import shopData from "@/components/Shop/shopData";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const NewArrival = () => {
  const sliderRef = useRef<any>(null);

  const handlePrev = useCallback(() => {
    sliderRef.current?.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    sliderRef.current?.swiper.slideNext();
  }, []);

  useEffect(() => {
    sliderRef.current?.swiper.init();
  }, []);

  return (
    <section className="overflow-hidden pt-15">
      <div className="text-center sm:text-left max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">

        {/* section title */}
        <div className="mb-7 flex items-center justify-between">
          <div>
            <span className="flex items-center gap-2.5 font-medium text-dark mb-">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M3.11826 15.4622C4.11794 16.6668 5.97853 16.6668 9.69971 16.6668H10.3007C14.0219 16.6668 15.8825 16.6668 16.8821 15.4622"
                  stroke="#3683ab"
                  strokeWidth="1.5"
                />
              </svg>
              Recommended
            </span>

            <h2 className="font-semibold text-xl xl:text-heading-5 text-dark">
              Best Services
            </h2>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={handlePrev}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 text-[#3683ab] hover:bg-[#3683ab] hover:text-white transition"
            >
              <FiChevronLeft size={20} />
            </button>

            <button
              onClick={handleNext}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 text-[#3683ab] hover:bg-[#3683ab] hover:text-white transition"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          ref={sliderRef}
          spaceBetween={30}
          slidesPerView={4}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {shopData.slice(0, 4).map((item, key) => (
            <SwiperSlide key={key}>
              <ProductItem item={item} hideCart hidePrice />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default NewArrival;