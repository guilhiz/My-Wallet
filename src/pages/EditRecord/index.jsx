import React from "react";
import { useForm } from "react-hook-form";
import { api } from "../../services";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { ArrowCircleLeft, Warning } from "phosphor-react";
import { formOptions } from "./schemas";
import * as S from "./styles";

function EditRecord({ user, setRefresh }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const { description, value, type } = location.state;
  const isIncome = type === "income";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      value: value,
      description: description,
    },
    ...formOptions,
  });

  const onSubmit = (data) => {
    const { token } = user;
    const config = { headers: { Authorization: `Bearer ${token}` } };

    api
      .put(`/records/${id}`, data, config)
      .then(() => {
        setRefresh((current) => !current);
        navigate("/home");
      })
      .catch((err) => console.log(`ocorreu um erro ${err}`));
  };

  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <h2>{`Editar ${isIncome ? "entrada" : "saída"} `}</h2>
          <div onClick={() => navigate("/home")}>
            <ArrowCircleLeft size={32} color="#ffffff" />
          </div>
        </S.Header>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" {...register("value")} placeholder="Valor" />
          {errors.value && (
            <S.Erro>
              <Warning size={16} color="#ff0000" weight="bold" /> <span>{errors.value.message}</span>
            </S.Erro>
          )}
          <input type="text" {...register("description")} placeholder="Descrição" />
          {errors.description && (
            <S.Erro>
              <Warning size={16} color="#ff0000" weight="bold" /> <span>{errors.description.message}</span>
            </S.Erro>
          )}
          <button type="submit">{`Atualizar ${isIncome ? "entrada" : "saída"}`}</button>
        </form>
      </S.Content>
    </S.Container>
  );
}

export default EditRecord;
