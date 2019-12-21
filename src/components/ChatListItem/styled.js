import styled from 'styled-components';

const ItemContainer = styled.div`
  width: calc(100% - 32px);
  padding: 25px 16px;
  display: inline-flex;

  background-color: #ffffff;
  border-radius: 5px;

  :hover {
    background-color: #f2f6f9;
  }
`;

const ContactImage = styled.div`
  height: 70px;
  width: 70px;

  border-radius: 50%;
  background-color: bisque;
  background-image: url(${props => props.image && props.image});
`;

const ContactDetailsContainer = styled.div`
  width: calc(100% - 86px);
  padding-left: 16px;
  margin-top: 8px;
`;

const ContactName = styled.div`
  color: #242e4c;

  font-weight: 600;
  font-size: 22px;
  line-height: 27px;
`;

const ContactText = styled.div`
  margin-top: 7px;

  color: #6a738c;

  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;

export {
  ItemContainer,
  ContactDetailsContainer,
  ContactImage,
  ContactName,
  ContactText
};
