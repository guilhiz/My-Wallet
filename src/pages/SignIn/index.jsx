import React, { useState, useEffect } from "react";
import { PulseLoader } from "react-spinners";
import { api } from "../../services";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Warning } from "phosphor-react";
import { formOptions } from "./schemas";
import * as S from "./styles";

function SignIn({ setUser }) {
  const navigate = useNavigate();
  const user = JSON?.parse(localStorage.getItem("user"));
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  useEffect(() => {
    if (user?.token) {
      navigate("/home");
    }
  }, []);

  const onSubmit = (data) => {
    setLoading(true);
    api
      .post("/sign-in", data)
      .then((res) => {
        setUser(res.data);
        setLoading(false);
        navigate("/home");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <S.Container>
      <S.Content>
        <h1>MyWallet</h1>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.InputGroup>
            <input type="email" {...register("email")} placeholder="E-mail" />
            <label>E-mail</label>
          </S.InputGroup>
          {errors.email && (
            <S.Erro>
              <Warning size={16} color="#ff0000" weight="bold" /> <span>{errors.email.message}</span>
            </S.Erro>
          )}
          <S.InputGroup>
            <input type="text" {...register("password")} placeholder="Senha" />
            <label>Senha</label>
          </S.InputGroup>
          {errors.password && (
            <S.Erro>
              <Warning size={16} color="#ff0000" weight="bold" /> <span>{errors.password.message}</span>
            </S.Erro>
          )}
          <S.Button type="submit">
            <span>
              <PulseLoader color="#FFFFFF" loading={loading} margin={8} size={20} />
              {!loading && "Entrar"}
            </span>
          </S.Button>
        </S.Form>
        <Link to={"/cadastro"}>
          <p>Primeira vez? Cadastre-se!</p>
        </Link>
      </S.Content>
    </S.Container>
  );
}

export default SignIn;
