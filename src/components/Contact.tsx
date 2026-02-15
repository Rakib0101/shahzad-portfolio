import Image from "next/image";
import { Mail, MapPin, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#1a1a2e] relative overflow-hidden" style={{ padding: "128px 0" }}>
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#CCA45B]/5 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-4xl mx-auto text-center relative" style={{ padding: "0 24px" }}>
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
        <div className="border-t border-white/10" style={{ paddingTop: "48px" }}>
          <div className="flex items-center justify-center mb-4">
            <Image
              src="/images/logo.png"
              alt="Covenant LLP"
              width={160}
              height={50}
              className="md:h-24 h-16 w-auto brightness-0 invert opacity-70"
            />
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Shahzad Siddiqui. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
