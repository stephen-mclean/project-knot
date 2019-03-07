export const required = value =>
  value || typeof value === "number" ? undefined : "Required";
