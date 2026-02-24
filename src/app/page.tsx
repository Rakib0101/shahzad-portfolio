import {
  Navigation,
  Hero,
  About,
  Cases,
  Background,
  Publications,
  Contact,
} from "@/components";
import FAQ from "@/components/faq";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      <Navigation />
      <Hero />
      <About />
      <Cases />
      <Background />
      <Publications />
      <FAQ />
      <Contact />
    </main>
  );
}
