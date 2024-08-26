import express from "express";
import dotenv from "dotenv";
import ListRoutes from "./Routes/ListRoutes.js";
import cors from "cors";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use(ListRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
