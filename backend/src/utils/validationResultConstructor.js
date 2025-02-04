import { validationResult } from "express-validator";

export const validationResultConstructor = (req) => {
  const result = validationResult(req);
  if (result.isEmpty()) return null;
  const errors = result.formatWith(({ msg }) => msg.toString()).array();
  return errors.join(" || ");
};
