import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import InputArea from '../components/InputArea';

const ChatRoom = props => {
  const { title } = props;
  return (
    <div>
      <Header title={title} />
      <InputArea />
    </div>
  );
};

ChatRoom.propTypes = {
  title: PropTypes.string
};

ChatRoom.defaultProps = {
  title: ''
};

export default ChatRoom;
