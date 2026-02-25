import React from "react";
import Image from "next/image";

const PromoBanner = () => {
  return (
    <section className="overflow-hidden py-20">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        {/* <!-- promo banner big --> */}
        {/* <div className="relative z-1 overflow-hidden rounded-lg bg-[#F5F5F7] py-12.5 lg:py-17.5 xl:py-22.5 px-4 sm:px-7.5 lg:px-14 xl:px-19 mb-7.5">
          <div className="max-w-[550px] w-full">
            <span className="block font-medium text-xl text-[#113e55] mb-3">
              Dofix
            </span>

            <h2 className="font-bold text-xl lg:text-heading-4 xl:text-heading-3 text-[#113e55] mb-5">
            YOUR TRUSTED HOME PARTNER
            </h2>

            <p>
              On-time service, transparent pricing, and customer-first support.
              Experience convenience like never before.
            </p>

            <a
              href="#"
              className="inline-flex font-medium text-custom-sm text-white bg-blue py-[11px] px-9.5 rounded-md ease-out duration-200 hover:bg-[#113e55] mt-7.5"
            >
              Buy Now
            </a>
          </div>

          <Image
            src="/images/promo/promo1.png"
            alt="promo img"
            className="absolute bottom-0 right-4 lg:right-26 -z-1"
            width={400}
            height={350}
          />
        </div> */}

        <div className="grid gap-7.5 grid-cols-1 lg:grid-cols-2">
          {/* <!-- promo banner small --> */}
          <div className="relative z-1 overflow-hidden rounded-lg bg-[#d4eefb] py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10">
            <Image
              src="/images/promo/promo3.png"
              alt="promo img"
              className="absolute top-1/2 -translate-y-1/2 left-3 sm:left-10 -z-1 -ml-20 mt-2"
              width={350}
              height={241}
            />

            <div className="text-right">
              <span className="block text-lg text-dark mb-1.5">
                AC Trouble in Delhi NCR?
              </span>

              <h2 className="font-bold text-xl lg:text-heading-5 text-[#3683ab] mb-2.5">
                Experts Near You
              </h2>

              <p className=" text-custom-10 text-dark">
                Quick response, professional <br></br>servicing, and smooth performance<br></br> guaranteed.
              </p>

              <a
                href="/services"
                className="inline-flex font-medium text-custom-sm text-white bg-[#3683ab] py-2.5 px-8.5 rounded-md ease-out duration-200 hover:bg-[#14455e] mt-9"
              >
                Book Now
              </a>
            </div>
          </div>

          {/* <!-- promo banner small --> */}
          <div className="relative z-1 overflow-hidden rounded-lg bg-[#14455e] py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10">
            <Image
              src="/images/promo/promo5.png"
              alt="promo img"
              className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-8.5 -z-1"
              width={250}
              height={200}
            />

            <div>
              <span className="block text-lg text-[#fff] mb-1.5">
                Appliance Not Working Properly?
              </span>

              <h2 className="font-bold text-xl lg:text-heading-5 text-[#d4eefb] mb-2.5">
                We’ve Got You 
              </h2>

              <p className="max-w-[285px] text-custom-10   text-[#d5d5d5]">
                Fast doorstep service, skilled <br></br>technicians, and reliable solutions you can trust.
              </p>

              <a
                href="#"
                className="inline-flex font-medium text-custom-sm text-[#14455b] bg-[#d4eefb] py-2.5 px-8.5 rounded-md ease-out duration-200  mt-9">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
