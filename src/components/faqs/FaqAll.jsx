import React from "react";
import { Link } from "react-router-dom";
import { useAccordion } from "../../lib/hooks/useAccordion";

import faqBg1 from "../../assets/img/congra.jpg";


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


export const FaqAll = () => {
  useAccordion();

  return (
    <>
      <div className="td_height_120 td_height_lg_80" />

      <div className="td_faq_1 td_style_1 td_type_1">
        <div className="td_faq_1_left">
          <div
            className="td_faq_1_img td_bg_filed"
            style={{ backgroundImage: `url(${faqBg1})` }}
          />
        </div>
        <div className="td_faq_1_right">
          <div className="td_section_heading td_style_1">
            <p className="td_section_subtitle_up td_fs_18 td_medium td_spacing_1 td_mb_10 td_accent_color">
              F.A.Q
            </p>
          </div>
          <div className="td_accordians td_style_1 td_type_2 td_mb_40">
            {faqSection.map(x=>{
              return(
                <div className="td_accordian">
                  <div className="td_accordian_head">
                    <h2 className="td_accordian_title td_fs_24">
                      {x.question}
                    </h2>
                    <span className="td_accordian_toggle"></span>
                  </div>
                  <div className="td_accordian_body td_fs_18">
                    <p>
                      {x.response}
                    </p>
                  </div>
                </div>
              )
            })}

            
          </div>
          <Link
            to="/contact"
            className="td_btn td_style_2 td_type_2 td_heading_color td_medium"
          >
            Get In Touch
            <i>
              <svg
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15.1575 4.34302L3.84375 15.6567" />
                <path d="M15.157 11.4142C15.157 11.4142 16.0887 5.2748 15.157 4.34311C14.2253 3.41142 8.08594 4.34314 8.08594 4.34314" />
              </svg>
            </i>
          </Link>
        </div>
      </div>

      <div className="td_height_120 td_height_lg_80" />

    </>
  );
};
