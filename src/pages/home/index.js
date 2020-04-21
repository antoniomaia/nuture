import React from 'react';

import Hero from '../../components/hero';
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
