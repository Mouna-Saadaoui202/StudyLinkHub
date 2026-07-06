import React from "react";
import { Layout } from "../../layouts/Layout";
import { HeroOne } from "../../components/hero/HeroOne";
import { AboutOne } from "../../components/about/AboutOne";
import { FeatureOne } from "../../components/features/FeatureOne";

import { VideoOne } from "../../components/videos/VideoOne";
import { EventOne } from "../../components/events/EventOne";
import { TestimonialOne } from "../../components/testimonials/TestimonialOne";

import { CategoryOne } from "../../components/category/CategoryOne";
import { AboutThree } from "../../components/about/AboutThree";

import img1 from '../../assets/img/about-1.jpg';
import img2 from '../../assets/img/about-3.jpg';
import img3 from '../../assets/img/about-4.jpg';
import img4 from '../../assets/img/about-5.jpg';
import img10 from '../../assets/img/dubai1.webp';
import img11 from '../../assets/img/dubai2.webp';
import img13 from '../../assets/img/russia1.webp';
import img14 from '../../assets/img/russia2.webp';
import img5 from '../../assets/img/China.jpg';
import img6 from '../../assets/img/Germany.png';
import img15 from '../../assets/img/Russia.jpg';
import img12 from '../../assets/img/United Arab Emirates.png';
import { BlogOne } from "../../components/blogs/BlogOne";

const Germany = {
  title:"Studying in Germany: A Gateway to Academic Excellence and Career Opportunities",
  description:'Germany offers top-tier education in engineering, technology, and sciences at renowned universities like LMU Munich, often with no tuition fees. Its strong economy provides job opportunities in automotive, IT, and finance, supported by an 18-month post-graduation work visa. With a focus on research, innovation, and cultural richness, Germany is ideal for academic and career growth.',

  img1:img3,
  img2:img2,
  img3:img6,
  header:'Our destinations'
}

const China = {
  title:"Studying in China: Affordable Education in a Global Economic Powerhouse",
  description:'China provides affordable education at prestigious universities like Tsinghua University, with low tuition fees and government scholarships. Students gain cultural immersion, Mandarin skills, and access to a booming job market in technology and business. As a global economic leader, China is perfect for affordable, culturally rich, and career-focused education.',
  img1:img1,
  img2:img4,
  img3:img5,
  header:'Our destinations'
}


const Russia = {
  title: "Studying in Russia: A Hub for Innovation and Affordable Education",
  description: "Russia boasts world-class universities like Lomonosov Moscow State University, offering high-quality education in engineering, medicine, and space sciences at relatively low tuition fees. With a strong emphasis on research and technological advancements, Russia provides scholarships and state-funded programs for international students. Its diverse culture, rich history, and growing industries in energy, aerospace, and IT create excellent career opportunities, complemented by post-graduation work options.",
  
  img1: img13,
  img2: img14,
  img3: img15,
  header: "Our destinations"
};

const Dubai = {
  title: "Studying in the United Arab Emirates: A Gateway to Global Business and Modern Education",
  description: "The United Arab Emirates is home to prestigious universities and international campuses offering cutting-edge programs in business, technology, and artificial intelligence. With a rapidly growing economy, students benefit from networking opportunities in finance, real estate, and entrepreneurship. The UAE’s strategic location, tax-free income policies, and strong focus on innovation make it an ideal destination for academic and professional growth. The country's post-graduation work visas further enhance career prospects in one of the world’s most dynamic job markets.",
  
  img1: img10,
  img2: img11,
  img3: img12,
  header: "Our destinations"
};

export const HomeOne = () => {
  return (
    <Layout header={1} footer={3}>
      {/* hero */}
      <HeroOne />

      {/* about */}
      <AboutThree title={China.title} header={China.header} description={China.description} img1={China.img1} img3={China.img3} img2={China.img2}/>
      <AboutThree title={Dubai.title} header={Dubai.header} description={Dubai.description} img1={Dubai.img1} img3={Dubai.img3} img2={Dubai.img2} />
      <AboutThree title={Russia.title} header={Russia.header} description={Russia.description} img1={Russia.img1} img3={Russia.img3} img2={Russia.img2} />
      <AboutThree title={Germany.title} header={Germany.header} description={Germany.description} img1={Germany.img1} img3={Germany.img3} img2={Germany.img2} />


      {/* feature */}
      <FeatureOne />

      {/* campus  <CampusOne />*/}
     

      {/* departments */}
      <CategoryOne />

      {/* video */}
      <VideoOne />

      <BlogOne />
    </Layout>
  );
};
