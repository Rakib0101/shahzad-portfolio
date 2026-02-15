import Image from "next/image";
import { GraduationCap, Award, Trophy, MapPin, ArrowRight } from "lucide-react";

export default function Background() {
  return (
    <section id="background" className="bg-[#fafafa]" style={{ padding: "120px 0" }}>
      <div className="max-w-7xl mx-auto" style={{ padding: "0 24px" }}>
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8" style={{ marginBottom: "64px" }}>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-[#CCA45B] rounded-full"></div>
              <span className="text-[#CCA45B] font-semibold text-sm uppercase tracking-wider">Credentials</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-[#0d0d0d] leading-tight">
              Exceptional Legal Team For<br />
              <span className="text-[#CCA45B]">Perfect Solution</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#0d0d0d] text-white font-semibold rounded-full hover:bg-[#CCA45B] hover:text-[#0d0d0d] transition-all"
            style={{ padding: "16px 28px" }}
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Bento Grid */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Large Left Card - Education */}
          <div className="lg:col-span-5 bg-[#0d0d0d] rounded-3xl relative overflow-hidden" style={{ padding: "48px" }}>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-[#CCA45B] rounded-2xl flex items-center justify-center mb-8">
                <GraduationCap className="w-8 h-8 text-[#0d0d0d]" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Education</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#CCA45B] rounded-full mt-2 shrink-0"></div>
                  <div>
                    <p className="text-white font-semibold">University of Toronto</p>
                    <p className="text-gray-400 text-sm">Graduate Studies</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#CCA45B] rounded-full mt-2 shrink-0"></div>
                  <div>
                    <p className="text-white font-semibold">Osgoode Hall Law School</p>
                    <p className="text-gray-400 text-sm">LL.B, 2002</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#CCA45B] rounded-full mt-2 shrink-0"></div>
                  <div>
                    <p className="text-white font-semibold">University of Pennsylvania</p>
                    <p className="text-gray-400 text-sm">LL.M</p>
                  </div>
                </li>
              </ul>
            </div>
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#CCA45B]/10 rounded-full blur-3xl"></div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Row */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Harvard Card */}
              <div className="bg-[#CCA45B] rounded-3xl" style={{ padding: "32px" }}>
                <div className="w-14 h-14 bg-[#0d0d0d] rounded-2xl flex items-center justify-center mb-6">
                  <Award className="w-7 h-7 text-[#CCA45B]" />
                </div>
                <h3 className="text-xl font-bold text-[#0d0d0d] mb-3">Harvard Law School</h3>
                <p className="text-[#0d0d0d]/70">
                  Lectured on Abrahamic finance at Harvard Law School, March 2010
                </p>
              </div>

              {/* China Card */}
              <div className="bg-white rounded-3xl border border-gray-100" style={{ padding: "32px" }}>
                <div className="w-14 h-14 bg-[#0d0d0d] rounded-2xl flex items-center justify-center mb-6">
                  <MapPin className="w-7 h-7 text-[#CCA45B]" />
                </div>
                <h3 className="text-xl font-bold text-[#0d0d0d] mb-3">International Reach</h3>
                <p className="text-gray-600">
                  Taught at Southwest University of Political Science and Law, China
                </p>
              </div>
            </div>

            {/* Recognition Card */}
            <div className="bg-white rounded-3xl border border-gray-100" style={{ padding: "40px" }}>
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="w-20 h-20 bg-[#CCA45B]/10 rounded-2xl flex items-center justify-center shrink-0">
                  <Trophy className="w-10 h-10 text-[#CCA45B]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#0d0d0d] mb-4">Recognition & Awards</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center bg-[#0d0d0d] text-white text-sm font-medium rounded-full" style={{ padding: "8px 16px" }}>
                      Top 22 Toronto Litigators 2025
                    </span>
                    <span className="inline-flex items-center bg-[#fafafa] text-[#0d0d0d] text-sm font-medium rounded-full border border-gray-200" style={{ padding: "8px 16px" }}>
                      The National Jurist
                    </span>
                    <span className="inline-flex items-center bg-[#fafafa] text-[#0d0d0d] text-sm font-medium rounded-full border border-gray-200" style={{ padding: "8px 16px" }}>
                      IFN &quot;Meet the Head&quot;
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
