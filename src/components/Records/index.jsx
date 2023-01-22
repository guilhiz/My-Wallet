import React from "react";
import * as S from "./styles";

function Records(props) {
  const { value, description, date, type } = props;
  return (
    <S.Content>
      <S.Description>
        <S.Date>{date}</S.Date>
        {description}
      </S.Description>
      <S.Value switchColor={type === "income"}>{value.replace('.', ',')}</S.Value>
    </S.Content>
  );
}

export default Records;
