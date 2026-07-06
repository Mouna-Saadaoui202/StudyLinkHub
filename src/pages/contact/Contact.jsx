import React, { useState } from "react";
import { Layout } from "../../layouts/Layout";

import contactImg from "../../assets/img/success.jpg";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://www.study-link-hub.com/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('We got all your information. We will get back to you ASAP!');
        setFormData({ name: "", number: "", email: "" }); // Reset form
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <Layout breadcrumbTitle={"Contact"} breadcrumbSubtitle={"Contact"} header={1} footer={3}>
      <section>
        <div className="td_height_120 td_height_lg_80" />
        <div className="container">
          <div className="row">
            <div className="col-xxl-10 offset-xxl-1">
              <div className="row align-items-center td_gap_y_40">
                <div className="col-lg-6">
                  <img src={contactImg} alt="Contact" className="w-100" />
                </div>
                <div className="col-xl-5 offset-xl-1 col-lg-5">
                  <div className="td_contact_info">
                    <div className="td_section_heading td_style_2 td_mb_20">
                      <h2 className="td_contact_info_title td_fs_36 mb-0">
                        Our Office Address
                      </h2>
                    </div>
                    <div className="td_mb_40">
                      <h2 className="td_fs_24 td_semibold td_mb_20">
                        STUDY LINK HUB
                      </h2>
                      <p className="td_fs_18 td_heading_color td_medium td_mb_10">
                        Immeuble lys bloc a rue de la bourse lac 2
                      </p>
                      <p className="td_fs_18 td_heading_color td_medium td_mb_10 td_opacity_7">
                        <a href="tel:+216 70877053">+216 70877053 </a>
                      </p>
                      <p className="td_fs_18 td_heading_color td_medium td_mb_10 td_opacity_7">
                        <a href="tel:+216 26253080">+216 26253080  </a>
                      </p>
                      <p className="td_fs_18 td_heading_color td_medium mb-0 td_opacity_7">
                        <a href="mailto:contact@study-link-hub.com">contact@study-link-hub.com</a>
                      </p>
                    </div>
                    <div className="td_form_card_in">
                      <h2 className="td_fs_36 td_mb_20 text-uppercase td_mb_16">
                        Feel Free to contact us !
                      </h2>
                      <h3 className="td_fs_24 td_medium td_opacity_9 td_mb_32">
                        Fields with * are required
                      </h3>
                  
                      <form onSubmit={handleSubmit}>
                        <label className="td_medium td_heading_color td_mb_12">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="td_form_field td_mb_30 td_medium td_white_bg"
                          required
                        />
                        <label className="td_medium td_heading_color td_mb_12">
                          Phone number *
                        </label>
                        <input
                          type="tel"
                          name="number"
                          value={formData.number}
                          onChange={handleChange}
                          className="td_form_field td_mb_30 td_medium td_white_bg"
                          required
                        />

                        <label className="td_medium td_heading_color td_mb_12">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="td_form_field td_mb_30 td_medium td_white_bg"
                          required
                        />

                        <button
                          type="submit"
                          className="td_btn td_style_1 td_radius_10 td_medium w-100 td_fs_20"
                        >
                          <span className="td_btn_in td_white_color td_accent_bg">
                            <span>Submit contact</span>
                            <svg
                              width="19"
                              height="20"
                              viewBox="0 0 19 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                d="M15.1575 4.34302L3.84375 15.6567"
                                stroke="currentColor"
                              />
                              <path
                                d="M15.157 11.4142C15.157 11.4142 16.0887 5.2748 15.157 4.34311C14.2253 3.41142 8.08594 4.34314 8.08594 4.34314"
                                stroke="currentColor"
                              />
                            </svg>
                          </span>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="td_height_120 td_height_lg_80" />

        <div className="td_map">
          <iframe
            id="map"
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.878529669692!2d10.2803934!3d36.8453851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd4ab66d4961ef%3A0x44777502a38b87e9!2sFleur%20de%20Lys%20Lac2!5e0!3m2!1sfr!2stn!4v1738342389411!5m2!1sfr!2stn" 
            allowFullScreen
          />
        </div>
      </section>
    </Layout>
  );
};