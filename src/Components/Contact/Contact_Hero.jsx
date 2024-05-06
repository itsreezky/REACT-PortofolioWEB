import React from 'react';

function Contact_Hero () {
  return (
    <div>
      {/* Start Hero Section */}
      <section
        className="cs_hero cs_style_3 cs_type_1 cs_filled_bg cs_center text-center"
        data-src="assets/img/bg/hero_bg_5.svg"
      >
        <div className="container">
          <div className="cs_height_45 cs_height_lg_45" />
          <h1
            className="cs_hero_title cs_font_92 cs_extra_bold wow fadeInUp"
            data-wow-duration="0.8s"
            data-wow-delay="0.2s"
          >
            <span className="cs_gradient_text_2">Contact Us</span>
          </h1>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/REACT-PortofolioWEB">Home</a></li>
            <li className="breadcrumb-item active">Contact</li>
          </ol>
        </div>
      </section>
      {/* Start Hero Section */}
    </div>
  );
}

export default Contact_Hero;
