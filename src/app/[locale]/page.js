import Landing from "@/components/Landing";
import Feedback from "@/components/homepage/Feedback";
import Gallery from "@/components/homepage/Gallery";
import Portfolio from "@/components/homepage/Portfolio";
import Services from "@/components/homepage/Services";
import TestSection from "@/components/homepage/TestSection";
import WhyChouseUs2 from "@/components/homepage/WhyChouseUs2";
import Animation from "@/components/utils/Animation";
import FAQ from "@/components/utils/Faq";
import { getServices } from "../api/services/route";
import { getGallery } from "../api/gallery/gallery";
import { getFeedback } from "../api/feedback/route";
import { getFaq } from "../api/faq/route";
// import SlidingImages from '@/components/SlidingImages';

export default async function Home({ params }) {
  const locale = params.locale;
  const services = await getServices(locale);
  const gallery = await getGallery();
  const feedback = await getFeedback(locale);
  const faq = await getFaq(locale);
  return (
    <>
      <Landing />
      <TestSection />
      <WhyChouseUs2 />
      <Services services={services} />

      {/* Csak az első 4 kép átadása */}
      <Gallery images={gallery.slice(0, 4)} />

      <Feedback feedback={feedback} />
      <Animation />
      <FAQ faq={faq}/>
      <Portfolio />
    </>
  );
}
