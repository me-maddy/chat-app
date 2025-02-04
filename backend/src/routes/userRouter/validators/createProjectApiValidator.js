import { body } from "express-validator";

export const createProjectApiValidator = [
  body("projectName")
    .isString()
    .withMessage("projectName is required")
    .isLength({ min: 3 })
    .withMessage("projectName must be at least 3 characters long"),
  body("userIds").isArray().withMessage("userIds must be a valid array"),
];
