import React, { useEffect } from "react";
import { Layout } from "../../layouts/Layout";
import { BlogContainer } from "../../components/blogs/BlogContainer";
import { Link, useParams } from "react-router-dom";
import { VideoPlayer } from "../../components/videos/VideoPlayer";
import { BlogComments } from "../../components/blogs/BlogComments";
import { BlogCommentForm } from "../../components/blogs/BlogCommentForm";

import videobg from "../../assets/img/home_1/video_bg.jpg";
import blogDetails1 from "../../assets/img/others/blog_details_1.jpg";
import avatar1 from "../../assets/img/home_1/avatar_1.png";


import post1 from "../../assets/img/0.jpg";
import post2 from "../../assets/img/1.jpg";
import post3 from "../../assets/img/2.jpg";
import post4 from "../../assets/img/3.jpg";

const blog1 =
  {
    id:1,
    image: post1,
    date: "31 Jan 2024",
    author: "Study Link Hub",
    title: "Step-by-Step Guide to the Application Process: How We Support Students at Every Stage",
    excerpt: "Check our blog to get more informations about all Study Link Hub services",
    content :[
      {
        title: "Initial Consultation",
        heading:
          "We begin by understanding the student’s academic and career goals, helping them choose the right program and university in China or Germany. We guide them on available scholarships or self-financed options.",
      },
      {
        title: "Program and University Selection",
        heading:
          "Based on the student’s interests and qualifications, we assist in selecting the best-fit program and university, ensuring it aligns with their academic goals and budget.",
      },
      {
        title: "Document Preparation",
        heading:
          "We help students gather and prepare all necessary documents, including application forms, academic transcripts, recommendation letters, and language proficiency certificates. Our team ensures everything is in order and meets the university’s requirements.",
      },
      {
        title: "Application Submission",
        heading:
          "We submit the application on behalf of the student, ensuring it’s completed accurately and submitted within deadlines. We also track the status of the application and follow up with universities as needed.",
      },
      {
        title: "Scholarship Application",
        heading:
          "If applicable, we assist with applying for scholarships, ensuring that the student’s qualifications are clearly presented to maximize their chances of securing funding.",
      },
      {
        title: "Admission and Visa Assistance",
        heading:
          "Once the student is admitted, we provide support with visa applications and offer guidance on the next steps for traveling and settling in China or Germany.",
      },
      {
        title: "Pre-Departure Assistance",
        heading:
          "We help students prepare for life abroad, including advice on accommodation, travel arrangements, and what to expect when they arrive.",
      },
      {
        title: "On-the-Ground Support",
        heading:
          "We offer additional support on the ground, helping them settle in, navigate cultural differences, and ensure a smooth transition to university life.",
      },
    ]
  };

