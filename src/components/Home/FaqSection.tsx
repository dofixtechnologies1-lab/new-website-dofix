"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What services does DOFIX provide?",
    answer:
      "DOFIX offers a wide range of home services including AC repair, AC installation, AC servicing, home cleaning, kitchen cleaning, bathroom cleaning, and professional painting services.",
  },
  {
    question: "How can I book a service on DOFIX?",
    answer:
      "You can easily book a service by selecting your desired service, reviewing the service details, and clicking the 'Book Now' button. Choose your preferred time slot and confirm the booking.",
  },
  {
    question: "Are DOFIX professionals verified?",
    answer:
      "Yes, all DOFIX professionals are background verified, trained, and experienced to ensure safe and reliable service at your doorstep.",
  },
  {
    question: "Do you provide service warranty?",
    answer:
      "Yes, many of our services include a limited service warranty to ensure customer satisfaction and quality work.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "Currently DOFIX provides services across major areas of Noida, Ghaziabad, and nearby regions, with plans to expand to more cities soon.",
  },
  {
    question: "How do I check the service price?",
    answer:
      "Each service has a transparent rate card. You can click 'View Rate Card' on the service page to see detailed pricing.",
  },
];

export default function FaqSection() {

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" bg-gray-50">

      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold text-[#14455b]">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-500 mt-3">
            Everything you need to know about DOFIX home services.
          </p>

        </div>

        {/* FAQ List */}
        <div className="space-y-4">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border"
            >

              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left"
              >

                <span className="font-medium text-[#14455b]">
                  {faq.question}
                </span>

                <span className="text-xl text-[#3683ab]">
                  {openIndex === index ? "−" : "+"}
                </span>

              </button>

              {openIndex === index && (

                <div className="px-5 pb-5 text-gray-600 text-sm">
                  {faq.answer}
                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}