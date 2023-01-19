import React from "react";
import { Link } from "react-router-dom";
import * as S from './styles';

function NewIncome() {
  return (
    <S.Container>
      <S.Content>
        <h2>Nova entrada</h2>
        <form action="">
          <input type="text" name="value" placeholder="Valor" />
          <input type="text" name="Description" placeholder="Descrição" />
          <Link to={"/home"}>
          <button type="submit">Salvar entrada</button>
          </Link>
        </form>
      </S.Content>
    </S.Container>
  );
}

export default NewIncome;
