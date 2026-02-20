import { Building2, Users, Scale, Landmark, LucideIcon } from "lucide-react";

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
    <section id="cases" className="bg-[#f8f8f8]" style={{ padding: "100px 0" }}>
      <div className="max-w-7xl mx-auto" style={{ padding: "0 24px" }}>
        {/* Section Header */}
        <div className="text-center" style={{ marginBottom: "64px" }}>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-[2px] bg-[#CCA45B]"></div>
            <span className="text-[#CCA45B] text-sm font-medium uppercase tracking-wider">Case Studies</span>
            <div className="w-8 h-[2px] bg-[#CCA45B]"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-normal text-[#1e3a5f] leading-tight mb-4">
            Your Strategic Partner<br />
            in <span className="italic">Law and Growth</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Landmark legal actions that have shaped Canadian law and set precedents across the nation.
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {notableCases.map((caseItem, index) => {
            const IconComponent = caseItem.icon;
            return (
              <div
                key={index}
                className="group bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer"
                style={{ padding: "32px" }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-[#1e3a5f] flex items-center justify-center mb-6 group-hover:bg-[#CCA45B] transition-colors">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-3 group-hover:text-[#CCA45B] transition-colors">
                  {caseItem.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {caseItem.description}
                </p>
                
                {/* Badge */}
                <span className="inline-block text-[#CCA45B] text-xs font-semibold uppercase tracking-wider">
                  {caseItem.highlight}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
