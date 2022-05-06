import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Hero.style';

const themes = {
  success: {
    background: '#49c774',
    color: '#ffffff',
  },
  danger: {
    background: '#f24667',
    color: '#ffffff',
  },
};

const Hero = ({ color, title, subtitle }) => {
  return (
    <S.Hero style={themes[color]}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </S.Hero>
  );
};

Hero.propTypes = {
  color: PropTypes.oneOf(['success', 'danger']),
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node.isRequired,
};
Hero.defaultProps = {
  color: 'success',
};

export default Hero;
