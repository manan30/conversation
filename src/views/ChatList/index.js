import React from 'react';

import ChatListItem from '../../components/ChatListItem';
import ActionIcons from '../../components/ActionIcons';

import {
  ViewContainer,
  HeaderContainer,
  ChatListContainer,
  ActionsContainer,
  ViewTitle,
  ActionsIconsGroup
} from './styled';

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
      <ActionsContainer>
        <ActionsIconsGroup>
          <ActionIcons />
        </ActionsIconsGroup>
      </ActionsContainer>
    </ViewContainer>
  );
}

export default ChatSelectionView;
