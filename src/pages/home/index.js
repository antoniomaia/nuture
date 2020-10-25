import React from 'react';

import Hero from '../../components/hero';
import Benefits from '../../components/benefits';
import HowItWorks from '../../components/how-it-works';
import System from '../../components/banners/system';
import GetInTouch from '../../components/get-in-touch';

const Home = () => {
  return (
    <>
      <Hero.Primary />
      <Benefits />
      <HowItWorks />
      <System />
      <GetInTouch />
    </>
  );
};

export default Home;
