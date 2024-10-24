"use client";
import React, { useState } from "react";

const faqData = [
  {
    question: "What is the Sneaker & Vintage Hub?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        The Sneaker & Vintage Hub is a platform designed for sneakerheads, vintage clothing enthusiasts, and collectors. Whether you&apos;re looking to attend one of the events listed on our app or using our seller marketplace, we offer a space to buy, sell, and connect with like-minded individuals.
      </div>
    ),
  },
  {
    question: "How do I register as a seller?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        To register as a seller, create an account on our platform, navigate to the &apos;Seller Hub&apos; section, and follow the steps to list your sneakers or vintage clothing items. Once approved, you&apos;ll be able to manage your listings and sales through your dashboard.
      </div>
    ),
  },
  {
    question: "What kind of items can I sell?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        You can sell sneakers (new or pre-loved) and authentic vintage clothing. We have strict guidelines to ensure the quality and authenticity of the items listed, so make sure your products meet our standards.
      </div>
    ),
  },
  {
    question: "How do I attend or participate in events?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        You can find our upcoming events on the &apos;Events&apos; page. To participate as a seller or vendor, simply register for the event. If you&apos;re attending as a buyer, RSVP to secure your spot and get exclusive access to early deals.
      </div>
    ),
  }
];

const FAQItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <li>
      <button
        className="relative flex w-full items-center gap-2 border-t border-slate-200 dark:border-slate-200 py-5 text-left text-base font-semibold md:text-lg"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="flex-1 text-slate-800 dark:text-[#ff9501]">{question}</span>
        <svg
          className={`ml-auto h-4 w-4 flex-shrink-0 fill-current transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 12L2 6h12l-6 6z" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-5 leading-relaxed text-slate-600 dark:text-slate-200 font-semibold">
          {typeof answer === "string" ? <p>{answer}</p> : answer}
        </div>
      </div>
    </li>
  );
};

export default function FrequentlyAskedQuestions() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-50 dark:bg-[#000000]" id="faq">
      <div className="mx-auto max-w-7xl px-8 py-24">
        <div className="flex flex-col gap-12 md:flex-row">
          <div className="flex basis-1/2 flex-col text-left">
            <p className="mb-4 inline-block font-bold text-[#ff9501] dark:text-slate-200">FAQ</p>
            <p className="text-3xl font-extrabold text-[#ff9501] dark:text-slate-200 md:text-4xl">
              Frequently Asked Questions
            </p>
          </div>
          <ul className="basis-1/2">
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
