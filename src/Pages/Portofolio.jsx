import React from 'react';
import Portofolio_Hero from '../Components/Portofolio/Portofolio_Hero';
import Portofolio_Project from '../Components/Portofolio/Portofolio_Project';

function Portofolio () {
  return (
    <div>
      {/* Main content inside start*/}
      <main>
        <Portofolio_Hero />
        <Portofolio_Project />
      </main>
      {/* Main content inside end*/}
    </div>
  );
}

export default Portofolio;
