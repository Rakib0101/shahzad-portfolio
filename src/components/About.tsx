import { Globe, Quote } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-white relative overflow-hidden" style={{ padding: "128px 0" }}>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#fafafa] to-transparent"></div>
      <div className="max-w-7xl mx-auto relative" style={{ padding: "0 24px" }}>
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="sticky" style={{ top: "128px" }}>
              <span className="text-[#CCA45B] font-semibold text-sm uppercase tracking-widest">About</span>
              <h2 className="text-4xl lg:text-6xl font-bold text-[#1a1a2e] mt-4 mb-8 leading-tight">
                Dedicated to Excellence in Law
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Shahzad Siddiqui is the Managing Partner of Covenant LLP, bringing decades of 
                experience in complex commercial litigation, estate planning, and international law.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                His cases have been profiled in the <strong>Toronto Star</strong> and the September 2025 issue of 
                <strong> MacLean&apos;s magazine</strong>, establishing him as one of Canada&apos;s most respected legal voices.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-8">
            {/* Languages Card */}
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#2d2d44] rounded-3xl text-white hover-lift" style={{ padding: "40px" }}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-[#CCA45B] rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-[#1a1a2e]" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-semibold">Languages & Interests</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                    <div className="w-2 h-2 bg-[#CCA45B] rounded-full"></div>
                    <span>English, Urdu/Hindi, Mandarin</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                    <div className="w-2 h-2 bg-[#CCA45B] rounded-full"></div>
                    <span>12 years competitive polo</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                    <div className="w-2 h-2 bg-[#CCA45B] rounded-full"></div>
                    <span>Member of Wyndance Golf</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                    <div className="w-2 h-2 bg-[#CCA45B] rounded-full"></div>
                    <span>Toronto Marathon</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                    <div className="w-2 h-2 bg-[#CCA45B] rounded-full"></div>
                    <span>Great Wall of China Marathon</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                    <div className="w-2 h-2 bg-[#CCA45B] rounded-full"></div>
                    <span>IDRF Board Director</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Media Feature */}
            <div className="bg-[#fafafa] rounded-3xl border border-gray-100 hover-lift" style={{ padding: "40px" }}>
              <div className="flex items-start gap-4">
                <Quote className="w-10 h-10 text-[#CCA45B] shrink-0" />
                <div>
                  <p className="text-gray-700 text-lg italic leading-relaxed mb-4">
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
