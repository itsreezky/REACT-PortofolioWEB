import React from 'react';

function Footer () {
  return (
    <div>
      {/* Start Footer */}
      <footer
        className="cs_footer cs_style_1 cs_filled_bg position-relative"
        data-src="assets/img/bg/footer_bg.svg"
      >
        <div className="position-absolute cs_footer_shape_1">
          <img src="assets/img/footer_shape.svg" alt />
        </div>
        <div className="container">
          <div className="cs_footer_cta">
            <h2 className="cs_font_92 cs_gradient_text_2 cs_semi_bold">
              Have a project?
            </h2>
            <a
              href="/REACT-PortofolioWEB/contact"
              className="cs_btn cs_style_1 cs_primary_font"
            >
              <span>
                Let’s
                Talk
              </span>
            </a>
          </div>
          <div className="cs_copyright">
            © 2024 <a href="https://itsreezky.my.id">Reezky</a>. All rights reserved
          </div>
        </div>
      </footer>

      {/* End Footer */}
    </div>
  );
}

export default Footer;
