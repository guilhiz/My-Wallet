import * as yup from "yup";

const signUpSchema = yup.object().shape({
  name: yup.string().required(),
  maeil: yup.string().email().required(),
  password: yup.string().required(),
  confirmPassword: yup.string().required()
});
