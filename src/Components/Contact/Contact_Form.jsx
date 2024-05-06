import React from 'react';

function Contact_Form () {
  return (
    <div>
      {/*Start Form Section*/}
      <section className="position-relative">
        <div className="cs_service_shape_1 position-absolute">
          <img src="assets/img/service_shape_1.svg" alt />
        </div>
        <div className="cs_height_115 cs_height_lg_45" />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h4 className="cs_form_title cs_font_36 cs_semi_bold m-0">
                Lets Talk
              </h4>
              <p className="cs_form_text">
                Got a project in mind? Fill in the form or send us.
              </p>
              <div className="cs_height_5 cs_height_lg_5" />
              <form action="mailto:hello@itsreezky.my.id">
                <input
                  className="form-control"
                  type="text"
                  name="f_name"
                  id="f_name"
                  placeholder="First name"
                  required
                />
                <div className="cs_height_25 cs_height_lg_25" />
                <input
                  className="form-control"
                  type="text"
                  name="l_name"
                  id="l_name"
                  placeholder="Last name"
                  required
                />
                <div className="cs_height_25 cs_height_lg_25" />
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
                <div className="cs_height_25 cs_height_lg_25" />
                <textarea
                  className="form-control"
                  name="message"
                  placeholder="Your message"
                  cols={30}
                  rows={5}
                  required
                  defaultValue={''}
                />
                <div className="cs_height_25 cs_height_lg_25" />
                <button
                  type="submit"
                  className="cs_btn cs_style_1 cs_primary_font"
                >
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="cs_height_150 cs_height_lg_80" />
      </section>
      {/*End Form Section*/}
    </div>
  );
}

export default Contact_Form;
