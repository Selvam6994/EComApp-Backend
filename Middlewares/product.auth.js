import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const Auth = (req, res, next) => {
  try {
    const AuthToken = req.header("productAuth");
    jwt.verify(AuthToken, process.env.PRUDUCT_SECRET_KEY);
    next();
  } catch (error) {
    res.status(401).send({ message: "not allowed" });
  }
};
