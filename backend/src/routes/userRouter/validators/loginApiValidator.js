import { body } from "express-validator";

export const loginApiValidator = [
  body("email").isEmail().withMessage("email is not valid"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("password must be at least 6 characters long"),
];
