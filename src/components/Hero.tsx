import Image from "next/image";
import { Award, ArrowRight, ChevronDown } from "lucide-react";

const stats = [
  { value: "70+", label: "Case Citations" },
  { value: "20+", label: "Years Experience" },
  { value: "3", label: "Languages" },
  { value: "Top 22", label: "Toronto Litigators" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#1a1a2e]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNDQ0E0NUIiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
      </div>
      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#CCA45B]/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#CCA45B]/15 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-[#2d2d44]/50 rounded-full blur-3xl animate-pulse-glow"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto w-full" style={{ padding: "200px 24px 80px 24px" }}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full text-[#CCA45B] text-sm mb-8 animate-fade-in">
              <Award className="w-4 h-4" />
              <span className="font-medium">Top 22 Commercial Litigators in Toronto</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white mb-8 leading-[1.05] animate-slide-up">
              Shahzad
              <br />
              <span className="gradient-text">Siddiqui</span>
            </h1>
            <p className="text-2xl lg:text-3xl text-gray-300 mb-4 animate-slide-up animation-delay-200">
              Managing Partner
            </p>
            <p className="text-xl lg:text-2xl text-[#CCA45B] font-medium mb-10 animate-slide-up animation-delay-200">
              Covenant LLP
            </p>
            <p className="text-gray-400 text-xl max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed animate-slide-up animation-delay-400">
              Involved in some of the most important legal actions in Ontario. 
              Featured in Toronto Star and MacLean&apos;s magazine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up animation-delay-600">
              <a
                href="#cases"
                className="group inline-flex items-center justify-center gap-3 bg-[#CCA45B] text-[#1a1a2e] px-10 py-5 rounded-full text-lg font-semibold hover:bg-white transition-all duration-300 hover:shadow-xl hover:shadow-[#CCA45B]/20"
              >
                View Notable Cases
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 glass text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
            {/* Stats Row */}
            <div className="grid grid-cols-4 gap-4 mt-16 pt-8 border-t border-white/10 animate-fade-in animation-delay-800">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl lg:text-4xl font-bold text-[#CCA45B]">{stat.value}</p>
                  <p className="text-sm text-gray-400 mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative order-1 lg:order-2 animate-scale-in">
            <div className="relative mx-auto w-72 sm:w-80 lg:w-full max-w-md">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#CCA45B]/30 to-transparent rounded-3xl blur-2xl animate-pulse-glow"></div>
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#CCA45B] rounded-2xl -z-10"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-[#CCA45B]/30 rounded-2xl -z-10"></div>
                <Image
                  src="/images/shahzad-siddiqui.jpg"
                  alt="Shahzad Siddiqui"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-[#CCA45B] transition-colors">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </a>
    </section>
  );
}
