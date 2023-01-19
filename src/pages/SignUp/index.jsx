import React from "react";
import { api } from "../../services";

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./styles";

function SignUp() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()

  const onSubmit = (data) => {
    api
      .post("/sign-up", data)
      .then((res) => navigate("/"))
      .catch((err) => console.log(err.response.data));
  };

  return (
    <S.Container>
      <S.Content>
        <h1>MyWallet</h1>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register("name", { required: true, minLength: 3, maxLength: 20 })}
            placeholder="Nome"
          />
          <input type="email" {...register("email", { required: true, maxLength: 50 })} placeholder="E-mail" />
          <input
            type="password"
            {...register("password", { required: true, minLength: 4, maxLength: 16 })}
            placeholder="Senha"
          />
          <input
            type="password"
            {...register("confirmPassword", { required: true, minLength: 4, maxLength: 16 })}
            placeholder="Confirme a senha"
          />
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
