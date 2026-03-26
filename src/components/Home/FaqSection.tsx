"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What exactly is DOFIX?",
    answer:
      "DOFIX is a home services platform that helps you find skilled professionals for a range of household tasks. DOFIX connects you with trusted professionals for AC servicing, plumbing repairs, home cleaning, and electrical work—ensuring every job is handled safely, efficiently, and with care.",
  },
  {
    question: "What is the process to schedule a service on DOFIX?",
    answer:
      "Booking a service on DOFIX is quick and simple. Just choose the service you need on the website, select a convenient date and time, and confirm your booking. Once your request is placed, a professional will be assigned to visit your location.",
  },
  {
    question: "Does DOFIX check the background of its service providers?",
    answer:
      "Yes. All professionals on DOFIX go through proper background checks and skill verification before joining the platform. This ensures that you receive reliable, safe, and high-quality service every time.",
  },
  {
    question: "How is the price of a service calculated?",
    answer:
      "The cost of a service depends on the type of work required. Basic service prices are shown before booking. If additional repairs or parts are needed, the technician will inform you before proceeding.",
  },
  {
    question: "Do you charge for inspection or visiting?",
    answer:
      "Some services may include a small inspection or visit charge. This fee covers the technician’s time and inspection of the issue. The exact amount will be displayed during booking.",
  },
  {
    question: "What payment options does DOFIX accept?",
    answer:
      "DOFIX supports multiple payment methods, including UPI, debit cards, credit cards, and cash after service.",
  },
  {
    question: "Do you offer same-day bookings?",
    answer:
      "In many cases, we offer same-day or quick services depending on availability. During booking, you can easily view and select from the available time slots.",
  },
  {
    question: "Does DOFIX provide AC setup services?",
    answer:
      "DOFIX provides complete AC services, including professional installation, uninstallation, servicing, and repair by trained experts. Our technicians ensure safe installation and proper functioning.",
  },
  {
    question: "How can I get assistance from DOFIX?",
    answer:
      "You can contact our support team through the contact page on the website, email, or customer support number. Our team is always here to assist you whenever you need help.",
  },
  {
    question: "How do I become a service partner with DOFIX?",
    answer:
      "Professionals can apply through the partner registration page to join the DOFIX network.",
  },
  {
    question: "Can I change my booking time after scheduling?",
    answer:
      "Yes, you can easily reschedule your booking if your plans change. Simply update the booking time from your confirmation page or contact our support team for assistance.",
  },
  {
    question: "In which cities does DOFIX operate?",
    answer:
      "DOFIX currently operates in selected cities, and we are continuously expanding to new areas. You can check service availability by entering your location or pin code on our website during booking.",
  },
  {
    question: "Why choose DOFIX?",
    answer:
      "DOFIX makes home maintenance simple by connecting you with verified professionals, transparent pricing, and convenient booking. Our goal is to provide reliable services that save you time and effort.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark">
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
                <span className="font-medium text-dark">
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