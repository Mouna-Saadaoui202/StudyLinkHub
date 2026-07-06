import React from "react";
import { Layout } from "../../layouts/Layout";
import { AboutOne } from "../../components/about/AboutOne";
import { CampusOne } from "../../components/campus/CampusOne";
import { DepartmentOne } from "../../components/departments/DepartmentOne";
import { VideoOne } from "../../components/videos/VideoOne";
import { BlogOne } from "../../components/blogs/BlogOne";
import { AboutFour } from "../../components/about/AboutFour";
import { WhyChooseThree } from "../../components/why_choose/WhyChooseThree";
import { Instagram } from "../../components/insta/Instagram";
import { WhyChooseOne } from "../../components/why_choose/WhyChooseOne";
import { WhyChooseTwo } from "../../components/why_choose/WhyChooseTwo";
import { WhyChooseQuard } from "../../components/why_choose/WhyChooseQuatre";

export const About = () => {
  return (
    <Layout header={1}footer={3} breadcrumbTitle={"About Us"} breadcrumbSubtitle={"About Us"}>
      
      {/* about */}
      <AboutOne />

      <WhyChooseQuard />      

      {/* campus */}
      <CampusOne />

      {/* campus */}
      <WhyChooseThree />

      {/* video */}
      <VideoOne />  
      {/* video 
       <Instagram />
*/}
    </Layout>
  );
};
