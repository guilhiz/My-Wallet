import styled from "styled-components";

export const Container = styled.div`
  width: 375px;
  height: 667px;
  padding: 25px;
  margin: 0px auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px 40px;
  div {
    cursor: pointer;
    :hover {
      opacity: 0.6;
    }
  }
`;

export const Erro = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  text-shadow: 1px 1px 1px #000;
  color: #ff0000;
  margin: -10px 0px 16px;
  span {
    margin-left: 8px;
  }
`;
