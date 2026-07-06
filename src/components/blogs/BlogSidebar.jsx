import React from "react";
import { Link } from "react-router-dom";


import post1 from "../../assets/img/0.jpg";
import post2 from "../../assets/img/1.jpg";
import post3 from "../../assets/img/2.jpg";
import post4 from "../../assets/img/3.jpg";


export const BlogSidebar = () => {
  const popularKeywords = [
    { name: "Germany", count: 12 },
    { name: "China", count: 5 },
    { name: "Scholarship", count: 25 },
    { name: "Master", count: 7 },
    { name: "Becolor", count: 19 },
    { name: "Study", count: 2 },
    { name: "Internships", count: 18 },
  ];


  const recentPosts = [
    {
      id:4,
      image: post4,
      date: "Jan 17, 2024",
      author: "Study Link Hub",
      title: "Studying in Germany vs. China: What Makes Them Stand Out for Students?",
    },
    {
      id:3,
      image: post3,
      date: "31 jan 2024",
      title: "Why Study in Germany or China? Key Benefits for Students",
    },
    {
      id: 2,
      image: post2,
      date: "22 Jan, 2023",
      title: "Overview of the new education system for students",
    },
    {
      id:1,
      image: post1,
      date: "31 Jan 2024",

      title: "Step-by-Step Guide to the Application Process: How We Support Students at Every Stage",
    }
  ];

  return (
    <div className="td_left_sidebar">
 

      {/* recents */}
      <div className="td_sidebar_widget">
        <h3 className="td_sidebar_widget_title td_fs_20 td_mb_30">
          Recent Post
        </h3>
        <ul className="td_recent_post_list td_mp_0">
          {recentPosts.map(({ id, image, date, title }) => (
            <li key={id}>
              <div className="td_recent_post">
                <Link to="/blog-details" className="td_recent_post_thumb">
                  <img src={image} alt="blog post" />
                </Link>
                <div className="td_recent_post_right">
                  <p className="td_recent_post_date mb-0 td_fs_14">
                    <i className="fa-regular fa-calendar"></i>
                    <span>{date}</span>
                  </p>
                  <h3 className="td_fs_16 td_semibold mb-0">
                    <Link to={"/blog-details/"+id}>{title}</Link>
                  </h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* popular */}
      <div className="td_sidebar_widget">
        <h3 className="td_sidebar_widget_title td_fs_20 td_mb_30">
          Popular Keyword
        </h3>
        <ul className="td_sidebar_widget_list">
          {popularKeywords.map(({ name, count }) => (
            <li key={name} className="cat-item">
              <Link to="#">
                <span>{name}</span>
                <span>({String(count).padStart(2, "0")})</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>


    </div>
  );
};
