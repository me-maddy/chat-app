import express from "express";
import { db } from "./src/db/index.js";
db();

import { PORT } from "./src/constants/config.js";
import appRouter from "./src/routes/index.js";
import morgan from "morgan";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use("/api", appRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
