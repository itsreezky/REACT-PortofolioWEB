import React from 'react'

function Header() {
  return (
    <div>
          {/* Start Header Section  */}
<header className="cs_site_header cs_style_1 cs_sticky_header cs_color_2">
  <div className="cs_main_header">
    <div className="container">
      <div className="cs_main_header_in">
        <div className="cs_main_header_left">
          <a className="cs_site_branding" href="/">
            <img src="assets/img/reezky/reezkyicon.png" alt="Logo" width={200} />
          </a>
        </div>
        <div className="cs_main_header_center">
          <div className="cs_nav">
            <ul className="cs_nav_list">
              <li className="active menu-item-has-children"><a href="/">Home</a>
              </li>
              <li className="menu-item-has-children"><a href="/about">About</a>
              </li>
              <li className="menu-item-has-children"><a href="/portofolio">Portfolio</a>
              </li>
              <li className="menu-item-has-children"><a href="/blog">Blog</a>
              </li>
              <li> <a href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="cs_main_header_right">
          <a href="/contact" className="cs_btn cs_style_1 cs_primary_font"><span>Hire Me</span></a>
        </div>
      </div>
    </div>
  </div>
</header>
  {/* End Header Section */}
    </div>
  )
}

export default Header