"use client";
import { useRouter } from "next/navigation";

type Props = {
  rateCardKey?: string;
};

const RateCardPreview = ({ rateCardKey }: Props) => {
  const router = useRouter();

  if (!rateCardKey) return null;

  const handleNavigate = () => {
    router.push(`/rate-card/${rateCardKey}`);
  };

  return (
    <button
      onClick={handleNavigate}
      className="text-[#3683ab] font-medium underline hover:text-[#14455b] transition"
    >
      View Rate Card
    </button>
  );
};

export default RateCardPreview;