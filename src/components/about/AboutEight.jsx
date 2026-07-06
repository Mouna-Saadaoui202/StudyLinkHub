import React from "react";
import { Link } from "react-router-dom";
import { VideoPlayer } from "../videos/VideoPlayer";

import aboutShape4 from "../../assets/img/home_8/about_shape_4.svg";
import aboutImg1 from "../../assets/img/deg.jpg";
import aboutImg2 from "../../assets/img/celeb.jpg";
import aboutShape2 from "../../assets/img/home_8/about_shape_2.svg";
import aboutShape3 from "../../assets/img/home_8/about_shape_3.svg";

export const AboutEight = () => {
  return (
    <section>
      <div className="td_wrap_box_1 td_radius_10">
       
        <div className="td_height_40 td_height_lg_40" />
        <div className="container">
          <div className="row align-items-center td_gap_y_40">
            <div className="col-lg-6">
              <div className="td_image_box td_style_6 td_type_2">
                <div
                  className="td_image_box_img_1 wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                >
                  <img src={aboutImg1} alt="About" style={{height:"380px"}}/>
                </div>
                <div
                  className="td_image_box_img_2 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                >
                  <div className="td_image_box_img_2_in">
                    <img src={aboutImg2} alt="About" />

                  </div>
                </div>
                <div className="td_image_box_shape_1 position-absolute" />
                <div className="td_image_box_shape_2 position-absolute">
                  <img src={aboutShape2} alt="Shape" />
                </div>
                <div className="td_image_box_shape_3 position-absolute td_accent_color">
                  <img src={aboutShape3} alt="Shape" />
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.35s"
            >
              <div className="td_section_heading td_style_1 td_mb_30">
                <p className="td_section_subtitle_up td_fs_18 td_medium td_spacing_1 td_mb_10 td_accent_color">
                  
                </p>
                <h2 className="td_section_title td_fs_48 td_mb_20">
                  Our Full Scholarship Program :
                </h2>
                <p className="td_section_subtitle td_fs_18 mb-0 td_heading_color td_opacity_8">
                This covers all expenses, including free accommodation, full tuition fees, and a monthly stipend to support living costs, 
                providing students with a comprehensive financial package.
                </p>
              </div>
              <div className="td_section_heading td_style_1 td_mb_30">
                <p className="td_section_subtitle_up td_fs_18 td_medium td_spacing_1 td_mb_10 td_accent_color">
                  
                </p>
                <h2 className="td_section_title td_fs_48 td_mb_20">
                  Our Partial Scholarship Program:
                </h2>
                <p className="td_section_subtitle td_fs_18 mb-0 td_heading_color td_opacity_8">
                
                This covers half of the tuition fees, and while it does not include accommodation or a stipend, 
                it still significantly reduces the overall cost of education
                </p>
              </div>
             
              <Link
                to="/contact"
                className="td_btn td_style_1 td_radius_10 td_medium"
              >
                <span className="td_btn_in td_white_color td_accent_bg">
                  <span>Contact us</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="td_height_120 td_height_lg_80" />
      </div>
    </section>
  );
};
