import Feedback from "@/components/homepage/Feedback";
import Gallery from "@/components/homepage/Gallery";
import Hero from "@/components/homepage/Hero";
import Portfolio from "@/components/homepage/Portfolio";
import Services from "@/components/homepage/Services";
import WhyChouseUs from "@/components/homepage/WhyChouseUs";
import WhyChouseUs2 from "@/components/homepage/WhyChouseUs2";
import Animation from "@/components/utils/Animation";
import FAQ from "@/components/utils/Faq";
export default function Home() {
  return (
    <>
      <Hero />
      <WhyChouseUs2 />

      {/* <WhyChouseUs /> */}
      <Services />
      <Gallery />
      <Feedback />
      <Animation />
      <FAQ />

      <Portfolio />
    </>
  );
}
