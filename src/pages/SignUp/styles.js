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
    margin-top: 70px;
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
  color: #fafafa;
  margin: -10px 0px 16px;
  span {
    margin-left: 8px;
  }
`;