const blog2 = {

  id:2,
  image: post2,
  date: "31 Jan 2024",
  author: "Study Link Hub",
  title: "Overcoming Scholarship Application Challenges: How We Support Students",
  excerpt: "Check our blog to get more informations about all Study Link Hub services",
  challengesAndSolutions: [
    {
      challenge: "Identifying Suitable Scholarships",
      description: "With so many scholarship options available, students often struggle to find the ones that align with their academic background, nationality, and program of study.",
      solutions: [
        {
          title: "Guidance and Orientation",
          description: "We provide personalized guidance, helping students identify scholarships that fit their specific criteria, such as academic performance, chosen field of study, and country of origin."
        },
        {
          title: "Scholarship Database",
          description: "We maintain a curated list of scholarships for study in China, both government-funded and university-specific, saving students time and effort."
        }
      ]
    },
    {
      challenge: "Understanding Eligibility Criteria",
      description: "Many scholarships have complex eligibility requirements that can be difficult to understand, leading students to apply for ones they don't qualify for.",
      solutions: [
        {
          title: "Clear Communication",
          description: "We help students review scholarship eligibility criteria in detail, ensuring they understand the requirements before applying."
        },
        {
          title: "One-on-One Support",
          description: "By offering tailored consultations, we ensure that students meet the necessary qualifications for each scholarship they apply to."
        }
      ]
    },
    {
      challenge: "Preparing a Strong Application",
      description: "Writing a compelling application and crafting a standout personal statement or essay can be intimidating for students, especially those unfamiliar with scholarship application formats.",
      solutions: [
        {
          title: "Application Assistance",
          description: "We offer guidance on how to create a strong application package, including advising on how to highlight academic achievements, personal strengths, and long-term goals effectively."
        },
        {
          title: "Essay Review and Editing",
          description: "We assist with proofreading and editing personal statements or motivation letters to ensure clarity, professionalism, and alignment with the scholarship's values."
        }
      ]
    },
    {
      challenge: "Gathering Required Documents",
      description: "Collecting the necessary documents (e.g., transcripts, recommendation letters, language proficiency test scores) can be time-consuming, and some students may lack access to the proper resources.",
      solutions: [
        {
          title: "Document Checklist and Organization",
          description: "We help students create a comprehensive checklist of required documents and offer advice on how to organize them for a streamlined submission process."
        },
        {
          title: "Translation Services",
          description: "For students applying to study in China, we provide translation services for diplomas, certificates, and other essential documents, ensuring they meet the scholarship’s language requirements."
        }
      ]
    },
    {
      challenge: "Meeting Deadlines",
      description: "Many students struggle to keep track of multiple scholarship deadlines, which can result in missed opportunities.",
      solutions: [
        {
          title: "Deadline Tracking",
          description: "We provide a structured timeline or calendar to help students stay on top of important deadlines, from initial applications to submission of documents and visa applications."
        },
        {
          title: "Early Start",
          description: "By helping students plan ahead and start early, we reduce the stress of last-minute submissions and increase the likelihood of successful scholarship applications."
        }
      ]
    },
    {
      challenge: "Handling Visa and Immigration Procedures",
      description: "Even after securing a scholarship, students may face challenges navigating the visa application process, which can be complex and time-sensitive.",
      solutions: [
        {
          title: "Visa Assistance",
          description: "Once a scholarship is awarded, we assist students in preparing their visa application, ensuring all required documents (like the scholarship offer letter and financial proof) are in place."
        },
        {
          title: "Ongoing Support",
          description: "We provide continuous guidance throughout the visa process, addressing any issues that may arise."
        }
      ]
    },
    {
      challenge: "Competition for Scholarships",
      description: "Scholarships, especially full scholarships, can be highly competitive, with many qualified candidates vying for limited spots.",
      solutions: [
        {
          title: "Application Optimization",
          description: "By ensuring students present their best selves through tailored advice, editing, and coaching, we help them stand out in a crowded pool of applicants."
        },
        {
          title: "Confidence Building",
          description: "Offering motivational support and strategic advice helps students present themselves confidently, even when competition is fierce."
        }
      ]
    },
    {
      challenge: "Language Barriers",
      description: "Students from non-English-speaking countries may struggle with language requirements, whether it’s proficiency in English (for studying in Germany) or Chinese (for studying in China).",
      solutions: [
        {
          title: "Language Proficiency Assistance",
          description: "We can direct students to preparation courses or resources for language proficiency tests like TOEFL, IELTS, or HSK (Chinese proficiency test)."
        },
        {
          title: "Cultural and Language Support in China",
          description: "For students applying to study in China, we offer additional language support or connect them with language programs to boost their readiness for both academic and daily life."
        }
      ]
    },
    {
      challenge: "Financial Barriers",
      description: "While scholarships can alleviate financial burdens, students may still face difficulties in proving their financial need or understanding the funding structure.",
      solutions: [
        {
          title: "Financial Aid Guidance",
          description: "We help students navigate the financial documents required for scholarship applications and may assist with scholarship applications that provide funding for both tuition and living expenses."
        },
        {
          title: "Finding Additional Funding Sources",
          description: "If a student’s scholarship doesn’t cover all expenses, we can help identify additional funding sources."
        }
      ]
    }
  ]
};


