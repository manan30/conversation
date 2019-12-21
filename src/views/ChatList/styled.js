import styled from 'styled-components';

const ViewContainer = styled.div`
  height: 100vh;
  width: 100vw;

  background-color: #f2f6f9;
`;

const HeaderContainer = styled.section`
  height: calc(10% - 32px);
  width: calc(100% - 32px);

  padding: 16px;
`;

const ChatListContainer = styled.div`
  height: calc(90%);
  width: calc(100% - 32px);
  padding: 0 16px;
`;

const ActionsContainer = styled.section`
  height: 10%;
  width: 100%;

  background-color: blue;
`;

const ViewTitle = styled.span`
  color: #242e4c;

  font-size: 36px;
  font-style: normal;
  font-weight: bold;

  line-height: 42px;
  text-align: center;
`;

export {
  ViewContainer,
  HeaderContainer,
  ChatListContainer,
  ActionsContainer,
  ViewTitle
};
