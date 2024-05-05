import React from 'react';

function Home_Hero () {
  return (
    <div>
      {/* Start Hero Section */}
      <section
        className="cs_hero cs_style_2 cs_filled_bg"
        data-src="assets/img/bg/hero_bg_2.svg"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="cs_hero_info cs_pr_20">
                <h4 className="cs_hero_meta cs_font_48 cs_white_blue_text_2 cs_semi_bold cs_primary_font mb-0">
                  Greetings! I'm <br />
                </h4>
                <h1
                  className="cs_hero_title cs_font_92 cs_black wow fadeInLeft"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.2s"
                >
                  <span className="cs_gradient_text">Muhammad </span>
                  <span className="cs_gradient_border_text">Rizki</span>
                </h1>
                <h4 className="cs_hero_subtitle cs_font_36 cs_semi_bold cs_primary_font cs_white_blue_text_2">
                  Full-stack
                  <span className="cs_accent_color_2"> Web Developer</span>
                </h4>
                <p className="cs_hero_text">
                Web and Application Developer with an
interest in feature responsibility and
functional systems. 
                  {' '}
                  <span className="cs_primary_color">
                  Designed and
Developed Web Apps "Monitoring Covid-19
Vaccination" and won 2nd place in “Infect
Programming Competition 2021"
                  </span>
                  {' '}
                  Utilizing
                  {' '}
                  <span className="cs_primary_color">
HTML, CSS, Boostrap, RestfulAPI, PHP,
MYSQL, JavaScript and several frameworks</span>
                  {' '}
                  to create 100+ Front-End pages or Back-End
systems from various personal 
                  {' '}
                  <span className="cs_primary_color">since 2018.</span>
                </p>
                <div className="cs_social_btns d-flex">

                  {/* GIthub */}
                  <a
                    className="cs_accent_color_2"
                    href="https://github.com/itsreezky"
                  >
                    <svg
                      width={22}
                      height={24}
                      viewBox="0 0 22 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.3002 23V18.6C15.4532 17.222 15.0581 15.8391 14.2002 14.75C17.5002 14.75 20.8002 12.55 20.8002 8.7C20.8882 7.325 20.5032 5.972 19.7002 4.85C20.0082 3.585 20.0082 2.265 19.7002 1C19.7002 1 18.6002 1 16.4002 2.65C13.4962 2.1 10.5042 2.1 7.60016 2.65C5.40016 1 4.30016 1 4.30016 1C3.97016 2.265 3.97016 3.585 4.30016 4.85C3.49922 5.96747 3.11048 7.32807 3.20016 8.7C3.20016 12.55 6.50016 14.75 9.80016 14.75C9.37116 15.289 9.05216 15.905 8.86516 16.565C8.67816 17.225 8.62316 17.918 8.70016 18.6V23"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.7 18.5999C3.739 20.7999 3.2 16.3999 1 16.3999"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  {/* LinkedIn */}
                  <a
                    className="cs_accent_color_2"
                    href="https://www.linkedin.com/in/itsreezky/"
                  >
                    <svg
                      width={24}
                      height={22}
                      viewBox="0 0 24 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.7367 7.3158C17.4117 7.3158 19.0182 7.98121 20.2026 9.16565C21.3871 10.3501 22.0525 11.9565 22.0525 13.6316V21H17.842V13.6316C17.842 13.0732 17.6201 12.5378 17.2253 12.1429C16.8305 11.7481 16.295 11.5263 15.7367 11.5263C15.1783 11.5263 14.6429 11.7481 14.248 12.1429C13.8532 12.5378 13.6314 13.0732 13.6314 13.6316V21H9.4209V13.6316C9.4209 11.9565 10.0863 10.3501 11.2708 9.16565C12.4552 7.98121 14.0616 7.3158 15.7367 7.3158Z"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.21053 8.36841H1V21H5.21053V8.36841Z"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.10526 5.21053C4.26797 5.21053 5.21053 4.26797 5.21053 3.10526C5.21053 1.94256 4.26797 1 3.10526 1C1.94256 1 1 1.94256 1 3.10526C1 4.26797 1.94256 5.21053 3.10526 5.21053Z"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  {/* Email */}
                  <a
                    className="cs_accent_color_2"
                    href="mailto:hello@itsreezky.my.id"
                  >
                    <svg
                      width={22}
                      height={18}
                      viewBox="0 0 22 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 1H19C20.1 1 21 1.9 21 3V15C21 16.1 20.1 17 19 17H3C1.9 17 1 16.1 1 15V3C1 1.9 1.9 1 3 1Z"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21 3L11 10L1 3"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>

                  {/* Website */}
                  <a className="cs_accent_color_2" href="https://itsreezky.my.id">
                    <svg
                      width={25}
                      height={25}
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.83824 18.4467C10.0103 18.7692 10.1826 19.0598 10.3473 19.3173C8.59745 18.9238 7.07906 17.9187 6.02838 16.5383C6.72181 16.1478 7.60995 15.743 8.67766 15.4468C8.98112 16.637 9.40924 17.6423 9.83824 18.4467ZM11.1618 17.7408C10.7891 17.0421 10.4156 16.1695 10.1465 15.1356C10.7258 15.0496 11.3442 15 12.0001 15C12.6559 15 13.2743 15.0496 13.8535 15.1355C13.5844 16.1695 13.2109 17.0421 12.8382 17.7408C12.5394 18.3011 12.2417 18.7484 12 19.0757C11.7583 18.7484 11.4606 18.3011 11.1618 17.7408ZM9.75 12C9.75 12.5841 9.7893 13.1385 9.8586 13.6619C10.5269 13.5594 11.2414 13.5 12.0001 13.5C12.7587 13.5 13.4732 13.5593 14.1414 13.6619C14.2107 13.1384 14.25 12.5841 14.25 12C14.25 11.4159 14.2107 10.8616 14.1414 10.3381C13.4732 10.4406 12.7587 10.5 12.0001 10.5C11.2414 10.5 10.5269 10.4406 9.8586 10.3381C9.7893 10.8615 9.75 11.4159 9.75 12ZM8.38688 10.0288C8.29977 10.6478 8.25 11.3054 8.25 12C8.25 12.6946 8.29977 13.3522 8.38688 13.9712C7.11338 14.3131 6.05882 14.7952 5.24324 15.2591C4.76698 14.2736 4.5 13.168 4.5 12C4.5 10.832 4.76698 9.72644 5.24323 8.74088C6.05872 9.20472 7.1133 9.68686 8.38688 10.0288ZM10.1465 8.86445C10.7258 8.95042 11.3442 9 12.0001 9C12.6559 9 13.2743 8.95043 13.8535 8.86447C13.5844 7.83055 13.2109 6.95793 12.8382 6.2592C12.5394 5.69894 12.2417 5.25156 12 4.92432C11.7583 5.25156 11.4606 5.69894 11.1618 6.25918C10.7891 6.95791 10.4156 7.83053 10.1465 8.86445ZM15.6131 10.0289C15.7002 10.6479 15.75 11.3055 15.75 12C15.75 12.6946 15.7002 13.3521 15.6131 13.9711C16.8866 14.3131 17.9412 14.7952 18.7568 15.2591C19.233 14.2735 19.5 13.1679 19.5 12C19.5 10.8321 19.233 9.72647 18.7568 8.74093C17.9413 9.20477 16.8867 9.6869 15.6131 10.0289ZM17.9716 7.46178C17.2781 7.85231 16.39 8.25705 15.3224 8.55328C15.0189 7.36304 14.5908 6.35769 14.1618 5.55332C13.9897 5.23077 13.8174 4.94025 13.6527 4.6827C15.4026 5.07623 16.921 6.08136 17.9716 7.46178ZM8.67765 8.55325C7.61001 8.25701 6.7219 7.85227 6.02839 7.46173C7.07906 6.08134 8.59745 5.07623 10.3472 4.6827C10.1826 4.94025 10.0103 5.23076 9.83823 5.5533C9.40924 6.35767 8.98112 7.36301 8.67765 8.55325ZM15.3224 15.4467C15.0189 16.637 14.5908 17.6423 14.1618 18.4467C13.9897 18.7692 13.8174 19.0598 13.6527 19.3173C15.4026 18.9238 16.921 17.9186 17.9717 16.5382C17.2782 16.1477 16.3901 15.743 15.3224 15.4467ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                        fill="currentColor"
                      />

                    </svg>
                  </a>

                </div>
                <div className="cs_btns">
                  <a href="https://resource.itsreezky.my.id/dokumen/CV_MuhammadRizkiRamadhan-EN.pdf" className="cs_btn cs_style_1" download>
                    <span>Download CV - (EN)</span>
                  </a>
                  <a href="https://resource.itsreezky.my.id/dokumen/CV_MuhammadRizkiRamadhan-ID.pdf" className="cs_btn cs_style_1" download>
                    <span>Download CV - (ID)</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="cs_hero_image_box cs_filled_bg"
                data-src="assets/img/bg/hero_bg_3.svg"
              >
                <div className="cs_imagebox_img w-100">
                  <img
                    src="assets/img/reezky/reezky_formal2.png"
                    alt="heroImg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Hero Section */}
    </div>
  );
}

export default Home_Hero;
