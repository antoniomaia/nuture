import React from 'react';

import Hero from '../../components/hero';
import Usp from '../../components/usp';
import Subscribe from '../../components/banners/subscribe';
import Benefits from '../../components/benefits';

const Home = () => {
  return (
    <>
      <Hero.Primary />
      <Benefits />
      <Usp />
      <Subscribe />
    </>
  );
};

export default Home;
