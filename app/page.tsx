import {
  Hero,
  ServicesGrid,
  Testimonials,
  PricingPreview,
  CTA,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <ServicesGrid />
      <Testimonials />
      <PricingPreview />
      <CTA />
      <Footer />
    </main>
  );
}
