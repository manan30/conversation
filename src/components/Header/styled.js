import styled from 'styled-components';

export const HeaderBar = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;

  background: #aa0011;
`;

export const HeaderText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  color: white;
`;
