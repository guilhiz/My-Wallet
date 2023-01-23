import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const recordSchema = yup.object().shape({
  value: yup
    .string()
    .required("Por favor, insira um valor")
    .min(2, "Insira pelo menos 2 números"),
  description: yup
    .string()
    .required("Por favor, insira uma descrição")
    .min(3, "Insira pelo menos 3 caracteres")
    .max(50, "Deve ter no máximo 50 caracteres"),
});

export const formOptions = { resolver: yupResolver(recordSchema)};
