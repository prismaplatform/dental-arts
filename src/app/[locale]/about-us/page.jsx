import WhyChouseUs2About from "@/components/about-us/WhyChouseUs2About";
import Animation from "@/components/utils/Animation";

import Breadcrumb from "@/components/utils/Breadcrumb";

import Feedback from "@/components/homepage/Feedback";

import Team from "@/components/about-us/Team";
import Gallery from "@/components/homepage/Gallery";

const page = () => {
  return (
    <>
      <Breadcrumb title="Rólunk" subtitle="Rólunk" />
      <WhyChouseUs2About />
      {/* <WhyChouseUsAbout /> */}
      <Animation />
      <Team/>
      <Gallery />
      <Feedback />
      {/* <BlogSlider /> */}

      {/* <WhyChouseUs3About/> */}
    </>
  );
};

export default page;
