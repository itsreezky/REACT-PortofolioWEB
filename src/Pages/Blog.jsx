import React from 'react';
import Blog_SectionOne from '../Components/Blog/Blog_SectionOne';
import Blog_SectionTwo from '../Components/Blog/Blog_SectionTwo';

function Blog () {
  return (
    <div>

      {/* Main content inside start*/}
      <main>

        <Blog_SectionOne />
        <Blog_SectionTwo />

      </main>
      {/* Main content inside end*/}
    </div>
  );
}

export default Blog;
