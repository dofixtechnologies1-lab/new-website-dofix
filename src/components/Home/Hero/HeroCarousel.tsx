"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css/pagination";
import "swiper/css";

import Image from "next/image";

const HeroCarousal = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination]}
      className="hero-carousel"
    >
      {/* ================= SLIDE 1 ================= */}
      <SwiperSlide>
        <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">

          {/* TEXT SECTION */}
          <div className="max-w-[1500px] w-full py-8 sm:py-15 lg:py-24.5 
                          px-4 sm:pl-7.5 lg:pl-12.5 text-center sm:text-left">

            <h1 className="font-semibold text-[#113547] text-xl sm:text-3xl mb-3">
              Professional AC Repair & Service
            </h1>

            <p className="text-gray-600 text-sm sm:text-base">
              Keep your air conditioner running smoothly with expert technicians.
              <br className="hidden sm:block" /><br></br>
              Fast service | Genuine parts | Same-day support
            </p>

            <a
              href="#"
              className="inline-flex font-medium text-white text-sm sm:text-custom-sm 
                         rounded-md bg-[#3683ab] py-3 px-8 
                         ease-out duration-200 hover:bg-[#113547] 
                         mt-6 sm:mt-10"
            >
              Book Now
            </a>
          </div>

          {/* IMAGE SECTION */}
          <div className="flex justify-center sm:ml-35 mb-6 sm:mb-0 w-full">
            <Image
              src="/images/hero/hero-slide.png"
              alt="Service-image"
              width={350}
              height={358}
              className="w-[220px] sm:w-auto h-auto"
              priority
            />
          </div>

        </div>
      </SwiperSlide>

      {/* ================= SLIDE 2 ================= */}
      <SwiperSlide>
        <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">

          {/* TEXT SECTION */}
          <div className="max-w-[1500px] w-full py-8 sm:py-15 lg:py-26 
                          px-4 sm:pl-7.5 lg:pl-12.5 text-center sm:text-left">

            <h1 className="font-semibold text-[#113547] text-xl sm:text-3xl mb-3 -mt-6 sm:mt-0">
              Become a Certified AC Professional Partner
            </h1>

            <p className="text-gray-600 text-sm sm:text-base">
              Join our trusted network of AC technicians and get verified service leads in your area.
              <br className="hidden sm:block" /><br></br>
              More jobs | Timely payments | Full support
            </p>

            <a
              href="#"
              className="inline-flex font-medium text-white text-sm sm:text-custom-sm 
                         rounded-md bg-[#3683ab] py-3 px-8 
                         ease-out duration-200 hover:bg-[#113547] 
                         mt-6 sm:mt-10"
            >
              Join Now
            </a>
          </div>

          {/* IMAGE SECTION */}
          <div className="flex justify-center sm:ml-15 mb-6 sm:mb-0 w-full">
            <Image
              src="/images/hero/hero-slide2.png"
              alt="Partner-image"
              width={350}
              height={358}
              className="w-[220px] sm:w-auto h-auto"
            />
          </div>

        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroCarousal;
