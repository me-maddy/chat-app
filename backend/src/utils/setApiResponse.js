export const setApiResponse = (
  status,
  responseFlag,
  errorFlag,
  details,
  res
) => {
  const response = {
    result: responseFlag,
  };
  if (errorFlag) response["msg"] = details;
  else response["data"] = details;
  res.status(status).json(response);
};
