import React from "react";
import { useHobble } from "../../lib/hooks/useHobble";
import { useAccordion } from "../../lib/hooks/useAccordion";

import faqShape5 from "../../assets/img/home_4/faq_shape_5.svg";
import faqShape6 from "../../assets/img/home_4/faq_shape_6.svg";
import faqShape7 from "../../assets/img/home_4/faq_shape_7.svg";
import faqImg from "../../assets/img/home_4/faq_img.png";
import faqShape1 from "../../assets/img/home_4/faq_shape_1.svg";
import faqShape2 from "../../assets/img/home_4/faq_shape_2.svg";
import faqShape3 from "../../assets/img/home_4/faq_shape_3.svg";
import faqShape4 from "../../assets/img/home_4/faq_shape_4.svg";


const faqSection = [
  {
    question: "What resources are available to help with common student concerns?",
    response: "We offer an FAQ section addressing common questions on visas, scholarships, and accommodations."
  },
  {
    question: "Where can I find checklists and templates for my application?",
    response: "You can download document checklists and templates for essential paperwork like personal statements and recommendation letters."
  },
  {
    question: "Is there a tool to check my scholarship eligibility?",
    response: "Yes! Our Interactive Scholarship Calculator estimates which scholarships you may qualify for based on your profile."
  },
  {
    question: "Are there success stories from students who have studied abroad?",
    response: "Absolutely! Our Success Stories Blog features real-life testimonials from students who’ve successfully applied for scholarships and studied abroad."
  },
  {
    question: "Can I book a one-on-one consultation for guidance?",
    response: "Yes, we provide a Live Chat and Consultation Booking feature where you can schedule personalized guidance sessions."
  },

];

const faqSection2 = [
  {
    question: "Where can I find information about the visa process?",
    response: "Our Visa & Immigration Guide outlines the visa application process for studying in China and Germany."
  },
  {
    question: "How can I estimate my living expenses abroad?",
    response: "We offer a Cost of Living & Budget Planner tool to help you estimate expenses and create a budget."
  },
  {
    question: "Is there a community where I can connect with other students?",
    response: "Yes! Our Social Media Community allows students to share experiences, connect, and support each other."
  },
  {
    question: "How can I prepare for cultural differences when studying abroad?",
    response: "Our Cultural Resources section provides insights on cultural adaptation and lifestyle tips for studying in China or Germany."
  }
]

export const FaqOne = () => {
  useHobble();
  useAccordion();

  return (
    <div className="td_gray_bg_5 td_shape_section_4 td_hobble">
      <div className="td_shape td_shape_position_1 td_hover_layer_5">
        <img src={faqShape5} alt="FAQ Shape 5" />
      </div>
      <div className="td_shape td_shape_position_2">
        <img src={faqShape6} alt="FAQ Shape 6" />
      </div>
      <div className="td_shape td_shape_position_3 td_hover_layer_3">
        <img src={faqShape7} alt="FAQ Shape 7" />
      </div>
      <div className="td_shape td_shape_position_4">
        <img src={faqShape5} alt="FAQ Shape 5" />
      </div>
      <div className="td_height_112 td_height_lg_75" />
      <div className="container">
        <div className="row align-items-center td_gap_y_40">
          <div
            className="col-xl-6 wow fadeInLeft"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <div className="td_section_heading td_style_1">
              <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color">
                FREQUENTLY ASKED QUESTIONS
              </p>
              <h2 className="td_section_title td_fs_48 mb-0">
              A page addressing common questions on visas, scholarships, and accommodations.
              </h2>
            </div>
            <div className="td_height_50 td_height_lg_50" />
            <div className="td_accordians td_style_1 td_type_1">
              {faqSection.map((x,index)=>{
                return(
                  <div className={"td_accordian " + index == 0 && ("active")}>
                    <div className="td_accordian_head">
                      <h2 className="td_accordian_title td_fs_20 td_medium">
                      {x.question}
                      </h2>
                      <span className="td_accordian_toggle">
                        <svg
                          width="14"
                          height="9"
                          viewBox="0 0 14 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="presentation"
                        >
                          <path
                            d="M12.355 9L7 3.43725L1.645 9L0 7.28745L7 -9.53674e-07L14 7.28745L12.355 9Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="td_accordian_body">
                      <p>
                        {x.response}
                      </p>
                    </div>
                  </div>
                )
              })}

           
            </div>
          </div>

          <div
            className="col-xl-6 wow fadeInRight"
            data-wow-duration="1s"
            data-wow-delay="0.4s"
          >
            <div className="td_image_box td_style_9">
              <div className="td_image_box_img_1">
                <img src={faqImg} alt="FAQ Image" />
              </div>
              <div className="td_image_box_shape_2 position-absolute td_hover_layer_3">
                <img src={faqShape1} alt="FAQ Shape 1" />
              </div>
              <div className="td_image_box_shape_3 position-absolute td_hover_layer_5">
                <img src={faqShape2} alt="FAQ Shape 2" />
              </div>
              <div className="td_image_box_shape_4 position-absolute td_hover_layer_3">
                <img src={faqShape3} alt="FAQ Shape 3" />
              </div>
              <div className="td_image_box_shape_5 position-absolute">
                <img src={faqShape4} alt="FAQ Shape 4" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="td_height_120 td_height_lg_80" />
    </div>
  );
};
