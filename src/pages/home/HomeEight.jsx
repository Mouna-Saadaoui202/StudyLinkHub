import React from "react";
import { Layout } from "../../layouts/Layout";
import { HeroEight } from "../../components/hero/HeroEight";

import { AboutEight } from "../../components/about/AboutEight";

import { CtaThree } from "../../components/cta/CtaThree";

import { Instagram } from "../../components/insta/Instagram";
import { VideoOne } from "../../components/videos/VideoOne";
import { AboutFour } from "../../components/about/AboutFour";

export const Scholarships = () => {
  return (
    <Layout header={1}footer={3}>
      {/* hero */}
      <HeroEight />

      {/* categories */}

      {/* about */}
      <AboutEight />

  {/* about us */}
       <AboutFour />

    {/* video */}


      {/* cta */}

        <VideoOne />
      {/* instagram 
      <Instagram />*/}
    </Layout>
  );
};
