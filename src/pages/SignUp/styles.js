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
  align-items: center;
  width: 100%;
  h1 {
    margin-top: 30px;
    margin-bottom: 24px;
    color: ${(props) => props.theme.title};
  }

  p {
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #ffffff;
    margin-top: 36px;
    cursor: pointer;
    :hover {
      opacity: 0.7;
    }
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Erro = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  text-shadow: 1px 1px 1px #000;
  color: #ff0000;
  margin: -15px 0px 20px;
  span {
    margin-left: 8px;
  }
`;

export const Button = styled.button`
  width: 326px;
  height: 46px;
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
    transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
  }

  :hover::before {
    transform: translate3d(100%, 0, 0);
  }
`;

export const InputGroup = styled.div`
  position: relative;
  margin-bottom: 10px;
  > input {
    border: solid 1.5px #9e9e9e;
    border-radius: 5px;
    background: none;
    padding: 1rem;
    color: #f5f5f5;
    transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  > input::placeholder {
    color: transparent;
  }

  > input:placeholder-shown ~ label {
    top: 20px;
    background: none;
    border-right: none;
    border-left: none;
  }

  > label {
    background-color: #8c11be;
    border-left: 1px solid silver;
    border-right: 1px solid silver;
    color: #c7c7c7;
    display: block;
    font-size: 1em;
    margin-left: 10px;
    padding: 0 10px;
    pointer-events: none;
    position: absolute;
    top: -7px;
    transition: 0.2s;
  }

  > input:focus {
    border: 1px solid #fff !important;
    outline: none;
  }

  > input:focus ~ label {
    background-color: #8c11be;
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;
    color: #fff;
    font-size: 1em;
    margin-left: 10px;
    padding: 0 10px;
    position: absolute;
    top: -7px;
    transition: 0.2s;
  }
`;
