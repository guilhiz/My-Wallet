import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";

function SignUp() {
  return (
    <S.Container>
      <S.Content>
        <h1>MyWallet</h1>
        <S.Form action="">
          <input type="text" name="name" placeholder="Nome" />
          <input type="email" name="email" placeholder="E-mail" />
          <input type="password" name="password" placeholder="Senha" />
          <input type="password" name="confirm Password" placeholder="Confirme a senha" />
          <button type="submit">Cadastrar</button>
        </S.Form>
        <Link to={"/"}>
          <p>Já tem uma conta? Entre agora!</p>
        </Link>
      </S.Content>
    </S.Container>
  );
}

export default SignUp;
