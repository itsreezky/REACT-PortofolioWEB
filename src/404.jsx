// 404Page.jsx
import React from 'react';

const NotFoundPage = () => {
  return (
    <div>
      <section
        className="cs_hero cs_style_3 cs_type_1 cs_filled_bg cs_center text-center"
        data-src="assets/img/bg/hero_bg_1.svg"
      >
        <div className="container">
          <div className="cs_height_45 cs_height_lg_45" />
          <h1
            className="cs_hero_title cs_font_92 cs_extra_bold wow fadeInUp"
            data-wow-duration="1.8s"
            data-wow-delay="0.2s"
          >
            <span className="cs_gradient_text">404 NOT FOUND</span>
          </h1>
          <ol className="breadcrumb">
            <li className="breadcrumb-item active">
              ERROR 404 NOT FOUND, CHECK IF FILE ALREADY EXIST. </li>
          </ol>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;