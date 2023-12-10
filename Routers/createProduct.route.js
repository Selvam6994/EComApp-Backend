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

productRouter.get("/get/all/products", getProduct);

productRouter.get("/products/fruits", getProductFruit);

productRouter.get("/products/chocolates", getProductChocolate);

productRouter.get("/products/oils", getProductOils);

productRouter.get("/products/coffee", getProductCoffee);

productRouter.get("/products/spices",Auth, getProductSpices);

export default productRouter;
