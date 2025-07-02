import WhyChouseUs2About from "@/components/about-us/WhyChouseUs2About";
import WhyChouseUsAbout from "@/components/about-us/WhyChouseUsAbout";
import Animation from "@/components/utils/Animation";

import Breadcrumb from "@/components/utils/Breadcrumb";
import React from "react";

import Feedback from "@/components/homepage/Feedback";

import Gallery from "@/components/homepage/Gallery";
import BlogSlider from "@/components/about-us/blog";
import WhyChouseUs3About from "@/components/about-us/WhyChouseUs3About";

const page = () => {
  return (
    <>
      <Breadcrumb title="Rólunk" subtitle="Rólunk" />
      <WhyChouseUs2About />
      <WhyChouseUsAbout />
      <Animation />
      <Gallery />
      <Feedback />
      <BlogSlider />

      {/* <WhyChouseUs3About/> */}
    </>
  );
};

export default page;
