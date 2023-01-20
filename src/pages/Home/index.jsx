import React, { useEffect, useState } from "react";
import { PlusCircle, SignOut, MinusCircle } from "phosphor-react";
import { Link } from "react-router-dom";
import { api } from "../../services";
import * as S from "./styles";

function Home({ user }) {
 const [records, setRecords] = useState(null)

  useEffect(() => {
    const { token } = user;
    const config = { headers: { Token: token } };
    api
      .get("/records", config)
      .then((res) => setRecords(res.data))
      .catch((err) => console.log(err));
  }, []);

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
          {!records && <p>Ainda não registros de entrada ou saída</p>}
          {records && <p>Em breve os registros de entrada ou saída estarão aqui</p>}
        </S.Main>
        <S.Footer>
          <Link to={"/nova-entrada"}>
            <S.Button>
              <div>
                <PlusCircle size={24} color="#ffffff" />{" "}
              </div>
              <p>Nova entrada</p>
            </S.Button>
          </Link>
          <Link to={"/nova-saida"}>
            <S.Button>
              <div>
                <MinusCircle size={24} color="#ffffff" />
              </div>
              <p>Nova Saída</p>
            </S.Button>
          </Link>
        </S.Footer>
      </S.Content>
    </S.Container>
  );
}

export default Home;
