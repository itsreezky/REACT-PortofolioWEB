import React from 'react'

function Blog_SectionOne() {
  return (
    <div>
            {/* Start Blog Section */}
  <div className="cs_height_90 cs_height_lg_90" />
  <div className="cs_height_120 cs_height_lg_80" />
  <section>
    <div className="container">
      <div className="cs_blog cs_style_4">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <a href="/blog" className="cs_image_box cs_style_4 cs_radius_10 overflow-hidden">
              <img className="w-100" src="assets/img/blog/blog_d1.jpg" alt="blog_details_img" />
            </a>
            <div className="cs_height_lg_40" />
          </div>
          <div className="col-lg-6">
            <div className="cs_pl_50">
              <span className="cs_blog_meta cs_radius_10 cs_font_16 cs_accent_color">Featured</span>
              <h3 className="cs_blog_title cs_font_36 cs_semi_bold"><a className="cs_accent_color_2_hover" href="/blog">How to design a user-centric mobile application?</a></h3>
              <p className="cs_blog_text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <span className="cs_font_16">26 July 2024</span>
                  <a href="/blog" className="cs_blog_author_name cs_accent_color_2 cs_accent_color_2_hover cs_text_btn cs_type_2 cs_font_16">Reezky</a>
                </div>
                <a href="/blog" className="cs_circle_btn cs_style_1 cs_accent_color cs_center rounded-circle">
                  <svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 10L10 1" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1 1H10V10" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 10L10 1" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1 1H10V10" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    {/* End Blog Section */}
    </div>
  )
}

export default Blog_SectionOne