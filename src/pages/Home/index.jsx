import React from "react";
import { PlusCircle, SignOut, MinusCircle } from "phosphor-react";
import * as S from "./styles";

function Home() {
  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <h2>Olá, Guilherme</h2>
          <div>
            <SignOut size={32} color="#ffffff" />
          </div>
        </S.Header>
        <S.Main>
          <p>Ainda não registros de entrada ou saída</p>
        </S.Main>
        <S.Footer>
          <S.Button>
            <div>
              <PlusCircle size={24} color="#ffffff" />{" "}
            </div>
            <p>Nova entrada</p>
          </S.Button>
          <S.Button>
            <div>
              <MinusCircle size={24} color="#ffffff" />
            </div>
            <p>Nova Saída</p>
          </S.Button>
        </S.Footer>
      </S.Content>
    </S.Container>
  );
}

export default Home;
