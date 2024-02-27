import express from "express";
import cors from "cors";
import { interactHandler } from "./interact";
import "dotenv/config";

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.post("/interact", interactHandler);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
