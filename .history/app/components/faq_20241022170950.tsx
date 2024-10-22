"use client";
import React, { useState } from "react";

const faqData = [
  {
    question: "What is LandingPlate?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>
          LandingPlate is a Next.js boilerplate template designed to help developers quickly set up and deploy high-quality landing pages. It includes a variety of pre-built components and best practices to streamline the development process.
        </p>
      </div>
    ),
  },
  {
    question: "How do I get started with LandingPlate?",
    answer:
      "To get started with LandingPlate, simply clone the repository from GitHub, install the dependencies, and start the development server. Detailed instructions are provided in the README file.",
  },
  {
    question: "What features are included in LandingPlate?",
    answer:
      "LandingPlate includes a variety of features such as pre-built components, Tailwind CSS integration, dark mode support, SEO optimization, and more. It is designed to be easily customizable to fit your specific needs.",
  },
  {
    question: "Can I customize the components in LandingPlate?",
    answer:
      "Absolutely! LandingPlate is designed to be highly customizable. You can easily modify the pre-built components or create your own to match your project's requirements.",
  },
  {
    question: "Is LandingPlate suitable for production use?",
    answer:
      "Yes, LandingPlate is built with best practices and performance in mind, making it suitable for production use. It includes features like SEO optimization and responsive design to ensure your landing page performs well across different devices and search engines.",
  },
  {
    question: "Does LandingPlate support dark mode?",
    answer:
      "Yes, LandingPlate includes built-in support for dark mode. You can easily toggle between light and dark themes using the provided components.",
  },
  {
    question: "How do I deploy a landing page built with LandingPlate?",
    answer:
      "You can deploy your LandingPlate-based landing page to any hosting provider that supports Next.js applications, such as Vercel, Netlify, or AWS. Detailed deployment instructions are provided in the README file.",
  },
  {
    question: "Is there any documentation available for LandingPlate?",
    answer:
      "Yes, comprehensive documentation is available in the repository's README file. It covers everything from installation and setup to customization and deployment.",
  },
  {
    question: "Can I contribute to LandingPlate?",
    answer:
      "Yes, contributions are welcome! If you have any improvements or new features you'd like to add, feel free to open a pull request on the GitHub repository.",
  },
  {
    question: "Is LandingPlate free to use?",
    answer:
      "Yes, LandingPlate is open-source and free to use. You can find the source code on GitHub and use it for both personal and commercial projects.",
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