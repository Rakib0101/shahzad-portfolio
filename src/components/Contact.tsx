import Image from "next/image";
import { Mail, MapPin, ArrowRight, Clock } from "lucide-react";

export default function Contact() {
  return (
    <>
      {/* CTA Section */}
      <section className="bg-[#CCA45B]" style={{ padding: "80px 0" }}>
        <div className="max-w-7xl mx-auto" style={{ padding: "0 24px" }}>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0d0d0d] mb-3">
                Let&apos;s Build Something<br />
                <span className="text-white">Wonderful Together</span>
              </h2>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-[#0d0d0d] text-white font-semibold rounded-full hover:bg-white hover:text-[#0d0d0d] transition-all"
              style={{ padding: "18px 32px" }}
            >
              Free Consultation
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#0d0d0d]" style={{ padding: "120px 0" }}>
        <div className="max-w-7xl mx-auto" style={{ padding: "0 24px" }}>
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left - Contact Info */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-[#CCA45B] rounded-full"></div>
                <span className="text-[#CCA45B] font-semibold text-sm uppercase tracking-wider">Contact Us</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Get in Touch<br />
                <span className="text-[#CCA45B]">With Us</span>
              </h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                For legal inquiries or to discuss how we can assist with your matter, 
                please reach out to Covenant LLP.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-[#1a1a2e] rounded-2xl" style={{ padding: "24px" }}>
                  <div className="w-12 h-12 bg-[#CCA45B] rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-[#0d0d0d]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Email Us</p>
                    <a href="mailto:contact@covenantllp.com" className="text-white font-semibold hover:text-[#CCA45B] transition-colors">
                      contact@covenantllp.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#1a1a2e] rounded-2xl" style={{ padding: "24px" }}>
                  <div className="w-12 h-12 bg-[#CCA45B] rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-[#0d0d0d]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Location</p>
                    <p className="text-white font-semibold">Toronto, Ontario, Canada</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#1a1a2e] rounded-2xl" style={{ padding: "24px" }}>
                  <div className="w-12 h-12 bg-[#CCA45B] rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-[#0d0d0d]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Business Hours</p>
                    <p className="text-white font-semibold">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#1a1a2e] rounded-3xl" style={{ padding: "48px" }}>
                <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Full Name</label>
                      <input
                        type="text"
                        className="w-full bg-[#0d0d0d] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#CCA45B] focus:outline-none transition-colors"
                        style={{ padding: "16px 20px" }}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Email Address</label>
                      <input
                        type="email"
                        className="w-full bg-[#0d0d0d] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#CCA45B] focus:outline-none transition-colors"
                        style={{ padding: "16px 20px" }}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Subject</label>
                    <input
                      type="text"
                      className="w-full bg-[#0d0d0d] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#CCA45B] focus:outline-none transition-colors"
                      style={{ padding: "16px 20px" }}
                      placeholder="Legal Consultation"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Message</label>
                    <textarea
                      rows={5}
                      className="w-full bg-[#0d0d0d] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#CCA45B] focus:outline-none transition-colors resize-none"
                      style={{ padding: "16px 20px" }}
                      placeholder="Describe your legal matter..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#CCA45B] text-[#0d0d0d] font-semibold rounded-xl hover:bg-white transition-all duration-300 flex items-center justify-center gap-2"
                    style={{ padding: "18px" }}
                  >
                    Send Message
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0d0d0d] border-t border-white/10" style={{ padding: "48px 0" }}>
        <div className="max-w-7xl mx-auto" style={{ padding: "0 24px" }}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="flex items-center gap-4">
              <Image
                src="/images/logo.png"
                alt="Covenant LLP"
                width={140}
                height={40}
                className="h-10 w-auto brightness-0 invert opacity-80"
              />
            </div>
            <div className="flex items-center gap-8 text-gray-400">
              <a href="#about" className="hover:text-[#CCA45B] transition-colors">About</a>
              <a href="#cases" className="hover:text-[#CCA45B] transition-colors">Cases</a>
              <a href="#publications" className="hover:text-[#CCA45B] transition-colors">Publications</a>
              <a href="#contact" className="hover:text-[#CCA45B] transition-colors">Contact</a>
            </div>
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Shahzad Siddiqui. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
