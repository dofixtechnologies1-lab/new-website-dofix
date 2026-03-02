"use client";
import { useParams } from "next/navigation";
import RateCardTable from "@/components/rate-card/RateCardTable";

export default function RateCardPage() {
  const params = useParams();

  const categoryId = params?.categoryId as string;

  console.log("PARAM VALUE:", categoryId); // 🔍 check this in console

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 mt-40">
      <div className="max-w-[900px] mx-auto">
        {categoryId ? (
          <RateCardTable rateCardKey={categoryId} />
        ) : (
          <p className="text-center text-gray-500">
            Loading...
          </p>
        )}
      </div>
    </div>
  );
}