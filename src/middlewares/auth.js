import jwt from "jsonwebtoken";
import authConfig from "../config/authConfig.js";

const authMiddleware = (req, res, next) => {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(403).json({ message: "Token não fornecido" });
  }

  const token = authToken.split(" ")[1];

  try {
    jwt.verify(token, authConfig.secret, (erro, decoded) => {
      if (erro) {
        throw Error();
      }

      req.userId = decoded.id;
      req.userNome = decoded.nome;
      return next();
    });
  } catch (error) {
    return res.status(401).json({ message: "Token não autorizado" });
  }
};

export default authMiddleware;
