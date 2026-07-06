import React from "react";
import { Link } from "react-router-dom";

import footerLogo from "../../assets/img/footer_logo.png";

export const FooterThree = () => {
  return (
    <footer className="td_footer td_style_1 td_type_3 td_color_4">
      <div className="container">
        <div className="d-flex justify-content-between" >
        <h3 className="td_fs_64 td_white_color mb-0">{`Let's Contact`}</h3>
        <img src={footerLogo} alt="footer" style={{height:"100px"}}/>
        </div>
        <div className="td_footer_row">
          <div className="td_footer_col">
            <div className="td_footer_widget">
              <h2 className="td_footer_widget_title td_fs_32 td_white_color td_medium td_mb_30">
                Navigate
              </h2>
              <ul className="td_footer_widget_menu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/scholarship">Scholarships</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/faqs">F.A.Q</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
         
         
          <div className="td_footer_col">
            <div className="td_footer_widget">
              <h2 className="td_footer_widget_title td_fs_32 td_white_color td_medium td_mb_30">
                Enter your email
              </h2>
              <div className="td_newsletter td_style_1">
                <p className="td_mb_20 td_opacity_7">
                  We will reach in the a soon as possible !
                </p>
                <form action="#" className="td_newsletter_form">
                  <input
                    type="email"
                    className="td_newsletter_input"
                    placeholder="Email address"
                  />
                  <button
                    type="submit"
                    className="td_btn td_style_1 td_radius_30 td_medium"
                    onClick={e => alert('Email saved with success !')}
                  >
                    <span className="td_btn_in td_white_color td_accent_bg">
                      <span>Subscribe</span>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="td_footer_col">
            <div className="td_footer_widget">
              <div className="td_footer_address_widget_wrap">
                <ul className="td_footer_address_widget td_medium td_mp_0">
                  <li>
                    <i className="fa-solid fa-phone-volume"></i>
                    <a href="cal:+21670877053">+216 70877053</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-phone-volume"></i>
                    <a href="cal:+21626253080 ">+216 26253080 </a>
                  </li>
                  
                  <li>
                    <i className="fa-solid fa-envelope"></i>
                    <a href="mailto:contact@study-link-hub.com">
                      contact@study-link-hub.com
                    </a>
                  </li>
                  <li>
                    <i className="fa-solid fa-location-dot"></i>Immeuble lys bloc a rue de la bourse lac 2<br />
                    Tunis,Tunisia
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="td_footer_bottom td_fs_18">
        <div className="container">
          <div className="td_footer_bottom_in">
            <p className="td_copyright mb-0">
              Copyright ©STUDY LINK HUB | All Right Reserved <a href='http://www.xsustain.io' target="_blank">XSUSTAIN</a> 
            </p>
        
            <div className="td_footer_social_btns td_fs_20">
              <a href="https://www.facebook.com/profile.php?id=61558528675842#" className="td_center">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              
              <a href="https://www.instagram.com/studylinkhub1/" className="td_center">
                <i className="fa-brands fa-instagram"></i>
              </a>
           
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
