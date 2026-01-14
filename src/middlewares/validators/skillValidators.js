import * as Yup from "yup";

export const registerSkillSchema = Yup.object({
  nome: Yup.string().required(),
  categoria: Yup.string().required(),
  nivel: Yup.string().required(),
  type: Yup.string().required(),
});

export const updateSkillSchema = Yup.object({
  nome: Yup.string(),
  categoria: Yup.string(),
  nivel: Yup.string(),
  type: Yup.string(),
});
