"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useCallback, useRef, useEffect, useState } from "react";
import data from "./categoryData";
import "swiper/css/navigation";
import "swiper/css";
import SingleItem from "./SingleItem";
import DynamicModal from "@/components/Common/DynamicModal";

const Categories = () => {
  const sliderRef = useRef<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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
    <>
      <section className="overflow-hidden pt-17.5">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 pb-15 border-b border-gray-3">
          <div className="swiper categories-carousel common-carousel">

            {/* Header */}
            <div className="mb-10 flex items-center justify-between">
              <div>
                <span className="font-medium text-dark mb-1.5">
                  Categories
                </span>
                <h2 className="font-semibold text-xl text-dark">
                  Explore Dofix Services
                </h2>
              </div>

              <div className="flex items-center gap-3">
                <button onClick={handlePrev} className="swiper-button-prev" />
                <button onClick={handleNext} className="swiper-button-next" />
              </div>
            </div>

            {/* Swiper */}
            <Swiper
              ref={sliderRef}
              slidesPerView={6}
              breakpoints={{
                0: { slidesPerView: 2 },
                1000: { slidesPerView: 4 },
                1200: { slidesPerView: 6 },
              }}
            >
              {data.map((item) => (
                <SwiperSlide key={item.id}>
                  <div
                    onClick={() => {
                      console.log("Clicked:", item.link); // 🔥 debug
                      setSelectedCategory(item.link);
                    }}
                  >
                    <SingleItem item={item} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedCategory && (
        <DynamicModal
          categorySlug={selectedCategory}
          onClose={() => setSelectedCategory(null)}
        />
      )}
    </>
  );
};

export default Categories;