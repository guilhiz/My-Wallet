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
  margin: 0px auto;
  h1 {
    margin-top: 120px;
    margin-bottom: 24px;
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
