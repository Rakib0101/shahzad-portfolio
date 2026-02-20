import Image from "next/image";
import { Mail, MapPin, ArrowRight, Clock } from "lucide-react";

const newsItems = [
  {
    title: "Legal News You Need to Know",
    date: "Feb 15, 2025",
    category: "Legal Updates",
  },
  {
    title: "Understanding Commercial Litigation",
    date: "Feb 10, 2025",
    category: "Insights",
  },
  {
    title: "Estate Planning Best Practices",
    date: "Feb 5, 2025",
    category: "Guides",
  },
];

export default function Contact() {
  return (
    <>
      {/* News Section */}
      <section className="bg-[#f8f8f8]" style={{ padding: "100px 0" }}>
        <div className="max-w-7xl mx-auto" style={{ padding: "0 24px" }}>
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8" style={{ marginBottom: "48px" }}>
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-[2px] bg-[#CCA45B]"></div>
                <span className="text-[#CCA45B] text-sm font-medium uppercase tracking-wider">News</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-normal text-[#1e3a5f] leading-tight">
                Legal News You<br />
                <span className="italic">Need to Know</span>
              </h2>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[#1e3a5f] font-semibold border-b-2 border-[#1e3a5f] hover:border-[#CCA45B] hover:text-[#CCA45B] transition-all"
              style={{ paddingBottom: "4px" }}
            >
              View All News
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white mb-6" style={{ height: "220px" }}></div>
                <span className="text-[#CCA45B] text-sm font-medium">{item.category}</span>
                <h3 className="text-xl font-bold text-[#1e3a5f] mt-2 mb-3 group-hover:text-[#CCA45B] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white" style={{ padding: "120px 0" }}>
        <div className="max-w-7xl mx-auto" style={{ padding: "0 24px" }}>
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left - Contact Info */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-[#CCA45B] rounded-full"></div>
                <span className="text-[#CCA45B] font-semibold text-sm uppercase tracking-wider">Contact Us</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
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
      <footer className="bg-[#1e3a5f]" style={{ padding: "80px 0 40px" }}>
        <div className="max-w-7xl mx-auto" style={{ padding: "0 24px" }}>
          <div className="grid md:grid-cols-4 gap-12" style={{ marginBottom: "60px" }}>
            {/* Logo & Info */}
            <div className="md:col-span-1">
              <Image
                src="/images/logo.png"
                alt="Covenant LLP"
                width={150}
                height={45}
                className="h-12 w-auto brightness-0 invert mb-6"
              />
              <p className="text-gray-300 text-sm leading-relaxed">
                Expert legal counsel for complex commercial matters and estate planning.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-6">Pages</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-[#CCA45B] transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-[#CCA45B] transition-colors">About Us</a></li>
                <li><a href="#background" className="text-gray-300 hover:text-[#CCA45B] transition-colors">Services</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-[#CCA45B] transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-[#CCA45B] transition-colors">Commercial Litigation</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#CCA45B] transition-colors">Estate Planning</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#CCA45B] transition-colors">International Law</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#CCA45B] transition-colors">Legal Consultation</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-6">Contact</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#CCA45B] shrink-0 mt-0.5" />
                  <span>Toronto, Ontario, Canada</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#CCA45B] shrink-0 mt-0.5" />
                  <span>contact@covenantllp.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#CCA45B] shrink-0 mt-0.5" />
                  <span>Mon - Fri: 9AM - 6PM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10" style={{ paddingTop: "30px" }}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Shahzad Siddiqui. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-gray-400 text-sm">
                <a href="#" className="hover:text-[#CCA45B] transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-[#CCA45B] transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
