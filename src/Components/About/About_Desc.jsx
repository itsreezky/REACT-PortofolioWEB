import React from 'react';

function About_Desc () {
  return (
    <div>
      {' '}   {/* Start Desc Section */}
      <section className="position-relative">
        <div className="cs_height_150 cs_height_lg_80" />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="cs_pr_65">
                <div className="cs_image_box cs_style_3 position-relative">
                  <div className="cs_imagebox_shape_about_2 position-absolute">
                    <img src="assets/img/about_shape_3.svg" alt />
                  </div>
                  <div className="cs_image_wrap cs_radius_20 overflow-hidden">
                    <img
                      className="w-100"
                      src="assets/img/reezky/reezky_formal2.png"
                      alt="about_2_image"
                    />
                  </div>
                  <div className="cs_happy_client position-absolute cs_white_bg d-flex align-items-center cs_radius_20 cs_gap_15">
                    <p className="mb-0 cs_emoji_text" />
                    <div>
                      <h3 className="mb-0 cs_font_24 cs_semi_bold cs_accent_color">
                        <span className="odometer" data-count-to={100} />+
                      </h3>
                      <p className="mb-0 cs_font_16 cs_medium">
                        Freelance Project
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cs_height_lg_40" />
            </div>
            <div className="col-lg-6">
              <div className="cs_about cs_style_1 cs_pl_50">
                <h3 className="cs_about_title cs_font_48 cs_semi_bold">
                  I <span className="cs_accent_color">Committed </span>
                  to Delivering Innovative Solutions
                </h3>
                <p className="cs_about_text">
                  Greetings! I'm Reezky (Muhammad Rizki), a proficient web and application developer with a diverse skill set. My expertise spans a range of programming languages and technologies, allowing me to craft dynamic and engaging digital solutions.
                </p>
                <h4 className="cs_about_subtitle cs_font_36 cs_semi_bold">
                  In summary
                </h4>
                <ul className="cs_mp_0 cs_about_summary_list">
                  <li>
                    <p className="m-0 text-capitalize">current location</p>
                    <h5 className="cs_font_20 m-0 cs_semi_bold">
                      Perum Bumi Tamansari, Kota Tasikmalaya, Jawa Barat, Indonesia.
                    </h5>
                  </li>
                  <li>
                    <p className="m-0 text-capitalize">Education</p>
                    <h5 className="cs_font_20 m-0 cs_semi_bold">
                    Student Majoring in Informatics Engineering at Siliwangi University
                    </h5>
                  </li>
                  <li>
                    <p className="m-0 text-capitalize">email</p>
                    <h5
                      className="cs_font_20 m-0 cs_semi_bold wow fadeInLeft"
                      data-wow-duration="0.8s"
                      data-wow-delay="0.2s"
                    >
                     <a href="mailto:hello@itsreezky.my.id"> hello@itsreezky.my.id</a>
                    </h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_150 cs_height_lg_80" />
      </section>
      {/* End Desc Section */}
    </div>
  );
}

export default About_Desc;
