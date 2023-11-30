import express from "express";
import { MongoClient } from "mongodb";
const app = express();

const PORT = 4000;
const url = "mongodb://0.0.0.0:27017";
const client = new MongoClient(url);
await client.connect();
app.use(express.json())
app.get("/products", async function (request, response) {
  const getProductData = await client
    .db("ECommApp")
    .collection("products")
    .find()
    .toArray();
  console.log(getProductData);
  response.send(getProductData)
});

app.post("/postproductdata", async function (request, response) {
  const { name, price, reviews, inStock, quantity, unit, image,category } =  await request.body;

    const postProductData = await client
      .db("ECommApp")
      .collection("products")
      .insertMany([{
        name: name,
        price: price,
        reviews: reviews,
        inStock: inStock,
        quantity: quantity,
        unit: unit,
        image: image,
        category:category
      }]);
      response.status(200).send(postProductData)
  
   
});

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
