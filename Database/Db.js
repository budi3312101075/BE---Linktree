import dotenv from "dotenv";
import mysql from "mysql";

dotenv.config();

const dbConfig = {
  host: "bqrh3wj654xxflfy0uce-mysql.services.clever-cloud.com",
  user: "ulafcheme4ezjozj",
  password: "Ti2oX1Wqdp5E1n4CpXh9",
  database: "bqrh3wj654xxflfy0uce",
};

const db = mysql.createConnection(dbConfig);

export default db;
