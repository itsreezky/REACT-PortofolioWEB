import React from 'react';
import Contact_Hero from '../Components/Contact/Contact_Hero';
import Contact_Iconbox from '../Components/Contact/Contact_Iconbox';
import Contact_Form from '../Components/Contact/Contact_Form';

function Contact () {
  return (
    <div>
      {/* Main content inside start */}
      <main>

        <Contact_Hero />
        <Contact_Iconbox />
        <Contact_Form />

      </main>
      {/* Main content inside end*/}

    </div>
  );
}

export default Contact;
