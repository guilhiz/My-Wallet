import React from "react";
import { useForm } from "react-hook-form";
import { api } from "../../services";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowCircleLeft, Warning } from "phosphor-react";
import { formOptions } from "./schemas";
import * as S from "./styles";

function NewRecord({ user, setRefresh }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { type } = location.state;
  const isIncome = type === "income";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(formOptions);

  const notify = () => {
    toast.success(`${isIncome ? "Entrada" : "Saída"}: criada com sucesso!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const onSubmit = (data) => {
    const { token } = user;
    const body = { value: data.value.replace(".", "").replace(",", ""), description: data.description };
    const config = { headers: { Authorization: `Bearer ${token}` } };

    api
      .post(`/${isIncome ? "income" : "expense"}`, body, config)
      .then(() => {
        setRefresh((current) => !current);
        notify();
        reset();
      })
      .catch((err) => console.log(err));
  };

  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <h2>{`Nova ${isIncome ? "entrada" : "saída"}`}</h2>
          <div onClick={() => navigate("/home")}>
            <ArrowCircleLeft size={32} color="#ffffff" />
          </div>
        </S.Header>

        <form onSubmit={handleSubmit(onSubmit)}>
          <S.InputGroup>
            <input type="text" {...register("value")} placeholder="Valor" />
            <label>Valor</label>
          </S.InputGroup>
          {errors.value && (
            <S.Erro>
              <Warning size={16} color="#ff0000" weight="bold" /> <span>{errors.value.message}</span>
            </S.Erro>
          )}
          <S.InputGroup>
            <input type="text" {...register("description")} placeholder="Descrição" />
            <label>Descrição</label>
          </S.InputGroup>
          {errors.description && (
            <S.Erro>
              <Warning size={16} color="#ff0000" weight="bold" /> <span>{errors.description.message}</span>
            </S.Erro>
          )}
          <S.Button type="submit">
            <span>{`Salvar ${isIncome ? "entrada" : "saída"}`}</span>
          </S.Button>
        </form>
      </S.Content>
      <ToastContainer />
    </S.Container>
  );
}

export default NewRecord;
