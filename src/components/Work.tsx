"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

const faqItems = [
  {
    question: "What areas of law do you specialize in?",
    answer: "We specialize in commercial litigation, estate planning, wills and trusts, and international law. Our expertise spans complex business disputes, real estate litigation, and appellate matters.",
  },
  {
    question: "How do I schedule a consultation?",
    answer: "You can schedule a consultation by contacting us through our website, calling our office directly, or sending an email. We offer both in-person and virtual consultations.",
  },
  {
    question: "What should I bring to my first meeting?",
    answer: "Please bring any relevant documents related to your case, including contracts, correspondence, and any court documents you may have received.",
  },
  {
    question: "How are your fees structured?",
    answer: "Our fees vary depending on the complexity of the case. We offer hourly rates, flat fees for certain services, and retainer arrangements for ongoing matters.",
  },
  {
    question: "Do you handle cases outside of Toronto?",
    answer: "Yes, we handle cases throughout Ontario and have experience with matters involving international jurisdictions, including China and the United States.",
  },
];

export default function Work() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      {/* FAQ Section */}
      <section id="work" className="bg-white" style={{ padding: "100px 0" }}>
        <div className="max-w-7xl mx-auto" style={{ padding: "0 24px" }}>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Header */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-[2px] bg-[#CCA45B]"></div>
                <span className="text-[#CCA45B] text-sm font-medium uppercase tracking-wider">FAQ</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-normal text-[#1e3a5f] leading-tight mb-6">
                Got Questions?<br />
                <span className="italic">We&apos;ve Got Answers</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Find answers to common questions about our legal services, consultation process, and what to expect when working with us.
              </p>
            </div>

            {/* Right - Accordion */}
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className={`border ${openIndex === index ? 'border-[#CCA45B] bg-white' : 'border-gray-200 bg-white'} transition-all`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between text-left"
                    style={{ padding: "20px 24px" }}
                  >
                    <span className={`font-semibold ${openIndex === index ? 'text-[#CCA45B]' : 'text-[#1e3a5f]'}`}>
                      {item.question}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-[#CCA45B] transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openIndex === index && (
                    <div className="border-t border-gray-100" style={{ padding: "20px 24px" }}>
                      <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
