import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeaderSearch } from "./HeaderSearch";
import { HeaderLanguage } from "./HeaderLanguage";
import { HeaderSidebar } from "./HeaderSidebar";
import { useMobilemenu } from "../../lib/hooks/useMobilemenu";
import { useStickyHeader } from "../../lib/hooks/useStickyHeader";

import Logo from "../../assets/img/half_logo.png";

export const HeaderOne = () => {
  
  useMobilemenu();
  useStickyHeader();

  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar((v) => !v);

  return (
    <>
      <header className="td_site_header td_style_1 td_type_3 td_sticky_header td_medium td_heading_color">
        <div className="td_main_header">
          <div className="container-fluid">
            <div className="td_main_header_in">
              {/* left */}
              <div className="td_main_header_left">
                <Link className="td_site_branding" to="/">
                  <img src={Logo} alt="Logo" height={60} style={{height:"60px!important"}}/>
                </Link>
                <div className="td_header_social_btns">
                  <a href="#" className="td_center">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                   
                  <a href="#" className="td_center">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>

              <div className="td_main_header_center">
                <nav className="td_nav">
                  <div className="td_nav_list_wrap">
                    <div className="td_nav_list_wrap_in">
                      {/* first three */}
                      <ul className="td_nav_list">
                        <li>
                          <Link to="/">Home</Link>
                          
                        </li>
                        <li >
                          <Link to="/about">About</Link>
                         
                        </li>
                        <li>
                          <Link to="/scholarship">Scholarships</Link>
                        </li>
                      </ul>

                      <Link className="td_site_branding" to="/">
                        <img src={Logo} alt="Logo" />
                      </Link>

                      {/* last three */}
                      <ul className="td_nav_list">
                        <li>
                          <Link to="/faqs">F.A.Q</Link>
                        
                        </li>
                        <li>
                          <Link to="/blog">Blogs</Link>
                        
                        </li>
                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>

              {/* right */}
              <div className="td_main_header_right">
            

                <button className="td_hamburger_btn" onClick={toggleSidebar} />
              </div>
            </div>
          </div>
        </div>
      </header>

      <HeaderSidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
    </>
  );
};
