import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const signInSchema = yup.object().shape({
  email: yup
    .string()
    .required("Por favor, insira um email")
    .email("Insira um email válido")
    .max(50, "Deve ter no máximo 50 caracteres"),
  password: yup
    .string()
    .required("Por favor, insira uma senha")
    .min(4, "Insira pelo menos 4 caracteres")
    .max(16, "Deve ter no máximo 16 caracteres"),
});

export const formOptions = { resolver: yupResolver(signInSchema) };
