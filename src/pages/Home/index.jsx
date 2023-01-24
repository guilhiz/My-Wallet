import React, { useEffect, useState } from "react";
import { PlusCircle, SignOut, MinusCircle } from "phosphor-react";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { api } from "../../services";
import * as S from "./styles";
import { useFormatter } from "../../hooks";
import Records from "../../components/Records";

function Home({ user, refresh, setRefresh }) {
  const [records, setRecords] = useState(null);
  const navigate = useNavigate();
  const initialValue = 0;

  useEffect(() => {
    const { token } = user;
    const config = { headers: { Authorization: `Bearer ${token}` } };
    api
      .get("/records", config)
      .then((res) => setRecords(res.data))
      .catch((err) => console.log(err));
  }, [refresh]);

  if (records === null) {
    return (
      <S.ContainerLoading>
        <ClipLoader color="#ffffff" size={150} />
      </S.ContainerLoading>
    );
  }

  const handleClick = (type) => {
    navigate("/novo-registro", {
      state: { type },
    });
  };

  const total = records.reduce((acc, cur) => {
    return cur.type === "income" ? acc + parseFloat(cur.value) : acc - parseFloat(cur.value);
  }, initialValue);

  const signOut = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <h2>Olá, {user.name}</h2>
          <div onClick={signOut}>
            <SignOut size={32} color="#ffffff" />
          </div>
        </S.Header>
        <S.Main>
          <div>
            {records?.length < 1 && <h3>Ainda não registros de entrada ou saída</h3>}
            {records?.length > 0 &&
              records.map((r) => (
                <Records
                  key={r._id}
                  id={r._id}
                  value={r.value}
                  description={r.description}
                  date={r.date}
                  type={r.type}
                  user={user}
                  setRefresh={setRefresh}
                />
              ))}
          </div>
          {records?.length > 0 && (
            <S.Balance switchColor={total >= 0}>
              <p>Saldo</p> <span>{useFormatter.format(total)}</span>
            </S.Balance>
          )}
        </S.Main>
        <S.Footer>
          <S.Button onClick={() => handleClick("income")}>
            <div>
              <PlusCircle size={24} color="#ffffff" />{" "}
            </div>
            <p>Nova entrada</p>
          </S.Button>
          <S.Button onClick={() => handleClick("expense")}>
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
