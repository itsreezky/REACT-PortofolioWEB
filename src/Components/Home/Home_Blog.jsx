import React from 'react';

function Home_Blog () {
  return (
    <div>
      {/* Start Blog Section */}
      <section className="cs_filled_bg" data-src="assets/img/bg/blog_bg_2.png">
        <div className="cs_height_145 cs_height_lg_75" />
        <div className="container">
          <div className="d-md-flex justify-content-between wow fadeInLeft"
                                          data-wow-duration="1.8s"
                                          data-wow-delay="0.2s">
            <div className="cs_section_heading cs_style_1">
              <p
                className="cs_section_subtitle cs_accent_color_2 cs_font_16 wow fadeInLeft"
                data-wow-duration="0.8s"
                data-wow-delay="0.2s"
              >
                <span>Blog Posts</span>
                <svg
                  width={17}
                  height={21}
                  viewBox="0 0 17 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.1794 0.136775C10.2881 0.345851 9.66098 0.907053 8.49451 2.56862C8.16439 3.04177 7.83427 3.42691 7.75723 3.42691C7.52618 3.42691 6.88797 3.82302 6.63489 4.37322C6.50283 4.65937 6.24975 5.03346 6.07372 5.22054C5.45753 6.02382 6.2938 6.05681 4.88531 7.87246C2.75059 10.6454 1.89221 12.0209 1.81517 12.7691C1.72715 13.6935 0.186681 18.6012 0.494775 19.4485C0.703801 20.0427 1.40809 20.1637 2.43144 19.8556C4.26904 19.3054 7.55926 16.8846 8.1865 16.3454C8.98977 15.6521 11.2455 11.6688 11.5206 11.6578C11.8287 11.6467 12.4669 11.3386 12.577 11.2286C13.0832 10.7224 14.5247 8.2906 14.6567 7.66336C14.7117 7.39931 14.6346 7.15721 14.6346 6.84911C14.6346 6.66203 14.9098 6.23292 15.449 5.56163C16.5273 4.23018 16.5383 4.19719 15.9001 2.87671C14.7557 0.576917 13.2152 -0.325383 11.1794 0.136775ZM12.621 0.686965C13.5673 0.918049 14.4697 1.71033 15.0088 2.7557C15.526 3.77906 15.4269 4.03213 13.7434 6.08989C13.6994 6.13385 13.5673 5.84779 13.3693 5.55066C12.6099 4.38427 11.3555 3.53695 9.67195 3.36092C9.02277 3.29485 8.86868 3.54792 10.0021 2.00745C10.3983 1.46824 10.6293 1.17113 10.8053 0.984064C11.1025 0.686965 11.7407 0.477898 12.621 0.686965ZM10.0461 4.14217C11.5756 4.63735 12.1148 4.95641 13.0061 6.61798C13.5783 7.68538 13.5233 7.56437 12.8741 8.34562C12.6209 8.65371 12.599 8.65371 12.5219 8.45566C12.2579 7.71838 12.0378 7.32227 11.4106 6.71705C10.2551 5.72669 9.93608 5.99082 10.8714 7.06919C11.9387 8.31262 12.1588 9.02788 11.7517 9.95216C11.5096 10.4914 11.3335 10.6784 11.2785 10.4473C10.5853 7.88344 9.05577 6.79409 7.33918 6.64C6.62392 6.57401 6.52485 6.40895 6.92104 5.9688C7.16307 5.70467 7.51521 5.82576 8.3735 5.9358C8.75864 5.99082 8.78067 5.46265 8.35148 5.35261C7.79031 5.20949 7.60322 5.02249 8.03233 4.36225C8.42852 3.77906 8.80269 3.73501 10.0461 4.14217ZM9.01172 4.67034C8.80269 4.80241 8.74759 5.07751 9.46284 5.33058C10.1451 5.57269 10.4973 5.39657 10.4973 5.08848C10.4973 4.96747 10.4092 4.78038 10.1121 4.71439C9.716 4.61532 9.13281 4.5933 9.01172 4.67034ZM7.93334 7.32227C8.05435 7.39931 8.06541 7.41028 7.65824 8.0155C6.65692 9.50104 6.24975 10.0732 5.95263 10.4143C5.78757 10.6014 5.41348 11.1626 5.11636 11.6578C4.159 13.2864 3.32281 13.8036 2.95962 12.9892C2.82763 12.7032 2.86055 12.373 3.02561 12.1199C3.49876 11.3937 6.06275 7.35526 6.68991 7.1902C7.20711 7.04717 7.74626 7.20126 7.93334 7.32227ZM9.22082 7.97145C10.0351 8.81877 10.1451 9.358 9.50689 10.1392C8.31848 11.6028 6.44781 14.1226 5.69955 14.6618C5.1934 15.025 4.9513 13.9685 5.09442 13.3084C5.28142 12.417 6.02967 11.2176 7.68027 9.04991C8.62658 7.78445 8.79164 7.53138 9.22082 7.97145ZM10.3542 10.6894C10.3872 10.9315 10.5193 11.2616 10.2551 11.6248C10.0681 11.8888 9.46284 12.8902 8.97872 13.6934C8.14245 15.1019 7.04206 16.0373 6.95404 15.7952C6.844 15.4981 7.47116 14.0896 8.05435 13.2864C9.51786 11.3167 10.2111 9.72112 10.3542 10.6894ZM4.23604 14.2106C4.26904 15.08 4.78624 15.4541 5.64453 15.223C6.19473 15.08 6.19473 15.0689 5.97465 15.5861C5.87567 15.8172 5.82065 16.1473 5.84259 16.3234C5.89761 16.6756 5.7766 16.7195 4.92936 17.2588C4.80827 17.3357 4.65418 17.3027 4.57722 17.1817C4.13706 16.5104 3.52078 16.1693 2.82755 16.0593C2.13432 15.9492 2.17837 16.0703 2.38739 14.9699L2.5635 14.0346C2.70654 14.0346 3.23471 14.1556 3.72989 13.9355C3.939 13.8475 4.15908 13.7595 4.15908 13.7595C4.15908 13.7595 4.23604 13.9685 4.23604 14.2106Z"
                    fill="currentColor"
                  />
                </svg>
              </p>
              <h2 className="cs_section_title cs_font_48 cs_semi_bold">
                My latest <span className="cs_accent_color">articles</span>
              </h2>
            </div>
            <div className="align-self-end">
              <div className="cs_height_25 cs_height_lg_25" />
              <a
                className="d-inline-flex cs_gap_15 align-items-center text-uppercase cs_letter_spacing_15 cs_font_16 cs_accent_color"
                href="/blog"
              >
                <span className="cs_text_btn">View All Article</span>
                <svg
                  width={5}
                  height={9}
                  viewBox="0 0 5 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0L5 4.5L0 9L0 0Z" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
          <div className="cs_height_70 cs_height_lg_30"/>
          <div className="cs_blog_group_1">
            <div className="cs_blog cs_style_3 cs_transition_3 cs_white_bg cs_radius_20 cs_transform_up_hover_3">
              <div className="cs_blog_in">
                <div className="cs_blog_thumbnail cs_zoom">
                  <a href="/blog">
                    <img
                      className="cs_zoom_in w-100"
                      src="assets/img/blog/blog_4.jpg"
                      alt="blog_img"
                    />
                  </a>
                </div>
                <div className="cs_blog_info">
                  <h3 className="cs_blog_title cs_font_28">
                    <a
                      className="cs_accent_color_2_hover"
                      href="/blog"
                    >
                      The Easiest Way to
                      Become a Developer
                    </a>
                  </h3>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="cs_blog_avater d-flex align-items-center">
                      <img src="assets/img/reezky/reezky.jpg" alt="avatar_img" width={60} />
                      <div className="cs_ml_20">
                        <h2 className="cs_blog_name cs_font_20 cs_semi_bold mb-0">
                          Reezky
                        </h2>
                        <p className="cs_blog_designation cs_font_16 cs_normal mb-0">
                          24 Jan 2023
                        </p>
                      </div>
                    </div>
                    <a
                      href="/blog"
                      className="cs_circle_btn cs_style_1 cs_type_1 cs_accent_color_2 cs_center rounded-circle"
                    >
                      <svg
                        width={11}
                        height={11}
                        viewBox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 10L10 1"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1 1H10V10"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <svg
                        width={11}
                        height={11}
                        viewBox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 10L10 1"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1 1H10V10"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="cs_blog cs_style_2 cs_transition_4">
              <a href="/blog" className="cs_blog_thumbnail cs_zoom">
                <img
                  className="cs_zoom_in w-100 h-100"
                  src="assets/img/blog/blog_2.jpg"
                  alt
                />
              </a>
              <div className="cs_blog_info">
                <h2 className="cs_blog_title cs_font_20 cs_semi_bold">
                  <a
                    className="cs_accent_color_2_hover"
                    href="/blog"
                  >
                    How to
                    design a user-centric mobile application?
                  </a>
                </h2>
                <div className="cs_blog_avater d-flex align-items-center">
                <img src="assets/img/reezky/reezky.jpg" alt="avatar_img" width={60} />
                  <div className="cs_ml_20">
                    <h2 className="cs_blog_name cs_font_20 cs_semi_bold mb-0">
                      Reezky
                    </h2>
                    <p className="cs_blog_designation cs_font_16 cs_normal mb-0">
                      24 Jan 2023
                    </p>
                  </div>
                </div>
                <a
                  href="/blog"
                  className="cs_circle_btn cs_style_1 cs_type_1 cs_accent_color_2 cs_center rounded-circle"
                >
                  <svg
                    width={11}
                    height={11}
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 10L10 1"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 1H10V10"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <svg
                    width={11}
                    height={11}
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 10L10 1"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 1H10V10"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="cs_blog cs_style_2 cs_transition_4">
              <a href="/blog" className="cs_blog_thumbnail cs_zoom">
                <img
                  className="cs_zoom_in w-100 h-100"
                  src="assets/img/blog/blog_3.jpg"
                  alt
                />
              </a>
              <div className="cs_blog_info">
                <h2 className="cs_blog_title cs_font_20 cs_semi_bold">
                  <a
                    className="cs_accent_color_2_hover"
                    href="/blog"
                  >
                    The
                    Easiest Way to Become a Developer
                  </a>
                </h2>
                <div className="cs_blog_avater d-flex align-items-center">
                <img src="assets/img/reezky/reezky.jpg" alt="avatar_img" width={60} />
                  <div className="cs_ml_20">
                    <h2 className="cs_blog_name cs_font_20 cs_semi_bold mb-0">
                      Reezky
                    </h2>
                    <p className="cs_blog_designation cs_font_16 cs_normal mb-0">
                      24 Jan 2023
                    </p>
                  </div>
                </div>
                <a
                  href="/blog"
                  className="cs_circle_btn cs_style_1 cs_type_1 cs_accent_color_2 cs_center rounded-circle"
                >
                  <svg
                    width={11}
                    height={11}
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 10L10 1"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 1H10V10"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <svg
                    width={11}
                    height={11}
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 10L10 1"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 1H10V10"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="cs_blog cs_style_2 cs_transition_4">
              <a href="/blog" className="cs_blog_thumbnail cs_zoom">
                <img
                  className="cs_zoom_in w-100 h-100"
                  src="assets/img/blog/blog_1.jpg"
                  alt
                />
              </a>
              <div className="cs_blog_info">
                <h2 className="cs_blog_title cs_font_20 cs_semi_bold">
                  <a
                    className="cs_accent_color_2_hover"
                    href="/blog"
                  >
                    How to
                    design a user-centric mobile application?
                  </a>
                </h2>
                <div className="cs_blog_avater d-flex align-items-center">
                <img src="assets/img/reezky/reezky.jpg" alt="avatar_img" width={60} />
                  <div className="cs_ml_20">
                    <h2 className="cs_blog_name cs_font_20 cs_semi_bold mb-0">
                      Reezky
                    </h2>
                    <p className="cs_blog_designation cs_font_16 cs_normal mb-0">
                      24 Jan 2023
                    </p>
                  </div>
                </div>
                <a
                  href="/blog"
                  className="cs_circle_btn cs_style_1 cs_type_1 cs_accent_color_2 cs_center rounded-circle"
                >
                  <svg
                    width={11}
                    height={11}
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 10L10 1"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 1H10V10"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <svg
                    width={11}
                    height={11}
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 10L10 1"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 1H10V10"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_150 cs_height_lg_80" />
      </section>
      {/* End Blog Section */}
    </div>
  );
}

export default Home_Blog;
