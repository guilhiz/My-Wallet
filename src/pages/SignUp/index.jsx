import React from "react";
import { api } from "../../services";
import { formOptions } from "./schemas";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Warning } from "phosphor-react";
import * as S from "./styles";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    api
      .post("/sign-up", data)
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <S.Container>
      <S.Content>
        <h1>MyWallet</h1>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.InputGroup>
            <input type="text" {...register("name")} placeholder="Nome" autoComplete="off" />
            <label>Nome</label>
          </S.InputGroup>
          {errors.name && (
            <S.Erro>
              <Warning size={16} color="#ff0000" weight="bold" /> <span>{errors.name.message}</span>
            </S.Erro>
          )}
          <S.InputGroup>
            <input type="email" {...register("email")} placeholder="E-mail" autoComplete="off" />
            <label>E-mail</label>
          </S.InputGroup>
          {errors.email && (
            <S.Erro>
              <Warning size={16} color="#ff0000" weight="bold" /> <span>{errors.email.message}</span>
            </S.Erro>
          )}
          <S.InputGroup>
            <input type="password" {...register("password")} placeholder="Senha" />
            <label>Senha</label>
          </S.InputGroup>
          {errors.password && (
            <S.Erro>
              <Warning size={16} color="#ff0000" weight="bold" /> <span>{errors.password.message}</span>
            </S.Erro>
          )}
          <S.InputGroup>
            <input type="password" {...register("confirmPassword")} placeholder="Confirme a senha" />
            <label>Confirme a senha</label>
          </S.InputGroup>
          {errors.confirmPassword && (
            <S.Erro>
              <Warning size={16} color="#ff0000" weight="bold" /> <span>{errors.confirmPassword.message}</span>
            </S.Erro>
          )}
          <S.Button type="submit">
            <span>Cadastrar</span>{" "}
          </S.Button>
        </S.Form>
        <Link to={"/"}>
          <p>Já tem uma conta? Entre agora!</p>
        </Link>
      </S.Content>
    </S.Container>
  );
}

export default SignUp;
