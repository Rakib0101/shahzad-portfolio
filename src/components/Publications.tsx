import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Basic Consultation",
    price: "$850",
    period: "per session",
    description: "Perfect for initial case assessment",
    features: [
      "60-minute consultation",
      "Case evaluation report",
      "Legal strategy overview",
      "Follow-up email support",
    ],
    highlighted: false,
  },
  {
    name: "Standard Package",
    price: "$759",
    period: "per month",
    description: "For ongoing legal matters",
    features: [
      "Monthly consultations",
      "Document review",
      "Court representation",
      "Priority scheduling",
      "24/7 phone support",
    ],
    highlighted: true,
  },
  {
    name: "Premium Retainer",
    price: "$999",
    period: "per month",
    description: "Comprehensive legal partnership",
    features: [
      "Unlimited consultations",
      "Full case management",
      "Trial preparation",
      "Expert witnesses",
      "Dedicated attorney",
    ],
    highlighted: false,
  },
];

export default function Publications() {
  return (
    <>
      {/* CTA Banner */}
      <section className="bg-[#1e3a5f] relative overflow-hidden">
        <div className="max-w-7xl mx-auto" style={{ padding: "0 24px" }}>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left - Image */}
            <div className="relative" style={{ height: "400px" }}>
              <Image
                src="/images/shahzad-siddiqui.jpg"
                alt="Shahzad Siddiqui"
                fill
                className="object-cover object-top"
              />
            </div>
            
            {/* Right - Content */}
            <div style={{ padding: "60px 0" }}>
              <h2 className="text-3xl lg:text-4xl font-normal text-white leading-tight mb-6">
                Always ready to assist<br />
                for <span className="text-[#CCA45B] italic">24/7 online</span>
              </h2>
              <p className="text-gray-300 mb-8">
                Get immediate legal assistance whenever you need it. Our team is always available to help with your legal matters.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#CCA45B] text-[#1e3a5f] font-semibold transition-all hover:bg-white"
                style={{ padding: "16px 28px" }}
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="publications" className="bg-[#f8f8f8]" style={{ padding: "100px 0" }}>
        <div className="max-w-7xl mx-auto" style={{ padding: "0 24px" }}>
          {/* Section Header */}
          <div className="text-center" style={{ marginBottom: "64px" }}>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-8 h-[2px] bg-[#CCA45B]"></div>
              <span className="text-[#CCA45B] text-sm font-medium uppercase tracking-wider">Pricing</span>
              <div className="w-8 h-[2px] bg-[#CCA45B]"></div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal text-[#1e3a5f] leading-tight mb-4">
              Pricing Plan Tailored for<br />
              <span className="italic">Every Need</span>
            </h2>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative ${plan.highlighted ? 'bg-[#1e3a5f] text-white' : 'bg-white'} border border-gray-100`}
                style={{ padding: "40px" }}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 right-0 bg-[#CCA45B] text-[#1e3a5f] text-xs font-bold uppercase" style={{ padding: "8px 16px" }}>
                    Popular
                  </div>
                )}
                
                <h3 className={`text-xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-[#1e3a5f]'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.highlighted ? 'text-gray-300' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
                
                <div className="mb-8">
                  <span className={`text-5xl font-bold ${plan.highlighted ? 'text-[#CCA45B]' : 'text-[#1e3a5f]'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.highlighted ? 'text-gray-300' : 'text-gray-500'}`}>
                    /{plan.period}
                  </span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className={`w-5 h-5 ${plan.highlighted ? 'text-[#CCA45B]' : 'text-[#CCA45B]'}`} />
                      <span className={plan.highlighted ? 'text-gray-200' : 'text-gray-600'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`block text-center font-semibold transition-all ${
                    plan.highlighted 
                      ? 'bg-[#CCA45B] text-[#1e3a5f] hover:bg-white' 
                      : 'bg-[#1e3a5f] text-white hover:bg-[#CCA45B] hover:text-[#1e3a5f]'
                  }`}
                  style={{ padding: "16px" }}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
