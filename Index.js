import express from "express";
import dotenv from "dotenv";
import ListRoutes from "./Routes/ListRoutes.js";
import cors from "cors";

// tes
dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use(ListRoutes);

app.get;

app.listen(process.env.APP_PORT, () => {
  console.log(`http://localhost:${process.env.APP_PORT}`);
});