const blog3 =  {
  id:3,
  image: post3,
  date: "31 jan 2024",
  author: "Study Link Hub",
  title: "Why Study in Germany or China? Key Benefits for Students",
  excerpt: "Check our blog to get more informations about all Study Link Hub services",
  content: [
  {
  sectionTitle:"Studying in Germany",
  content:[
      {
      heading:"Academic Excellence & World-Class Education",
      text:"Germany is home to many renowned universities (e.g., LMU Munich, Heidelberg University) that consistently rank high globally. Known for its strong engineering, technology, and sciences programs. High-quality education with a focus on research, innovation, and practical learning."
      },
      {
      heading:"No or Low Tuition Fees",
      text:"Public universities in Germany often charge little to no tuition fees, making it one of the most cost-effective options in Europe. Students only pay a small semester fee that covers administrative costs and public transport."
      },
      {
      heading:"Strong Industry Connections & Job Opportunities",
      text:"Germany has a robust economy, with a focus on industries like automotive, engineering, IT, and finance. Internship and job opportunities are abundant, with many international companies offering positions to graduates. The post-graduation work visa allows students to stay and work in Germany for up to 18 months to seek employment."
      },
      {
      heading:"Cultural Experience",
      text:"Germany offers a rich cultural heritage, including art, music, history, and literature. Diverse and cosmopolitan cities with a wide variety of international students."
      },
      {
      heading:"Focus on Research & Innovation",
      text:"Germany is a leader in research and development, especially in fields like engineering, renewable energy, and health. Strong emphasis on academic freedom and critical thinking."
      }
    ]
  },
  {
  sectionTitle:"Studying in China",
  content:[
      {
      heading:"Affordability & Cost-Effectiveness",
      text:"Studying in China is generally more affordable than in Western countries, especially in terms of tuition fees and living expenses. The cost of living in cities like Beijing or Shanghai is lower compared to other major global cities, especially in terms of accommodation and food."
      },
      {
      heading:"Academic Excellence & Emerging Global Power",
      text:"China’s universities (e.g., Tsinghua University, Peking University) are gaining global recognition, particularly in the fields of engineering, business, and economics. China’s academic programs are increasingly in demand, especially in science and technology."
      },
      {
      heading:"Cultural Experience & Language Learning",
      text:"Immersing yourself in Chinese culture, language, and traditions provides a rich and unique experience. Mandarin Chinese is the most spoken language globally, and studying in China offers a great opportunity to learn it, boosting future career prospects."
      },
      {
      heading:"Job Opportunities in China and Globally",
      text:"China is a global economic powerhouse, with significant opportunities in sectors like technology, manufacturing, business, and trade. Many international companies have a presence in China, providing jobs for graduates who can navigate both Chinese and global markets."
      },
      {
      heading:"Government Scholarships & Support",
      text:"The Chinese government offers various scholarship programs (e.g., CSC Scholarship) for international students, covering tuition and living costs. There is strong governmental support for international students, including guidance for visa processing, accommodation, and integration."
      },
      {
      heading:"Strategic Location & International Relations",
      text:"Studying in China gives students a front-row seat to one of the most dynamic global markets. Opportunities to network with people from all over the world, as China is a key player in international trade and diplomacy."
      }
    ]
  }
]
}

