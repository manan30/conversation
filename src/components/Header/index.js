import React from 'react';
import PropTypes from 'prop-types';
import { HeaderBar, HeaderText } from './styled';

const Header = props => {
  const { title } = props;
  return (
    <HeaderBar>
      <HeaderText>{title}</HeaderText>
    </HeaderBar>
  );
};

Header.propTypes = {
  title: PropTypes.string
};

Header.defaultProps = {
  title: ''
};

export default Header;
