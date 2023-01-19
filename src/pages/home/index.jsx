import React from "react";
import { SignOut } from "phosphor-react";
import * as S from "./styles";

function home() {
  return (
    <S.Container>
      <S.Content>
        <div>
          <h1>Olá, Guilherme</h1>
          <SignOut size={32} color="#ffffff" />
        </div>
        <main>
          <p>Ainda não registros de entrada ou saída</p>
        </main>
        <div>
          <button>Nova entrada</button>
          <button>Nova Saída</button>
        </div>
      </S.Content>
    </S.Container>
  );
}

export default home;
