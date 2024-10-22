"use client";
import React, { useState } from "react";

const faqData = [
  {
    question: "What is the Sneaker & Vintage Hub?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>
          <div>
            The Sneaker & Vintage Hub is a platform designed for sneakerheads, vintage clothing enthusiasts, and collectors. Whether you&apos;re looking to attend one of the events listed or using our seller marketplace, we offer a space to buy, sell, and connect with like-minded individuals.
          </div>
        </p>
      </div>
    ),
  },
  {
    question: "How do I register as a seller?",
    answer:
      "To register as a seller, create an account on our platform, navigate to the 'Seller Hub' section, and follow the steps to list your sneakers or vintage clothing items. Once approved, you'll be able to manage your listings and sales through your dashboard.",
  },
  {
    question: "What kind of items can I sell?",
    answer:
      "You can sell sneakers (new or pre-loved) and authentic vintage clothing. We have strict guidelines to ensure the quality and authenticity of the items listed, so make sure your products meet our standards.",
  },
  {
    question: "How do I attend or participate in events?",
    answer:
      "You can find our upcoming events on the 'Events' page. To participate as a seller or vendor, simply register for the event. If you're attending as a buyer, RSVP to secure your spot and get exclusive access to early deals.",
  },
  {
    question: "Can I customize my vendor booth at events?",
    answer:
      "Yes! We encourage sellers to make their booth stand out. You can bring your own display materials or rent additional setups through our platform. Full customization details are available once you register for an event.",
  },
  {
    question: "How does the platform ensure item authenticity?",
    answer:
      "Our platform uses a two-step verification process for sneakers and vintage clothing. Sellers must provide proof of authenticity, and we also work with third-party authenticators to ensure all listed items are genuine.",
  },
  {
    question: "What fees are involved in selling?",
    answer:
      "We charge a small listing fee and a commission on each sale. The exact fees depend on the type of item and selling volume. Detailed fee structures are available in your Seller Hub dashboard.",
  },
  {
    question: "How do I track my sales and earnings?",
    answer:
      "Once your items are listed, you can track sales, pending orders, and your earnings directly from your Seller Hub dashboard. You'll also receive notifications about any transactions or updates.",
  },
  {
    question: "Can I collaborate with other sellers for joint events?",
    answer:
      "Yes, we encourage collaboration! You can connect with other sellers through our platform to co-host booths at events or create unique partnerships. Special rates are available for collaborative booths.",
  },
  {
    question: "Is there a community for buyers and sellers?",
    answer:
      "Absolutely! We have an active community space where you can interact with other sneakerheads, vintage collectors, and fashion enthusiasts. Join discussions, share tips, and stay updated on trends.",
  },
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
            <p className="mb-4 inline-block font-bold text-slate-800 dark:text-slate-200">FAQ</p>
            <p className="text-3xl font-extrabold text-slate-800 dark:text-slate-200 md:text-4xl">
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
