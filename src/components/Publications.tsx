import { BookOpen, ArrowUpRight, Newspaper } from "lucide-react";

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
    <section id="publications" className="bg-white" style={{ padding: "120px 0" }}>
      <div className="max-w-7xl mx-auto" style={{ padding: "0 24px" }}>
        {/* Section Header */}
        <div className="text-center" style={{ marginBottom: "64px" }}>
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-[#CCA45B] rounded-full"></div>
            <span className="text-[#CCA45B] font-semibold text-sm uppercase tracking-wider">Publications</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-[#0d0d0d] leading-tight mb-6">
            Latest News <span className="text-[#CCA45B]">& Articles</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Contributing to legal scholarship and public discourse
          </p>
        </div>

        {/* Publications Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="group bg-[#fafafa] rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              {/* Image/Header Area */}
              <div className="relative bg-[#0d0d0d] overflow-hidden" style={{ height: "200px" }}>
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] to-[#0d0d0d]"></div>
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-[#CCA45B] text-[#0d0d0d] text-xs font-bold uppercase tracking-wider rounded-full" style={{ padding: "6px 14px" }}>
                    {pub.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#CCA45B] transition-colors">
                    <ArrowUpRight className="w-5 h-5 text-white group-hover:text-[#0d0d0d] transition-colors" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-14 h-14 bg-[#CCA45B] rounded-2xl flex items-center justify-center">
                    {pub.type === "Book" ? (
                      <BookOpen className="w-7 h-7 text-[#0d0d0d]" />
                    ) : (
                      <Newspaper className="w-7 h-7 text-[#0d0d0d]" />
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "28px" }}>
                <div className="flex items-center gap-3 mb-4 text-gray-500 text-sm">
                  <span>{pub.year}</span>
                  {pub.publisher && (
                    <>
                      <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                      <span>{pub.publisher}</span>
                    </>
                  )}
                </div>
                <h3 className="text-lg font-bold text-[#0d0d0d] leading-snug group-hover:text-[#CCA45B] transition-colors">
                  {pub.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
