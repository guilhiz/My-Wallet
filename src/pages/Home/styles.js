import styled from "styled-components";

export const Container = styled.div`
  width: 375px;
  height: 667px;
  padding: 25px;
  margin: 0px auto;
`;

export const ContainerLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  min-width: 20vw;
  background-color: ${(props) => props.theme.background};
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
  justify-content: space-between;
  background-color: #ffffff;
  width: 100%;
  height: 446px;
  border-radius: 5px;
  margin-bottom: 13px;
  padding: 23px 12px 12px;
  overflow: auto;
  position: relative;
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

export const Balance = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 12px;
  > p {
    font-size: 17px;
    line-height: 20px;
    color: ${(props) => props.theme.text};
    font-family: "Saira Stencil One";
  }
  > span {
    color: ${(props) => (props.switchColor ? "#03AC00" : "#C70000")};
    font-weight: 700;
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
  background: linear-gradient(to right, #8e2de2, #a328d6);
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
