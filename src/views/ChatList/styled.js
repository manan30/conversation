import styled from 'styled-components';

const ViewContainer = styled.div`
  height: 100vh;
  width: 100vw;

  background-color: #ffffff;
  overflow: hidden;
`;

const HeaderContainer = styled.section`
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
  height: 80%;
  width: calc(100% - 32px);
  padding: 0 16px;

  overflow-y: scroll;
`;

const ActionsContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 0;
  width: calc(100% - 20px);
  padding: 10px;

  background-color: #f8fbfd;
`;

const ActionsIconsGroup = styled.div`
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
`;

export {
  ViewContainer,
  HeaderContainer,
  ViewTitle,
  // SearchIcon,
  ChatListContainer,
  ActionsContainer,
  ActionsIconsGroup
};
