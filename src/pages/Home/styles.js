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

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  > div {
    cursor: pointer;
    :hover {
      opacity: 0.7;
    }
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 326px;
  height: 446px;
  border-radius: 5px;
  margin-bottom: 13px;
  padding: 23px 12px;
  h3 {
    margin: 0px auto;
    text-align: center;
    width: 220px;
    font-size: 20px;
    line-height: 23px;
    color: ${(props) => props.theme.secondary};
    margin-top: 50%;
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 155px;
  height: 114px;
  padding: 15px;
  cursor: pointer;
  div {
    width: 24px;
  }

  p {
    width: 30px;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: ${(props) => props.theme.textBtn};
  }
`;
