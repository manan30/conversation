import React from 'react';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import {
  ChatInputWrapper,
  TextAreaWrapper,
  SendButton,
  TextInputArea
} from './styled';

const InputArea = () => {
  return (
    <ChatInputWrapper>
      <TextAreaWrapper>
        <TextInputArea placeholder="Enter your message here" />
        <SendButton icon={faPaperPlane} />
      </TextAreaWrapper>
    </ChatInputWrapper>
  );
};

export default InputArea;
