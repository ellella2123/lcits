import API from "./api";

export const createClient = async (data) => {
  const res = await API.post("/clients", data);
  return res.data;
};