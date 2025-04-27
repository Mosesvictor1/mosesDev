import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What industries have you worked in as a product designer?",
    answer:
      "I have experience across technology, education, e-commerce, and healthcare industries.",
  },
  {
    question: "Can I download your resume/CV for information?",
    answer:
      "Certainly! You can download my resume/CV directly from my website. It provides a comprehensive overview of my education, work experience, and design achievements.",
  },
  {
    question: "Are you available for freelance design work?",
    answer:
      "Yes, I'm open to freelance opportunities depending on the project scope and timeline.",
  },
  {
    question: "What tools do you use for your design work?",
    answer:
      "I mainly use Figma, Adobe XD, Photoshop, Illustrator, and Webflow.",
  },
  {
    question: "How do I navigate through your portfolio projects?",
    answer:
      "You can browse through the project gallery and use filters to view different categories of work.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-purple-950 bg-gradient-to-br from-purple-950 to-indigo-950 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(139, 92, 246, 0.1) 2px, transparent 2px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>
      <div className="max-w-4xl mx-auto px-2 sm:px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-200 mb-8">
          Questions? <span className="text-purple-400 italic">Look here.</span>
        </h2>

        <div className="mt-8 space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className={`rounded-2xl backdrop-blur-md border border-purple-700/40 bg-gradient-to-br from-white/10 to-purple-900/10 transition-all duration-300 ${
                openIndex === index ? "border-purple-400" : ""
              }`}
              style={{
                boxShadow: `
                  inset 0 0 25px rgba(168, 85, 247, 0.6),
                  inset 0 0 50px rgba(139, 92, 246, 0.4)
                `,
              }}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-4 sm:px-6 py-4 sm:py-6 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-purple-200 font-semibold text-base sm:text-lg text-start">
                  {faq.question}
                </span>
                <span className="text-purple-300 text-xl sm:text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="px-4 sm:px-6 pb-4 sm:pb-6 text-start text-purple-100 text-sm sm:text-base overflow-hidden"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
