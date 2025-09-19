import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import ServiceAreas from "@/components/ServiceAreas";
import CtaBanner from "../components/CtaBanner";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <ServiceAreas />
      <CtaBanner />
    </main>
  );
}
