import React from "react";
import Image from "next/image";

const featureData = [
  {
    img: "/images/icons/technician.png",
    title: "Expert Technicians",
    // description: "Verified & trained AC professionals at your doorstep",
  },
  {
    img: "/images/icons/24-hours.png",
    title: "Same Day Service",
    // description: "Cancellation after 1 day",
  },
  {
    img: "/images/icons/price-tag.png",
    title: "Transparent Pricing",
    // description: "Gurantee secure payments",
  },
  {
    img: "/images/icons/24-7.png",
    title: "24/7 Customer Support",
    // description: "Anywhere & anytime",
  },
];

const HeroFeature = () => {
  return (
    <div className="max-w-[1060px] w-full mx-auto px-4 sm:px-8 xl:px-0">
      <div className="flex flex-wrap items-center gap-7.5 xl:gap-12.5 mt-10">
        {featureData.map((item, key) => (
          <div className="flex items-center gap-4" key={key}>
            <Image src={item.img} alt="icons" width={30} height={41} />

            <div>
              <h3 className="font-medium text-lg text-[#3683ab]">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroFeature;
