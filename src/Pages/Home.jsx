// Main Component
import React from 'react';

//Import Home Components
import Home_Hero from '../Components/Home/Home_Hero';
import Home_About from '../Components/Home/Home_About';
import Home_Portofolio from '../Components/Home/Home_Portofolio';
import Home_Funfact from '../Components/Home/Home_Funfact';
import Home_Blog from '../Components/Home/Home_Blog';
import Home_Thanks from '../Components/Home/Home_Thanks';


function Home () {
  return (
    <div>
      {/* Main content */}
      <main>
        <Home_Hero />
          <Home_About />
            <Home_Portofolio />
              <Home_Funfact />
                <Home_Blog />
                  <Home_Thanks />                

      </main>
      {/* Main content inside end*/}

    </div>
  );
}

export default Home;
