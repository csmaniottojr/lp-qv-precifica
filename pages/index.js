import CTA from "@/components/ui/CTA";
import FAQs from "@/components/ui/FAQs";
import Features from "@/components/ui/Features";
import Hero from "@/components/ui/Hero";
import Pricing from "@/components/ui/Pricing";
import Dores from "@/components/ui/Dores";
import WhatsAppCTA from "@/components/ui/WhatsAppCTA";
import Testimonial from "@/components/ui/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <Dores />
      {/* <VisualFeatures /> */}
      <Features />
      <CTA />
      <Testimonial />
      <Pricing />
      <FAQs />
      <WhatsAppCTA />
    </>
  );
}
