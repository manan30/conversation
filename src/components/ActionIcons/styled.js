import styled from 'styled-components';

const Icon = styled.div`
  display: flex;
  height: 48px;
  width: 40px;
  margin-right: 50px;
  padding: 10px;

  align-items: center;
  justify-content: center;
  color: ${props => (props.active && '#ffffff') || '#82899f'};

  border-radius: 20px;
  background-color: ${props => (props.active && '#928af9') || 'transparent'};

  box-shadow: 2px 4px 10px
    ${props => (props.active && '#928af9') || 'transparent'};

  transition: background-color 0.5s ease, color 0.5s ease, box-shadow 0.5s ease;

  svg {
    height: 70%;
    width: 50%;

    transition: height 0.5s ease, width 0.5s ease;
  }

  :hover {
    background-color: #928af9;
    border-radius: 20px;
    color: #ffffff;
    cursor: pointer;
    box-shadow: 2px 4px 10px #928af9;

    svg {
      height: 90%;
      width: 70%;
    }
  }

  :last-child {
    margin-right: 0px !important;
  }
`;

export default Icon;
