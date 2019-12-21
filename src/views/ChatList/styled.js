import styled from 'styled-components';

const ViewContainer = styled.div`
  height: 100vh;
  width: 100vw;

  background-color: #ffffff;
  overflow: hidden;
`;

const HeaderContainer = styled.section`
  height: calc(10% - 32px);
  width: calc(100% - 32px);

  padding: 16px;
`;

const ViewTitle = styled.span`
  color: #242e4c;

  font-size: 24px;
  font-style: normal;
  font-weight: bold;

  line-height: 42px;
  text-align: center;
`;

// const SearchIcon = styled.span`
//   display: inline-block;
//   height: 24px;
//   width: 24px;
//   float: right;

//   background-color: red;
//   background-image: url();
//   text-align: center;
// `;

const ChatListContainer = styled.div`
  height: calc(90%);
  width: calc(100% - 32px);
  padding: 0 16px;

  overflow-y: scroll;
`;

const ActionsContainer = styled.section`
  height: 10%;
  width: 100%;

  background-color: blue;
`;

export {
  ViewContainer,
  HeaderContainer,
  ViewTitle,
  // SearchIcon,
  ChatListContainer,
  ActionsContainer
};
