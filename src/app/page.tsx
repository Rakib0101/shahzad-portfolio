import {
  Navigation,
  Hero,
  About,
  Cases,
  Background,
  Publications,
  Work,
  Contact,
} from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      <Navigation />
      <Hero />
      <About />
      <Cases />
      <Background />
      <Publications />
      <Work />
      <Contact />
    </main>
  );
}
