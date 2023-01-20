import React from "react";
import { api } from "../../services";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./styles";

function SignIn({setUser}) {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    api
      .post("/sign-in", data)
      .then((res) => {
        setUser(res.data)
        navigate("/home")
      })
      .catch((err) => console.log(err));
  };

  return (
    <S.Container>
      <S.Content>
        <h1>MyWallet</h1>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" {...register("email", { required: true, maxLength: 50 })} placeholder="E-mail" />
          <input
            type="text"
            {...register("password", { required: true, minLength: 4, maxLength: 16 })}
            placeholder="Senha"
          />
          <button type="submit">Entrar</button>
        </S.Form>
        <Link to={"/cadastro"}>
          <p>Primeira vez? Cadastre-se!</p>
        </Link>
      </S.Content>
    </S.Container>
  );
}

export default SignIn;
