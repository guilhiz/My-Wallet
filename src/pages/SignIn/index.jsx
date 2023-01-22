import React from "react";
import { api } from "../../services";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Warning } from "phosphor-react";
import { formOptions } from "./schemas";
import * as S from "./styles";

function SignIn({ setUser }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  const navigate = useNavigate();

  const onSubmit = (data) => {
    api
      .post("/sign-in", data)
      .then((res) => {
        setUser(res.data);
        navigate("/home");
      })
      .catch((err) => console.log(err));
  };

  return (
    <S.Container>
      <S.Content>
        <h1>MyWallet</h1>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" {...register("email", { required: true, maxLength: 50 })} placeholder="E-mail" />
          {errors.email && (
            <S.Erro>
              <Warning size={16} color="#ff0000" /> <span>{errors.email.message}</span>
            </S.Erro>
          )}
          <input
            type="text"
            {...register("password", { required: true, minLength: 4, maxLength: 16 })}
            placeholder="Senha"
          />
          {errors.password && (
            <S.Erro>
              <Warning size={16} color="#ff0000" /> <span>{errors.password.message}</span>
            </S.Erro>
          )}
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
