import React from "react";
import { BlogOneItem } from "./BlogOneItem";

import post1 from "../../assets/img/0.jpg";
import post2 from "../../assets/img/1.jpg";
import post3 from "../../assets/img/2.jpg";
import post4 from "../../assets/img/3.jpg";


export const BlogOne = () => {
  const blogPosts = [
     {
       id:4,
       src: post4,
       date: "Jan 17, 2024",
       author: "Study Link Hub",
       title: "Studying in Germany vs. China: What Makes Them Stand Out for Students?",
       delay:"0.5"
     },
     {
       id:3,
       src: post3,
       date: "31 jan 2024",
       title: "Why Study in Germany or China? Key Benefits for Students",
       delay:"0.5"
     },
     {
       id: 2,
       src: post2,
       delay:"0.5",
       date: "22 Jan, 2023",
       title: "Overview of the new education system for students",
     },
    ]

  return (
    <section>
      <div className="container">
        <div
          className="td_section_heading td_style_1 text-center wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color">
            BLOG & ARTICLES
          </p>
          <h2 className="td_section_title td_fs_48 mb-0">
            Take A Look At The Latest <br />
            Articles
          </h2>
        </div>

        <div className="td_height_50 td_height_lg_50" />

        <div className="row td_gap_y_30">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="col-lg-4 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay={post.delay}
            >
              <BlogOneItem {...post} />
            </div>
          ))}
        </div>
      </div>

      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
