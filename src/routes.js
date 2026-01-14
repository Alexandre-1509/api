import { Router } from "express";
import UserController from "./app/controllers/UserController.js";
import AuthController from "./app/controllers/AuthController.js";
import SkillController from "./app/controllers/SkillController.js";
import usersValidate from "./middlewares/usersValidate.js";
import skillsValidate from "./middlewares/skillsValidate.js";
import auth from "./middlewares/auth.js";

import {
  loginSchema,
  registerSchema,
  updateUserSchema,
} from "./middlewares/validators/userValidator.js";

import {
  registerSkillSchema,
  updateSkillSchema,
} from "./middlewares/validators/skillValidators.js";

const routes = new Router();

/* --> Rotas de usuários <-- */
routes.post("/users", usersValidate(registerSchema), UserController.store); //  Registra um novo usuário
routes.post("/login", usersValidate(loginSchema), AuthController.store); //  Loga um usuário

routes.use(auth);
routes.get("/users", UserController.index);
routes.put("/users", usersValidate(updateUserSchema), UserController.update);
routes.delete("/users", UserController.delete);
routes.post("/users/skills", UserController.addNewSkill);

/* --> Rotas das Skills <-- */
routes.post(
  "/skills",
  skillsValidate(registerSkillSchema),
  SkillController.store
);
routes.get("/skills", SkillController.index);
routes.put(
  "/skills/:id",
  skillsValidate(updateSkillSchema),
  SkillController.update
);
routes.delete("/skills/:id", SkillController.delete);

export default routes;
