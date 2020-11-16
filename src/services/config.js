const decBaseURL = "http://123.207.32.32:9001";
const proBaseURL = "https://product.org";
export const TIMEOUT = 25000;
export const baseURL =
  process.env.NODE_ENV === "development" ? decBaseURL : proBaseURL;
