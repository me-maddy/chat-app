import mongoose from "mongoose";
import { MONGO_URI } from "../constants/config.js";

export function db() {
  mongoose
    .connect(MONGO_URI)
    .then((val) => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log(err);
    });
}
