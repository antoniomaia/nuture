import React from 'react';
import './styles.css';

import Hero from '../../components/hero';
import Explanation from '../../components/explanation';
import Understand from '../../components/understand';
import Usp from '../../components/usp';
import TogetherBanner from '../../components/banners/together';
import Subscribe from '../../components/banners/subscribe';

const Home = () => {
  return (
    <>
      <Hero.Primary />
      <TogetherBanner />
      <Usp />
      <Subscribe />
    </>
  );
};

export default Home;
