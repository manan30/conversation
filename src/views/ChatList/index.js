import React from 'react';
import {
  ViewContainer,
  HeaderContainer,
  ChatListContainer,
  ActionsContainer,
  ViewTitle
} from './styled';

function ChatSelectionView() {
  return (
    <ViewContainer>
      <HeaderContainer>
        <ViewTitle>Messages</ViewTitle>
      </HeaderContainer>
      <ChatListContainer />
      <ActionsContainer />
    </ViewContainer>
  );
}

export default ChatSelectionView;
