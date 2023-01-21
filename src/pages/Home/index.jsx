import React, { useEffect, useState } from "react";
import { PlusCircle, SignOut, MinusCircle } from "phosphor-react";
import { Link } from "react-router-dom";
import { api } from "../../services";
import * as S from "./styles";
import Records from "../../components/Records";

function Home({ user }) {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const { token } = user;
    const config = { headers: { Authorization: `Bearer ${token}` } };
    api
      .get("/records", config)
      .then((res) => setRecords(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <h2>Olá, {user.name}</h2>
          <div>
            <SignOut size={32} color="#ffffff" />
          </div>
        </S.Header>
        <S.Main>
          {records?.length < 1 && <h3>Ainda não registros de entrada ou saída</h3>}
          {records?.length > 0 &&
            records.map((r) => (
              <Records key={r._id} value={r.value} description={r.description} date={r.date} type={r.type} />
            ))}
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
