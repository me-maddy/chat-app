import { Router } from "express";
import userRouter from "./userRouter/index.js";

const router = Router();

router.use("/user", userRouter);

export default router;
