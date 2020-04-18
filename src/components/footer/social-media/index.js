import React from 'react';

import facebook from './logos/facebook.svg';
import instagram from './logos/instagram.svg';
import github from './logos/github.svg';
import linkedin from './logos/linkedin.svg';
import twitter from './logos/twitter.svg';

import styles from './styles.module.scss';

const logos = [
  { icon: facebook, description: 'Facebook logo' },
  { icon: instagram, description: 'Instagram logo' },
  { icon: github, description: 'Github logo' },
  { icon: twitter, description: 'Twitter logo' },
  { icon: linkedin, description: 'Linkedin logo' },
];

const SocialMedia = () => {
  return (
    <ul className={styles.root}>
      {logos.map(({ icon, description }) => (
        <li key={icon}>
          <img src={icon} alt={description} />
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
