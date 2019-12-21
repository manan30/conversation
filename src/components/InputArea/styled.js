import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ChatInputWrapper = styled.div`
  position: fixed;
  bottom: 0;
  height: 72px;
  width: calc(100% - 20px);
  padding: 0 10px;

  background: #eee;
`;

export const TextAreaWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: calc(100% - 20px);
  height: 50px;

  background: #fff;
`;

export const TextInputArea = styled.input`
  width: calc(96% - 36px);
  height: 50px;
  padding: 0 10px;
  border: none;

  background: transparent;
`;

export const SendButton = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  float: right;
  right: 0;
  margin: 0 10px;
  height: 50px;
  width: 50px;
  padding: 0 13px;

  font-size: 24px;
  color: #00aaff;
`;
