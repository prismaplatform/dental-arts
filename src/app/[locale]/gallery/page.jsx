"use client"
import React from 'react';
import Section from '@/app/ui/Section';
import BannerSectionStyle3 from '@/app/ui/Section/BannerSection/BannerSectionStyle3';
import BannerSectionStyle9 from '@/app/ui/Section/BannerSection/BannerSectionStyle9';
import GallerySectionStyle2 from '@/app/ui/Section/GallerySection/GallerySectionStyle2';


import bannerImg from '../../../../public/images/about/banner_img.png'
import bannerImgDoctor from '../../../../public/images/doctors/banner_img_3.png'

const galleryData = [
  { imgUrl: '/images/about/portfolio_4_lg.jpeg' },
  { imgUrl: '/images/about/portfolio_5_lg.jpeg' },
  { imgUrl: '/images/about/portfolio_2_lg.jpeg' },
  { imgUrl: '/images/about/portfolio_3_lg.jpeg' },
  { imgUrl: '/images/about/portfolio_5_lg.jpeg' },
  { imgUrl: '/images/about/portfolio_5_lg.jpeg' },
  { imgUrl: '/images/about/portfolio_4_lg.jpeg' },
];

export default function Gallery() {
  return (
    <>
      <BannerSectionStyle3
        bgUrl="/images/about/banner_bg.svg"
        imgUrl={bannerImg}
        title="Welcome to <br>ProHealth Gallery"
        subTitle="The special moment of our hospital"
      />
      <Section
        topMd={170}
        topLg={150}
        topXl={110}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <GallerySectionStyle2 data={galleryData} />
      </Section>
      <Section className="cs_footer_margin_0">
        <BannerSectionStyle9
          title="Don’t Let Your Health <br />Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced <br />medical professionals today!"
          imgUrl={bannerImgDoctor}
        />
      </Section>
    </>
  );
}
