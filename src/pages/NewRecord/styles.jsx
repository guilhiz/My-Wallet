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

export const Button = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
  margin: 0;
  position: relative;
  display: inline-block;
  overflow: hidden;
  > span {
    position: relative;
    z-index: 10;
    transition: color 0.4s;
  }

  :hover span {
    color: #fff;
  }

  ::before,
  ::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  ::before {
    content: "";
    background: linear-gradient(to right, #8e2de2, #a328d6);
    width: 120%;
    left: -10%;
    transform: skew(30deg);
    transition: transform 0.8s cubic-bezier(0.3, 1, 0.8, 1);
  }

  :hover::before {
    transform: translate3d(100%, 0, 0);
  }
`;
