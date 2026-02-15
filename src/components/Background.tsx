import { GraduationCap, Award, Trophy } from "lucide-react";

export default function Background() {
  return (
    <section id="background" className="bg-white" style={{ padding: "128px 0" }}>
      <div className="max-w-7xl mx-auto" style={{ padding: "0 24px" }}>
        <div className="text-center" style={{ marginBottom: "80px" }}>
          <span className="text-[#CCA45B] font-semibold text-sm uppercase tracking-widest">Credentials</span>
          <h2 className="text-4xl lg:text-6xl font-bold text-[#1a1a2e] mt-4 mb-6">
            Legal Background
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            A distinguished career spanning continents
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="bg-[#fafafa] rounded-3xl hover-lift" style={{ padding: "40px" }}>
            <div className="w-14 h-14 bg-[#CCA45B] rounded-2xl flex items-center justify-center mb-6">
              <GraduationCap className="w-7 h-7 text-[#1a1a2e]" />
            </div>
            <h3 className="text-2xl font-bold text-[#1a1a2e] mb-6">Education</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#CCA45B] rounded-full mt-2.5 shrink-0"></div>
                <span className="text-gray-600">University of Toronto Graduate</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#CCA45B] rounded-full mt-2.5 shrink-0"></div>
                <span className="text-gray-600">LL.B, Osgoode Hall Law School (2002)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#CCA45B] rounded-full mt-2.5 shrink-0"></div>
                <span className="text-gray-600">LL.M, University of Pennsylvania</span>
              </li>
            </ul>
          </div>

          {/* Harvard & International */}
          <div className="bg-gradient-to-br from-[#1a1a2e] to-[#2d2d44] rounded-3xl text-white hover-lift" style={{ padding: "40px" }}>
            <div className="w-14 h-14 bg-[#CCA45B] rounded-2xl flex items-center justify-center mb-6">
              <Award className="w-7 h-7 text-[#1a1a2e]" />
            </div>
            <h3 className="text-2xl font-bold mb-6">Harvard & International</h3>
            <div className="space-y-6">
              <div>
                <p className="text-[#CCA45B] text-sm font-semibold mb-2">HARVARD LAW SCHOOL</p>
                <p className="text-gray-300">Lectured on Abrahamic finance (March 2010)</p>
              </div>
              <div>
                <p className="text-[#CCA45B] text-sm font-semibold mb-2">CHINA</p>
                <p className="text-gray-300">Taught at Southwest University of Political Science and Law</p>
              </div>
            </div>
          </div>

          {/* Recognition */}
          <div className="bg-[#fafafa] rounded-3xl hover-lift" style={{ padding: "40px" }}>
            <div className="w-14 h-14 bg-[#CCA45B] rounded-2xl flex items-center justify-center mb-6">
              <Trophy className="w-7 h-7 text-[#1a1a2e]" />
            </div>
            <h3 className="text-2xl font-bold text-[#1a1a2e] mb-6">Recognition</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#CCA45B] rounded-full mt-2.5 shrink-0"></div>
                <span className="text-gray-600">The National Jurist (Nov 2013)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#CCA45B] rounded-full mt-2.5 shrink-0"></div>
                <span className="text-gray-600">IFN &quot;Meet the Head&quot; (Sept 2011)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#CCA45B] rounded-full mt-2.5 shrink-0"></div>
                <span className="text-gray-600">Top 22 Toronto Litigators (2025)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
