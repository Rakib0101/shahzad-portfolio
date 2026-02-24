import Image from "next/image";
import { ArrowRight, BookOpen, Newspaper } from "lucide-react";

const publications = [
  {
    title: "American Lawyer: Twelve Attorneys Who Have Transformed the United States",
    type: "Book",
    icon: BookOpen,
    description: "A comprehensive study of influential American attorneys and their impact on the legal landscape.",
  },
  {
    title: "Wills, Trusts and Estate Drafting in Canada",
    type: "Book - Thomson Reuters",
    icon: BookOpen,
    description: "Published by Thomson Reuters, a definitive guide to estate planning and drafting in Canada.",
  },
  {
    title: "Estate Planning for the Wealthy Entrepreneur",
    type: "Financial Post",
    icon: Newspaper,
    description: "Expert insights on estate planning strategies for high-net-worth business owners.",
  },
];

export default function Publications() {
  return (
    <>
      {/* CTA Banner */}
      <section className="bg-[#1e3a5f] relative overflow-hidden">
        <div className="max-w-7xl mx-auto" style={{ padding: "0 24px" }}>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left - Image */}
            <div className="relative" style={{ height: "400px" }}>
              <Image
                src="/images/shahzad-siddiqui.jpg"
                alt="Shahzad Siddiqui"
                fill
                className="object-cover object-top"
              />
            </div>
            
            {/* Right - Content */}
            <div style={{ padding: "60px 0" }}>
              <h2 className="text-3xl lg:text-4xl font-normal text-white leading-tight mb-6">
                Harvard Law Lecturer &<br />
                <span className="text-[#CCA45B] italic">Published Author</span>
              </h2>
              <p className="text-gray-300 mb-8">
                Shahzad lectured on Abrahamic finance at Harvard Law School in March 2010. 
                He has authored several influential publications on law and estate planning.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#CCA45B] text-[#1e3a5f] font-semibold transition-all hover:bg-white"
                style={{ padding: "16px 28px" }}
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="bg-[#f8f8f8]" style={{ padding: "100px 0" }}>
        <div className="max-w-7xl mx-auto" style={{ padding: "0 24px" }}>
          {/* Section Header */}
          <div className="text-center" style={{ marginBottom: "64px" }}>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-8 h-[2px] bg-[#CCA45B]"></div>
              <span className="text-[#CCA45B] text-sm font-medium uppercase tracking-wider">Publications</span>
              <div className="w-8 h-[2px] bg-[#CCA45B]"></div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal text-[#1e3a5f] leading-tight mb-4">
              Published Works &<br />
              <span className="italic">Legal Writings</span>
            </h2>
          </div>

          {/* Publications Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {publications.map((pub, index) => {
              const IconComponent = pub.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                  style={{ padding: "40px" }}
                >
                  <div className="w-16 h-16 bg-[#1e3a5f] flex items-center justify-center mb-6 group-hover:bg-[#CCA45B] transition-colors">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <span className="text-[#CCA45B] text-sm font-semibold uppercase tracking-wider">
                    {pub.type}
                  </span>
                  <h3 className="text-xl font-bold text-[#1e3a5f] mt-2 mb-4 group-hover:text-[#CCA45B] transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    {pub.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
