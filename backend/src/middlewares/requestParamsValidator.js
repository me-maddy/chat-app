import { setApiResponse } from "../utils/setApiResponse.js";
import { validationResultConstructor } from "../utils/validationResultConstructor.js";

export const requestParamsValidator = (req, res, next) => {
  const errorsResult = validationResultConstructor(req);
  if (!errorsResult) return next();
  setApiResponse(400, false, true, errorsResult, res);
};
