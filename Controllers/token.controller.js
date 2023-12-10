import jwt from "jsonwebtoken";
import env from "dotenv";

env.config();

export const pageAuth = async (req, res) => {

  const pageLogo =
    "https://res.cloudinary.com/dommwbnzh/image/upload/v1701331579/samples/ecommerce/Logo/Kodai-Logo_dpx9ms.png";
    const pageToken = jwt.sign({ data: pageLogo }, process.env.PRUDUCT_SECRET_KEY);
  res.status(200).send({ token: pageToken, logo: pageLogo });
};
