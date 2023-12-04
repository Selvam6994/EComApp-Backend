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

const productRouter = express.Router();
productRouter.post("/create/product", createProduct);

productRouter.get("/get/all/products", getProduct);

productRouter.get("/products/fruits", getProductFruit);

productRouter.get("/products/chocolates", getProductChocolate);

productRouter.get("/products/oils", getProductOils);

productRouter.get("/products/coffee", getProductCoffee);

productRouter.get("/products/spices", getProductSpices);

export default productRouter;
