"use client";
import { useRouter } from "next/navigation";

interface Props {
  rateCardKey?: string;   // optional for safety
}

const RateCardPreview = ({ rateCardKey }: Props) => {
  const router = useRouter();

  if (!rateCardKey) return null; // prevent undefined routing

  const handleClick = () => {
    router.push(`/rate-card/${rateCardKey}`);
  };

  return (
    <div className="mt-6 rounded-xl border overflow-hidden">
      <button
        onClick={handleClick}
        className="w-full flex justify-between items-center px-5 py-4 bg-gray-100 hover:bg-gray-200 transition"
      >
        <span className="font-medium text-black">
          View Rate Card
        </span>
        <span>›</span>
      </button>
    </div>
  );
};

export default RateCardPreview;