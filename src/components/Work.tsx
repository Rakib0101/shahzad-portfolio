import { Star, Quote } from "lucide-react";

interface WorkItem {
  text: string;
  value: string;
  label: string;
}

const representativeWork: WorkItem[] = [
  {
    text: "Assisting a TSX-V listed tech company in ongoing litigation matters and collective savings of over $10 million.",
    value: "$10M+",
    label: "Savings",
  },
  {
    text: "Litigated breach of fiduciary duty and conversion of property action for a Canadian television broadcaster.",
    value: "Media",
    label: "Industry",
  },
  {
    text: "Retained by world's third largest manufacturer of fragrances, based in Tianjin, China, on complex, multi-party, long-running litigation involving contamination of commercial real estate in Toronto, Canada.",
    value: "Global",
    label: "Scope",
  },
  {
    text: "Hired by the Ontario Public Guardian and Trustee to prosecute an elder financial abuse case.",
    value: "Public",
    label: "Sector",
  },
  {
    text: "Represented Canada's largest grocery and baking company in appellate tax litigation.",
    value: "#1",
    label: "Client Size",
  },
];

const stats = [
  { value: "$10M+", label: "Client Savings" },
  { value: "70+", label: "Case Citations" },
  { value: "2K+", label: "Cases Handled" },
];

export default function Work() {
  return (
    <section id="work" className="bg-[#0d0d0d]" style={{ padding: "120px 0" }}>
      <div className="max-w-7xl mx-auto" style={{ padding: "0 24px" }}>
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Column - Stats & Testimonial */}
          <div className="lg:col-span-5 space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`rounded-3xl ${index === 0 ? 'bg-[#CCA45B]' : 'bg-[#1a1a2e]'}`}
                  style={{ padding: "40px" }}
                >
                  <p className={`text-6xl lg:text-7xl font-bold mb-2 ${index === 0 ? 'text-[#0d0d0d]' : 'text-white'}`}>
                    {stat.value}
                  </p>
                  <p className={`text-lg ${index === 0 ? 'text-[#0d0d0d]/70' : 'text-gray-400'}`}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="bg-[#1a1a2e] rounded-3xl" style={{ padding: "40px" }}>
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#CCA45B] text-[#CCA45B]" />
                ))}
              </div>
              <Quote className="w-10 h-10 text-[#CCA45B]/30 mb-4" />
              <p className="text-white text-lg leading-relaxed mb-6">
                &quot;Shahzad&apos;s expertise in complex commercial litigation was invaluable. 
                His strategic approach saved our company millions.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#CCA45B] rounded-full flex items-center justify-center">
                  <span className="text-[#0d0d0d] font-bold">TS</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Toronto Star</p>
                  <p className="text-gray-400 text-sm">Media Coverage</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Work List */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-[#CCA45B] rounded-full"></div>
              <span className="text-[#CCA45B] font-semibold text-sm uppercase tracking-wider">Representative Work</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-10">
              Success Stories for<br />
              <span className="text-[#CCA45B]">Our Clients</span>
            </h2>

            <div className="space-y-4">
              {representativeWork.map((work, index) => (
                <div
                  key={index}
                  className="group bg-[#1a1a2e] rounded-2xl border border-white/5 hover:border-[#CCA45B]/30 transition-all duration-300 cursor-pointer"
                  style={{ padding: "28px" }}
                >
                  <div className="flex items-start gap-5">
                    <div className="shrink-0">
                      <div className="w-16 h-16 bg-[#CCA45B]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#CCA45B] transition-colors">
                        <span className="text-2xl font-bold text-[#CCA45B] group-hover:text-[#0d0d0d] transition-colors">
                          {work.value}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <span className="inline-block text-[#CCA45B] text-xs font-bold uppercase tracking-wider mb-2">
                        {work.label}
                      </span>
                      <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                        {work.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
