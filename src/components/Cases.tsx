import { Scale, Building2, Users, Landmark, LucideIcon, ArrowUpRight } from "lucide-react";

interface CaseItem {
  name: string;
  description: string;
  icon: LucideIcon;
  highlight: string;
  number: string;
}

const notableCases: CaseItem[] = [
  {
    name: "Azzarello v. Shawqi",
    description:
      "Leading case on the law of deposit in Canada, cited over 70 times including by the Alberta Court of Appeal and Nova Scotia Supreme Court.",
    icon: Landmark,
    highlight: "70+ Citations",
    number: "01",
  },
  {
    name: "Forest Hill Homes v. Ou",
    description:
      "Precedent-setting case striking a high interest penalty clause, cited with approval by the Ontario Court of Appeal.",
    icon: Building2,
    highlight: "Court of Appeal",
    number: "02",
  },
  {
    name: "Aga v. Ethiopian Orthodox Tewahedo Church",
    description:
      "Ontario case that went to the Supreme Court of Canada.",
    icon: Scale,
    highlight: "Supreme Court",
    number: "03",
  },
  {
    name: "Treyes v. OLGC",
    description:
      "Represented a father, husband and Parkinson's sufferer who lost his family and home fighting the Ontario Lottery and Gaming Corporation.",
    icon: Users,
    highlight: "Public Interest",
    number: "04",
  },
];

export default function Cases() {
  return (
    <section id="cases" className="bg-[#0d0d0d]" style={{ padding: "120px 0" }}>
      <div className="max-w-7xl mx-auto" style={{ padding: "0 24px" }}>
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8" style={{ marginBottom: "64px" }}>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-[#CCA45B] rounded-full"></div>
              <span className="text-[#CCA45B] font-semibold text-sm uppercase tracking-wider">Case Studies</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Explore Latest<br />
              <span className="text-[#CCA45B]">Case Studies</span>
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-md">
            Landmark legal actions that have shaped Canadian law and set precedents across the nation.
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {notableCases.map((caseItem, index) => {
            const IconComponent = caseItem.icon;
            return (
              <div
                key={index}
                className="group bg-[#1a1a2e] rounded-3xl border border-white/5 hover:border-[#CCA45B]/30 transition-all duration-500 cursor-pointer overflow-hidden"
                style={{ padding: "40px" }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-[#CCA45B]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#CCA45B] transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-[#CCA45B] group-hover:text-[#0d0d0d] transition-colors" />
                    </div>
                    <span className="text-6xl font-bold text-white/5 group-hover:text-[#CCA45B]/20 transition-colors">
                      {caseItem.number}
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#CCA45B] group-hover:border-[#CCA45B] transition-all">
                    <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-[#0d0d0d] transition-colors" />
                  </div>
                </div>

                {/* Badge */}
                <span className="inline-block text-[#CCA45B] text-xs font-bold uppercase tracking-wider bg-[#CCA45B]/10 rounded-full mb-4" style={{ padding: "8px 16px" }}>
                  {caseItem.highlight}
                </span>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#CCA45B] transition-colors">
                  {caseItem.name}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {caseItem.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
