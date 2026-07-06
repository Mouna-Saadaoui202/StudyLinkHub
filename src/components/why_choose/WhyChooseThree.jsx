import React from "react";
import { Link } from "react-router-dom";

import whyChooseUsThumb from "../../assets/img/docs.jpg";

export const WhyChooseThree = () => {
  return (
    <section className="">
      <div className="td_height_120 td_height_lg_80" />
      <div className="container">
        <div className="row align-items-center td_gap_y_40">
          <div
            className="col-lg-6 wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className="td_pr_20">
              <div className="td_section_heading td_style_1 td_mb_30">
                <p className="td_section_subtitle_up td_fs_18 td_medium td_spacing_1 td_mb_10 td_accent_color">
                  Why Choose us
                </p>
                <h2 className="td_section_title td_fs_48 td_mb_24">
                  Seamless Study Abroad Support: From Application to Arrival
                </h2>
                <p className="td_section_subtitle td_fs_18 mb-0">
                  We guide students through every step of the application process, 
                  from choosing the right program in China or Germany to securing 
                  scholarships or self-financed options. Our team assists with document 
                  preparation, application submission, and visa support. 
                  We also provide pre-departure guidance and on-the-ground assistance 
                  to ensure a smooth transition to university life.
                </p>
              </div>
              <div className="td_mb_40">
                <ul className="td_list td_style_2 td_fs_20 td_medium td_heading_color td_mp_0">
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
                    Comprehensive Application Guidance 
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
                    Scholarship & Financial Assistance
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
                    End-to-End Documentation & Visa Support
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
                    Pre-Departure & On-Ground Assistance
                  </li>
                </ul>
              </div>
              <Link
                to="/contact"
                className="td_btn td_style_1 td_type_2 td_radius_30 td_medium"
              >
                <span className="td_btn_in td_white_color td_accent_bg">
                  <span>Contat Us</span>
                  <span className="td_btn_icon td_center td_accent_bg td_white_color">
                    <svg
                      width="10"
                      height="18"
                      viewBox="0 0 10 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.24811 1.49512C1.24811 1.49512 8.74803 7.01878 8.74805 8.99518C8.74807 10.9716 1.24805 16.4951 1.24805 16.4951"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                </span>
              </Link>
            </div>
          </div>
          <div
            className="col-lg-6 wow fadeInRight"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <div className="td_pl_65">
              <img src={whyChooseUsThumb} alt="Why Choose Us" />
            </div>
          </div>
        </div>
      </div>
      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
