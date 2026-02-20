import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-[#1e3a5f] overflow-hidden mx-12 rounded-3xl">
      <div className="max-w-7xl mx-auto" style={{ padding: "0 24px" }}>
        <div className="grid lg:grid-cols-2 gap-8 items-end" style={{ minHeight: "calc(100vh - 100px)" }}>
          
          {/* Left Content */}
          <div>
            {/* Small Label */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-[2px] bg-[#CCA45B]"></div>
              <span className="text-[#CCA45B] text-sm font-medium uppercase tracking-wider">Covenant LLP</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-[1.1] mb-6">
              Smart Legal Solutions for Work and Life
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-lg max-w-md mb-8 leading-relaxed">
              Involved in some of the most important legal actions in Ontario, providing expert counsel for complex commercial litigation and estate matters.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pb-12">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 bg-[#CCA45B] text-[#1e3a5f] font-semibold transition-all duration-300 hover:bg-white"
                style={{ padding: "16px 28px" }}
              >
                Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 text-white font-medium border-b-2 border-white/30 hover:border-[#CCA45B] hover:text-[#CCA45B] transition-all"
                style={{ paddingBottom: "4px" }}
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative">
              <div className="relative overflow-hidden" style={{ height: "600px" }}>
                <Image
                  src="/images/shahzad-siddiqui.png"
                  alt="Shahzad Siddiqui"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              
              {/* Experience Badge */}
              <div className="absolute top-8 right-8 bg-[#CCA45B] text-center" style={{ padding: "24px 20px", width: "120px" }}>
                <p className="text-4xl font-bold text-[#1e3a5f]">15+</p>
                <p className="text-[#1e3a5f] text-xs font-medium uppercase tracking-wider mt-1">Years<br />Experience</p>
              </div>

              {/* Bottom Info Bar */}
              {/* <div className="absolute bottom-0 left-0 right-0 bg-white" style={{ padding: "20px 24px" }}>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#1e3a5f]">Shahzad Siddiqui</h3>
                    <p className="text-gray-500 text-sm">Managing Partner, Covenant LLP</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-2xl font-bold text-[#1e3a5f]">70+</p>
                      <p className="text-gray-500 text-xs">Case Citations</p>
                    </div>
                    <div className="w-[1px] h-10 bg-gray-200"></div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-[#1e3a5f]">Top 22</p>
                      <p className="text-gray-500 text-xs">Toronto Litigators</p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
