import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-white" style={{ padding: "100px 0" }}>
      <div className="max-w-7xl mx-auto" style={{ padding: "0 24px" }}>
        
        {/* Stats Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left - Stats */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-[2px] bg-[#CCA45B]"></div>
              <span className="text-[#CCA45B] text-sm font-medium uppercase tracking-wider">About Us</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal text-[#1e3a5f] leading-tight mb-8">
              More Than 500 Lawyers —Your Legal Saviors
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Shahzad Siddiqui is the Managing Partner of Covenant LLP, bringing decades of 
              experience in complex commercial litigation, estate planning, and international law.
            </p>
            <a
              href="#cases"
              className="inline-flex items-center gap-2 bg-[#1e3a5f] text-white font-medium transition-all duration-300 hover:bg-[#CCA45B] hover:text-[#1e3a5f]"
              style={{ padding: "14px 28px" }}
            >
              Explore More
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right - Big Stats */}
          <div className="grid grid-cols-2 gap-8">
            <div className="border-l-4 border-[#CCA45B]" style={{ paddingLeft: "24px" }}>
              <p className="text-6xl lg:text-7xl font-bold text-[#1e3a5f] mb-2">350+</p>
              <p className="text-gray-500">Successful Cases</p>
            </div>
            <div className="border-l-4 border-[#1e3a5f]" style={{ paddingLeft: "24px" }}>
              <p className="text-6xl lg:text-7xl font-bold text-[#1e3a5f] mb-2">9.4</p>
              <p className="text-gray-500">Client Rating</p>
            </div>
          </div>
        </div>

        {/* Trust Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
              <Image
                src="/images/shahzad-siddiqui.jpg"
                alt="Shahzad Siddiqui"
                width={500}
                height={500}
                className="h-full w-auto object-cover"
              />
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-[#CCA45B]" style={{ padding: "32px", maxWidth: "280px" }}>
              <p className="text-[#1e3a5f] text-lg font-medium leading-relaxed">
                Featured in Toronto Star and MacLean&apos;s magazine for landmark cases.
              </p>
            </div>
          </div>

          {/* Right - Content */}
          <div style={{ paddingLeft: "24px" }}>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-[2px] bg-[#CCA45B]"></div>
              <span className="text-[#CCA45B] text-sm font-medium uppercase tracking-wider">Why Choose Us</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal text-[#1e3a5f] leading-tight mb-6">
              The Smartest Gain for Reputation
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              His cases have been profiled in major publications. As one of the Top 22 Commercial 
              Litigators in Toronto, Shahzad brings unparalleled expertise to every case.
            </p>
            
            {/* Features List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-[#CCA45B]"></div>
                <span className="text-[#1e3a5f] font-medium">Top 22 Toronto Commercial Litigators</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-[#CCA45B]"></div>
                <span className="text-[#1e3a5f] font-medium">Over 70+ Case Citations</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-[#CCA45B]"></div>
                <span className="text-[#1e3a5f] font-medium">Harvard Law School Lecturer</span>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[#1e3a5f] font-semibold border-b-2 border-[#1e3a5f] hover:border-[#CCA45B] hover:text-[#CCA45B] transition-all"
              style={{ paddingBottom: "4px" }}
            >
              Get Free Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
