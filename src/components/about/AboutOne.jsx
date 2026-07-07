import React from "react";
import { Link } from "react-router-dom";
import aboutImg1 from "../../assets/img/home_1/1.webp";
import aboutImg2 from "../../assets/img/home_1/2.webp";
import circleText from "../../assets/img/home_1/about_circle_text.svg";
import { VideoPlayer } from "../videos/VideoPlayer";

export const AboutOne = () => {
  return (
    <section>
      <div className="td_height_120 td_height_lg_80" />
      <div className="td_about td_style_1">
        <div className="container">
          <div className="row align-items-center td_gap_y_40">
            <div
              className="col-lg-6 wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay="0.25s"
            >
              <div className="td_about_thumb_wrap">
                <div className="td_about_year text-uppercase td_fs_64 td_bold">
                  EST 2024
                </div>
                <div className="td_about_thumb_1">
                  <img src={aboutImg2} alt="About" />
                </div>
                <div className="td_about_thumb_2">
                  <img src={aboutImg1} alt="About" />
                </div>

                <VideoPlayer
                  trigger={
                    <a
                      href="#vid"
                      className="td_circle_text td_center td_video_open"
                    >
                      <svg
                        width="15"
                        height="19"
                        viewBox="0 0 15 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.086 8.63792C14.6603 9.03557 14.6603 9.88459 14.086 10.2822L2.54766 18.2711C1.88444 18.7303 0.978418 18.2557 0.978418 17.449L0.978418 1.47118C0.978418 0.664496 1.88444 0.189811 2.54767 0.649016L14.086 8.63792Z"
                          fill="white"
                        />
                      </svg>
                      <img src={circleText} alt="Circle text" className="" />
                    </a>
                  }
                />

                <div className="td_circle_shape" />
              </div>
            </div>
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <div className="td_section_heading td_style_1 td_mb_30">
                <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color">
                  About us
                </p>
                <h2 className="td_section_title td_fs_48 mb-0">
                  Secure scholarships in China, France, Italy, Spain, Russia & Germany.
                </h2>
                <p className="td_section_subtitle td_fs_18 mb-0">
                  
                By matching them with the best universities and programs suited to their goals. 
                In China, we offer students access to both scholarship opportunities and self-financed options, along with support in securing internships with leading companies like Huawei, 
                Tencent, and Alibaba, enhancing their career prospects. In Germany, while we don’t offer scholarships,
                 
                </p>
              </div>
              <div className="td_mb_40">
                <ul className="td_list td_style_5 td_mp_0">
                  <li>
                    <h3 className="td_fs_24 td_mb_8">Our Mission:</h3>
                    <p className="td_fs_18 mb-0">
                    To provide expert consulting and one-stop support for 
                    students aspiring to study in China and Germany. We help 
                    students understand their academic and career goals, then guide them in selecting the right program and university. 
                    From document preparation to assistance with settling 
                    in abroad, we are with them every step of the way.
                    </p>
                  </li>
                  <li>
                    <h3 className="td_fs_24 td_mb_8">Our Vision:                    </h3>
                    <p className="td_fs_18 mb-0">
                    To be the trusted platform for students seeking higher education 
                    opportunities in China and Germany, ensuring they receive personalized 
                    guidance and ongoing support throughout their journey—from application to arrival and beyond. 

                    </p>
                  </li>
                </ul>
              </div>
              <Link
                to="/courses-grid-view"
                className="td_btn td_style_1 td_radius_10 td_medium"
              >
                <span className="td_btn_in td_white_color td_accent_bg">
                  <span>More About</span>
                  <svg
                    width="19"
                    height="20"
                    viewBox="0 0 19 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1575 4.34302L3.84375 15.6567"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M15.157 11.4142C15.157 11.4142 16.0887 5.2748 15.157 4.34311C14.2253 3.41142 8.08594 4.34314 8.08594 4.34314"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
