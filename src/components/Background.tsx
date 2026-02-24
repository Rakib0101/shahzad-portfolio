import Image from "next/image";
import { GraduationCap, Award, Globe } from "lucide-react";

const credentials = [
  {
    icon: GraduationCap,
    title: "University of Toronto",
    description: "Undergraduate degree",
  },
  {
    icon: Award,
    title: "Osgoode Hall Law School",
    description: "LL.B, 2002",
  },
  {
    icon: GraduationCap,
    title: "University of Pennsylvania",
    description: "LL.M - Law School",
  },
  {
    icon: Globe,
    title: "Harvard Law School",
    description: "Lecturer, March 2010",
  },
];

export default function Background() {
  return (
    <>
      {/* Legal Background Section */}
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

            {/* Right - Education */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-[2px] bg-[#CCA45B]"></div>
                <span className="text-[#CCA45B] text-sm font-medium uppercase tracking-wider">Legal Background</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-normal text-white leading-tight mb-6">
                Education & <span className="italic">Credentials</span>
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                After articling at one of Canada&apos;s oldest and largest law firms, Shahzad taught international 
                business transactions and international law at Southwest University of Political Science and Law 
                in the People&apos;s Republic of China.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {credentials.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#CCA45B]/20 flex items-center justify-center shrink-0">
                        <IconComponent className="w-6 h-6 text-[#CCA45B]" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">{item.title}</p>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Representative Work Section */}
      <section id="background" className="bg-white" style={{ padding: "100px 0" }}>
        <div className="max-w-7xl mx-auto" style={{ padding: "0 24px" }}>
          {/* Section Header */}
          <div className="text-center" style={{ marginBottom: "64px" }}>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-8 h-[2px] bg-[#CCA45B]"></div>
              <span className="text-[#CCA45B] text-sm font-medium uppercase tracking-wider">Representative Work</span>
              <div className="w-8 h-[2px] bg-[#CCA45B]"></div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal text-[#1e3a5f] leading-tight mb-4">
              Sample Cases &<br />
              <span className="italic">Legal Matters</span>
            </h2>
          </div>

          {/* Work Items */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#f8f8f8] border-l-4 border-[#CCA45B]" style={{ padding: "32px" }}>
              <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">TSX-V Listed Tech Company</h3>
              <p className="text-gray-600">Assisting in ongoing litigation matters with collective savings of over $10 million.</p>
            </div>
            <div className="bg-[#f8f8f8] border-l-4 border-[#CCA45B]" style={{ padding: "32px" }}>
              <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">Canadian Television Broadcaster</h3>
              <p className="text-gray-600">Litigated breach of fiduciary duty and conversion of property action.</p>
            </div>
            <div className="bg-[#f8f8f8] border-l-4 border-[#CCA45B]" style={{ padding: "32px" }}>
              <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">World&apos;s Third Largest Fragrance Manufacturer</h3>
              <p className="text-gray-600">Complex, multi-party litigation involving contamination of commercial real estate in Toronto for client based in Tianjin, China.</p>
            </div>
            <div className="bg-[#f8f8f8] border-l-4 border-[#CCA45B]" style={{ padding: "32px" }}>
              <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">Ontario Public Guardian and Trustee</h3>
              <p className="text-gray-600">Hired to prosecute an elder financial abuse case.</p>
            </div>
            <div className="bg-[#f8f8f8] border-l-4 border-[#CCA45B] md:col-span-2" style={{ padding: "32px" }}>
              <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">Canada&apos;s Largest Grocery and Baking Company</h3>
              <p className="text-gray-600">Represented in appellate tax litigation.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
