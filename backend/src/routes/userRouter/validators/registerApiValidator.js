import { body } from "express-validator";

const registerApiValidator = [
  body("email").isEmail().withMessage("email is not valid"),
  body("username").isString().withMessage("username is required"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("password must be at least 6 characters long"),
  body("name").isString().withMessage("name is required"),
];

export default registerApiValidator;
