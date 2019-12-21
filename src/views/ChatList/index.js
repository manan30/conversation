import React from 'react';
import {
  ViewContainer,
  HeaderContainer,
  ChatListContainer,
  ActionsContainer,
  ViewTitle
} from './styled';
import ChatListItem from '../../components/ChatListItem';

function ChatSelectionView() {
  return (
    <ViewContainer>
      <HeaderContainer>
        <ViewTitle>Messages</ViewTitle>
      </HeaderContainer>
      <ChatListContainer>
        {new Array(10).fill().map((_, i) => {
          const idx = i;
          return (
            <ChatListItem
              key={idx}
              name='Manan Joshi'
              text='You have a new message'
            />
          );
        })}
      </ChatListContainer>
      <ActionsContainer />
    </ViewContainer>
  );
}

export default ChatSelectionView;
