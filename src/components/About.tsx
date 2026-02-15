import Image from "next/image";
import { Scale, Globe, Users, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-[#fafafa] relative overflow-hidden" style={{ padding: "120px 0" }}>
      <div className="max-w-7xl mx-auto" style={{ padding: "0 24px" }}>
        
        {/* Bento Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-6">
          
          {/* Left Column - Image + Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Main Image Card */}
            <div className="relative rounded-3xl overflow-hidden" style={{ height: "400px" }}>
              <Image
                src="/images/shahzad-siddiqui.jpg"
                alt="Shahzad Siddiqui"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0" style={{ padding: "32px" }}>
                <span className="inline-block bg-[#CCA45B] text-[#0d0d0d] text-xs font-bold uppercase tracking-wider rounded-full mb-4" style={{ padding: "6px 16px" }}>
                  Managing Partner
                </span>
                <h3 className="text-2xl font-bold text-white">Shahzad Siddiqui</h3>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#0d0d0d] rounded-3xl" style={{ padding: "32px" }}>
                <p className="text-5xl font-bold text-[#CCA45B] mb-2">20+</p>
                <p className="text-gray-400 text-sm">Years Experience</p>
              </div>
              <div className="bg-[#CCA45B] rounded-3xl" style={{ padding: "32px" }}>
                <p className="text-5xl font-bold text-[#0d0d0d] mb-2">3</p>
                <p className="text-[#0d0d0d]/70 text-sm">Languages Spoken</p>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Header Card */}
            <div className="bg-white rounded-3xl" style={{ padding: "48px" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-[#CCA45B] rounded-full"></div>
                <span className="text-[#CCA45B] font-semibold text-sm uppercase tracking-wider">About Shahzad</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0d0d0d] leading-tight mb-6">
                Trusted Attorney<br />
                <span className="text-[#CCA45B]">With Expertise</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Shahzad Siddiqui is the Managing Partner of Covenant LLP, bringing decades of 
                experience in complex commercial litigation, estate planning, and international law.
                His cases have been profiled in the Toronto Star and MacLean&apos;s magazine.
              </p>
              <a
                href="#cases"
                className="inline-flex items-center gap-2 text-[#0d0d0d] font-semibold hover:text-[#CCA45B] transition-colors"
              >
                View Notable Cases
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Feature Cards Row */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Languages Card */}
              <div className="bg-[#0d0d0d] rounded-3xl" style={{ padding: "32px" }}>
                <div className="w-14 h-14 bg-[#CCA45B] rounded-2xl flex items-center justify-center mb-6">
                  <Globe className="w-7 h-7 text-[#0d0d0d]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Multilingual</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#CCA45B] rounded-full"></span>
                    English
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#CCA45B] rounded-full"></span>
                    Urdu/Hindi
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#CCA45B] rounded-full"></span>
                    Mandarin
                  </li>
                </ul>
              </div>

              {/* Interests Card */}
              <div className="bg-white rounded-3xl border border-gray-100" style={{ padding: "32px" }}>
                <div className="w-14 h-14 bg-[#0d0d0d] rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-[#CCA45B]" />
                </div>
                <h3 className="text-xl font-bold text-[#0d0d0d] mb-4">Beyond Law</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#CCA45B] rounded-full"></span>
                    12 years competitive polo
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#CCA45B] rounded-full"></span>
                    Great Wall Marathon
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#CCA45B] rounded-full"></span>
                    IDRF Board Director
                  </li>
                </ul>
              </div>
            </div>

            {/* Quote Card */}
            <div className="bg-[#CCA45B]/10 rounded-3xl border border-[#CCA45B]/20" style={{ padding: "32px" }}>
              <div className="flex items-start gap-4">
                <Scale className="w-10 h-10 text-[#CCA45B] shrink-0" />
                <div>
                  <p className="text-[#0d0d0d] text-lg italic leading-relaxed mb-3">
                    &quot;One of the most important legal actions in Ontario...&quot;
                  </p>
                  <p className="text-[#CCA45B] font-semibold">— MacLean&apos;s Magazine, September 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
