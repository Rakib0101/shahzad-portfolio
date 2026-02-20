import Image from "next/image";
import { Quote } from "lucide-react";

export default function Background() {
  return (
    <>
      {/* Testimonial Section */}
      <section className="bg-[#1e3a5f]" style={{ padding: "100px 0" }}>
        <div className="max-w-7xl mx-auto" style={{ padding: "0 24px" }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div className="relative rounded-full overflow-hidden mx-auto" style={{ width: "350px", height: "350px" }}>
                <Image
                  src="/images/shahzad-siddiqui.jpg"
                  alt="Shahzad Siddiqui"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative Ring */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="rounded-full border-2 border-[#CCA45B]/30" style={{ width: "400px", height: "400px" }}></div>
              </div>
            </div>

            {/* Right - Quote */}
            <div>
              <Quote className="w-16 h-16 text-[#CCA45B] mb-6" />
              <blockquote className="text-3xl lg:text-4xl font-normal text-white leading-relaxed mb-8">
                &quot;Seeking a Professional team
                that can help you <span className="italic">achieve your
                desired legal victory</span>&quot;
              </blockquote>
              <div>
                <p className="text-white font-semibold text-lg">Shahzad Siddiqui</p>
                <p className="text-gray-400">Managing Partner, Covenant LLP</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="background" className="bg-white" style={{ padding: "100px 0" }}>
        <div className="max-w-7xl mx-auto" style={{ padding: "0 24px" }}>
          {/* Section Header */}
          <div className="text-center" style={{ marginBottom: "64px" }}>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-8 h-[2px] bg-[#CCA45B]"></div>
              <span className="text-[#CCA45B] text-sm font-medium uppercase tracking-wider">Our Services</span>
              <div className="w-8 h-[2px] bg-[#CCA45B]"></div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal text-[#1e3a5f] leading-tight mb-4">
              Turning Legal Problems into<br />
              <span className="italic">Strategic Wins</span>
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-[#1e3a5f] mx-auto mb-6 flex items-center justify-center group-hover:bg-[#CCA45B] transition-colors">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Commercial Litigation</h3>
              <p className="text-gray-500">Complex business disputes and contract litigation with proven results.</p>
            </div>

            {/* Service 2 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-[#CCA45B] mx-auto mb-6 flex items-center justify-center group-hover:bg-[#1e3a5f] transition-colors">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Estate Planning</h3>
              <p className="text-gray-500">Wills, trusts, and comprehensive estate drafting for wealth preservation.</p>
            </div>

            {/* Service 3 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-[#1e3a5f] mx-auto mb-6 flex items-center justify-center group-hover:bg-[#CCA45B] transition-colors">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">International Law</h3>
              <p className="text-gray-500">Cross-border transactions and international legal matters.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
