import shopData from "@/components/Shop/shopData";
import Image from "next/image";
import Link from "next/link";

export default async function SubCategoryPage({
  params,
}: {
  params: Promise<{ category: string; subcategory: string }>;
}) {
  const { category, subcategory } = await params;

  const filteredServices = shopData.filter(
    (item) =>
      item.category === category &&
      item.subCategory === subcategory
  );

  if (filteredServices.length === 0) {
    return (
      <div className="p-20 text-center text-red-600 text-xl">
        No Services Found
      </div>
    );
  }

  return (
    <div className="max-w-[600px] mx-auto py-16 px-4 pt-45">

      {/* Heading */}
      <h1 className="text-4xl font-bold mb-6 capitalize">
        {subcategory.replace(/-/g, " ")} 
      </h1>

      {/* Service Count */}
      <div className="inline-block mb-10 px-6 py-3 border-2 border-[#3683ab] text-[#3683ab] rounded-full text-sm font-medium">
        {filteredServices.length} Services Available
      </div>

      {/* Cards */}
      <div className="space-y-8">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-3xl shadow-lg p-4 flex items-center justify-between hover:shadow-xl transition"
          >
            <div className="flex items-center gap-6">

              {/* Image */}
              <div className="w-40 h-40 rounded-2xl overflow-hidden">
                <Image
                  src={service.imgs.thumbnails[0]}
                  alt={service.title}
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Content */}
              <div>
                <h2 className="text-2xl font-semibold">
                  {service.title}
                </h2>

                <div className="mt-2 text-gray-500">
                  ⭐ 4.7 ({service.reviews})
                </div>

                <div className="mt-4 inline-block px-5 py-2 border border-[#3683ab] text-[#3683ab] rounded-full text-sm">
                  {service.variants.length} Options Available
                </div>

                <div className="mt-4 text-[#3683ab] font-medium">
                  View Details
                </div>
              </div>
            </div>

            {/* Arrow Button */}
            <Link
              href={`/ac-services/${service.id}`}
              className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-2xl text-[#3683ab] hover:bg-[#3683ab] hover:text-white transition"
            >
              →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}