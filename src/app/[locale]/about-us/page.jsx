import WhyChouseUs2About from "@/components/about-us/WhyChouseUs2About";
import Animation from "@/components/utils/Animation";

import Breadcrumb from "@/components/utils/Breadcrumb";

import Team from "@/components/about-us/Team";
import Feedback from "@/components/homepage/Feedback";
import Gallery from "@/components/homepage/Gallery";
import { useTranslations } from "next-intl";

const page = () => {
  const t = useTranslations("about");
  return (
    <>
      <Breadcrumb title={t("hero.title")} subtitle={t("hero.home")} />
      <WhyChouseUs2About
        subtitle={t("about.subtitle")}
        title={t("about.title")}
        content={t("about.content")}
        service1title={t("about.service1title")}
        service1text={t("about.service1text")}
        service2title={t("about.service2title")}
        service2text={t("about.service2text")}
      />
      {/* <WhyChouseUsAbout /> */}
      <Animation />
      <Team  subtitle={t("team.subtitle")}
        title={t("team.title")}
        sectiontitle={t("team.sectiontitle")}
        sectioncontent={t("team.sectioncontent")}/>
      <Gallery />
      <Feedback />
      {/* <BlogSlider /> */}

      {/* <WhyChouseUs3About/> */}
    </>
  );
};

export default page;
