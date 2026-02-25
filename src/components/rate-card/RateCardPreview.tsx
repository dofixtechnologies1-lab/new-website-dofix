"use client";
import { useRouter } from "next/navigation";

interface Props {
  categoryId: string;
}

const RateCardPreview = ({ categoryId }: Props) => {
  const router = useRouter();

  return (
    <div className="mt-6 rounded-xl border overflow-hidden">
      <button
        onClick={() => router.push(`/rate-card/${categoryId}`)}
        className="w-full flex justify-between items-center px-5 py-4 bg-gray-100 hover:bg-gray-200 transition"
      >
        <span className="font-medium text-black">View Rate Card</span>
        <span>›</span>
      </button>
    </div>
  );
};

export default RateCardPreview;