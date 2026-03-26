"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useCallback, useRef, useEffect } from "react";
import data from "./categoryData";
import "swiper/css/navigation";
import "swiper/css";
 import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import SingleItem from "./SingleItem";

interface CategoriesProps {
  onCategoryClick: (slug: string) => void;
}

const Categories = ({ onCategoryClick }: CategoriesProps) => {
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
    <section className="overflow-hidden pt-17.5">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 pb-15 border-b border-gray-3">

        <div className="swiper categories-carousel common-carousel">

          {/* Header */}
          <div className="mb-10 flex items-center justify-between">
            
            <div>
              <span className="flex items-center gap-2.5 font-medium text-dark mb-1.5">
                
                Categories
              </span>

              <h2 className="font-semibold text-xl xl:text-heading-5 text-dark">
                Dofix Services
              </h2>
            </div>

            {/* Navigation */}
            {/* <div className="flex items-center gap-3">
              <button onClick={handlePrev} className="swiper-button-prev !text-[#3683ab]" />
              <button onClick={handleNext} className="swiper-button-next !text-[#3683ab]" />
            </div> */}

            <div className="flex items-center gap-3">
            
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
            slidesPerView={6}
            spaceBetween={10}
            breakpoints={{
              0: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1000: { slidesPerView: 4 },
              1200: { slidesPerView: 6 },
            }}
          >

            {data.map((item) => (
              <SwiperSlide key={item.id}>

                <div
                  onClick={() => onCategoryClick(item.link)}
                  className="cursor-pointer"
                >
                  <SingleItem item={item} />
                </div>

              </SwiperSlide>
            ))}

          </Swiper>

        </div>

      </div>
    </section>
  );
};

export default Categories;