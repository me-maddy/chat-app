import dotenv from "dotenv";
dotenv.config();
export const PORT = process.env.PORT;
export const MONGO_URI = process.env.MONGO_URI;
export const AUTH_TOKEN_SECRET = process.env.AUTH_TOKEN_SECRET;
export const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;
