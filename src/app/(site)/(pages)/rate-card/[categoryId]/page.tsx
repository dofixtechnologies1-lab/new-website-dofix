"use client";
import { useParams } from "next/navigation";
import RateCardTable from "@/components/rate-card/RateCardTable";

export default function RateCardPage() {
  const params = useParams();
  const categoryId = params.categoryId as string;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 mt-40">
      <div className="max-w-[900px] mx-auto">
        <RateCardTable categoryId={categoryId} />
      </div>
    </div>
  );
}