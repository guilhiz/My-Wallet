import React from "react";
import { useForm } from "react-hook-form";
import { api } from "../../services";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { ArrowCircleLeft } from "phosphor-react";
import * as S from "./styles";

function EditExpense({ user, setRefresh }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const { description, value } = location.state;
  const { register, handleSubmit } = useForm({
    defaultValues: {
      value: value,
      description: description,
    },
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
          <h2>Editar saída</h2>
          <div onClick={() => navigate("/home")}>
            <ArrowCircleLeft size={32} color="#ffffff" />
          </div>
        </S.Header>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" {...register("value", { required: true, minLength: 2 })} placeholder="Valor" />
          <input
            type="text"
            {...register("description", { required: true, minLength: 3, maxLength: 50 })}
            placeholder="Descrição"
          />
          <button type="submit">Atualizar saída</button>
        </form>
      </S.Content>
    </S.Container>
  );
}

export default EditExpense;
