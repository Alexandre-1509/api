import * as Yup from "yup";

export const registerSchema = Yup.object({
  nome: Yup.string().required("Preencha todos os campos"),
  email: Yup.string()
    .email("Digite um e-mail válido")
    .required("Preencha todos os campos"),
  password: Yup.string()
    .min(6, "A senha deve ter no mínimo 6 caracteres")
    .required("Preencha todos os campos"),
});

export const loginSchema = Yup.object({
  email: Yup.string()
    .email("Digite um e-mail válido")
    .required("Preencha todos os campos"),
  password: Yup.string()
    .min(6, "A senha deve ter no mínimo 6 caracteres")
    .required("Preencha todos os campos"),
});

export const updateUserSchema = Yup.object({
  nome: Yup.string(),
  email: Yup.string().email("Digite um e-mail válido"),
  password: Yup.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
});
