import React from 'react';
import PropTypes from 'prop-types';

import {
  ItemContainer,
  ContactDetailsContainer,
  ContactImage,
  ContactName,
  ContactText
} from './styled';

function ChatListItem({ image, name, text }) {
  return (
    <ItemContainer>
      <ContactImage image={image} />
      <ContactDetailsContainer>
        <ContactName>{name}</ContactName>
        <ContactText>{text}</ContactText>
      </ContactDetailsContainer>
    </ItemContainer>
  );
}

ChatListItem.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string
};

ChatListItem.defaultProps = {
  image: '',
  name: '',
  text: ''
};

export default ChatListItem;
