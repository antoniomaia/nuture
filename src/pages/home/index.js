import React from 'react';

import Hero from '../../components/hero';
import Subscribe from '../../components/banners/subscribe';
import Benefits from '../../components/benefits';
import HowItWorks from '../../components/how-it-works';

const Home = () => {
  return (
    <>
      <Hero.Primary />
      <Benefits />
      <HowItWorks />
      <Subscribe />
    </>
  );
};

export default Home;
