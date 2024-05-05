import React from 'react';
import About_Hero from '../Components/About/About_Hero';
import About_Desc from '../Components/About/About_Desc';
import About_Education from '../Components/About/About_Education';
import About_Thanks from '../Components/About/About_Thanks';

function About() {
  return (
    <div>
        {/* Main content inside start*/}
  <main>
    <About_Hero />
      <About_Desc />
        <About_Education />
          <About_Thanks />


  </main>
  {/* Main content inside end*/}
    </div>
  )
}

export default About