import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const signUpSchema = yup.object().shape({
  name: yup
    .string()
    .required("Por favor, insira um nome")
    .min(3, "Insira pelo menos 3 caracteres")
    .max(20, "Deve ter no máximo 20 caracteres"),
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
  confirmPassword: yup
    .string()
    .required("Por favor, confirme sua senha")
    .oneOf([yup.ref("password"), null], "as senhas não são iguais"),
});

export const formOptions = { resolver: yupResolver(signUpSchema) };
