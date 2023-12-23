import {
  createProduct,
  getProduct,
  getProductChocolate,
  getProductCoffee,
  getProductFruit,
  getProductOils,
  getProductSpices,
} from "../Controllers/product.controller.js";
import express from "express";
import { Auth } from "../Middlewares/product.auth.js";

const productRouter = express.Router();
productRouter.post("/create/product", createProduct);

productRouter.get("/get/all/products", Auth, getProduct);

productRouter.get("/products/fruits", Auth, getProductFruit);

productRouter.get("/products/chocolates", Auth, getProductChocolate);

productRouter.get("/products/oils", Auth, getProductOils);

productRouter.get("/products/coffee", Auth, getProductCoffee);

productRouter.get("/products/spices", Auth, getProductSpices);

export default productRouter;
