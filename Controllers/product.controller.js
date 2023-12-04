import { client } from "../Database/conectivity.js";

export const createProduct = async (req, res) => {
  try {
    const postProduct = req.body;
    const existingProduct = await client
      .db("Kodai_Flavors_Ecom")
      .collection("products")
      .findOne({ name: postProduct.name });
    if (existingProduct) {
      res.status(400).json({ message: "Product already exists" });
    } else {
      await client
        .db("Kodai_Flavors_Ecom")
        .collection("products")
        .insertOne(postProduct);
      res.status(200).json({ message: "product created" });
    }
  } catch (error) {
    res.status(500).json({ message: "server error", error: error });
    console.log(error);
  }
};

export const getProduct = async (req, res) => {
  try {
    const getProduct = req.body;
    const productData = await client
      .db("Kodai_Flavors_Ecom")
      .collection("products")
      .find()
      .toArray();
    res.status(200).json(productData);
  } catch (error) {
    res.status(500).json({ message: "server error", error: error });
    console.log(error);
  }
};


export const getProductFruit = async(req,res)=>{
    try {
        const getFruits  = await client.db("Kodai_Flavors_Ecom")
        .collection("products")
        .find({category:"fruit"}).toArray()
        res.status(200).json(getFruits)

    } catch (error) {
        res.status(500).json({ message: "server error", error: error });
        console.log(error);
    }
}


export const getProductChocolate = async(req,res)=>{
    try {
        const getChocolates  = await client.db("Kodai_Flavors_Ecom")
        .collection("products")
        .find({category:"Chocolate"}).toArray()
        res.status(200).json(getChocolates)

    } catch (error) {
        res.status(500).json({ message: "server error", error: error });
        console.log(error);
    }
}


export const getProductOils = async(req,res)=>{
    try {
        const getOils = await client.db("Kodai_Flavors_Ecom")
        .collection("products")
        .find({category:"natural oil"}).toArray()
        res.status(200).json(getOils)

    } catch (error) {
        res.status(500).json({ message: "server error", error: error });
        console.log(error);
    }
}


export const getProductCoffee = async(req,res)=>{
    try {
        const getCoffee = await client.db("Kodai_Flavors_Ecom")
        .collection("products")
        .find({category:"coffee"}).toArray()
        res.status(200).json(getCoffee)

    } catch (error) {
        res.status(500).json({ message: "server error", error: error });
        console.log(error);
    }
}

export const getProductSpices  = async(req,res)=>{
    try {
        const getSpices = await client.db("Kodai_Flavors_Ecom")
        .collection("products")
        .find({category:"spices"}).toArray()
        res.status(200).json(getSpices)

    } catch (error) {
        res.status(500).json({ message: "server error", error: error });
        console.log(error);
    }
}