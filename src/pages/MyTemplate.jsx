import React from 'react';
import Blog1 from '../components/Blog/Blog1';
import Blog2 from '../components/Blog/Blog2';
import Blog3 from '../components/Blog/Blog3';
import Blog4 from '../components/Blog/Blog4';
import Blog5 from '../components/Blog/Blog5';

const MyTemplate = () => {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <Blog1/>
      <Blog3/>
      <Blog2/>
      <Blog4/>
      <Blog5/>
    </div>
  );
}

export default MyTemplate;