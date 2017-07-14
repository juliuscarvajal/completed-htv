export const formatErrors = errors => ({
  error: "Could not decode request: JSON parsing failed",
  ...errors
});
