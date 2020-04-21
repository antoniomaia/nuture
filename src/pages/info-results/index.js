import React from 'react';

import Hero from '../../components/hero';
import Emoji from '../../components/ui/emoji';

import secondary_page_styles from '../styles.module.scss';
import styles from './styles.module.scss';

const InfoResults = () => {
  return (
    <section className={secondary_page_styles.simple_page_container}>
      <Hero.Secondary headline={'More info about the results'} />
      <div className={secondary_page_styles.body}>
        <article className={styles.articles}>
          <div className={styles.block}>
            <Emoji symbol="📱" label="phone" className={styles.icon} />
            <p>
              iPhone X produced: Thanks to Apple’s own environmental data, which
              can be found for each of Apple’s products on their environment
              page (scroll all the way to the bottom). The iPhone X, has an
              impact of 79 kg of CO2-equivalent on the environment. Source:{' '}
              <a
                href="https://www.getorchard.com/blog/environmental-impact-of-the-iphone/"
                target="blank"
              >
                getorchard
              </a>
            </p>
          </div>
          <div className={styles.block}>
            <Emoji symbol="🌲" label="tree" className={styles.icon} />
            <p>
              Trees cut per year: According to the U.S. Energy Information
              Administration, one silver maple, will sequester about 400 pounds
              of carbon dioxide in its lifetime. Source:{' '}
              <a
                href="https://www.sierraclub.org/sierra/2016-2-march-april/ask-mr-green/how-much-carbon-do-trees-really-store"
                target="blank"
              >
                sierraclub
              </a>
            </p>
          </div>
          <div className={styles.block}>
            <Emoji symbol="🖥️️" label="desktop" className={styles.icon} />
            <p>
              Hours watching Netflix: One study suggests that 420g of CO2 is
              emitted per every hour spent watching films on online streaming
              platforms. Source:{' '}
              <a
                href="https://www.vogue.com.au/culture/features/6-surprising-activities-that-increase-your-carbon-footprintand-how-to-reduce-your-impact/news-story/1022bd7e1f33a9035a0b5b3907ae6e1b"
                target="blank"
              >
                vogue
              </a>
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default InfoResults;
