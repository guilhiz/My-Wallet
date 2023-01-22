import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => props.theme.text};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 82%;
  cursor: pointer;
  :hover {
    white-space: normal;
    text-overflow: inherit;
    overflow: visible;
    word-break: break-word;
  }
`;

export const Date = styled.span`
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => props.theme.secondary};
  margin-right: 15px;
`;

export const Value = styled.div`
  display: flex;
  justify-content: space-between;
  > p {
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    color: ${(props) => (props.switchColor ? "#03AC00" : "#C70000")};
  }
  > div {
    cursor: pointer;
    margin-left: 5px;
   :hover {
      opacity: 0.6;
    }
  }
`;
