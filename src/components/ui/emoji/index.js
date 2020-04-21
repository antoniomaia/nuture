import React from 'react';
import PropTypes from 'prop-types';

const Emoji = ({ symbol, label, className }) => (
  <span
    className={className}
    role={'img'}
    aria-label={label ? label : ''}
    aria-hidden={label ? 'false' : 'true'}
  >
    {symbol}
  </span>
);

Emoji.propTypes = {
  symbol: PropTypes.string.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
};

Emoji.defaultProps = {
  label: null,
  className: '',
};

export default Emoji;
