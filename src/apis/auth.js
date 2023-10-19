import axios from "axios";
export const apiLogin = async (payload) => {
  let response;
  try {
    response = await axios.post("https://dummyjson.com/auth/login", payload);
  } catch (error) {}

  return response;
};
