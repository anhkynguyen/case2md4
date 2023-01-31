import express from "express";
import { router } from "./src/router/router";
import bodyParser from "body-parser";
import cors from 'cors'
import { AppDataSource } from "./src/data-source";
const app = express();
AppDataSource.initialize().then(() => {
  console.log("Connect Database Success!!");
});
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("./public/"));
app.use("", router);
app.listen(8080, () => {
  console.log(`server is running`);
});
