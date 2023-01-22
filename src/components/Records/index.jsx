import React from "react";
import { api } from "../../services";
import { Trash } from "phosphor-react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import * as S from "./styles";

function Records(props) {
  const { value, description, date, type, id, user, setRefresh } = props;

  const handleClick = () => {
    const { token } = user;
    const config = { headers: { Authorization: `Bearer ${token}` } };

    confirmAlert({
      title: "Confirmação",
      message: "Você realmente quer excluir o Registro?",
      buttons: [
        {
          label: "Sim",
          onClick: () => {
            api
              .delete(`/records/${id}`, config)
              .then(() => setRefresh((current) => !current))
              .catch((err) => console.log(err));
          },
        },
        {
          label: "Não",
        },
      ],
    });
  };

  const onClick = () => {};

  return (
    <S.Content>
      <S.Description>
        <S.Date>{date}</S.Date>
        {description}
      </S.Description>
      <S.Value switchColor={type === "income"}>
        <p> {value.replace(".", ",")}</p>
        <div onClick={handleClick}>
          <Trash size={18} color="#010101" />
        </div>
      </S.Value>
    </S.Content>
  );
}

export default Records;