const blog4 =  {
  id:4,
  image: post4,
  date: "Jan 17, 2024",
  author: "Study Link Hub",
  title: "Studying in Germany vs. China: What Makes Them Stand Out for Students?",
  excerpt: "Check our blog to get more informations about all Study Link Hub services",
  content: [
  {
  sectionTitle:"Studying in Germany",
  content:[
      {
      heading:"Academic Excellence & World-Class Education",
      text:"Germany is home to many renowned universities (e.g., LMU Munich, Heidelberg University) that consistently rank high globally. Known for its strong engineering, technology, and sciences programs. High-quality education with a focus on research, innovation, and practical learning."
      },
      {
      heading:"No or Low Tuition Fees",
      text:"Public universities in Germany often charge little to no tuition fees, making it one of the most cost-effective options in Europe. Students only pay a small semester fee that covers administrative costs and public transport."
      },
      {
      heading:"Strong Industry Connections & Job Opportunities",
      text:"Germany has a robust economy, with a focus on industries like automotive, engineering, IT, and finance. Internship and job opportunities are abundant, with many international companies offering positions to graduates. The post-graduation work visa allows students to stay and work in Germany for up to 18 months to seek employment."
      },
      {
      heading:"Cultural Experience",
      text:"Germany offers a rich cultural heritage, including art, music, history, and literature. Diverse and cosmopolitan cities with a wide variety of international students."
      },
      {
      heading:"Focus on Research & Innovation",
      text:"Germany is a leader in research and development, especially in fields like engineering, renewable energy, and health. Strong emphasis on academic freedom and critical thinking."
      }
    ]
  },
  {
  sectionTitle:"Studying in China",
  content:[
      {
      heading:"Affordability & Cost-Effectiveness",
      text:"Studying in China is generally more affordable than in Western countries, especially in terms of tuition fees and living expenses. The cost of living in cities like Beijing or Shanghai is lower compared to other major global cities, especially in terms of accommodation and food."
      },
      {
      heading:"Academic Excellence & Emerging Global Power",
      text:"China’s universities (e.g., Tsinghua University, Peking University) are gaining global recognition, particularly in the fields of engineering, business, and economics. China’s academic programs are increasingly in demand, especially in science and technology."
      },
      {
      heading:"Cultural Experience & Language Learning",
      text:"Immersing yourself in Chinese culture, language, and traditions provides a rich and unique experience. Mandarin Chinese is the most spoken language globally, and studying in China offers a great opportunity to learn it, boosting future career prospects."
      },
      {
      heading:"Job Opportunities in China and Globally",
      text:"China is a global economic powerhouse, with significant opportunities in sectors like technology, manufacturing, business, and trade. Many international companies have a presence in China, providing jobs for graduates who can navigate both Chinese and global markets."
      },
      {
      heading:"Government Scholarships & Support",
      text:"The Chinese government offers various scholarship programs (e.g., CSC Scholarship) for international students, covering tuition and living costs. There is strong governmental support for international students, including guidance for visa processing, accommodation, and integration."
      },
      {
      heading:"Strategic Location & International Relations",
      text:"Studying in China gives students a front-row seat to one of the most dynamic global markets. Opportunities to network with people from all over the world, as China is a key player in international trade and diplomacy."
      }
    ]
  }
]
}


