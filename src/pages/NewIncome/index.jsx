import React from "react";
import { useForm } from "react-hook-form";
import { api } from "../../services";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./styles";

function NewIncome({ user }) {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { token } = user;
    const config = { headers: { Token: token } };
    console.log(data)
    api
      .post("/income", data, config)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <S.Container>
      <S.Content>
        <h2>Nova entrada</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" {...register("value", { required: true, minLength: 2 })} placeholder="Valor" />
          <input
            type="text"
            {...register("description", { required: true, minLength: 3, maxLength: 50 })}
            placeholder="Descrição"
          />
          <button type="submit">Salvar entrada</button>
        </form>
      </S.Content>
    </S.Container>
  );
}

export default NewIncome;
