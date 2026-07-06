import React from "react";
import { Link } from "react-router-dom";

import logoBlack from "../../assets/img/logo.png";

export const HeaderSidebar = ({ showSidebar, toggleSidebar }) => {
  return (
    <div className={`td_side_header ${showSidebar && "active"}`}>
      <button className="td_close" onClick={toggleSidebar} />

      <div className="td_side_header_overlay" onClick={toggleSidebar} />

      <div className="td_side_header_in">
        <div className="td_side_header_shape" />
        <Link className="td_site_branding" href="index.html">
          <img src={logoBlack} alt="Logo" />
        </Link>

        <div className="td_side_header_box">
          <h2 className="td_side_header_heading">
            Do you want to have  
            more idea about our services? <br/> 
            Connect us now.
          </h2>
        </div>
        <div className="td_side_header_box">
          <h3 className="td_side_header_title td_heading_color">Contact Us</h3>
          <ul className="td_side_header_contact_info td_mp_0">
            <li>
              <i className="fa-solid fa-phone"></i>
              <span>
                <a href="tel:+21670877053">+216 70877053</a>
              </span><br/>
              <span>
                <a href="tel:+21626253080">+216 26253080</a>
              </span>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <span>
                <a href="mailto:contact@study-link-hub.com">contact@study-link-hub.com</a>
              </span>
            </li>
            <li>
              <i className="fa-solid fa-location-dot"></i>
              <span>
              Immeuble lys bloc a rue de la bourse <br/>lac 2
              Tunis,Tunisia
              </span>
            </li>
          </ul>
        </div>
        
        <div className="td_side_header_box">
          <h3 className="td_side_header_title td_heading_color">Follow Us</h3>
          <div className="td_social_btns td_style_1 td_heading_color">
            <a href="https://www.instagram.com/studylinkhub1/" className="td_center">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="td_center">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
           
            <a href="https://www.facebook.com/profile.php?id=61558528675842#" className="td_center">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};