export const BlogDetails = () => {

  const { id } = useParams()


  return (
    <Layout
      header={1}
      footer={3}
      breadcrumbTitle={"Blog Details"}
      breadcrumbSubtitle={"Blog Details"}
    >
      {id && id == 1 && (

        <BlogContainer>
          <div className="td_blog_details_head td_mb_40">
            <img src={blog1.image} alt="Blog Details" />

            <div className="td_blog_details_head_meta">
              <div className="td_blog_details_avatar">
                <img src={avatar1} alt="Avatar" />
                <p className="mb-0 td_heading_color td_bold">
                  <span className="td_normal td_opacity_5">By</span> Study Link Hub
                </p>
              </div>

              <ul className="td_blog_details_head_meta_list td_mp_0 td_heading_color">
                <li>
                  <div className="td_icon_btns">
                    <span className="td_icon_btn td_center td_heading_color">
                      <svg
                        width="13"
                        height="15"
                        viewBox="0 0 13 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.4375 0.75C3.65625 0.75 3.875 0.96875 3.875 1.1875V2.5H9.125V1.1875C9.125 0.96875 9.31641 0.75 9.5625 0.75C9.78125 0.75 10 0.96875 10 1.1875V2.5H10.875C11.832 2.5 12.625 3.29297 12.625 4.25V13C12.625 13.9844 11.832 14.75 10.875 14.75H2.125C1.14062 14.75 0.375 13.9844 0.375 13V4.25C0.375 3.29297 1.14062 2.5 2.125 2.5H3V1.1875C3 0.96875 3.19141 0.75 3.4375 0.75Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </div>
                  January 31 2025
                </li>

              </ul>
            </div>
          </div>

          <div className="td_blog_details">
            <h2>{blog1.title}</h2>

            {blog1.content.map(x => {
              return (
                <>
                  <h3>{x.title}</h3>
                  <p>
                    {x.heading}
                  </p>
                </>
              )
            })}


          </div>
          <div className="td_height_50 td_height_lg_40" />
          <div className="td_post_share">
            <div className="td_categories">
              <h4 className="mb-0 td_fs_18">Tags:</h4>
              <Link to="#" className="td_category">
                Germany
              </Link>
              <Link to="#" className="td_category">
                China
              </Link>
              <Link to="#" className="td_category">
                Scholarship
              </Link>
              <Link to="#" className="td_category">
                Learning
              </Link>
              <Link to="#" className="td_category">
                Support
              </Link>
            </div>
            <div className="td_footer_social_btns td_fs_18 td_accent_color">
              <a href="https://www.facebook.com/profile.php?id=61558528675842#" className="td_center">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              
              <a href="https://www.instagram.com/studylinkhub1/" className="td_center">
                <i className="fa-brands fa-instagram"></i>
              </a>

            </div>
          </div>
          <div className="td_height_40 td_height_lg_40" />

        </BlogContainer>
      )}

      {id && id == 2 && (

        <BlogContainer>
          <div className="td_blog_details_head td_mb_40">
            <img src={blog2.image} alt="Blog Details" />

            <div className="td_blog_details_head_meta">
              <div className="td_blog_details_avatar">
                <img src={avatar1} alt="Avatar" />
                <p className="mb-0 td_heading_color td_bold">
                  <span className="td_normal td_opacity_5">By</span> Study Link Hub
                </p>
              </div>

              <ul className="td_blog_details_head_meta_list td_mp_0 td_heading_color">
                <li>
                  <div className="td_icon_btns">
                    <span className="td_icon_btn td_center td_heading_color">
                      <svg
                        width="13"
                        height="15"
                        viewBox="0 0 13 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.4375 0.75C3.65625 0.75 3.875 0.96875 3.875 1.1875V2.5H9.125V1.1875C9.125 0.96875 9.31641 0.75 9.5625 0.75C9.78125 0.75 10 0.96875 10 1.1875V2.5H10.875C11.832 2.5 12.625 3.29297 12.625 4.25V13C12.625 13.9844 11.832 14.75 10.875 14.75H2.125C1.14062 14.75 0.375 13.9844 0.375 13V4.25C0.375 3.29297 1.14062 2.5 2.125 2.5H3V1.1875C3 0.96875 3.19141 0.75 3.4375 0.75Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </div>
                  January 31 2025
                </li>

              </ul>
            </div>
          </div>

          <div className="td_blog_details">
            <h2>{blog2.title}</h2>

            {blog2.challengesAndSolutions.map(x => {
              return (
                <div className="mt-5">
                  <h3>{x.challenge}</h3>
                  <p>
                    {x.description}
                  </p>
                  <ul className="td_list td_style_2 td_fs_18 td_medium td_heading_color td_mp_0">
                    {x.solutions.map(data => {
                      return (
                        <li>
                          <svg
                            className="td_accent_color"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="12" cy="12" r="12" fill="currentColor" />
                            <path
                              d="M7.5 14.1136C7.5 14.1136 8.52273 14.1136 9.88636 16.5C9.88636 16.5 13.6765 10.25 17.0455 9"
                              stroke="white"
                              strokeWidth="0.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          {data.description}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )
            })}


          </div>
          <div className="td_height_50 td_height_lg_40" />
          <div className="td_post_share">
            <div className="td_categories">
              <h4 className="mb-0 td_fs_18">Tags:</h4>
              <Link to="#" className="td_category">
                Germany
              </Link>
              <Link to="#" className="td_category">
                China
              </Link>
              <Link to="#" className="td_category">
                Scholarship
              </Link>
              <Link to="#" className="td_category">
                Learning
              </Link>
              <Link to="#" className="td_category">
                Support
              </Link>
            </div>
            <div className="td_footer_social_btns td_fs_18 td_accent_color">
              <a href="https://www.facebook.com/profile.php?id=61558528675842#" className="td_center">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              
              <a href="https://www.instagram.com/studylinkhub1/" className="td_center">
                <i className="fa-brands fa-instagram"></i>
              </a>

            </div>
          </div>
          <div className="td_height_40 td_height_lg_40" />

        </BlogContainer>
      )}

      {id && id == 3 && (

        <BlogContainer>
          <div className="td_blog_details_head td_mb_40">
            <img src={blog3.image} alt="Blog Details" />

            <div className="td_blog_details_head_meta">
              <div className="td_blog_details_avatar">
                <img src={avatar1} alt="Avatar" />
                <p className="mb-0 td_heading_color td_bold">
                  <span className="td_normal td_opacity_5">By</span> Study Link Hub
                </p>
              </div>

              <ul className="td_blog_details_head_meta_list td_mp_0 td_heading_color">
                <li>
                  <div className="td_icon_btns">
                    <span className="td_icon_btn td_center td_heading_color">
                      <svg
                        width="13"
                        height="15"
                        viewBox="0 0 13 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.4375 0.75C3.65625 0.75 3.875 0.96875 3.875 1.1875V2.5H9.125V1.1875C9.125 0.96875 9.31641 0.75 9.5625 0.75C9.78125 0.75 10 0.96875 10 1.1875V2.5H10.875C11.832 2.5 12.625 3.29297 12.625 4.25V13C12.625 13.9844 11.832 14.75 10.875 14.75H2.125C1.14062 14.75 0.375 13.9844 0.375 13V4.25C0.375 3.29297 1.14062 2.5 2.125 2.5H3V1.1875C3 0.96875 3.19141 0.75 3.4375 0.75Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </div>
                  January 31 2025
                </li>

              </ul>
            </div>
          </div>

          <div className="td_blog_details">
            <h2>{blog3.title}</h2>

            {blog3.content.map(x => {
              return (
                <div className="mt-5">
                  <h3 style={{ color: "var(--accent-color)" }}>{x.sectionTitle}</h3>

                  <ul className="td_list td_style_2 td_fs_18 td_medium td_heading_color td_mp_0">
                    {x.content.map(data => {
                      return (
                        <li>
                          <svg
                            className="td_accent_color"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="12" cy="12" r="12" fill="currentColor" />
                            <path
                              d="M7.5 14.1136C7.5 14.1136 8.52273 14.1136 9.88636 16.5C9.88636 16.5 13.6765 10.25 17.0455 9"
                              stroke="white"
                              strokeWidth="0.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="">
                            <h5>{data.heading}</h5>
                            <p style={{ fontWeight: "300" }}>{data.text}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )
            })}


          </div>
          <div className="td_height_50 td_height_lg_40" />
          <div className="td_post_share">
            <div className="td_categories">
              <h4 className="mb-0 td_fs_18">Tags:</h4>
              <Link to="#" className="td_category">
                Germany
              </Link>
              <Link to="#" className="td_category">
                China
              </Link>
              <Link to="#" className="td_category">
                Scholarship
              </Link>
              <Link to="#" className="td_category">
                Learning
              </Link>
              <Link to="#" className="td_category">
                Support
              </Link>
            </div>
            <div className="td_footer_social_btns td_fs_18 td_accent_color">
              <a href="https://www.facebook.com/profile.php?id=61558528675842#" className="td_center">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              
              <a href="https://www.instagram.com/studylinkhub1/" className="td_center">
                <i className="fa-brands fa-instagram"></i>
              </a>

            </div>
          </div>
          <div className="td_height_40 td_height_lg_40" />

        </BlogContainer>
      )}

      {id && id == 4 && (

        <BlogContainer>
          <div className="td_blog_details_head td_mb_40">
            <img src={blog4.image} alt="Blog Details" />

            <div className="td_blog_details_head_meta">
              <div className="td_blog_details_avatar">
                <img src={avatar1} alt="Avatar" />
                <p className="mb-0 td_heading_color td_bold">
                  <span className="td_normal td_opacity_5">By</span> Study Link Hub
                </p>
              </div>

              <ul className="td_blog_details_head_meta_list td_mp_0 td_heading_color">
                <li>
                  <div className="td_icon_btns">
                    <span className="td_icon_btn td_center td_heading_color">
                      <svg
                        width="13"
                        height="15"
                        viewBox="0 0 13 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.4375 0.75C3.65625 0.75 3.875 0.96875 3.875 1.1875V2.5H9.125V1.1875C9.125 0.96875 9.31641 0.75 9.5625 0.75C9.78125 0.75 10 0.96875 10 1.1875V2.5H10.875C11.832 2.5 12.625 3.29297 12.625 4.25V13C12.625 13.9844 11.832 14.75 10.875 14.75H2.125C1.14062 14.75 0.375 13.9844 0.375 13V4.25C0.375 3.29297 1.14062 2.5 2.125 2.5H3V1.1875C3 0.96875 3.19141 0.75 3.4375 0.75Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </div>
                  January 31 2025
                </li>

              </ul>
            </div>
          </div>

          <div className="td_blog_details">
            <h2>{blog3.title}</h2>


            <div className="mt-5">
              <div className="my-3">
                <h3>Bachelor Degree Documents :</h3>
                <p></p>
                <h5 style={{ color: "var(--accent-color)" }}>Requirement documents :</h5>
                <ul className="td_list td_style_2 td_fs_18 td_medium td_heading_color td_mp_0">
                  {blog4.programRequirements.bachelorProgram.requiredDocuments.map(data => {
                    return (
                      <li>
                        <svg
                          className="td_accent_color"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="12" cy="12" r="12" fill="currentColor" />
                          <path
                            d="M7.5 14.1136C7.5 14.1136 8.52273 14.1136 9.88636 16.5C9.88636 16.5 13.6765 10.25 17.0455 9"
                            stroke="white"
                            strokeWidth="0.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="">

                          <p style={{ fontWeight: "300" }}>{data}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
                <h5 style={{ color: "var(--accent-color)" }}>Optional documents :</h5>
                <ul className="td_list td_style_2 td_fs_18 td_medium td_heading_color td_mp_0">
                  {blog4.programRequirements.bachelorProgram.optionalDocuments.map(data => {
                    return (
                      <li>
                        <svg
                          className="td_accent_color"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="12" cy="12" r="12" fill="currentColor" />
                          <path
                            d="M7.5 14.1136C7.5 14.1136 8.52273 14.1136 9.88636 16.5C9.88636 16.5 13.6765 10.25 17.0455 9"
                            stroke="white"
                            strokeWidth="0.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="">

                          <p style={{ fontWeight: "300" }}>{data}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className="my-3">


                <h3> Master and Doctoral Documents : </h3>

                <p></p>
                <h5 style={{ color: "var(--accent-color)" }}>Requirement documents :</h5>
                <ul className="td_list td_style_2 td_fs_18 td_medium td_heading_color td_mp_0">
                  {blog4.programRequirements.masterAndDoctoralPrograms.requiredDocuments.map(data => {
                    return (
                      <li>
                        <svg
                          className="td_accent_color"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="12" cy="12" r="12" fill="currentColor" />
                          <path
                            d="M7.5 14.1136C7.5 14.1136 8.52273 14.1136 9.88636 16.5C9.88636 16.5 13.6765 10.25 17.0455 9"
                            stroke="white"
                            strokeWidth="0.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="">

                          <p style={{ fontWeight: "300" }}>{data}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
                <h5 style={{ color: "var(--accent-color)" }}>Optional documents :</h5>
                <ul className="td_list td_style_2 td_fs_18 td_medium td_heading_color td_mp_0">
                  {blog4.programRequirements.masterAndDoctoralPrograms.optionalDocuments.map(data => {
                    return (
                      <li>
                        <svg
                          className="td_accent_color"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="12" cy="12" r="12" fill="currentColor" />
                          <path
                            d="M7.5 14.1136C7.5 14.1136 8.52273 14.1136 9.88636 16.5C9.88636 16.5 13.6765 10.25 17.0455 9"
                            stroke="white"
                            strokeWidth="0.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="">

                          <p style={{ fontWeight: "300" }}>{data}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>

              <div className="my-3">


                <h3 >Documents for non degree Chinise</h3>

                <p></p>
                <h5 style={{ color: "var(--accent-color)" }}>Requirement documents :</h5>
                <ul className="td_list td_style_2 td_fs_18 td_medium td_heading_color td_mp_0">
                  {blog4.programRequirements.nonDegreeChineseLanguageProgram.requiredDocuments.map(data => {
                    return (
                      <li>
                        <svg
                          className="td_accent_color"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="12" cy="12" r="12" fill="currentColor" />
                          <path
                            d="M7.5 14.1136C7.5 14.1136 8.52273 14.1136 9.88636 16.5C9.88636 16.5 13.6765 10.25 17.0455 9"
                            stroke="white"
                            strokeWidth="0.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="">

                          <p style={{ fontWeight: "300" }}>{data}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
                <h5 style={{ color: "var(--accent-color)" }}>Optional documents :</h5>
                <ul className="td_list td_style_2 td_fs_18 td_medium td_heading_color td_mp_0">
                  {blog4.programRequirements.nonDegreeChineseLanguageProgram.optionalDocuments.map(data => {
                    return (
                      <li>
                        <svg
                          className="td_accent_color"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="12" cy="12" r="12" fill="currentColor" />
                          <path
                            d="M7.5 14.1136C7.5 14.1136 8.52273 14.1136 9.88636 16.5C9.88636 16.5 13.6765 10.25 17.0455 9"
                            stroke="white"
                            strokeWidth="0.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="">

                          <p style={{ fontWeight: "300" }}>{data}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>






          </div>
          <div className="td_height_50 td_height_lg_40" />
          <div className="td_post_share">
            <div className="td_categories">
              <h4 className="mb-0 td_fs_18">Tags:</h4>
              <Link to="#" className="td_category">
                Germany
              </Link>
              <Link to="#" className="td_category">
                China
              </Link>
              <Link to="#" className="td_category">
                Scholarship
              </Link>
              <Link to="#" className="td_category">
                Learning
              </Link>
              <Link to="#" className="td_category">
                Support
              </Link>
            </div>
            <div className="td_footer_social_btns td_fs_18 td_accent_color">
              <a href="https://www.facebook.com/profile.php?id=61558528675842#" className="td_center">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              
              <a href="https://www.instagram.com/studylinkhub1/" className="td_center">
                <i className="fa-brands fa-instagram"></i>
              </a>

            </div>
          </div>
          <div className="td_height_40 td_height_lg_40" />

        </BlogContainer>
      )}
    </Layout>
  );
};


/**  <div className="row">
            <div className="col-xxl-5">
              <div
                className="td_video_block td_style_1 td_accent_bg td_bg_filed td_center text-center"
                style={{ backgroundImage: `url(${videobg})` }}
              >
                <VideoPlayer
                  trigger={
                    <a
                      href="#vid001"
                      className="td_player_btn_wrap_2 td_video_open"
                    >
                      <span className="td_player_btn td_center">
                        <span></span>
                      </span>
                    </a>
                  }
                />
              </div>
            </div>
            <div className="col-xxl-6">
              <div className="td_blog_details_inside_box">
                <h3>We are Always Provide a Good Friendly Weather</h3>
                <p>
                  When an unknown printer took a galley type remaining
                  essentially unchan galley of type and scrambled it to make a
                  type specimen book.
                </p>
                <ul className="td_list td_style_2 td_fs_18 td_medium td_heading_color td_mp_0">
                  <li>
                    <svg
                      className="td_accent_color"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="12" fill="currentColor" />
                      <path
                        d="M7.5 14.1136C7.5 14.1136 8.52273 14.1136 9.88636 16.5C9.88636 16.5 13.6765 10.25 17.0455 9"
                        stroke="white"
                        strokeWidth="0.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Online Educations Platform
                  </li>
                  <li>
                    <svg
                      className="td_accent_color"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="12" fill="currentColor" />
                      <path
                        d="M7.5 14.1136C7.5 14.1136 8.52273 14.1136 9.88636 16.5C9.88636 16.5 13.6765 10.25 17.0455 9"
                        stroke="white"
                        strokeWidth="0.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Daily News Update
                  </li>
                  <li>
                    <svg
                      className="td_accent_color"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="12" fill="currentColor" />
                      <path
                        d="M7.5 14.1136C7.5 14.1136 8.52273 14.1136 9.88636 16.5C9.88636 16.5 13.6765 10.25 17.0455 9"
                        stroke="white"
                        strokeWidth="0.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Budget Friendly Theme
                  </li>
                </ul>
              </div>
            </div>
          </div> */