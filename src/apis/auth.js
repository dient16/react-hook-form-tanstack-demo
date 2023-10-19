import axios from "axios";
export const apiLogin = async (payload) => {
  const response = await axios.post(
    "https://dummyjson.com/auth/login",
    payload
  );
  return response;
};
