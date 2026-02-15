import { Briefcase } from "lucide-react";

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

export default function Work() {
  return (
    <section id="work" className="bg-white" style={{ padding: "128px 0" }}>
      <div className="max-w-7xl mx-auto" style={{ padding: "0 24px" }}>
        <div className="text-center" style={{ marginBottom: "80px" }}>
          <span className="text-[#CCA45B] font-semibold text-sm uppercase tracking-widest">Experience</span>
          <h2 className="text-4xl lg:text-6xl font-bold text-[#1a1a2e] mt-4 mb-6">
            Representative Work
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Sample engagements demonstrating breadth and depth of expertise
          </p>
        </div>
        <div className="space-y-4">
          {representativeWork.map((work, index) => (
            <div
              key={index}
              className="group flex flex-col lg:flex-row lg:items-center gap-6 bg-[#fafafa] rounded-2xl hover:bg-[#1a1a2e] transition-all duration-500 cursor-pointer"
              style={{ padding: "32px" }}
            >
              <div className="flex items-center gap-4 lg:w-40 shrink-0">
                <div className="w-12 h-12 bg-[#1a1a2e] group-hover:bg-[#CCA45B] rounded-xl flex items-center justify-center transition-colors">
                  <Briefcase className="w-6 h-6 text-white group-hover:text-[#1a1a2e]" />
                </div>
                <div className="lg:hidden">
                  <p className="text-2xl font-bold text-[#CCA45B]">{work.value}</p>
                  <p className="text-xs text-gray-500 group-hover:text-gray-400 uppercase tracking-wider">{work.label}</p>
                </div>
              </div>
              <p className="text-gray-700 group-hover:text-gray-300 text-lg leading-relaxed flex-1 transition-colors">
                {work.text}
              </p>
              <div className="hidden lg:block text-right shrink-0">
                <p className="text-3xl font-bold text-[#CCA45B]">{work.value}</p>
                <p className="text-xs text-gray-500 group-hover:text-gray-400 uppercase tracking-wider">{work.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
