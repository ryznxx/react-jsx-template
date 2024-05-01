import React from 'react';

import './Homepage.scss';
import Navbar from './../../components/Navbar/Navbar';

const Homepage = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <p>Main</p>
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </>
  );
};

export default Homepage;
