import React from "react";
import * as S from "./styles";

function SignIn() {
  return (
    <S.Container>
      <S.Content>
          <h1>MyWallet</h1>
          <form action="">
            <input type="text" name="email" placeholder="E-mail" />
            <input type="text" name="password" placeholder="Senha" />
            <button type="submit">Entrar</button>
          </form>
          <p>Primeira vez? Cadastre-se!</p>
      </S.Content>
    </S.Container>
  );
}

export default SignIn;
