import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../../components/hero';
import secondary_page_styles from '../styles.module.scss';
import styles from './styles.module.scss';

const Articles = () => {
  return (
    <section className={secondary_page_styles.simple_page_container}>
      <Hero.Secondary headline={'Climate Change'} />
      <div className={secondary_page_styles.body}>
        <article className={styles.articles}>
          <h2>Carbon footprint</h2>
          <p>
            A carbon footprint is the amount of greenhouse gases (primarily
            carbon dioxide) released into the atmosphere by a particular human
            action. That could be from anything - an activity, an item, a
            lifestyle, a company, a country or even the whole world.
          </p>
          <p>
            Our online calculator can give you a rough estimate of your carbon
            footprint based on your habits. Start by answering some questions.
          </p>
          <div className={styles.button_container}>
            <Link className={styles.button} to={'/calculator'}>
              Start the Questionary
            </Link>
          </div>
          <br />
          <br />
          <h2>Sustainable development</h2>
          <p>
            Sustainable development, what is it? Sustainable development refers
            to a way of development capable of responding to the needs of the
            present, without compromising the growth capacity of future
            generations. Therefore, the objective is to improve the living
            conditions of individuals, while preserving the environment in the
            short, medium and, above all, long term. Sustainable development has
            a threefold objective: economically effective, socially equitable
            and ecologically sustainable development.
          </p>
          <p>
            In May 2001, a European Union strategy for sustainable development
            was adopted. The strategy was revised in 2005, with the aim of
            giving it a new dynamism. The World Partnership for Sustainable
            Development, adopted by the Commission in 2002, gave it an external
            and widespread dimension.
          </p>
          <p>
            The integration of environmental issues in the definition and
            application of other policies is an essential element in achieving
            the objective of sustainable development. This principle was
            reiterated in the Maastricht Treaty and the Cardiff Summit in 1998
            established the basis for coordinated action at Community level on
            the integration of environmental issues.
          </p>
          <p>
            To promote sustainable development, public authorities must adopt
            appropriate measures that seek to limit the harmful effects of
            transport and health risks, improve the management of natural
            resources and in particular their consumption, and combat social
            exclusion and poverty. They must also combat climate change and
            limit / mitigate its consequences.
          </p>
          Source :{' '}
          <a href="https://europa.eu/" target="blank">
            europa.eu
          </a>
        </article>
      </div>
    </section>
  );
};

export default Articles;
