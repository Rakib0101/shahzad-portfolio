import { BookOpen } from "lucide-react";

interface Publication {
  title: string;
  type: string;
  year: string;
  publisher?: string;
}

const publications: Publication[] = [
  {
    title: "American Lawyer: Twelve Attorneys Who Have Transformed the United States",
    type: "Book",
    year: "2024",
  },
  {
    title: "Wills, Trusts and Estate Drafting in Canada",
    publisher: "Thomson Reuters",
    type: "Book",
    year: "2023",
  },
  {
    title: "Estate Planning for the Wealthy Entrepreneur",
    publisher: "Financial Post",
    type: "Article",
    year: "2022",
  },
];

export default function Publications() {
  return (
    <section id="publications" className="bg-[#1a1a2e] relative overflow-hidden" style={{ padding: "128px 0" }}>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#CCA45B]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#CCA45B]/5 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto relative" style={{ padding: "0 24px" }}>
        <div className="text-center" style={{ marginBottom: "80px" }}>
          <span className="text-[#CCA45B] font-semibold text-sm uppercase tracking-widest">Thought Leadership</span>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mt-4 mb-6">
            Publications & Writing
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Contributing to legal scholarship and public discourse
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="group glass rounded-3xl border border-white/10 hover:border-[#CCA45B]/50 transition-all duration-500 hover-lift"
              style={{ padding: "40px" }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-[#CCA45B] rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform">
                  <BookOpen className="w-7 h-7 text-[#1a1a2e]" />
                </div>
                <span className="text-[#CCA45B] text-sm font-bold">{pub.year}</span>
              </div>
              <span className="inline-block text-[#CCA45B] text-xs font-semibold uppercase tracking-wider bg-[#CCA45B]/10 px-3 py-1 rounded-full mb-4">{pub.type}</span>
              <h3 className="text-lg font-bold text-white mb-4 leading-snug group-hover:text-[#CCA45B] transition-colors">
                {pub.title}
              </h3>
              {pub.publisher && (
                <p className="text-gray-400 text-sm flex items-center gap-2">
                  <span className="w-4 h-px bg-[#CCA45B]"></span>
                  {pub.publisher}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
