"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Scale,
  GraduationCap,
  BookOpen,
  Globe,
  Trophy,
  Briefcase,
  Award,
  Mail,
  MapPin,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Quote,
  Building2,
  Users,
  Landmark,
} from "lucide-react";

const notableCases = [
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

const publications = [
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

const representativeWork = [
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
  { value: "70+", label: "Case Citations" },
  { value: "20+", label: "Years Experience" },
  { value: "3", label: "Languages" },
  { value: "Top 22", label: "Toronto Litigators" },
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#cases", label: "Cases" },
  { href: "#background", label: "Background" },
  { href: "#publications", label: "Publications" },
  { href: "#work", label: "Work" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="flex items-center group">
              <Image
                src="/images/logo.png"
                alt="Covenant LLP"
                width={150}
                height={45}
                className="h-11 w-auto transition-transform group-hover:scale-105"
              />
            </a>
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#1a1a2e] transition-colors line-animation"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="ml-4 bg-[#1a1a2e] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#CCA45B] hover:text-[#1a1a2e] transition-all duration-300 hover:shadow-lg hover:shadow-[#CCA45B]/25"
              >
                Get in Touch
              </a>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl animate-slide-up">
            <div className="px-6 py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-gray-600 hover:text-[#1a1a2e] hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 bg-[#1a1a2e] text-white text-center rounded-lg mt-4"
              >
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[#1a1a2e]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNDQ0E0NUIiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        </div>
        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#CCA45B]/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#CCA45B]/15 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-[#2d2d44]/50 rounded-full blur-3xl animate-pulse-glow"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20">
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

      {/* About Section */}
      <section id="about" className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#fafafa] to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <span className="text-[#CCA45B] font-semibold text-sm uppercase tracking-widest">About</span>
                <h2 className="text-4xl lg:text-6xl font-bold text-[#1a1a2e] mt-4 mb-8 leading-tight">
                  Dedicated to Excellence in Law
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Shahzad Siddiqui is the Managing Partner of Covenant LLP, bringing decades of 
                  experience in complex commercial litigation, estate planning, and international law.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  His cases have been profiled in the <strong>Toronto Star</strong> and the September 2025 issue of 
                  <strong> MacLean&apos;s magazine</strong>, establishing him as one of Canada&apos;s most respected legal voices.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-7 space-y-8">
              {/* Languages Card */}
              <div className="bg-gradient-to-br from-[#1a1a2e] to-[#2d2d44] rounded-3xl p-8 lg:p-10 text-white hover-lift">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-[#CCA45B] rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-[#1a1a2e]" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-semibold">Languages & Interests</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                      <div className="w-2 h-2 bg-[#CCA45B] rounded-full"></div>
                      <span>English, Urdu/Hindi, Mandarin</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                      <div className="w-2 h-2 bg-[#CCA45B] rounded-full"></div>
                      <span>12 years competitive polo</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                      <div className="w-2 h-2 bg-[#CCA45B] rounded-full"></div>
                      <span>Member of Wyndance Golf</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                      <div className="w-2 h-2 bg-[#CCA45B] rounded-full"></div>
                      <span>Toronto Marathon</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                      <div className="w-2 h-2 bg-[#CCA45B] rounded-full"></div>
                      <span>Great Wall of China Marathon</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                      <div className="w-2 h-2 bg-[#CCA45B] rounded-full"></div>
                      <span>IDRF Board Director</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Media Feature */}
              <div className="bg-[#fafafa] rounded-3xl p-8 lg:p-10 border border-gray-100 hover-lift">
                <div className="flex items-start gap-4">
                  <Quote className="w-10 h-10 text-[#CCA45B] shrink-0" />
                  <div>
                    <p className="text-gray-700 text-lg italic leading-relaxed mb-4">
                      &quot;One of the most important legal actions in Ontario...&quot;
                    </p>
                    <p className="text-[#CCA45B] font-semibold">— MacLean&apos;s Magazine, September 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notable Cases Section */}
      <section id="cases" className="py-32 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
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
                  className="group bg-white p-8 lg:p-10 rounded-3xl border border-gray-100 hover:border-[#CCA45B]/30 hover-lift cursor-pointer"
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

      {/* Legal Background Section */}
      <section id="background" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
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
            <div className="bg-[#fafafa] rounded-3xl p-8 lg:p-10 hover-lift">
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
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#2d2d44] rounded-3xl p-8 lg:p-10 text-white hover-lift">
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
            <div className="bg-[#fafafa] rounded-3xl p-8 lg:p-10 hover-lift">
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

      {/* Publications Section */}
      <section id="publications" className="py-32 bg-[#1a1a2e] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#CCA45B]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#CCA45B]/5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-20">
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
                className="group glass rounded-3xl p-8 lg:p-10 border border-white/10 hover:border-[#CCA45B]/50 transition-all duration-500 hover-lift"
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

      {/* Representative Work Section */}
      <section id="work" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
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
                className="group flex flex-col lg:flex-row lg:items-center gap-6 p-6 lg:p-8 bg-[#fafafa] rounded-2xl hover:bg-[#1a1a2e] transition-all duration-500 cursor-pointer"
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

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-[#1a1a2e] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#CCA45B]/5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
          <span className="text-[#CCA45B] font-semibold text-sm uppercase tracking-widest">Contact</span>
          <h2 className="text-5xl lg:text-7xl font-bold text-white mt-4 mb-8">
            Let&apos;s Connect
          </h2>
          <p className="text-gray-300 text-xl lg:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed">
            For legal inquiries or to discuss how we can assist with your matter, 
            please reach out to Covenant LLP.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a
              href="mailto:contact@covenantllp.com"
              className="group flex items-center gap-3 bg-[#CCA45B] px-8 py-5 rounded-full text-[#1a1a2e] font-semibold hover:bg-white transition-all duration-300 hover:shadow-xl hover:shadow-[#CCA45B]/20"
            >
              <Mail className="w-5 h-5" />
              <span>contact@covenantllp.com</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-400 mb-8">
            <MapPin className="w-5 h-5 text-[#CCA45B]" />
            <span>Toronto, Ontario, Canada</span>
          </div>
          <div className="pt-12 border-t border-white/10">
            <div className="flex items-center justify-center mb-4">
              <Image
                src="/images/logo.png"
                alt="Covenant LLP"
                width={160}
                height={50}
                className="h-12 w-auto brightness-0 invert opacity-70"
              />
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Shahzad Siddiqui. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
