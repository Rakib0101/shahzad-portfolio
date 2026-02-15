import { Scale, Building2, Users, Landmark, LucideIcon } from "lucide-react";

interface CaseItem {
  name: string;
  description: string;
  icon: LucideIcon;
  highlight: string;
}

const notableCases: CaseItem[] = [
  {
    name: "Azzarello v. Shawqi",
    description:
      "Leading case on the law of deposit in Canada, cited over 70 times including by the Alberta Court of Appeal and Nova Scotia Supreme Court.",
    icon: Landmark,
    highlight: "70+ Citations",
  },
  {
    name: "Forest Hill Homes v. Ou",
    description:
      "Precedent-setting case striking a high interest penalty clause, cited with approval by the Ontario Court of Appeal.",
    icon: Building2,
    highlight: "Court of Appeal",
  },
  {
    name: "Aga v. Ethiopian Orthodox Tewahedo Church",
    description:
      "Ontario case that went to the Supreme Court of Canada.",
    icon: Scale,
    highlight: "Supreme Court",
  },
  {
    name: "Treyes v. OLGC",
    description:
      "Represented a father, husband and Parkinson's sufferer who lost his family and home fighting the Ontario Lottery and Gaming Corporation.",
    icon: Users,
    highlight: "Public Interest",
  },
];

export default function Cases() {
  return (
    <section id="cases" className="bg-[#fafafa]" style={{ padding: "128px 0" }}>
      <div className="max-w-7xl mx-auto" style={{ padding: "0 24px" }}>
        <div className="text-center" style={{ marginBottom: "80px" }}>
          <span className="text-[#CCA45B] font-semibold text-sm uppercase tracking-widest">Track Record</span>
          <h2 className="text-4xl lg:text-6xl font-bold text-[#1a1a2e] mt-4 mb-6">
            Notable Cases
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Landmark legal actions that have shaped Canadian law
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {notableCases.map((caseItem, index) => {
            const IconComponent = caseItem.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-3xl border border-gray-100 hover:border-[#CCA45B]/30 hover-lift cursor-pointer"
                style={{ padding: "40px" }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-[#1a1a2e] rounded-2xl flex items-center justify-center group-hover:bg-[#CCA45B] transition-colors duration-300">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-[#CCA45B] bg-[#CCA45B]/10 px-3 py-1.5 rounded-full">
                    {caseItem.highlight}
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-[#1a1a2e] mb-4 group-hover:text-[#CCA45B] transition-colors">
                  {caseItem.name}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
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
