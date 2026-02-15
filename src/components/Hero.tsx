import Image from "next/image";
import { Scale, ArrowRight, ChevronDown, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0d0d0d] overflow-hidden">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#1a1a2e] via-[#0d0d0d] to-[#0d0d0d]"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#CCA45B]/5"></div>
      </div> */}

      <div className="relative z-10 max-w-7xl mx-auto" style={{ padding: "140px 24px 0 24px" }}>
        <div className="grid lg:grid-cols-12 gap-8 items-start min-h-[calc(100vh-100px)]">
          
          {/* Left Content */}
          <div className="lg:col-span-6 flex flex-col justify-center" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
            {/* Badge */}
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-[#CCA45B] rounded-xl flex items-center justify-center">
                <Scale className="w-6 h-6 text-[#0d0d0d]" />
              </div>
              <div>
                <p className="text-[#CCA45B] text-sm font-semibold uppercase tracking-wider">Covenant LLP</p>
                <p className="text-gray-500 text-xs">Managing Partner</p>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-8">
              We Always
              <br />
              Stand for Your
              <br />
              <span className="text-[#CCA45B]">Right Justice</span>
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-lg lg:text-xl max-w-lg mb-10 leading-relaxed">
              Involved in some of the most important legal actions in Ontario. 
              Featured in Toronto Star and MacLean&apos;s magazine. Top 22 Commercial Litigators.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 bg-[#CCA45B] text-[#0d0d0d] font-semibold rounded-full transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-[#CCA45B]/20"
                style={{ padding: "18px 32px" }}
              >
                Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#about"
                className="group inline-flex items-center gap-3 text-white font-medium hover:text-[#CCA45B] transition-colors"
                style={{ padding: "18px 24px" }}
              >
                <div className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-[#CCA45B] transition-colors">
                  <Play className="w-4 h-4 ml-0.5" />
                </div>
                Watch Video
              </a>
            </div>

            {/* Trusted By */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <p className="text-gray-500 text-sm mb-4">Featured In</p>
              <div className="flex items-center gap-8 text-gray-400">
                <span className="text-lg font-semibold">Toronto Star</span>
                <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                <span className="text-lg font-semibold">MacLean&apos;s</span>
                <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                <span className="text-lg font-semibold">National Jurist</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div className="lg:col-span-6 relative" style={{ paddingTop: "40px" }}>
            <div className="grid grid-cols-12 gap-4">
              {/* Main Large Image */}
              <div className="col-span-8 row-span-2">
                <div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden">
                  <Image
                    src="/images/shahzad-siddiqui.jpg"
                    alt="Shahzad Siddiqui"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/60 to-transparent"></div>
                  {/* Name Tag */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-1">Shahzad Siddiqui</h3>
                    <p className="text-[#CCA45B]">Managing Partner</p>
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <div className="col-span-4">
                <div className="bg-[#CCA45B] rounded-3xl h-full flex flex-col justify-center" style={{ padding: "32px 24px" }}>
                  <p className="text-6xl font-bold text-[#0d0d0d] mb-2">20+</p>
                  <p className="text-[#0d0d0d]/70 font-medium">Years of Legal Excellence</p>
                </div>
              </div>

              {/* Second Stats */}
              <div className="col-span-4">
                <div className="bg-[#1a1a2e] rounded-3xl h-full flex flex-col justify-center" style={{ padding: "32px 24px" }}>
                  <p className="text-5xl font-bold text-white mb-2">70+</p>
                  <p className="text-gray-400 text-sm">Case Citations</p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-white rounded-2xl shadow-2xl hidden xl:block" style={{ padding: "20px 24px" }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#CCA45B]/20 rounded-full flex items-center justify-center">
                  <Scale className="w-6 h-6 text-[#CCA45B]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#0d0d0d]">Top 22</p>
                  <p className="text-gray-500 text-sm">Toronto Litigators</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-[#CCA45B] transition-colors">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </a>
    </section>
  );
}
