"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
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
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="hero-carousel"
    >
      <SwiperSlide>
  <div className="relative flex items-center pt-6 sm:pt-0 min-h-[420px]">

    {/* Left Content */}
    <div className="max-w-[394px] py-10 sm:py-15 lg:py-20 pl-4 sm:pl-7.5 lg:pl-12.5 z-10">
      
      {/* <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
        <span className="block font-semibold text-heading-3 sm:text-heading-1 text-blue">
          30%
        </span>
        <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[24px]">
          Sale <br /> Off
        </span>
      </div> */}

      <h1 className="font-bold text-dark text-xl sm:text-4xl mb-3">
        <a href="#">Professional AC Repair & Service</a>
      </h1>

      <p>
        Keep your air conditioner running smoothly with expert technicians.<br></br>
Fast service | Genuine parts | Same-day support
      </p>

      <a
        href="#"
        className="inline-flex font-medium text-white text-custom-sm rounded-md bg-[#3683ab] py-3 px-9 duration-200 hover:bg-[#215d7c] mt-5"
      >
        Book Now
      </a>

    </div>

    {/* Right Corner Image */}
<div className="absolute right-0 bottom-0 h-full flex items-end ">
  <Image
    src="/images/hero/hero-slide.png"
    alt="headphone"
    width={500}
    height={500}
    className="h-[90%] w-auto object-contain "
    priority
  />
</div>


  </div>
</SwiperSlide>

      <SwiperSlide>
  <div className="relative flex items-center pt-6 sm:pt-0 min-h-[450px]">

    {/* Left Content */}
    <div className="max-w-[394px] py-10 sm:py-15 lg:py-20 pl-4 sm:pl-7.5 lg:pl-12.5 z-10">
      
      {/* <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
        <span className="block font-semibold text-heading-3 sm:text-heading-1 text-blue">
          30%
        </span>
        <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[24px]">
          Sale <br /> Off
        </span>
      </div> */}

      <h1 className="font-bold text-dark text-xl sm:text-4xl mb-3">
        <a href="#">Become a Certified AC Professional Partner</a>
      </h1>

      <p>
        Join our trusted network of AC technicians and get verified service leads in your area.
        More jobs | Timely payments | Full support
      </p>

      <a
        href="#"
        className="inline-flex font-medium text-white text-custom-sm rounded-md bg-[#3683ab] py-3 px-9 duration-200 hover:bg-[#215d7c] mt-5"
      >
        Join Now
      </a>

    </div>

   {/* Right Corner Image */}
<div className="absolute right-0 bottom-0 h-full flex items-end">
  <Image
    src="/images/hero/hero-slide2.png"
    alt="headphone"
    width={500}
    height={500}
    className="h-[90%] w-auto object-contain"
    priority
  />
</div>


  </div>
</SwiperSlide>

    </Swiper>
  );
};

export default HeroCarousal;
