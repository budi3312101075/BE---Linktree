import express from "express";
// import mysql from "mysql";
import dotenv from "dotenv";
import ListRoutes from "./Routes/ListRoutes.js";
import cors from "cors";

dotenv.config();
const app = express();

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "linktree",
// });

app.use(express.json());
app.use(cors());
app.use(ListRoutes);

app.get;

app.listen(process.env.APP_PORT, () => {
  console.log(`http://localhost:${process.env.APP_PORT}`);
});
