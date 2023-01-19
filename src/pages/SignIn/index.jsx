import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";

function SignIn() {
  return (
    <S.Container>
      <S.Content>
        <h1>MyWallet</h1>
        <S.Form action="">
          <input type="text" name="email" placeholder="E-mail" />
          <input type="text" name="password" placeholder="Senha" />
          <button type="submit">Entrar</button>
        </S.Form>
        <Link to={"/cadastro"}>
          <p>Primeira vez? Cadastre-se!</p>
        </Link>
      </S.Content>
    </S.Container>
  );
}

export default SignIn;
